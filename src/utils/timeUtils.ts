export const generateTimeExpression = (): { text: string; answer: string } => {
  const hour24 = Math.floor(Math.random() * 24)
  const minute = Math.floor(Math.random() * 12) * 5

  const hour12 = hour24 === 0 ? 12 : hour24 > 12 ? hour24 - 12 : hour24

  const formats = [
    { type: '24h', weight: 2 },
    { type: '12h', weight: 2 },
    { type: 'midi', weight: hour24 === 12 ? 3 : 0 },
    { type: 'minuit', weight: hour24 === 0 ? 3 : 0 },
    { type: 'half', weight: minute === 30 ? 3 : 0 },
    { type: 'quarter', weight: minute === 15 ? 3 : 0 },
    { type: 'quarter_to', weight: minute === 45 ? 3 : 0 },
    { type: 'minutes_before', weight: minute > 0 && minute !== 15 && minute !== 30 && minute !== 45 ? 2 : 0 },
    { type: 'minutes_after', weight: minute > 0 && minute !== 15 && minute !== 30 && minute !== 45 ? 2 : 0 },
    { type: 'exact', weight: minute === 0 ? 2 : 0 },
  ]

  const validFormats = formats.filter((f) => f.weight > 0)
  const totalWeight = validFormats.reduce((sum, f) => sum + f.weight, 0)
  let random = Math.random() * totalWeight

  let selectedFormat = validFormats[0]
  for (const format of validFormats) {
    random -= format.weight
    if (random <= 0) {
      selectedFormat = format
      break
    }
  }

  let text = ''
  let answer = `${hour24.toString().padStart(2, '0')}${minute.toString().padStart(2, '0')}`

  switch (selectedFormat.type) {
    case '24h':
      text = `${hour24} heures ${minute > 0 ? minute : ''}`
      if (minute === 0) text += ' pile'
      break

    case '12h':
      let period = ''
      if (hour24 < 6) {
        period = 'du petit matin'
      } else if (hour24 < 12) {
        period = 'du matin'
      } else if (hour24 < 18) {
        period = "de l'après-midi"
      } else {
        period = 'du soir'
      }
      text = `${hour12} heures ${minute > 0 ? minute : ''} ${period}`
      if (minute === 0) text += ' pile'
      break

    case 'midi':
      text = 'midi'
      answer = '1200'
      break

    case 'minuit':
      text = 'minuit'
      answer = '0000'
      break

    case 'half':
      if (hour24 === 12) {
        text = 'midi et demi'
        answer = '1230'
      } else if (hour24 === 0) {
        text = 'minuit et demi'
        answer = '0030'
      } else {
        const h = hour24 > 12 ? hour24 - 12 : hour24 === 0 ? 12 : hour24
        let period = ''
        if (hour24 < 6) {
          period = 'du petit matin'
        } else if (hour24 < 12) {
          period = 'du matin'
        } else if (hour24 < 18) {
          period = "de l'après-midi"
        } else {
          period = 'du soir'
        }
        text = `${h} heures et demi ${period}`
        answer = `${hour24.toString().padStart(2, '0')}30`
      }
      break

    case 'quarter':
      if (hour24 === 12) {
        text = 'midi et quart'
        answer = '1215'
      } else if (hour24 === 0) {
        text = 'minuit et quart'
        answer = '0015'
      } else {
        const h1 = hour24 > 12 ? hour24 - 12 : hour24 === 0 ? 12 : hour24
        let period = ''
        if (hour24 < 6) {
          period = 'du petit matin'
        } else if (hour24 < 12) {
          period = 'du matin'
        } else if (hour24 < 18) {
          period = "de l'après-midi"
        } else {
          period = 'du soir'
        }
        text = `${h1} heures et quart ${period}`
        answer = `${hour24.toString().padStart(2, '0')}15`
      }
      break

    case 'quarter_to':
      const nextHour = (hour24 + 1) % 24
      const h2 = nextHour > 12 ? nextHour - 12 : nextHour === 0 ? 12 : nextHour
      let periodTo = ''
      if (nextHour < 6) {
        periodTo = 'du petit matin'
      } else if (nextHour < 12) {
        periodTo = 'du matin'
      } else if (nextHour < 18) {
        periodTo = "de l'après-midi"
      } else {
        periodTo = 'du soir'
      }
      text = `${h2} heures moins le quart ${periodTo}`
      answer = `${hour24.toString().padStart(2, '0')}45`
      break

    case 'minutes_before':
      const nextHour2 = (hour24 + 1) % 24
      const h3 = nextHour2 > 12 ? nextHour2 - 12 : nextHour2 === 0 ? 12 : nextHour2
      const minutesBefore = 60 - minute
      let periodBefore = ''
      if (nextHour2 < 6) {
        periodBefore = 'du petit matin'
      } else if (nextHour2 < 12) {
        periodBefore = 'du matin'
      } else if (nextHour2 < 18) {
        periodBefore = "de l'après-midi"
      } else {
        periodBefore = 'du soir'
      }
      text = `${h3} heures moins ${minutesBefore} ${periodBefore}`
      answer = `${hour24.toString().padStart(2, '0')}${minute.toString().padStart(2, '0')}`
      break

    case 'minutes_after':
      const h5 = hour24 > 12 ? hour24 - 12 : hour24 === 0 ? 12 : hour24
      let periodAfter = ''
      if (hour24 < 6) {
        periodAfter = 'du petit matin'
      } else if (hour24 < 12) {
        periodAfter = 'du matin'
      } else if (hour24 < 18) {
        periodAfter = "de l'après-midi"
      } else {
        periodAfter = 'du soir'
      }
      text = `${h5} heures ${minute} ${periodAfter}`
      answer = `${hour24.toString().padStart(2, '0')}${minute.toString().padStart(2, '0')}`
      break

    case 'exact':
      if (hour24 === 12) {
        text = 'midi pile'
        answer = '1200'
      } else if (hour24 === 0) {
        text = 'minuit pile'
        answer = '0000'
      } else {
        const h4 = hour24 > 12 ? hour24 - 12 : hour24 === 0 ? 12 : hour24
        let period = ''
        if (hour24 < 6) {
          period = 'du petit matin'
        } else if (hour24 < 12) {
          period = 'du matin'
        } else if (hour24 < 18) {
          period = "de l'après-midi"
        } else {
          period = 'du soir'
        }
        text = `${h4} heures pile ${period}`
      }
      break
  }

  return { text, answer }
}


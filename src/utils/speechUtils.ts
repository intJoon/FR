export const speakFrench = (text: string, lang: string = 'fr-FR'): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (!('speechSynthesis' in window)) {
      reject(new Error('Speech synthesis not supported'))
      return
    }

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = lang
    utterance.rate = 0.9
    utterance.pitch = 1.0
    utterance.volume = 1.0

    utterance.onend = () => {
      resolve()
    }

    utterance.onerror = (error) => {
      reject(error)
    }

    window.speechSynthesis.speak(utterance)
  })
}

export const isSpeaking = (): boolean => {
  if (!('speechSynthesis' in window)) {
    return false
  }
  return window.speechSynthesis.speaking
}

export const stopSpeech = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel()
  }
}

export const playAudioWithReplay = async (
  text: string,
  replayCount: number,
  isActiveRef: { current: boolean }
): Promise<void> => {
  try {
    for (let i = 0; i < replayCount; i++) {
      if (!isActiveRef.current) break
      await speakFrench(text)
      if (i < replayCount - 1 && isActiveRef.current) {
        await new Promise((resolve) => setTimeout(resolve, 500))
      }
    }
  } finally {
    if (isActiveRef.current) {
      await new Promise((resolve) => setTimeout(resolve, 100))
    }
  }
}


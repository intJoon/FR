const normalizeText = (text: string, settings: { caseSensitive: boolean; accentSensitive: boolean }): string => {
  let normalized = text.trim()

  if (!settings.caseSensitive) {
    normalized = normalized.toLowerCase()
  }

  if (!settings.accentSensitive) {
    normalized = normalized
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
  }

  return normalized
}

export const compareText = (
  input: string,
  answer: string,
  settings: { caseSensitive: boolean; accentSensitive: boolean }
): boolean => {
  const normalizedInput = normalizeText(input, settings)
  const normalizedAnswer = normalizeText(answer, settings)
  return normalizedInput === normalizedAnswer
}


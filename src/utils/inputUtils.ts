export const calculateInputWidth = (
  measureRef: React.RefObject<HTMLSpanElement>,
  value: string,
  minWidth: number = 60,
  padding: number = 24
): number => {
  if (!measureRef.current) return minWidth
  measureRef.current.textContent = value || '___'
  const width = measureRef.current.offsetWidth
  return Math.max(width + padding, minWidth)
}

export const INPUT_FIELD_PROPS = {
  autoComplete: 'off' as const,
  autoCapitalize: 'off' as const,
  autoCorrect: 'off' as const,
  spellCheck: false,
}


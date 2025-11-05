import { type ReactNode } from 'react'
import { INPUT_FIELD_PROPS } from './inputUtils'

interface RenderSentenceOptions {
  text: string
  inputs: Record<number, string>
  showAnswer: boolean
  isCorrectMap: Record<number, boolean | null>
  onInputChange: (blankIndex: number, value: string) => void
  inputWidths: Record<number, number>
}

export const renderSentenceWithBlanks = ({
  text,
  inputs,
  showAnswer,
  isCorrectMap,
  onInputChange,
  inputWidths,
}: RenderSentenceOptions): ReactNode[] => {
  const parts = text.split('___')
  const elements: ReactNode[] = []

  parts.forEach((part, index) => {
    if (index > 0) {
      const blankIndex = index - 1
      const userInput = inputs[blankIndex] || ''
      const isCorrect = isCorrectMap[blankIndex] ?? null

      elements.push(
        <input
          key={`blank-${blankIndex}`}
          type="text"
          className={`blank-input ${showAnswer && isCorrect !== null ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
          value={userInput}
          onChange={(e) => onInputChange(blankIndex, e.target.value)}
          placeholder="___"
          {...INPUT_FIELD_PROPS}
          disabled={showAnswer}
          style={{ width: `${inputWidths[blankIndex] || 60}px` }}
        />
      )
    }
    if (part) {
      elements.push(<span key={`text-${index}`}>{part}</span>)
    }
  })

  return elements
}


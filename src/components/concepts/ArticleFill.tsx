import { useState, useEffect, useRef, type FC, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { QuestionCard } from '../QuestionCard'
import { articleSentences, type ArticleSentence } from '../../utils/articleData'
import { useSettings } from '../../context/SettingsContext'
import { compareText } from '../../utils/textUtils'
import { calculateInputWidth, INPUT_FIELD_PROPS } from '../../utils/inputUtils'
import '../../styles/common.css'
import './ArticleFill.css'

interface ArticleFillProps {
  onAnswerChecked?: (isCorrect: boolean, question?: string, userAnswer?: string, correctAnswer?: string) => void
  onStop?: () => void
}

export const ArticleFill: FC<ArticleFillProps> = ({ onAnswerChecked, onStop }) => {
  const { t } = useTranslation()
  const { settings } = useSettings()
  const [usedIndices, setUsedIndices] = useState<Set<number>>(new Set())
  const [availableIndices] = useState<number[]>(() => {
    return articleSentences.map((_, index) => index).sort(() => Math.random() - 0.5)
  })
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState<number>(() => availableIndices[0])
  const [currentSentence, setCurrentSentence] = useState<ArticleSentence>(
    articleSentences[currentSentenceIndex]
  )
  const [inputs, setInputs] = useState<Record<number, string>>({})
  const [showAnswer, setShowAnswer] = useState(false)
  const measureRef = useRef<HTMLSpanElement>(null)
  const [inputWidths, setInputWidths] = useState<Record<number, number>>({})

  const handleInputChange = (blankIndex: number, value: string) => {
    setInputs((prev) => ({ ...prev, [blankIndex]: value }))
    const width = calculateInputWidth(measureRef, value)
    setInputWidths((prev) => ({ ...prev, [blankIndex]: width }))
  }

  useEffect(() => {
    currentSentence.blanks.forEach((_, blankIndex) => {
      const value = inputs[blankIndex] || '___'
      const width = calculateInputWidth(measureRef, value)
      setInputWidths((prev) => ({ ...prev, [blankIndex]: width }))
    })
  }, [currentSentence, inputs])

  const handleCheck = () => {
    if (showAnswer) return
    let allCorrect = true
    const userAnswers: string[] = []
    const correctAnswers: string[] = []
    currentSentence.blanks.forEach((blank, idx) => {
      const userInput = inputs[idx] || ''
      userAnswers.push(userInput || '_')
      correctAnswers.push(blank.answer)
      if (!compareText(userInput, blank.answer, settings)) {
        allCorrect = false
      }
    })
    setShowAnswer(true)
    const userAnswerText = userAnswers.join(' / ')
    const correctAnswerText = correctAnswers.join(' / ')
    onAnswerChecked?.(allCorrect, currentSentence.sentence, userAnswerText, correctAnswerText)
  }

  const handleNext = () => {
    const newUsedIndices = new Set(usedIndices)
    newUsedIndices.add(currentSentenceIndex)
    setUsedIndices(newUsedIndices)

    const remainingIndices = availableIndices.filter((idx) => !newUsedIndices.has(idx))
    
    if (remainingIndices.length === 0) {
      onStop?.()
      return
    }

    const nextIndex = remainingIndices[Math.floor(Math.random() * remainingIndices.length)]
    setCurrentSentenceIndex(nextIndex)
    setCurrentSentence(articleSentences[nextIndex])
    setInputs({})
    setShowAnswer(false)
  }

  const renderSentence = () => {
    const parts = currentSentence.sentence.split('___')
    const elements: ReactNode[] = []

    parts.forEach((part, index) => {
      if (index > 0) {
        const blankIndex = index - 1
        const blank = currentSentence.blanks[blankIndex]
        const userInput = inputs[blankIndex] || ''
        const isCorrect = showAnswer
          ? compareText(userInput, blank.answer, settings)
          : null

        elements.push(
          <span key={`blank-${blankIndex}`} className="blank-container">
            <input
              type="text"
              className={`blank-input ${showAnswer && isCorrect !== null ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
              value={userInput}
              onChange={(e) => handleInputChange(blankIndex, e.target.value)}
              placeholder="___"
              {...INPUT_FIELD_PROPS}
              disabled={showAnswer}
              style={{ width: `${inputWidths[blankIndex] || 60}px` }}
            />
          </span>
        )
      }
      if (part) {
        elements.push(<span key={`text-${index}`}>{part}</span>)
      }
    })

    return elements
  }

  const allCorrect = showAnswer
    ? currentSentence.blanks.every((blank, _idx) => compareText(inputs[_idx] || '', blank.answer, settings))
    : false

  const answerText = showAnswer
    ? currentSentence.blanks.map((blank, _idx) => blank.answer || '(_)').join(' / ')
    : undefined

  return (
    <QuestionCard
      title={t('articles.title')}
      instruction={t('articles.instruction')}
      onCheck={handleCheck}
      onStop={onStop}
      showAnswer={showAnswer}
      answer={answerText}
      isCorrect={allCorrect}
      onNext={handleNext}
    >
      <div className="article-container">
        <span ref={measureRef} className="blank-measure" aria-hidden="true" />
        <div className="sentence-display">{renderSentence()}</div>
      </div>
    </QuestionCard>
  )
}


import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { QuestionCard } from '../QuestionCard'
import { articleSentences, type ArticleSentence } from '../../utils/articleData'
import { useSettings } from '../../context/SettingsContext'
import { compareText } from '../../utils/textUtils'
import './ArticleFill.css'

interface ArticleFillProps {
  onAnswerChecked?: (isCorrect: boolean, question?: string, userAnswer?: string, correctAnswer?: string) => void
  onStop?: () => void
}

export const ArticleFill: React.FC<ArticleFillProps> = ({ onAnswerChecked, onStop }) => {
  const { t } = useTranslation()
  const { settings } = useSettings()
  const [usedIndices, setUsedIndices] = useState<Set<number>>(new Set())
  const [availableIndices] = useState<number[]>(
    articleSentences.map((_, index) => index).sort(() => Math.random() - 0.5)
  )
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState<number>(() => {
    const indices = articleSentences.map((_, index) => index).sort(() => Math.random() - 0.5)
    return indices[0]
  })
  const [currentSentence, setCurrentSentence] = useState<ArticleSentence>(
    articleSentences[currentSentenceIndex]
  )
  const [inputs, setInputs] = useState<Record<number, string>>({})
  const [showAnswer, setShowAnswer] = useState(false)
  const measureRef = useRef<HTMLSpanElement>(null)
  const [inputWidths, setInputWidths] = useState<Record<number, number>>({})

  const handleInputChange = (blankIndex: number, value: string) => {
    setInputs((prev) => ({ ...prev, [blankIndex]: value }))
    
    if (measureRef.current) {
      measureRef.current.textContent = value || '___'
      const width = measureRef.current.offsetWidth
      setInputWidths((prev) => ({ ...prev, [blankIndex]: Math.max(width + 24, 60) }))
    }
  }

  useEffect(() => {
    if (measureRef.current) {
      currentSentence.blanks.forEach((_, blankIndex) => {
        const value = inputs[blankIndex] || '___'
        measureRef.current!.textContent = value
        const width = measureRef.current!.offsetWidth
        setInputWidths((prev) => ({ ...prev, [blankIndex]: Math.max(width + 24, 60) }))
      })
    }
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
    const elements: React.ReactNode[] = []

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
              className={`article-input ${showAnswer && isCorrect !== null ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
              value={userInput}
              onChange={(e) => handleInputChange(blankIndex, e.target.value)}
              placeholder="___"
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              disabled={showAnswer}
              style={{ width: `${inputWidths[blankIndex] || 60}px` }}
            />
          </span>
        )
      }
      if (part) {
        const words = part.split(' ')
        words.forEach((word, wordIndex) => {
          if (word.trim()) {
            const wordKey = `word-${index}-${wordIndex}`
            elements.push(
              <span key={wordKey}>
                {word}
              </span>
            )
            if (wordIndex < words.length - 1) {
              elements.push(<span key={`space-${wordKey}`}> </span>)
            }
          }
        })
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
      onStop={onStop || (() => {})}
      showAnswer={showAnswer}
      answer={answerText}
      isCorrect={allCorrect}
      onNext={handleNext}
    >
      <div className="article-container">
        <span ref={measureRef} className="article-measure" aria-hidden="true" />
        <div className="sentence-display">{renderSentence()}</div>
      </div>
    </QuestionCard>
  )
}


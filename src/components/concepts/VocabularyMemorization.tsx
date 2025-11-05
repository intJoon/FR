import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { QuestionCard } from '../QuestionCard'
import { months, seasons, days } from '../../utils/vocabularyData'
import { useSettings } from '../../context/SettingsContext'
import { compareText } from '../../utils/textUtils'
import './VocabularyMemorization.css'

type Category = 'months' | 'seasons' | 'days'

interface VocabularyMemorizationProps {
  onAnswerChecked?: (isCorrect: boolean, question?: string, userAnswer?: string, correctAnswer?: string) => void
  onStop?: () => void
  onComplete?: () => void
}

export const VocabularyMemorization: React.FC<VocabularyMemorizationProps> = ({ onAnswerChecked, onStop, onComplete }) => {
  const { t } = useTranslation()
  const { settings } = useSettings()
  const [category, setCategory] = useState<Category>('months')
  const [inputs, setInputs] = useState<Record<string, string>>({})
  const [showAnswer, setShowAnswer] = useState(false)

  const getData = () => {
    switch (category) {
      case 'months':
        return months.map((m) => m.fr)
      case 'seasons':
        return seasons.map((s) => s.fr)
      case 'days':
        return days.map((d) => d.fr)
    }
  }

  const data = getData()

  const handleInputChange = (index: number, value: string) => {
    setInputs((prev) => ({ ...prev, [index]: value }))
  }

  const handleCheck = () => {
    if (showAnswer) return
    let allCorrect = true
    const userAnswers: string[] = []
    const correctAnswers: string[] = []
    data.forEach((item, index) => {
      const userInput = inputs[index] || ''
      userAnswers.push(userInput || '_')
      correctAnswers.push(item)
      if (!compareText(userInput, item, settings)) {
        allCorrect = false
      }
    })
    setShowAnswer(true)
    const questionText = getCategoryTitle()
    const userAnswerText = userAnswers.join(' / ')
    const correctAnswerText = correctAnswers.join(' / ')
    onAnswerChecked?.(allCorrect, questionText, userAnswerText, correctAnswerText)
  }

  const allCorrect = showAnswer
    ? data.every((item, index) => compareText(inputs[index] || '', item, settings))
    : false

  const answerText = showAnswer
    ? data.map((item, index) => `${index + 1}. ${item}`).join(' | ')
    : undefined

  const handleNext = () => {
    const categories: Category[] = ['months', 'seasons', 'days']
    const currentIndex = categories.indexOf(category)
    const nextIndex = currentIndex + 1
    
    if (nextIndex >= categories.length) {
      // 3개 문제 모두 완료 (0, 1, 2 = months, seasons, days)
      onComplete?.()
    } else {
      const nextCategory = categories[nextIndex]
      setCategory(nextCategory)
      setInputs({})
      setShowAnswer(false)
    }
  }

  const getCategoryTitle = () => {
    switch (category) {
      case 'months':
        return t('vocabulary.months')
      case 'seasons':
        return t('vocabulary.seasons')
      case 'days':
        return t('vocabulary.days')
    }
  }

  return (
    <QuestionCard
      title={t('vocabulary.title')}
      instruction={`${t('vocabulary.instruction')} - ${getCategoryTitle()}`}
      onCheck={handleCheck}
      onStop={onStop || (() => {})}
      showAnswer={showAnswer}
      answer={answerText}
      isCorrect={allCorrect}
      onNext={handleNext}
    >
      <div className="vocabulary-container">
        <div className="vocabulary-inputs">
          {data.map((_item, index) => {
            const userInput = inputs[index] || ''
            const isCorrect = showAnswer ? compareText(userInput, _item, settings) : null
            return (
              <div key={index} className="vocabulary-item">
                <input
                  type="text"
                  className={`vocabulary-input ${showAnswer && isCorrect !== null ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
                  value={userInput}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  placeholder={`${index + 1}`}
                  autoComplete="off"
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck={false}
                  disabled={showAnswer}
                />
              </div>
            )
          })}
        </div>
      </div>
    </QuestionCard>
  )
}


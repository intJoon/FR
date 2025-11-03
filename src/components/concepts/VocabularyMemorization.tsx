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
  const [correctCount, setCorrectCount] = useState(0)
  const [_problemIndex, setProblemIndex] = useState(0)

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
    let correct = 0
    const userAnswers: string[] = []
    const correctAnswers: string[] = []
    data.forEach((item, index) => {
      const userInput = inputs[index] || ''
      userAnswers.push(userInput)
      correctAnswers.push(item)
      if (compareText(userInput, item, settings)) {
        correct++
      }
    })
    setCorrectCount(correct)
    setShowAnswer(true)
    const allCorrect = correct === data.length
    const questionText = getCategoryTitle()
    const userAnswerText = userAnswers.join(', ')
    const correctAnswerText = correctAnswers.join(', ')
    onAnswerChecked?.(allCorrect, questionText, userAnswerText, correctAnswerText)
  }

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
      setProblemIndex((prev) => prev + 1)
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
      answer={
        showAnswer
          ? `${t('common.correct')}: ${correctCount}/${data.length}`
          : undefined
      }
    >
      <div className="vocabulary-container">
        <div className="vocabulary-inputs">
          {data.map((item, index) => {
            const userInput = inputs[index] || ''
            const isCorrect = showAnswer ? compareText(userInput, item, settings) : null
            return (
              <div key={index} className="vocabulary-item">
                <input
                  type="text"
                  className={`vocabulary-input ${showAnswer && isCorrect !== null ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
                  value={userInput}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  placeholder={`${index + 1}`}
                  autoComplete={settings.pureKeyboard ? 'off' : 'on'}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck={false}
                  disabled={showAnswer}
                />
                {showAnswer && (
                  <span className="vocabulary-answer">{item}</span>
                )}
              </div>
            )
          })}
        </div>
        {showAnswer && (
          <button className="next-button" onClick={handleNext}>
            {t('common.next')}
          </button>
        )}
      </div>
    </QuestionCard>
  )
}


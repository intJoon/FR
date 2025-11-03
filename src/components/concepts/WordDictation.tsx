import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { QuestionCard } from '../QuestionCard'
import { generateWordDictationSentence, type WordDictationSentence } from '../../utils/wordDictationData'
import { speakFrench, stopSpeech } from '../../utils/speechUtils'
import { useSettings } from '../../context/SettingsContext'
import { compareText } from '../../utils/textUtils'
import './WordDictation.css'

interface WordDictationProps {
  onAnswerChecked?: (isCorrect: boolean, question?: string, userAnswer?: string, correctAnswer?: string) => void
  onStop?: () => void
}

export const WordDictation: React.FC<WordDictationProps> = ({ onAnswerChecked, onStop }) => {
  const { t } = useTranslation()
  const { settings } = useSettings()
  const [currentSentence, setCurrentSentence] = useState<WordDictationSentence>(generateWordDictationSentence())
  const [inputs, setInputs] = useState<Record<number, string>>({})
  const [showAnswer, setShowAnswer] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [_problemIndex, setProblemIndex] = useState(0)

  useEffect(() => {
    playAudio()
    return () => stopSpeech()
  }, [currentSentence])

  const playAudio = async () => {
    setIsPlaying(true)
    try {
      let audioText = currentSentence.text
      let blankOffset = 0
      currentSentence.blanks.forEach((blank) => {
        const answer = blank.answers[0]
        const blankPos = audioText.indexOf('___', blankOffset)
        if (blankPos !== -1) {
          audioText = audioText.substring(0, blankPos) + answer + audioText.substring(blankPos + 3)
          blankOffset = blankPos + answer.length
        }
      })
      await speakFrench(audioText)
    } finally {
      setIsPlaying(false)
    }
  }

  const handleInputChange = (blankIndex: number, value: string) => {
    setInputs((prev) => ({ ...prev, [blankIndex]: value }))
  }

  const handleCheck = () => {
    let allCorrect = true
    const userAnswers: string[] = []
    const correctAnswers: string[] = []
    currentSentence.blanks.forEach((blank, idx) => {
      const userInput = inputs[idx] || ''
      userAnswers.push(userInput)
      correctAnswers.push(blank.answers.join(' / '))
      const isCorrect = blank.answers.some((answer) => compareText(userInput, answer, settings))
      if (!isCorrect) {
        allCorrect = false
      }
    })
    setShowAnswer(true)
    const userAnswerText = userAnswers.join(' / ')
    const correctAnswerText = correctAnswers.join(' / ')
    onAnswerChecked?.(allCorrect, currentSentence.text, userAnswerText, correctAnswerText)
  }

  const handleNext = () => {
    const newSentence = generateWordDictationSentence()
    setCurrentSentence(newSentence)
    setInputs({})
    setShowAnswer(false)
    setProblemIndex((prev) => prev + 1)
  }

  const handleReplay = () => {
    stopSpeech()
    playAudio()
  }

  const renderSentence = () => {
    const parts = currentSentence.text.split('___')
    const elements: React.ReactNode[] = []

    parts.forEach((part, index) => {
      if (index > 0) {
        const blankIndex = index - 1
        const blank = currentSentence.blanks[blankIndex]
        const userInput = inputs[blankIndex] || ''
        let isCorrect = null
        if (showAnswer) {
          isCorrect = blank.answers.some((answer) => compareText(userInput, answer, settings))
        }

        elements.push(
          <input
            key={`blank-${blankIndex}`}
            type="text"
            className={`word-input ${showAnswer && isCorrect !== null ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
            value={userInput}
            onChange={(e) => handleInputChange(blankIndex, e.target.value)}
            placeholder="___"
            autoComplete={settings.pureKeyboard ? 'off' : 'on'}
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            disabled={showAnswer}
          />
        )
      }
      if (part) {
        elements.push(<span key={`text-${index}`}>{part}</span>)
      }
    })

    return elements
  }

  return (
    <QuestionCard
      title={t('wordDictation.title')}
      instruction={t('wordDictation.instruction')}
      onCheck={handleCheck}
      onStop={onStop || (() => {})}
      showAnswer={showAnswer}
      answer={
        showAnswer
          ? currentSentence.blanks.map((blank, idx) => {
              const isCorrect = blank.answers.some((answer) => compareText(inputs[idx] || '', answer, settings))
              return (
                <div key={idx} className={`word-answer ${isCorrect ? 'correct-item' : 'incorrect-item'}`}>
                  {blank.answers.join(' / ')}
                </div>
              )
            })
          : undefined
      }
      showReplay={true}
      onReplay={handleReplay}
    >
      <div className="word-dictation-container">
        <div className="sentence-display">{renderSentence()}</div>
        {isPlaying && <div className="playing-indicator">Playing...</div>}
        {showAnswer && (
          <button className="next-button" onClick={handleNext}>
            {t('common.next')}
          </button>
        )}
      </div>
    </QuestionCard>
  )
}


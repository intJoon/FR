import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { QuestionCard } from '../QuestionCard'
import { generateTimeExpression } from '../../utils/timeUtils'
import { speakFrench, stopSpeech } from '../../utils/speechUtils'
import { useSettings } from '../../context/SettingsContext'
import { compareText } from '../../utils/textUtils'
import './TimeDictation.css'

interface TimeDictationProps {
  onAnswerChecked?: (isCorrect: boolean, question?: string, userAnswer?: string, correctAnswer?: string) => void
  onStop?: () => void
}

export const TimeDictation: React.FC<TimeDictationProps> = ({ onAnswerChecked, onStop }) => {
  const { t } = useTranslation()
  const { settings } = useSettings()
  const [currentProblem, setCurrentProblem] = useState(generateTimeExpression())
  const [input, setInput] = useState('')
  const [showAnswer, setShowAnswer] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [_problemIndex, setProblemIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    let isActive = true
    const playAudio = async () => {
      try {
        setIsPlaying(true)
        for (let i = 0; i < settings.replayCount; i++) {
          if (!isActive) break
          await speakFrench(currentProblem.text)
          if (i < settings.replayCount - 1 && isActive) {
            await new Promise((resolve) => setTimeout(resolve, 500))
          }
        }
      } finally {
        if (isActive) {
          await new Promise((resolve) => setTimeout(resolve, 100))
          setIsPlaying(false)
        }
      }
    }
    playAudio()
    return () => {
      isActive = false
      stopSpeech()
      setIsPlaying(false)
    }
  }, [currentProblem, settings.replayCount])

  const handleCheck = () => {
    if (showAnswer) return
    const correct = compareText(input, currentProblem.answer, settings)
    setIsCorrect(correct)
    setShowAnswer(true)
    const userAnswerText = input || '_'
    onAnswerChecked?.(correct, currentProblem.text, userAnswerText, currentProblem.answer)
  }

  const handleNext = () => {
    const newProblem = generateTimeExpression()
    setCurrentProblem(newProblem)
    setInput('')
    setShowAnswer(false)
    setProblemIndex((prev) => prev + 1)
  }

  const handleReplay = async () => {
    stopSpeech()
    await new Promise((resolve) => setTimeout(resolve, 50))
    let isActive = true
    try {
      setIsPlaying(true)
      for (let i = 0; i < settings.replayCount; i++) {
        if (!isActive) break
        await speakFrench(currentProblem.text)
        if (i < settings.replayCount - 1 && isActive) {
          await new Promise((resolve) => setTimeout(resolve, 300))
        }
      }
    } finally {
      if (isActive) {
        await new Promise((resolve) => setTimeout(resolve, 200))
        setIsPlaying(false)
      }
    }
  }

  return (
    <QuestionCard
      title={t('timeDictation.title')}
      instruction={t('timeDictation.instruction')}
      onCheck={handleCheck}
      onStop={onStop || (() => {})}
      showAnswer={showAnswer}
      answer={showAnswer ? currentProblem.answer : undefined}
      isCorrect={isCorrect}
      showReplay={true}
      onReplay={handleReplay}
      onNext={handleNext}
      isPlaying={isPlaying}
    >
      <div className="time-dictation-container">
        <input
          type="text"
          className={`time-input ${showAnswer ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
          value={input}
          onChange={(e) => setInput(e.target.value.replace(/\D/g, '').slice(0, 4))}
          placeholder="0000"
          maxLength={4}
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          disabled={showAnswer}
        />
      </div>
    </QuestionCard>
  )
}


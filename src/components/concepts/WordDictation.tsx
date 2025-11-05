import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { QuestionCard } from '../QuestionCard'
import { generateAllWordDictationSentences, type WordDictationSentence } from '../../utils/wordDictationData'
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
  const allSentences = generateAllWordDictationSentences()
  const [usedSentenceTexts, setUsedSentenceTexts] = useState<Set<string>>(new Set())
  const [availableSentences] = useState<WordDictationSentence[]>(() => {
    return [...allSentences].sort(() => Math.random() - 0.5)
  })
  const [currentSentence, setCurrentSentence] = useState<WordDictationSentence>(() => availableSentences[0])
  const [inputs, setInputs] = useState<Record<number, string>>({})
  const [showAnswer, setShowAnswer] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [_problemIndex, setProblemIndex] = useState(0)

  useEffect(() => {
    let isActive = true
    const playAudio = async () => {
      try {
        setIsPlaying(true)
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
        for (let i = 0; i < settings.replayCount; i++) {
          if (!isActive) break
          await speakFrench(audioText)
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
  }, [currentSentence, settings.replayCount])

  const playAudio = async () => {
    let isActive = true
    try {
      setIsPlaying(true)
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
      for (let i = 0; i < settings.replayCount; i++) {
        if (!isActive) break
        await speakFrench(audioText)
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

  const handleInputChange = (blankIndex: number, value: string) => {
    setInputs((prev) => ({ ...prev, [blankIndex]: value }))
  }

  const handleCheck = () => {
    if (showAnswer) return
    let allCorrect = true
    const userAnswers: string[] = []
    const correctAnswers: string[] = []
    currentSentence.blanks.forEach((blank, idx) => {
      const userInput = inputs[idx] || ''
      userAnswers.push(userInput || '_')
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
    const newUsedTexts = new Set(usedSentenceTexts)
    newUsedTexts.add(currentSentence.text)
    setUsedSentenceTexts(newUsedTexts)

    const remainingSentences = availableSentences.filter((s) => !newUsedTexts.has(s.text))
    
    if (remainingSentences.length === 0) {
      onStop?.()
      return
    }

    const nextSentence = remainingSentences[Math.floor(Math.random() * remainingSentences.length)]
    setCurrentSentence(nextSentence)
    setInputs({})
    setShowAnswer(false)
    setProblemIndex((prev) => prev + 1)
  }

  const handleReplay = async () => {
    stopSpeech()
    await new Promise((resolve) => setTimeout(resolve, 50))
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
            autoComplete="off"
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

  const allCorrect = showAnswer
    ? currentSentence.blanks.every((blank, idx) =>
        blank.answers.some((answer) => compareText(inputs[idx] || '', answer, settings))
      )
    : false

  const answerText = showAnswer
    ? currentSentence.blanks.map((blank) => blank.answers.join(' / ')).join(' | ')
    : undefined

  return (
    <QuestionCard
      title={t('wordDictation.title')}
      instruction={t('wordDictation.instruction')}
      onCheck={handleCheck}
      onStop={onStop || (() => {})}
      showAnswer={showAnswer}
      answer={answerText}
      isCorrect={allCorrect}
      showReplay={true}
      onReplay={handleReplay}
      onNext={handleNext}
      isPlaying={isPlaying}
    >
      <div className="word-dictation-container">
        <div className="sentence-display">{renderSentence()}</div>
      </div>
    </QuestionCard>
  )
}


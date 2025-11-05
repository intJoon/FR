import { useState, useEffect, useRef, type FC, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { QuestionCard } from '../QuestionCard'
import { generateAllWordDictationSentences, type WordDictationSentence } from '../../utils/wordDictationData'
import { stopSpeech, playAudioWithReplay } from '../../utils/speechUtils'
import { useSettings } from '../../context/SettingsContext'
import { compareText } from '../../utils/textUtils'
import { calculateInputWidth, INPUT_FIELD_PROPS } from '../../utils/inputUtils'
import '../../styles/common.css'
import './WordDictation.css'

interface WordDictationProps {
  onAnswerChecked?: (isCorrect: boolean, question?: string, userAnswer?: string, correctAnswer?: string) => void
  onStop?: () => void
}

export const WordDictation: FC<WordDictationProps> = ({ onAnswerChecked, onStop }) => {
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
  const measureRef = useRef<HTMLSpanElement>(null)
  const [inputWidths, setInputWidths] = useState<Record<number, number>>({})

  const playAudio = async (isActiveRef: { current: boolean }) => {
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
    await playAudioWithReplay(audioText, settings.replayCount, isActiveRef)
    if (isActiveRef.current) {
      setIsPlaying(false)
    }
  }

  useEffect(() => {
    const isActiveRef = { current: true }
    playAudio(isActiveRef)
    return () => {
      isActiveRef.current = false
      stopSpeech()
      setIsPlaying(false)
    }
  }, [currentSentence, settings.replayCount])

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
  }

  const handleReplay = async () => {
    stopSpeech()
    await new Promise((resolve) => setTimeout(resolve, 50))
    await playAudio({ current: true })
  }

  const renderSentence = () => {
    const parts = currentSentence.text.split('___')
    const elements: ReactNode[] = []

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
            className={`blank-input ${showAnswer && isCorrect !== null ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
            value={userInput}
            onChange={(e) => handleInputChange(blankIndex, e.target.value)}
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
      onStop={onStop}
      showAnswer={showAnswer}
      answer={answerText}
      isCorrect={allCorrect}
      showReplay={true}
      onReplay={handleReplay}
      onNext={handleNext}
      isPlaying={isPlaying}
    >
      <div className="word-dictation-container">
        <span ref={measureRef} className="blank-measure" aria-hidden="true" />
        <div className="sentence-display">{renderSentence()}</div>
      </div>
    </QuestionCard>
  )
}


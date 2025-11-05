import { useState, useEffect, useCallback, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { QuestionCard } from '../QuestionCard'
import { generateAllWordDictationSentences, type WordDictationSentence } from '../../utils/wordDictationData'
import { stopSpeech, playAudioWithReplay, createReplayHandler } from '../../utils/speechUtils'
import { useSettings } from '../../context/SettingsContext'
import { compareText } from '../../utils/textUtils'
import { useInputWidth } from '../../utils/inputWidthHook'
import { renderSentenceWithBlanks } from '../../utils/sentenceUtils'
import './WordDictation.css'

interface WordDictationProps {
  onAnswerChecked?: (isCorrect: boolean, question?: string, userAnswer?: string, correctAnswer?: string) => void
  onStop?: () => void
}

export const WordDictation: FC<WordDictationProps> = ({ onAnswerChecked, onStop }) => {
  const { t } = useTranslation()
  const { settings } = useSettings()
  const [usedSentenceTexts, setUsedSentenceTexts] = useState<Set<string>>(new Set())
  const [availableSentences] = useState<WordDictationSentence[]>(() => {
    return generateAllWordDictationSentences().sort(() => Math.random() - 0.5)
  })
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState<number>(0)
  const currentSentence = availableSentences[currentSentenceIndex]
  const [inputs, setInputs] = useState<Record<number, string>>({})
  const [showAnswer, setShowAnswer] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const { measureRef, inputWidths, handleInputChange } = useInputWidth(currentSentence, inputs, setInputs)

  const playAudio = useCallback(async (isActiveRef: { current: boolean }) => {
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
  }, [currentSentence, settings])

  useEffect(() => {
    const isActiveRef = { current: true }
    playAudio(isActiveRef)
    return () => {
      isActiveRef.current = false
      stopSpeech()
      setIsPlaying(false)
    }
  }, [playAudio])

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

  const isCorrectMap: Record<number, boolean | null> = {}
  if (showAnswer) {
    currentSentence.blanks.forEach((blank, idx) => {
      isCorrectMap[idx] = blank.answers.some((answer) => compareText(inputs[idx] || '', answer, settings))
    })
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
    const nextIndex = availableSentences.findIndex((s) => s.text === nextSentence.text)
    setCurrentSentenceIndex(nextIndex)
    setInputs({})
    setShowAnswer(false)
  }

  const handleReplay = createReplayHandler(playAudio)

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
      <div className="word-dictation-container concept-container">
        <span ref={measureRef} className="blank-measure" aria-hidden="true" />
        <div className="sentence-display">
          {renderSentenceWithBlanks({
            text: currentSentence.text,
            inputs,
            showAnswer,
            isCorrectMap,
            onInputChange: handleInputChange,
            inputWidths,
          })}
        </div>
      </div>
    </QuestionCard>
  )
}


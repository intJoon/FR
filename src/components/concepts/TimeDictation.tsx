import { useState, useEffect, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { QuestionCard } from '../QuestionCard'
import { generateTimeExpression } from '../../utils/timeUtils'
import { stopSpeech, playAudioWithReplay } from '../../utils/speechUtils'
import { useSettings } from '../../context/SettingsContext'
import { compareText } from '../../utils/textUtils'
import { INPUT_FIELD_PROPS } from '../../utils/inputUtils'
import './TimeDictation.css'

interface TimeDictationProps {
  onAnswerChecked?: (isCorrect: boolean, question?: string, userAnswer?: string, correctAnswer?: string) => void
  onStop?: () => void
}

export const TimeDictation: FC<TimeDictationProps> = ({ onAnswerChecked, onStop }) => {
  const { t } = useTranslation()
  const { settings } = useSettings()
  const [currentProblem, setCurrentProblem] = useState(generateTimeExpression())
  const [input, setInput] = useState('')
  const [showAnswer, setShowAnswer] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)

  const playAudio = async (isActiveRef: { current: boolean }) => {
    setIsPlaying(true)
    await playAudioWithReplay(currentProblem.text, settings.replayCount, isActiveRef)
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
  }

  const handleReplay = async () => {
    stopSpeech()
    await new Promise((resolve) => setTimeout(resolve, 50))
    await playAudio({ current: true })
  }

  return (
    <QuestionCard
      title={t('timeDictation.title')}
      instruction={t('timeDictation.instruction')}
      onCheck={handleCheck}
      onStop={onStop}
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
          {...INPUT_FIELD_PROPS}
          disabled={showAnswer}
        />
      </div>
    </QuestionCard>
  )
}


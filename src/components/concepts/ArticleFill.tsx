import { useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { QuestionCard } from '../QuestionCard'
import { articleSentences } from '../../utils/articleData'
import { useSettings } from '../../context/SettingsContext'
import { compareText } from '../../utils/textUtils'
import { useInputWidth } from '../../utils/inputWidthHook'
import { renderSentenceWithBlanks } from '../../utils/sentenceUtils'
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
  const currentSentence = articleSentences[currentSentenceIndex]
  const [inputs, setInputs] = useState<Record<number, string>>({})
  const [showAnswer, setShowAnswer] = useState(false)
  const { measureRef, inputWidths, handleInputChange } = useInputWidth(currentSentence, inputs, setInputs)

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

  const isCorrectMap: Record<number, boolean | null> = {}
  if (showAnswer) {
    currentSentence.blanks.forEach((blank, idx) => {
      isCorrectMap[idx] = compareText(inputs[idx] || '', blank.answer, settings)
    })
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
    setInputs({})
    setShowAnswer(false)
  }

  const allCorrect = showAnswer
    ? currentSentence.blanks.every((blank, idx) => compareText(inputs[idx] || '', blank.answer, settings))
    : false

  const answerText = showAnswer
    ? currentSentence.blanks.map((blank) => blank.answer || '(_)').join(' / ')
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
      <div className="article-container concept-container">
        <span ref={measureRef} className="blank-measure" aria-hidden="true" />
        <div className="sentence-display">
          {renderSentenceWithBlanks({
            text: currentSentence.sentence,
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


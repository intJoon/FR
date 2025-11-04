import React from 'react'
import { useTranslation } from 'react-i18next'
import './QuestionCard.css'

interface QuestionCardProps {
  title: string
  instruction?: string
  children: React.ReactNode
  onCheck: () => void
  onStop: () => void
  showAnswer: boolean
  answer?: string | React.ReactNode
  isCorrect?: boolean
  showReplay?: boolean
  onReplay?: () => void
  onNext?: () => void
  isPlaying?: boolean
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  title,
  instruction,
  children,
  onCheck,
  onStop,
  showAnswer,
  answer,
  isCorrect,
  showReplay = false,
  onReplay,
  onNext,
  isPlaying = false,
}) => {
  const { t } = useTranslation()

  return (
    <div className="question-card">
      <button className="stop-button" onClick={onStop}>
        {t('common.stop')}
      </button>
      <div className="question-header">
        <div className="question-header-row">
          <h2>{title}</h2>
          {isPlaying && <div className="playing-indicator">{t('common.playing')}</div>}
        </div>
        {instruction && <p className="instruction">{instruction}</p>}
      </div>

      <div className="question-content">
        {children}
      </div>

      {showAnswer && answer && (
        <div className="answer-section">
          <div className={`answer ${isCorrect !== undefined ? (isCorrect ? 'correct' : 'incorrect') : ''}`}>
            <strong>{t('common.answer')}:</strong> {answer}
          </div>
        </div>
      )}

      <div className="question-footer">
        {showReplay && onReplay && (
          <button className="replay-button" onClick={onReplay}>
            {t('common.replay')}
          </button>
        )}
        {!showAnswer && (
          <button className="check-button" onClick={onCheck}>
            {t('common.check')}
          </button>
        )}
        {showAnswer && onNext && (
          <button className="next-button" onClick={onNext}>
            {t('common.next')}
          </button>
        )}
      </div>
    </div>
  )
}


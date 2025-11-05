import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { isSpeaking } from '../utils/speechUtils'
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
  const [actualPlaying, setActualPlaying] = useState(false)

  useEffect(() => {
    if (isPlaying) {
      setActualPlaying(true)
    }

    const checkInterval = setInterval(() => {
      const speaking = isSpeaking()
      if (isPlaying || speaking) {
        setActualPlaying(true)
      } else {
        setActualPlaying(false)
      }
    }, 100)

    return () => {
      clearInterval(checkInterval)
    }
  }, [isPlaying])

  const shouldShowIndicator = isPlaying || actualPlaying

  return (
    <div className="question-card">
      <div className="question-header">
        <div className="question-header-row">
          <div className="question-title-group">
          <h2>{title}</h2>
          {shouldShowIndicator && <div className="playing-indicator">{t('common.playing')}</div>}
        </div>
          <button className="stop-button" onClick={onStop} aria-label={t('common.stop')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </button>
        </div>
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
          <button className="replay-button" onClick={onReplay} aria-label={t('common.replay')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
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


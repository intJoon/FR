import React from 'react'
import { useTranslation } from 'react-i18next'
import './Statistics.css'

interface AnswerHistory {
  question: string
  userAnswer: string
  correctAnswer: string
  isCorrect: boolean
}

interface StatisticsProps {
  total: number
  correct: number
  incorrect: number
  history: AnswerHistory[]
  onRestart: () => void
  onClose: () => void
}

export const Statistics: React.FC<StatisticsProps> = ({
  total,
  correct,
  incorrect: _incorrect,
  history,
  onRestart,
  onClose,
}) => {
  const { t } = useTranslation()
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0

  return (
    <div className="statistics-overlay">
      <div className="statistics-modal">
        <div className="statistics-header">
          <h2>{t('statistics.title')}</h2>
        </div>

        <div className="statistics-content">
          <div className="stat-card">
            <div className="stat-value">{total}</div>
            <div className="stat-label">{t('statistics.total')}</div>
          </div>

          <div className="stat-card correct">
            <div className="stat-value">{correct}</div>
            <div className="stat-label">{t('statistics.correct')}</div>
          </div>

          <div className="stat-card accuracy">
            <div className="stat-value">{accuracy}%</div>
            <div className="stat-label">{t('statistics.accuracy')}</div>
          </div>
        </div>

        {history.length > 0 && (
          <div className="history-section">
            <h3>{t('statistics.history') || 'History'}</h3>
            <div className="history-list">
              {history.map((item, index) => (
                <div key={index} className={`history-item ${item.isCorrect ? 'correct' : 'incorrect'}`}>
                  <div className="history-question">
                    <strong>#{index + 1}</strong> {item.question || t('statistics.question') || 'Question'}
                  </div>
                  <div className="history-answers">
                    <div className="history-answer-row">
                      <span className="history-label">{t('common.answer')}:</span>
                      <span className="history-correct">{item.correctAnswer}</span>
                    </div>
                    <div className="history-answer-row">
                      <span className="history-label">{t('statistics.yourAnswer') || 'Your Answer'}:</span>
                      <span className={`history-user ${item.isCorrect ? 'correct-text' : 'incorrect-text'}`}>
                        {item.userAnswer || '-'}
                      </span>
                    </div>
                    <div className="history-status">
                      {item.isCorrect ? (
                        <span className="status-correct">✓ {t('common.correct')}</span>
                      ) : (
                        <span className="status-incorrect">✗ {t('common.incorrect')}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="statistics-footer">
          <button className="restart-button" onClick={onRestart}>
            {t('common.restart')}
          </button>
          <button className="close-stat-button" onClick={onClose}>
            {t('common.close')}
          </button>
        </div>
      </div>
    </div>
  )
}


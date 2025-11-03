import React from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageSelector } from './LanguageSelector'
import './Home.css'

interface HomeProps {
  onSelectConcept: (concept: string) => void
  onOpenSettings: () => void
}

export const Home: React.FC<HomeProps> = ({ onSelectConcept, onOpenSettings }) => {
  const { t } = useTranslation()

  const concepts = [
    { id: 'time', key: 'time', color: '#3498db', icon: '⏰' },
    { id: 'vocabulary', key: 'vocabulary', color: '#9b59b6', icon: '📝' },
    { id: 'articles', key: 'articles', color: '#e67e22', icon: '📖' },
    { id: 'word', key: 'word', color: '#27ae60', icon: '🎧' },
  ]

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>{t('app.title')}</h1>
        <div className="header-buttons">
          <LanguageSelector />
          <button className="settings-icon-button" onClick={onOpenSettings}>
            ⚙️
          </button>
        </div>
      </div>

      <div className="concepts-grid">
        {concepts.map((concept) => (
          <button
            key={concept.id}
            className="concept-card"
            style={{ '--accent-color': concept.color } as React.CSSProperties}
            onClick={() => onSelectConcept(concept.id)}
          >
            <div className="concept-icon">{concept.icon}</div>
            <div className="concept-title">{t(`app.concepts.${concept.key}`)}</div>
          </button>
        ))}
      </div>
    </div>
  )
}


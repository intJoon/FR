import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageSelector } from './LanguageSelector'
import './Home.css'

interface HomeProps {
  onSelectConcept: (concept: string) => void
  onOpenSettings: () => void
}

export const Home: FC<HomeProps> = ({ onSelectConcept, onOpenSettings }) => {
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
          <button className="settings-icon-button" onClick={onOpenSettings} aria-label={t('common.settings')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
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


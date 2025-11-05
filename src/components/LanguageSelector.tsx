import { useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSettings } from '../context/SettingsContext'
import './LanguageSelector.css'

interface LanguageSelectorProps {
  onClose?: () => void
}

export const LanguageSelector: FC<LanguageSelectorProps> = ({ onClose }) => {
  const { t, i18n } = useTranslation()
  const { settings, updateSettings } = useSettings()
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguageChange = (lang: 'en' | 'ko' | 'tw' | 'fr') => {
    updateSettings({ language: lang })
    i18n.changeLanguage(lang)
    setIsOpen(false)
    onClose?.()
  }

  return (
    <div className="language-selector-container">
      <button
        className="language-icon-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t('settings.language')}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      </button>
      {isOpen && (
        <>
          <div className="language-selector-overlay" onClick={() => setIsOpen(false)} />
          <div className="language-selector-dropdown">
            {(['en', 'ko', 'tw', 'fr'] as const).map((lang) => (
              <button
                key={lang}
                className={`language-option ${settings.language === lang ? 'active' : ''}`}
                onClick={() => handleLanguageChange(lang)}
              >
                {t(`settings.languageOptions.${lang}`)}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}


import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSettings } from '../context/SettingsContext'
import './LanguageSelector.css'

interface LanguageSelectorProps {
  onClose?: () => void
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onClose }) => {
  const { t, i18n } = useTranslation()
  const { settings, updateSettings } = useSettings()
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguageChange = (lang: 'en' | 'ko' | 'zh-TW') => {
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
        🌐
      </button>
      {isOpen && (
        <>
          <div className="language-selector-overlay" onClick={() => setIsOpen(false)} />
          <div className="language-selector-dropdown">
            {(['en', 'ko', 'zh-TW'] as const).map((lang) => (
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


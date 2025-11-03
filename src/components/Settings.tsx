import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSettings } from '../context/SettingsContext'
import './Settings.css'

interface SettingsProps {
  onClose: () => void
}

export const Settings: React.FC<SettingsProps> = ({ onClose }) => {
  const { t } = useTranslation()
  const { settings, updateSettings } = useSettings()

  return (
    <div className="settings-overlay">
      <div className="settings-modal">
        <div className="settings-header">
          <h2>{t('settings.title')}</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="settings-content">
          <div className="settings-section">
            <h3>{t('settings.skillImprovement.title')}</h3>
            <div className="toggle-options">
              <label className="toggle-item">
                <input
                  type="checkbox"
                  checked={settings.caseSensitive}
                  onChange={(e) => updateSettings({ caseSensitive: e.target.checked })}
                />
                <div>
                  <strong>{t('settings.skillImprovement.caseSensitive')}</strong>
                  <p>{t('settings.skillImprovement.caseSensitiveDesc')}</p>
                </div>
              </label>

              <label className="toggle-item">
                <input
                  type="checkbox"
                  checked={settings.accentSensitive}
                  onChange={(e) => updateSettings({ accentSensitive: e.target.checked })}
                />
                <div>
                  <strong>{t('settings.skillImprovement.accentSensitive')}</strong>
                  <p>{t('settings.skillImprovement.accentSensitiveDesc')}</p>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


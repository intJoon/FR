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
          <button className="close-button" onClick={onClose} aria-label={t('common.close')}>
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

              <div className="number-input-item">
                <div>
                  <strong>{t('settings.skillImprovement.replayCount')}</strong>
                  <p>{t('settings.skillImprovement.replayCountDesc')}</p>
                </div>
                <div className="number-input-group">
                  <button
                    className="number-button minus-button"
                    onClick={() => {
                      const value = Math.max(1, settings.replayCount - 1)
                      updateSettings({ replayCount: value })
                    }}
                    disabled={settings.replayCount <= 1}
                    aria-label={t('settings.skillImprovement.decrease')}
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={settings.replayCount}
                    onChange={(e) => {
                      const value = Math.max(1, Math.min(10, parseInt(e.target.value) || 1))
                      updateSettings({ replayCount: value })
                    }}
                    className="number-input"
                  />
                  <button
                    className="number-button plus-button"
                    onClick={() => {
                      const value = Math.min(10, settings.replayCount + 1)
                      updateSettings({ replayCount: value })
                    }}
                    disabled={settings.replayCount >= 10}
                    aria-label={t('settings.skillImprovement.increase')}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


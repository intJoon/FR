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
        </div>

        <div className="settings-content">
          <div className="settings-section">
            <h3>{t('settings.skillImprovement.title')}</h3>
            
            <div className="settings-grid">
              <div className="setting-card">
                <div className="setting-label">
                  <div className="setting-title">{t('settings.skillImprovement.caseSensitive')}</div>
                  <div className="setting-desc">{t('settings.skillImprovement.caseSensitiveDesc')}</div>
                </div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={settings.caseSensitive}
                    onChange={(e) => updateSettings({ caseSensitive: e.target.checked })}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <div className="setting-card">
                <div className="setting-label">
                  <div className="setting-title">{t('settings.skillImprovement.accentSensitive')}</div>
                  <div className="setting-desc">{t('settings.skillImprovement.accentSensitiveDesc')}</div>
                </div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={settings.accentSensitive}
                    onChange={(e) => updateSettings({ accentSensitive: e.target.checked })}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <div className="setting-card replay-count">
                <div className="setting-label">
                  <div className="setting-title">{t('settings.skillImprovement.replayCount')}</div>
                  <div className="setting-desc">{t('settings.skillImprovement.replayCountDesc')}</div>
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

        <div className="settings-footer">
          <button className="close-settings-button" onClick={onClose}>
            {t('common.close')}
          </button>
        </div>
      </div>
    </div>
  )
}


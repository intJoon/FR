import React, { createContext, useContext, useState, useEffect } from 'react'

interface Settings {
  language: 'en' | 'ko' | 'zh-TW'
  caseSensitive: boolean
  accentSensitive: boolean
  replayCount: number
}

interface SettingsContextType {
  settings: Settings
  updateSettings: (newSettings: Partial<Settings>) => void
}

const defaultSettings: Settings = {
  language: 'en',
  caseSensitive: false,
  accentSensitive: false,
  replayCount: 3,
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(() => {
    const saved = localStorage.getItem('french-learning-settings')
    if (saved) {
      const parsed = JSON.parse(saved)
      const { pureKeyboard, ...rest } = parsed
      return { ...defaultSettings, ...rest }
    }
    return defaultSettings
  })

  useEffect(() => {
    localStorage.setItem('french-learning-settings', JSON.stringify(settings))
  }, [settings])

  const updateSettings = (newSettings: Partial<Settings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }))
  }

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error('useSettings must be used within SettingsProvider')
  }
  return context
}


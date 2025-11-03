import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { SettingsProvider, useSettings } from './context/SettingsContext'
import { Home } from './components/Home'
import { Settings } from './components/Settings'
import { Statistics } from './components/Statistics'
import { SwipeableCard } from './components/SwipeableCard'
import { TimeDictation } from './components/concepts/TimeDictation'
import { VocabularyMemorization } from './components/concepts/VocabularyMemorization'
import { ArticleFill } from './components/concepts/ArticleFill'
import { WordDictation } from './components/concepts/WordDictation'
import './i18n/config'
import './App.css'

interface AnswerHistory {
  question: string
  userAnswer: string
  correctAnswer: string
  isCorrect: boolean
}

interface GameStats {
  total: number
  correct: number
  incorrect: number
  history: AnswerHistory[]
}

const AppContent: React.FC = () => {
  const { i18n } = useTranslation()
  const { settings } = useSettings()
  const [currentView, setCurrentView] = useState<'home' | 'game' | 'statistics'>('home')
  const [currentConcept, setCurrentConcept] = useState<string | null>(null)
  const [showSettings, setShowSettings] = useState(false)
  const [stats, setStats] = useState<GameStats>({ total: 0, correct: 0, incorrect: 0, history: [] })
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0)
  const [canSwipe, setCanSwipe] = useState(false)

  useEffect(() => {
    i18n.changeLanguage(settings.language)
  }, [settings.language, i18n])

  const handleSelectConcept = (concept: string) => {
    setCurrentConcept(concept)
    setCurrentView('game')
    setStats({ total: 0, correct: 0, incorrect: 0, history: [] })
    setCurrentProblemIndex(0)
    setCanSwipe(false)
  }

  const handleStop = () => {
    if (stats.total > 0) {
      setCurrentView('statistics')
    } else {
      setCurrentView('home')
    }
  }

  const handleRestart = () => {
    setStats({ total: 0, correct: 0, incorrect: 0, history: [] })
    setCurrentProblemIndex(0)
    setCanSwipe(false)
    if (currentConcept) {
      setCurrentView('game')
    } else {
      setCurrentView('home')
    }
  }

  const handleAnswerChecked = (isCorrect: boolean, question?: string, userAnswer?: string, correctAnswer?: string) => {
    setStats((prev) => ({
      total: prev.total + 1,
      correct: prev.correct + (isCorrect ? 1 : 0),
      incorrect: prev.incorrect + (isCorrect ? 0 : 1),
      history: [
        ...prev.history,
        {
          question: question || '',
          userAnswer: userAnswer || '',
          correctAnswer: correctAnswer || '',
          isCorrect,
        },
      ],
    }))
    setCanSwipe(true)
  }

  const renderConcept = () => {
    switch (currentConcept) {
      case 'time':
        return <TimeDictation onAnswerChecked={handleAnswerChecked} onStop={handleStop} />
      case 'vocabulary':
        return <VocabularyMemorization onAnswerChecked={handleAnswerChecked} onStop={handleStop} onComplete={handleStop} />
      case 'articles':
        return <ArticleFill onAnswerChecked={handleAnswerChecked} onStop={handleStop} />
      case 'word':
        return <WordDictation onAnswerChecked={handleAnswerChecked} onStop={handleStop} />
      default:
        return null
    }
  }

  if (currentView === 'home') {
    return (
      <>
        <Home onSelectConcept={handleSelectConcept} onOpenSettings={() => setShowSettings(true)} />
        {showSettings && <Settings onClose={() => setShowSettings(false)} />}
      </>
    )
  }

  if (currentView === 'statistics') {
    return (
      <>
        <Statistics
          total={stats.total}
          correct={stats.correct}
          incorrect={stats.incorrect}
          history={stats.history}
          onRestart={handleRestart}
          onClose={() => setCurrentView('home')}
        />
        {showSettings && <Settings onClose={() => setShowSettings(false)} />}
      </>
    )
  }

  return (
    <div className="app-game">
      <SwipeableCard
        currentIndex={currentProblemIndex}
        totalCards={Infinity}
        onNext={() => setCurrentProblemIndex((prev) => prev + 1)}
        onPrevious={() => setCurrentProblemIndex((prev) => Math.max(0, prev - 1))}
        canSwipe={canSwipe}
      >
        {renderConcept()}
      </SwipeableCard>
      {showSettings && <Settings onClose={() => setShowSettings(false)} />}
    </div>
  )
}

const App: React.FC = () => {
  return (
    <SettingsProvider>
      <AppContent />
    </SettingsProvider>
  )
}

export default App


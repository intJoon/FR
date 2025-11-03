import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { QuestionCard } from '../QuestionCard'
import { articleSentences, type ArticleSentence } from '../../utils/articleData'
import { useSettings } from '../../context/SettingsContext'
import { compareText } from '../../utils/textUtils'
import { wordTranslations, explanationTranslations } from '../../utils/articleTranslations'
import { getWordGender } from '../../utils/wordGender'
import './ArticleFill.css'

interface ArticleFillProps {
  onAnswerChecked?: (isCorrect: boolean, question?: string, userAnswer?: string, correctAnswer?: string) => void
  onStop?: () => void
}

export const ArticleFill: React.FC<ArticleFillProps> = ({ onAnswerChecked, onStop }) => {
  const { t, i18n } = useTranslation()
  const { settings } = useSettings()
  const [currentSentence, setCurrentSentence] = useState<ArticleSentence>(
    articleSentences[Math.floor(Math.random() * articleSentences.length)]
  )
  const [inputs, setInputs] = useState<Record<number, string>>({})
  const [showAnswer, setShowAnswer] = useState(false)
  const [hoveredWord, setHoveredWord] = useState<string | null>(null)
  const [_problemIndex, setProblemIndex] = useState(0)

  const getTranslation = (word: string): string | null => {
    // 문장 부호 제거 및 소문자 변환
    let cleanWord = word.replace(/[.,!?;:']/g, '').toLowerCase().trim()
    
    // 빈 문자열이면 null 반환
    if (!cleanWord) return null
    
    // 직접 찾기
    let translation = wordTranslations[cleanWord]
    if (translation) {
      const lang = i18n.language as 'en' | 'ko' | 'zh-TW'
      return translation[lang] || translation.en
    }
    
    // 복수형 처리 (예: montagnes -> montagne)
    if (cleanWord.endsWith('s') && cleanWord.length > 1) {
      const singular = cleanWord.slice(0, -1)
      translation = wordTranslations[singular]
      if (translation) {
        const lang = i18n.language as 'en' | 'ko' | 'zh-TW'
        return translation[lang] || translation.en
      }
    }
    
    // 복수형 처리 (예: chaises -> chaise는 없지만, 일반적인 패턴)
    // -es로 끝나는 경우
    if (cleanWord.endsWith('es') && cleanWord.length > 2) {
      const singular = cleanWord.slice(0, -2)
      translation = wordTranslations[singular]
      if (translation) {
        const lang = i18n.language as 'en' | 'ko' | 'zh-TW'
        return translation[lang] || translation.en
      }
    }
    
    // 동사 변화형 처리 (예: couvre -> couvrir는 없지만, 일반적인 패턴)
    // -e로 끝나는 동사 (3인칭 단수)
    if (cleanWord.endsWith('e') && cleanWord.length > 2) {
      // -re, -er, -ir 등으로 끝나는 동사 원형 찾기
      const variations = [
        cleanWord + 'r', // couvre -> couvrir
        cleanWord.slice(0, -1), // couvre -> couvr (일반적이지 않음)
      ]
      
      for (const variant of variations) {
        translation = wordTranslations[variant]
        if (translation) {
          const lang = i18n.language as 'en' | 'ko' | 'zh-TW'
          return translation[lang] || translation.en
        }
      }
    }
    
    // -ent로 끝나는 동사 (3인칭 복수)
    if (cleanWord.endsWith('ent') && cleanWord.length > 3) {
      const base = cleanWord.slice(0, -3)
      translation = wordTranslations[base]
      if (translation) {
        const lang = i18n.language as 'en' | 'ko' | 'zh-TW'
        return translation[lang] || translation.en
      }
    }
    
    // -ons로 끝나는 동사 (1인칭 복수)
    if (cleanWord.endsWith('ons') && cleanWord.length > 3) {
      const base = cleanWord.slice(0, -3)
      translation = wordTranslations[base]
      if (translation) {
        const lang = i18n.language as 'en' | 'ko' | 'zh-TW'
        return translation[lang] || translation.en
      }
    }
    
    // -ez로 끝나는 동사 (2인칭 복수)
    if (cleanWord.endsWith('ez') && cleanWord.length > 2) {
      const base = cleanWord.slice(0, -2)
      translation = wordTranslations[base]
      if (translation) {
        const lang = i18n.language as 'en' | 'ko' | 'zh-TW'
        return translation[lang] || translation.en
      }
    }
    
    return null
  }

  const getExplanation = (explanation: string): string => {
    const lang = i18n.language as 'en' | 'ko' | 'zh-TW'
    
    const matchPatterns = [
      { pattern: /montagnes.*plural.*feminine|mountains in plural form/i, key: 'mountains_plural' },
      { pattern: /neige.*feminine|snow is feminine/i, key: 'snow_feminine' },
      { pattern: /sommets.*masculine|peaks.*masculine|summits are masculine/i, key: 'peaks_masculine' },
      { pattern: /paysage.*masculine|landscape is masculine/i, key: 'landscape_masculine' },
      { pattern: /beauté.*feminine|beauty is feminine/i, key: 'beauty_feminine' },
      { pattern: /rivière.*feminine|river is feminine/i, key: 'river_feminine' },
      { pattern: /rochers.*masculine|rocks are masculine/i, key: 'rocks_masculine' },
      { pattern: /forêt.*feminine|forest is feminine/i, key: 'forest_feminine' },
      { pattern: /plural feminine|montagnes.*plural|sommets.*plural|rochers.*plural|légumes.*plural|étudiants.*plural|enfants.*plural|chaises.*plural/i, key: 'plural_feminine' },
      { pattern: /singular feminine|montagne.*feminine|mer.*feminine|vallée.*feminine|maison.*feminine|pomme.*feminine/i, key: 'singular_feminine' },
      { pattern: /plural masculine|étudiants.*masculine|enfants.*masculine/i, key: 'plural_masculine' },
      { pattern: /singular masculine|appartement.*masculine|centre-ville.*masculine|pain.*masculine|lait.*masculine|fromage.*masculine|piano.*masculine|sport.*masculine|soleil.*masculine|marché.*masculine|jardin.*masculine|café.*masculine|professeur.*masculine|problème.*masculine|ordinateur.*masculine|thé.*masculine|ciel.*masculine|chien.*masculine|chat.*masculine|parc.*masculine/i, key: 'singular_masculine' },
      { pattern: /with aimer|expressing likes/i, key: 'with_aimer' },
      { pattern: /unspecific|unspecified|indefinite article for unspecified/i, key: 'unspecific' },
      { pattern: /specific location|specific place/i, key: 'specific_location' },
      { pattern: /negative|after negation|pas de/i, key: 'negative' },
      { pattern: /partitive|uncountable/i, key: 'partitive' },
      { pattern: /instrument|jouer.*instrument/i, key: 'instrument' },
      { pattern: /activity|faire.*sport/i, key: 'activity' },
      { pattern: /measurement|mètres carrés/i, key: 'measurement' },
      { pattern: /specific natural|natural elements/i, key: 'specific_natural' },
      { pattern: /contraction|à le.*au/i, key: 'contraction' },
      { pattern: /plural.*indefinite|des.*plural/i, key: 'plural' },
      { pattern: /with adjective|adjective.*noun/i, key: 'with_adjective' },
      { pattern: /without article|no article needed|avoir besoin de/i, key: 'no_article' },
      { pattern: /countable noun/i, key: 'countable' },
      { pattern: /plural.*definite|plural.*general|Les.*plural/i, key: 'general_plural' },
      { pattern: /specific person/i, key: 'specific_person' },
      { pattern: /before vowel|l'ordinateur/i, key: 'before_vowel' },
      { pattern: /with préférer|préférer|expressing preference/i, key: 'preference' },
      { pattern: /comparing|préférer.*à/i, key: 'comparing' },
      { pattern: /weather|faire froid/i, key: 'weather' },
    ]
    
    for (const { pattern, key } of matchPatterns) {
      if (pattern.test(explanation)) {
        return explanationTranslations[key]?.[lang] || explanation
      }
    }
    
    return explanation
  }

  const handleInputChange = (blankIndex: number, value: string) => {
    setInputs((prev) => ({ ...prev, [blankIndex]: value }))
  }

  const handleCheck = () => {
    let allCorrect = true
    const userAnswers: string[] = []
    const correctAnswers: string[] = []
    currentSentence.blanks.forEach((blank, idx) => {
      const userInput = inputs[idx] || ''
      userAnswers.push(userInput)
      correctAnswers.push(blank.answer)
      if (!compareText(userInput, blank.answer, settings)) {
        allCorrect = false
      }
    })
    setShowAnswer(true)
    const userAnswerText = userAnswers.join(' / ')
    const correctAnswerText = correctAnswers.join(' / ')
    onAnswerChecked?.(allCorrect, currentSentence.sentence, userAnswerText, correctAnswerText)
  }

  const handleNext = () => {
    const newSentence = articleSentences[Math.floor(Math.random() * articleSentences.length)]
    setCurrentSentence(newSentence)
    setInputs({})
    setShowAnswer(false)
    setHoveredWord(null)
    setProblemIndex((prev) => prev + 1)
  }

  const renderSentence = () => {
    const parts = currentSentence.sentence.split('___')
    const elements: React.ReactNode[] = []

    parts.forEach((part, index) => {
      if (index > 0) {
        const blankIndex = index - 1
        const blank = currentSentence.blanks[blankIndex]
        const userInput = inputs[blankIndex] || ''
        const isCorrect = showAnswer
          ? compareText(userInput, blank.answer, settings)
          : null

        elements.push(
          <span key={`blank-${blankIndex}`} className="blank-container">
            <input
              type="text"
              className={`article-input ${showAnswer && isCorrect !== null ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
              value={userInput}
              onChange={(e) => handleInputChange(blankIndex, e.target.value)}
              placeholder="___"
              autoComplete={settings.pureKeyboard ? 'off' : 'on'}
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              disabled={showAnswer}
              style={{ width: `${Math.max(userInput.length || 3, 3)}ch` }}
            />
          </span>
        )
      }
      if (part) {
        const words = part.split(' ')
        words.forEach((word, wordIndex) => {
          if (word.trim()) {
            const wordKey = `word-${index}-${wordIndex}`
            const cleanWord = word.replace(/[.,!?;:]/g, '').trim()
            const translation = getTranslation(cleanWord)
            const gender = getWordGender(cleanWord)
            const hasInfo = translation || gender
            elements.push(
              <span
                key={wordKey}
                className="sentence-word"
                onMouseEnter={() => hasInfo && setHoveredWord(cleanWord)}
                onMouseLeave={() => setHoveredWord(null)}
              >
                {word}
                {hoveredWord === cleanWord && hasInfo && (
                  <span className="word-translation">
                    {translation && <div>{translation}</div>}
                    {gender && (
                      <div className="word-gender">
                        {gender === 'm' ? t('articles.masculine') : gender === 'f' ? t('articles.feminine') : t('articles.both')}
                      </div>
                    )}
                  </span>
                )}
              </span>
            )
            if (wordIndex < words.length - 1) {
              elements.push(<span key={`space-${wordKey}`}> </span>)
            }
          }
        })
      }
    })

    return elements
  }

  return (
    <QuestionCard
      title={t('articles.title')}
      instruction={t('articles.instruction')}
      onCheck={handleCheck}
      onStop={onStop || (() => {})}
      showAnswer={showAnswer}
      answer={
        showAnswer
          ? currentSentence.blanks.map((blank, idx) => {
              const isCorrect = compareText(inputs[idx] || '', blank.answer, settings)
              return (
                <div key={idx} className={`article-answer ${isCorrect ? 'correct-item' : 'incorrect-item'}`}>
                  <strong>{blank.answer}</strong>: {getExplanation(blank.explanation)}
                </div>
              )
            })
          : undefined
      }
    >
      <div className="article-container">
        <div className="sentence-display">{renderSentence()}</div>
        {showAnswer && (
          <button className="next-button" onClick={handleNext}>
            {t('common.next')}
          </button>
        )}
      </div>
    </QuestionCard>
  )
}


import React, { useState, useEffect } from 'react'
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
  const [usedIndices, setUsedIndices] = useState<Set<number>>(new Set())
  const [availableIndices] = useState<number[]>(
    articleSentences.map((_, index) => index).sort(() => Math.random() - 0.5)
  )
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState<number>(() => {
    const indices = articleSentences.map((_, index) => index).sort(() => Math.random() - 0.5)
    return indices[0]
  })
  const [currentSentence, setCurrentSentence] = useState<ArticleSentence>(
    articleSentences[currentSentenceIndex]
  )
  const [inputs, setInputs] = useState<Record<number, string>>({})
  const [showAnswer, setShowAnswer] = useState(false)
  const [hoveredWord, setHoveredWord] = useState<string | null>(null)
  const [problemIndex, setProblemIndex] = useState(0)
  const [showHint, setShowHint] = useState(true)
  const [hintFading, setHintFading] = useState(false)

  useEffect(() => {
    if (problemIndex === 0) {
      setShowHint(true)
      setHintFading(false)
      
      const fadeTimer = setTimeout(() => {
        setHintFading(true)
      }, 4000)

      const hideTimer = setTimeout(() => {
        setShowHint(false)
      }, 5000)

      return () => {
        clearTimeout(fadeTimer)
        clearTimeout(hideTimer)
      }
    } else {
      setShowHint(false)
      setHintFading(false)
    }
  }, [problemIndex])

  const getTranslation = (word: string): string | null => {
    // 문장 부호 제거 및 소문자 변환
    let cleanWord = word.replace(/[.,!?;:']/g, '').toLowerCase().trim()
    
    // 빈 문자열이면 null 반환
    if (!cleanWord) return null
    
    // 직접 찾기
    let translation = wordTranslations[cleanWord]
    if (translation) {
      const lang = i18n.language as 'en' | 'ko' | 'tw'
      return translation[lang] || translation.en
    }
    
    // 복수형 처리 (예: montagnes -> montagne)
    if (cleanWord.endsWith('s') && cleanWord.length > 1) {
      const singular = cleanWord.slice(0, -1)
      translation = wordTranslations[singular]
      if (translation) {
        const lang = i18n.language as 'en' | 'ko' | 'tw'
        return translation[lang] || translation.en
      }
    }
    
    // 복수형 처리 (예: chaises -> chaise는 없지만, 일반적인 패턴)
    // -es로 끝나는 경우
    if (cleanWord.endsWith('es') && cleanWord.length > 2) {
      const singular = cleanWord.slice(0, -2)
      translation = wordTranslations[singular]
      if (translation) {
        const lang = i18n.language as 'en' | 'ko' | 'tw'
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
          const lang = i18n.language as 'en' | 'ko' | 'tw'
          return translation[lang] || translation.en
        }
      }
    }
    
    // -ent로 끝나는 동사 (3인칭 복수)
    if (cleanWord.endsWith('ent') && cleanWord.length > 3) {
      const base = cleanWord.slice(0, -3)
      translation = wordTranslations[base]
      if (translation) {
        const lang = i18n.language as 'en' | 'ko' | 'tw'
        return translation[lang] || translation.en
      }
    }
    
    // -ons로 끝나는 동사 (1인칭 복수)
    if (cleanWord.endsWith('ons') && cleanWord.length > 3) {
      const base = cleanWord.slice(0, -3)
      translation = wordTranslations[base]
      if (translation) {
        const lang = i18n.language as 'en' | 'ko' | 'tw'
        return translation[lang] || translation.en
      }
    }
    
    // -ez로 끝나는 동사 (2인칭 복수)
    if (cleanWord.endsWith('ez') && cleanWord.length > 2) {
      const base = cleanWord.slice(0, -2)
      translation = wordTranslations[base]
      if (translation) {
        const lang = i18n.language as 'en' | 'ko' | 'tw'
        return translation[lang] || translation.en
      }
    }
    
    return null
  }

  const getExplanation = (explanation: string): string => {
    const lang = i18n.language as 'en' | 'ko' | 'tw' | 'fr'
    
    const matchPatterns = [
      { pattern: /montagnes.*specific natural/i, key: 'montagnes_specific' },
      { pattern: /montagnes.*plural.*feminine|mountains in plural form/i, key: 'mountains_plural' },
      { pattern: /neige.*feminine|snow is feminine/i, key: 'snow_feminine' },
      { pattern: /sommets.*masculine|peaks.*masculine|summits are masculine/i, key: 'peaks_masculine' },
      { pattern: /paysage.*masculine|landscape is masculine/i, key: 'landscape_masculine' },
      { pattern: /beauté.*feminine|beauty is feminine/i, key: 'beauty_feminine' },
      { pattern: /rivière.*feminine|river is feminine/i, key: 'river_feminine' },
      { pattern: /rochers.*masculine|rocks are masculine/i, key: 'rocks_masculine' },
      { pattern: /forêt.*feminine|forest is feminine/i, key: 'forest_feminine' },
      { pattern: /sincérité.*personality/i, key: 'sincérité_trait' },
      { pattern: /campagne.*specific/i, key: 'campagne_specific' },
      { pattern: /classe.*specific/i, key: 'classe_specific' },
      { pattern: /lumière.*specific/i, key: 'lumière_specific' },
      { pattern: /pluie.*specific/i, key: 'pluie_specific' },
      { pattern: /ciel.*specific/i, key: 'ciel_specific' },
      { pattern: /gel.*specific/i, key: 'gel_specific' },
      { pattern: /table.*specific/i, key: 'table_specific' },
      { pattern: /voiture.*specific/i, key: 'voiture_specific' },
      { pattern: /thé.*specific\s|thé.*specific\)/i, key: 'thé_specific' },
      { pattern: /plat.*specific/i, key: 'plat_specific' },
      { pattern: /centre.*specific location/i, key: 'centre_specific' },
      { pattern: /village.*specific/i, key: 'village_specific' },
      { pattern: /vallée.*specific/i, key: 'vallée_specific' },
      { pattern: /musique.*specific activity/i, key: 'musique_specific' },
      { pattern: /travail.*specific activity/i, key: 'travail_specific' },
      { pattern: /études.*specific activity/i, key: 'études_specific' },
      { pattern: /professeur.*specific person/i, key: 'professeur_specific' },
      { pattern: /arbres.*specific natural/i, key: 'arbres_specific' },
      { pattern: /nuages.*specific natural/i, key: 'nuages_specific' },
      { pattern: /routes.*specific places/i, key: 'routes_specific' },
      { pattern: /difficultés.*specific concepts/i, key: 'difficultés_specific' },
      { pattern: /problèmes.*specific concepts/i, key: 'problèmes_specific' },
      { pattern: /situations.*specific concepts/i, key: 'situations_specific' },
      { pattern: /valeurs.*specific/i, key: 'valeurs_specific' },
      { pattern: /lire.*specific action/i, key: 'lire_specific' },
      { pattern: /no article needed.*fixed expression/i, key: 'no_article_fixed' },
      { pattern: /no article needed.*preposition|no article needed.*"aller à"|no article needed.*"avoir besoin de"|no article needed.*"parler de"|no article needed.*"vivre à"|no article needed.*"venir de"|no article needed.*"manquer de"|no article needed.*"parler sans"/i, key: 'no_article_preposition' },
      { pattern: /no article needed.*professions/i, key: 'no_article_profession' },
      { pattern: /no article needed.*city names/i, key: 'no_article_city' },
      { pattern: /no article needed.*time expressions|no article needed.*"Il est midi"/i, key: 'no_article_time' },
      { pattern: /no article needed.*weather expressions|no article needed.*"Il fait"/i, key: 'no_article_weather' },
      { pattern: /quantity.*de|after quantity expressions/i, key: 'quantity_de' },
      { pattern: /compound noun|"de" connects nouns/i, key: 'compound_noun' },
      { pattern: /personality trait|abstract concepts/i, key: 'personality_trait' },
      { pattern: /country|countries/i, key: 'country' },
      { pattern: /meal names/i, key: 'meal_names' },
      { pattern: /days of week/i, key: 'days_of_week' },
      { pattern: /time expressions/i, key: 'time_expressions' },
      { pattern: /ability/i, key: 'ability' },
      { pattern: /pratiquer/i, key: 'pratiquer_activity' },
      { pattern: /unit.*de|after unit expressions/i, key: 'unit_de' },
      { pattern: /unit\s|unit\)|before unit of measurement/i, key: 'unit' },
      { pattern: /specific natural|natural element/i, key: 'specific_natural' },
      { pattern: /specific.*location|specific place/i, key: 'specific_location' },
      { pattern: /general\s|general\)/i, key: 'general' },
      { pattern: /plural feminine|montagnes.*plural|sommets.*plural|rochers.*plural|légumes.*plural|étudiants.*plural|enfants.*plural|chaises.*plural|cascades.*plural|glaciers.*plural|lacs.*plural|prairies.*plural|sentiers.*plural/i, key: 'plural_feminine' },
      { pattern: /singular feminine|montagne.*feminine|mer.*feminine|vallée.*feminine|maison.*feminine|pomme.*feminine/i, key: 'singular_feminine' },
      { pattern: /plural masculine|étudiants.*masculine|enfants.*masculine/i, key: 'plural_masculine' },
      { pattern: /plural.*definite|plural.*general|Les.*plural/i, key: 'general_plural' },
      { pattern: /plural\s|plural\)/i, key: 'general_plural' },
      { pattern: /singular masculine|appartement.*masculine|centre-ville.*masculine|pain.*masculine|lait.*masculine|fromage.*masculine|piano.*masculine|sport.*masculine|soleil.*masculine|marché.*masculine|jardin.*masculine|café.*masculine|professeur.*masculine|problème.*masculine|ordinateur.*masculine|thé.*masculine|ciel.*masculine|chien.*masculine|chat.*masculine|parc.*masculine/i, key: 'singular_masculine' },
      { pattern: /with aimer|with adorer|expressing likes/i, key: 'with_aimer' },
      { pattern: /unspecific|unspecified|indefinite article for unspecified/i, key: 'unspecific' },
      { pattern: /negative|after negation|pas de/i, key: 'negative' },
      { pattern: /partitive|uncountable/i, key: 'partitive' },
      { pattern: /instrument|jouer.*instrument/i, key: 'instrument' },
      { pattern: /activity|faire.*sport|faire de/i, key: 'activity' },
      { pattern: /measurement|mètres carrés/i, key: 'measurement' },
      { pattern: /contraction|à le.*au/i, key: 'contraction' },
      { pattern: /plural.*indefinite|des.*plural/i, key: 'plural' },
      { pattern: /with adjective|adjective.*noun/i, key: 'with_adjective' },
      { pattern: /without article|avoir besoin de/i, key: 'no_article' },
      { pattern: /countable noun/i, key: 'countable' },
      { pattern: /specific person/i, key: 'specific_person' },
      { pattern: /before vowel|l'ordinateur|l'opéra|l'aventure/i, key: 'before_vowel' },
      { pattern: /with préférer|préférer|expressing preference/i, key: 'preference' },
      { pattern: /comparing|préférer.*à/i, key: 'comparing' },
      { pattern: /weather|faire froid/i, key: 'weather' },
      { pattern: /habit|habitual/i, key: 'habit' },
      { pattern: /specific\s|specific\)/i, key: 'specific' },
    ]
    
    for (const { pattern, key } of matchPatterns) {
      if (pattern.test(explanation)) {
        return explanationTranslations[key]?.[lang] || explanationTranslations[key]?.en || explanation
      }
    }
    
    return explanation
  }

  const handleInputChange = (blankIndex: number, value: string) => {
    setInputs((prev) => ({ ...prev, [blankIndex]: value }))
  }

  const handleCheck = () => {
    if (showAnswer) return
    let allCorrect = true
    const userAnswers: string[] = []
    const correctAnswers: string[] = []
    currentSentence.blanks.forEach((blank, idx) => {
      const userInput = inputs[idx] || ''
      userAnswers.push(userInput || '_')
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
    const newUsedIndices = new Set(usedIndices)
    newUsedIndices.add(currentSentenceIndex)
    setUsedIndices(newUsedIndices)

    const remainingIndices = availableIndices.filter((idx) => !newUsedIndices.has(idx))
    
    if (remainingIndices.length === 0) {
      onStop?.()
      return
    }

    const nextIndex = remainingIndices[Math.floor(Math.random() * remainingIndices.length)]
    setCurrentSentenceIndex(nextIndex)
    setCurrentSentence(articleSentences[nextIndex])
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
              autoComplete="off"
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

  const allCorrect = showAnswer
    ? currentSentence.blanks.every((blank, _idx) => compareText(inputs[_idx] || '', blank.answer, settings))
    : false

  const answerText = showAnswer
    ? currentSentence.blanks.map((blank, _idx) => `${blank.answer}: ${getExplanation(blank.explanation)}`).map((text, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && <br />}
          {text}
        </React.Fragment>
      ))
    : undefined

  return (
    <QuestionCard
      title={t('articles.title')}
      instruction={t('articles.instruction')}
      onCheck={handleCheck}
      onStop={onStop || (() => {})}
      showAnswer={showAnswer}
      answer={answerText}
      isCorrect={allCorrect}
      onNext={handleNext}
    >
      <div className="article-container">
        {showHint && <div className={`article-hint ${hintFading ? 'fade-out' : ''}`}>{t('articles.hint')}</div>}
        <div className="sentence-display">{renderSentence()}</div>
      </div>
    </QuestionCard>
  )
}


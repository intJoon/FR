export interface ArticleSentence {
  sentence: string
  blanks: Array<{ index: number; answer: string; gender: 'm' | 'f' | 'm/f' | null; explanation: string }>
  hint?: { word: string; gender: 'm' | 'f'; translation: string }
  articleRelatedWords?: Set<string>
}

const articleWords = new Set(['le', 'la', 'les', 'l\'', 'un', 'une', 'des', 'du', 'de', 'de la', 'de l\'', 'au', 'aux', 'à la', 'à l\'', 'à le'])

const isArticle = (answer: string): boolean => {
  const normalized = answer.toLowerCase().trim()
  return articleWords.has(normalized) || normalized.startsWith('l\'') || normalized.startsWith('de l\'') || normalized.startsWith('à l\'')
}

const extractArticleRelatedWords = (sentence: ArticleSentence): Set<string> => {
  const relatedWords = new Set<string>()
  const parts = sentence.sentence.split('___')
  
  sentence.blanks.forEach((blank, blankIndex) => {
    if (!isArticle(blank.answer)) return
    
    const partAfterBlank = parts[blankIndex + 1]
    if (!partAfterBlank) return
    
    const words = partAfterBlank.trim().split(/\s+/)
    if (words.length > 0) {
      const firstWord = words[0].replace(/[.,!?;:']/g, '').trim().toLowerCase()
      if (firstWord) {
        relatedWords.add(firstWord)
        
        if (firstWord.endsWith('s') && firstWord.length > 1) {
          relatedWords.add(firstWord.slice(0, -1))
        }
        if (firstWord.endsWith('es') && firstWord.length > 2) {
          relatedWords.add(firstWord.slice(0, -2))
        }
      }
    }
    
    const partBeforeBlank = parts[blankIndex]
    if (partBeforeBlank) {
      const wordsBefore = partBeforeBlank.trim().split(/\s+/)
      const lastWordBefore = wordsBefore[wordsBefore.length - 1]?.toLowerCase().trim()
      
      if (lastWordBefore === 'à' || lastWordBefore === 'de' || lastWordBefore === 'pour' || lastWordBefore === 'avec' || lastWordBefore === 'sans' || lastWordBefore === 'par') {
        const wordsAfter = partAfterBlank.trim().split(/\s+/)
        if (wordsAfter.length > 0) {
          const firstWordAfter = wordsAfter[0].replace(/[.,!?;:']/g, '').trim().toLowerCase()
          if (firstWordAfter) {
            relatedWords.add(firstWordAfter)
            
            if (firstWordAfter.endsWith('s') && firstWordAfter.length > 1) {
              relatedWords.add(firstWordAfter.slice(0, -1))
            }
            if (firstWordAfter.endsWith('es') && firstWordAfter.length > 2) {
              relatedWords.add(firstWordAfter.slice(0, -2))
            }
          }
        }
      }
    }
  })
  
  return relatedWords
}

export const articleSentences: ArticleSentence[] = [
  // ===== 좋아하는 것일 때 (aimer, adorer, préférer) =====
  {
    sentence: 'J\'aime ___ montagne et ___ mer.',
    blanks: [
      {
        index: 0,
        answer: 'la',
        gender: 'f',
        explanation: 'Definite article (aimer/general preference). Feminine singular',
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
        explanation: 'Definite article (aimer/general preference). Feminine singular',
      },
    ],
  },
  {
    sentence: 'J\'adore ___ chocolat et ___ gâteau.',
    blanks: [
      {
        index: 0,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (adorer/general preference). Masculine singular',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (adorer/general preference). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Elle aime ___ musique classique et ___ opéra.',
    blanks: [
      {
        index: 0,
        answer: 'la',
        gender: 'f',
        explanation: 'Definite article (aimer/general preference). Feminine singular',
      },
      {
        index: 1,
        answer: 'l\'',
        gender: 'm',
        explanation: 'Definite article elided (before vowel/aimer/general preference). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Nous aimons ___ lecture et ___ cinéma.',
    blanks: [
      {
        index: 0,
        answer: 'la',
        gender: 'f',
        explanation: 'Definite article (aimer/general preference). Feminine singular',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (aimer/general preference). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Vous aimez ___ nature et ___ animaux.',
    blanks: [
      {
        index: 0,
        answer: 'la',
        gender: 'f',
        explanation: 'Definite article (aimer/general preference). Feminine singular',
      },
      {
        index: 1,
        answer: 'les',
        gender: 'm/f',
        explanation: 'Definite article (aimer/general preference). Plural',
      },
    ],
  },
  {
    sentence: 'Ils préfèrent ___ thé à ___ café.',
    blanks: [
      {
        index: 0,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (préférer/general preference). Masculine singular',
      },
      {
        index: 1,
        answer: 'au',
        gender: 'm',
        explanation: 'Contraction au (à + le) for comparison structure. Masculine singular',
      },
    ],
  },
  {
    sentence: 'Tu aimes ___ plage et ___ soleil.',
    blanks: [
      {
        index: 0,
        answer: 'la',
        gender: 'f',
        explanation: 'Definite article (aimer/general preference). Feminine singular',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (aimer/general preference). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Elle adore ___ danse et ___ théâtre.',
    blanks: [
      {
        index: 0,
        answer: 'la',
        gender: 'f',
        explanation: 'Definite article (adorer/general preference). Feminine singular',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (adorer/general preference). Masculine singular',
      },
    ],
  },
  {
    sentence: 'J\'aime ___ voyage et ___ aventure.',
    blanks: [
      {
        index: 0,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (aimer/general preference). Masculine singular',
      },
      {
        index: 1,
        answer: 'l\'',
        gender: 'f',
        explanation: 'Definite article elided (before vowel/aimer/general preference). Feminine singular',
      },
    ],
  },
  {
    sentence: 'Nous préférons ___ vin rouge à ___ vin blanc.',
    blanks: [
      {
        index: 0,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (préférer/general preference). Masculine singular',
      },
      {
        index: 1,
        answer: 'au',
        gender: 'm',
        explanation: 'Contraction au (à + le) for comparison structure. Masculine singular',
      },
    ],
  },
  {
    sentence: 'J\'aime ___ cuisine française et ___ fromage.',
    blanks: [
      {
        index: 0,
        answer: 'la',
        gender: 'f',
        explanation: 'Definite article (aimer/general preference). Feminine singular',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (aimer/general preference). Masculine singular',
      },
    ],
  },

  // ===== 불특정할 때 (un/une) =====
  {
    sentence: 'Je cherche ___ appartement dans ___ centre-ville.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (unspecified). Masculine singular',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (specific location). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Il y a ___ problème avec ___ ordinateur.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (unspecified). Masculine singular',
      },
      {
        index: 1,
        answer: 'l\'',
        gender: 'm',
        explanation: 'Definite article elided (before vowel/specific). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Elle mange ___ pomme et boit ___ café.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (unspecified). Feminine singular',
      },
      {
        index: 1,
        answer: 'du',
        gender: 'm',
        explanation: 'Partitive article (uncountable). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Nous avons ___ chien et ___ chat.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (unspecified). Masculine singular',
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (unspecified). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Il achète ___ voiture et ___ maison.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (unspecified). Feminine singular',
      },
      {
        index: 1,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (unspecified). Feminine singular',
      },
    ],
  },
  {
    sentence: 'Je lis ___ livre intéressant et ___ magazine.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (with adjective). Masculine singular',
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (unspecified). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Il cherche ___ travail et ___ logement.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (unspecified). Masculine singular',
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (unspecified). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Nous avons besoin de ___ nouvelle table et ___ chaises.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (with adjective). Feminine singular',
      },
      {
        index: 1,
        answer: 'des',
        gender: 'f',
        explanation: 'Indefinite article (plural). Feminine plural',
      },
    ],
  },
  {
    sentence: 'Elle achète ___ fleurs et ___ cadeau.',
    blanks: [
      {
        index: 0,
        answer: 'des',
        gender: 'f',
        explanation: 'Indefinite article (plural). Feminine plural',
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (unspecified). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Je vois ___ oiseau et ___ arbre dans ___ parc.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (unspecified). Masculine singular',
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (unspecified). Masculine singular',
      },
      {
        index: 2,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (specific location). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Il habite dans ___ vieille maison avec ___ jardin.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (with adjective). Feminine singular',
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (unspecified). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Nous avons ___ belle voiture et ___ garage spacieux.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (with adjective). Feminine singular',
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (with adjective). Masculine singular',
      },
    ],
  },

  // ===== 부정할 때 (pas de) =====
  {
    sentence: 'Il n\'y a pas ___ pain ni ___ lait.',
    blanks: [
      {
        index: 0,
        answer: 'de',
        gender: 'm',
        explanation: 'Negation: "de" instead of article. Masculine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'Negation: "de" instead of article. Masculine singular',
      },
    ],
  },
  {
    sentence: 'Je n\'ai pas ___ argent ni ___ temps.',
    blanks: [
      {
        index: 0,
        answer: 'd\'',
        gender: 'm',
        explanation: 'Negation: "de" instead of article (before vowel). Masculine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'Negation: "de" instead of article. Masculine singular',
      },
    ],
  },
  {
    sentence: 'Il n\'y a pas ___ problème avec cette solution.',
    blanks: [
      {
        index: 0,
        answer: 'de',
        gender: 'm',
        explanation: 'Negation: "de" instead of article. Masculine singular',
      },
    ],
  },
  {
    sentence: 'Elle n\'a pas ___ amis dans cette ville.',
    blanks: [
      {
        index: 0,
        answer: 'd\'',
        gender: 'm/f',
        explanation: 'Negation: "de" instead of article (before vowel). Plural',
      },
    ],
  },
  {
    sentence: 'Nous n\'avons pas ___ voiture ni ___ moto.',
    blanks: [
      {
        index: 0,
        answer: 'de',
        gender: 'f',
        explanation: 'Negation: "de" instead of article. Feminine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'Negation: "de" instead of article. Feminine singular',
      },
    ],
  },
  {
    sentence: 'Tu n\'as pas ___ nouvelles de tes parents.',
    blanks: [
      {
        index: 0,
        answer: 'de',
        gender: 'f',
        explanation: 'Negation: "de" instead of article. Feminine plural',
      },
    ],
  },
  {
    sentence: 'Il n\'y a pas ___ étudiants dans ___ classe aujourd\'hui.',
    blanks: [
      {
        index: 0,
        answer: 'd\'',
        gender: 'm',
        explanation: 'Negation: "de" instead of article (before vowel). Masculine plural',
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
        explanation: 'Definite article (specific location). Feminine singular',
      },
    ],
  },
  {
    sentence: 'Je n\'ai pas ___ idée de ce qu\'il faut faire.',
    blanks: [
      {
        index: 0,
        answer: 'd\'',
        gender: 'f',
        explanation: 'Negation: "de" instead of article (before vowel). Feminine singular',
      },
    ],
  },
  {
    sentence: 'Elle n\'a pas ___ enfants ni ___ animaux.',
    blanks: [
      {
        index: 0,
        answer: 'd\'',
        gender: 'm/f',
        explanation: 'Negation: "de" instead of article (before vowel). Plural',
      },
      {
        index: 1,
        answer: 'd\'',
        gender: 'm',
        explanation: 'Negation: "de" instead of article (before vowel). Masculine plural',
      },
    ],
  },
  {
    sentence: 'Nous n\'avons pas ___ choix dans cette situation.',
    blanks: [
      {
        index: 0,
        answer: 'de',
        gender: 'm',
        explanation: 'Negation: "de" instead of article. Masculine singular',
      },
    ],
  },
  {
    sentence: 'Il n\'y a pas ___ sucre dans ___ thé.',
    blanks: [
      {
        index: 0,
        answer: 'de',
        gender: 'm',
        explanation: 'Negation: "de" instead of article. Masculine singular',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (specific item). Masculine singular',
      },
    ],
  },

  // ===== 부분일 때 (du/de la/des) =====
  {
    sentence: 'Je voudrais ___ eau et ___ fromage.',
    blanks: [
      {
        index: 0,
        answer: 'de l\'',
        gender: 'm/f',
        explanation: 'Partitive article elided (uncountable/before vowel). Singular',
      },
      {
        index: 1,
        answer: 'du',
        gender: 'm',
        explanation: 'Partitive article (uncountable). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Il mange ___ pain et boit ___ vin.',
    blanks: [
      {
        index: 0,
        answer: 'du',
        gender: 'm',
        explanation: 'Partitive article (uncountable). Masculine singular',
      },
      {
        index: 1,
        answer: 'du',
        gender: 'm',
        explanation: 'Partitive article (uncountable). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Elle achète ___ viande et ___ légumes.',
    blanks: [
      {
        index: 0,
        answer: 'de la',
        gender: 'f',
        explanation: 'Partitive article (uncountable). Feminine singular',
      },
      {
        index: 1,
        answer: 'des',
        gender: 'm',
        explanation: 'Partitive article (plural). Plural',
      },
    ],
  },
  {
    sentence: 'Nous avons besoin de ___ farine et ___ œufs.',
    blanks: [
      {
        index: 0,
        answer: 'de la',
        gender: 'f',
        explanation: 'Partitive article (uncountable). Feminine singular',
      },
      {
        index: 1,
        answer: 'des',
        gender: 'm',
        explanation: 'Partitive article (plural). Masculine plural',
      },
    ],
  },
  {
    sentence: 'Je vais acheter ___ riz et ___ pâtes.',
    blanks: [
      {
        index: 0,
        answer: 'du',
        gender: 'm',
        explanation: 'Partitive article (uncountable). Masculine singular',
      },
      {
        index: 1,
        answer: 'des',
        gender: 'f',
        explanation: 'Partitive article (plural). Feminine plural',
      },
    ],
  },
  {
    sentence: 'Il boit ___ café et mange ___ croissants.',
    blanks: [
      {
        index: 0,
        answer: 'du',
        gender: 'm',
        explanation: 'Partitive article (uncountable). Masculine singular',
      },
      {
        index: 1,
        answer: 'des',
        gender: 'm',
        explanation: 'Partitive article (plural). Masculine plural',
      },
    ],
  },
  {
    sentence: 'Elle prépare ___ salade et ___ soupe.',
    blanks: [
      {
        index: 0,
        answer: 'de la',
        gender: 'f',
        explanation: 'Partitive article (uncountable). Feminine singular',
      },
      {
        index: 1,
        answer: 'de la',
        gender: 'f',
        explanation: 'Partitive article (uncountable). Feminine singular',
      },
    ],
  },
  {
    sentence: 'Nous avons ___ beurre et ___ confiture sur ___ table.',
    blanks: [
      {
        index: 0,
        answer: 'du',
        gender: 'm',
        explanation: 'Partitive article (uncountable). Masculine singular',
      },
      {
        index: 1,
        answer: 'de la',
        gender: 'f',
        explanation: 'Partitive article (uncountable). Feminine singular',
      },
      {
        index: 2,
        answer: 'la',
        gender: 'f',
        explanation: 'Definite article (specific item). Feminine singular',
      },
    ],
  },
  {
    sentence: 'Je prends ___ sucre et ___ lait dans mon café.',
    blanks: [
      {
        index: 0,
        answer: 'du',
        gender: 'm',
        explanation: 'Partitive article (uncountable). Masculine singular',
      },
      {
        index: 1,
        answer: 'du',
        gender: 'm',
        explanation: 'Partitive article (uncountable). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Il achète ___ fruits et ___ légumes frais.',
    blanks: [
      {
        index: 0,
        answer: 'des',
        gender: 'm',
        explanation: 'Partitive article (plural). Masculine plural',
      },
      {
        index: 1,
        answer: 'des',
        gender: 'm',
        explanation: 'Partitive article (plural). Plural',
      },
    ],
  },
  {
    sentence: 'Elle met ___ sel et ___ poivre dans ___ plat.',
    blanks: [
      {
        index: 0,
        answer: 'du',
        gender: 'm',
        explanation: 'Partitive article (uncountable). Masculine singular',
      },
      {
        index: 1,
        answer: 'du',
        gender: 'm',
        explanation: 'Partitive article (uncountable). Masculine singular',
      },
      {
        index: 2,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (specific item). Masculine singular',
      },
    ],
  },

  // ===== 형용할 때 (형용사와 함께) =====
  {
    sentence: 'C\'est ___ belle journée et ___ ciel est bleu.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (with adjective). Feminine singular',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (specific natural element). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Elle porte ___ robe rouge et ___ chapeau noir.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (with adjective). Feminine singular',
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (with adjective). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Nous avons ___ grande famille et ___ petits enfants.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (with adjective). Feminine singular',
      },
      {
        index: 1,
        answer: 'des',
        gender: 'm',
        explanation: 'Indefinite article (with adjective/plural). Plural',
      },
    ],
  },
  {
    sentence: 'Je vois ___ beau paysage et ___ montagnes magnifiques.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (with adjective). Masculine singular',
      },
      {
        index: 1,
        answer: 'des',
        gender: 'f',
        explanation: 'Indefinite article (with adjective/plural). Feminine plural',
      },
    ],
  },
  {
    sentence: 'Il achète ___ nouvelle voiture et ___ ancien vélo.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (with adjective). Feminine singular',
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (with adjective). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Elle lit ___ bon livre et ___ intéressants articles.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (with adjective). Masculine singular',
      },
      {
        index: 1,
        answer: 'des',
        gender: 'm',
        explanation: 'Indefinite article (with adjective/plural). Masculine plural',
      },
    ],
  },
  {
    sentence: 'Nous avons ___ jolie fille et ___ garçon intelligent.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (with adjective). Feminine singular',
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (with adjective). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Je cherche ___ petit appartement et ___ grande cuisine.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (with adjective). Masculine singular',
      },
      {
        index: 1,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (with adjective). Feminine singular',
      },
    ],
  },
  {
    sentence: 'Il y a ___ vieux château et ___ nouvelles maisons dans ___ village.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (with adjective). Masculine singular',
      },
      {
        index: 1,
        answer: 'des',
        gender: 'f',
        explanation: 'Indefinite article (with adjective/plural). Feminine plural',
      },
      {
        index: 2,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (specific location). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Elle aime ___ longs voyages et ___ courtes vacances.',
    blanks: [
      {
        index: 0,
        answer: 'les',
        gender: 'm',
        explanation: 'Definite article (aimer/general preference with adjective). Masculine plural',
      },
      {
        index: 1,
        answer: 'les',
        gender: 'f',
        explanation: 'Definite article (aimer/general preference with adjective). Feminine plural',
      },
    ],
  },
  {
    sentence: 'Nous avons ___ magnifique jardin et ___ belles fleurs.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (with adjective). Masculine singular',
      },
      {
        index: 1,
        answer: 'des',
        gender: 'f',
        explanation: 'Indefinite article (with adjective/plural). Feminine plural',
      },
    ],
  },

  // ===== 악기/운동일 때 (jouer du/de la, faire du) =====
  {
    sentence: 'Il joue ___ piano et elle joue ___ guitare.',
    blanks: [
      {
        index: 0,
        answer: 'du',
        gender: 'm',
        explanation: 'Partitive article (jouer + instrument). Masculine singular',
      },
      {
        index: 1,
        answer: 'de la',
        gender: 'f',
        explanation: 'Partitive article (jouer + instrument). Feminine singular',
      },
    ],
  },
  {
    sentence: 'Il fait ___ sport tous les jours.',
    blanks: [
      {
        index: 0,
        answer: 'du',
        gender: 'm',
        explanation: 'Partitive article (faire + activity). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Elle joue ___ violon et ___ flûte.',
    blanks: [
      {
        index: 0,
        answer: 'du',
        gender: 'm',
        explanation: 'Partitive article (jouer + instrument). Masculine singular',
      },
      {
        index: 1,
        answer: 'de la',
        gender: 'f',
        explanation: 'Partitive article (jouer + instrument). Feminine singular',
      },
    ],
  },
  {
    sentence: 'Nous faisons ___ tennis et ___ natation.',
    blanks: [
      {
        index: 0,
        answer: 'du',
        gender: 'm',
        explanation: 'Partitive article (faire + activity). Masculine singular',
      },
      {
        index: 1,
        answer: 'de la',
        gender: 'f',
        explanation: 'Partitive article (faire + activity). Feminine singular',
      },
    ],
  },
  {
    sentence: 'Tu joues ___ batterie et ___ saxophone.',
    blanks: [
      {
        index: 0,
        answer: 'de la',
        gender: 'f',
        explanation: 'Partitive article (jouer + instrument). Feminine singular',
      },
      {
        index: 1,
        answer: 'du',
        gender: 'm',
        explanation: 'Partitive article (jouer + instrument). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Il fait ___ football et ___ basketball.',
    blanks: [
      {
        index: 0,
        answer: 'du',
        gender: 'm',
        explanation: 'Partitive article (faire + activity). Masculine singular',
      },
      {
        index: 1,
        answer: 'du',
        gender: 'm',
        explanation: 'Partitive article (faire + activity). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Elle joue ___ harpe et pratique ___ yoga.',
    blanks: [
      {
        index: 0,
        answer: 'de la',
        gender: 'f',
        explanation: 'Partitive article (jouer + instrument). Feminine singular',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (pratiquer + activity). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Nous jouons ___ accordéon et faisons ___ jogging.',
    blanks: [
      {
        index: 0,
        answer: 'de l\'',
        gender: 'm',
        explanation: 'Partitive article elided (jouer + instrument/before vowel). Masculine singular',
      },
      {
        index: 1,
        answer: 'du',
        gender: 'm',
        explanation: 'Partitive article (faire + activity). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Il fait ___ vélo et ___ course à pied.',
    blanks: [
      {
        index: 0,
        answer: 'du',
        gender: 'm',
        explanation: 'Partitive article (faire + activity). Masculine singular',
      },
      {
        index: 1,
        answer: 'de la',
        gender: 'f',
        explanation: 'Partitive article (faire + activity). Feminine singular',
      },
    ],
  },
  {
    sentence: 'Elle joue ___ clarinette et ___ violoncelle.',
    blanks: [
      {
        index: 0,
        answer: 'de la',
        gender: 'f',
        explanation: 'Partitive article (jouer + instrument). Feminine singular',
      },
      {
        index: 1,
        answer: 'du',
        gender: 'm',
        explanation: 'Partitive article (jouer + instrument). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Nous faisons ___ musculation et ___ danse.',
    blanks: [
      {
        index: 0,
        answer: 'de la',
        gender: 'f',
        explanation: 'Partitive article (faire + activity). Feminine singular',
      },
      {
        index: 1,
        answer: 'de la',
        gender: 'f',
        explanation: 'Partitive article (faire + activity). Feminine singular',
      },
    ],
  },
  {
    sentence: 'Il joue ___ trompette et fait ___ équitation.',
    blanks: [
      {
        index: 0,
        answer: 'de la',
        gender: 'f',
        explanation: 'Partitive article (jouer + instrument). Feminine singular',
      },
      {
        index: 1,
        answer: 'de l\'',
        gender: 'f',
        explanation: 'Partitive article elided (faire + activity/before vowel). Feminine singular',
      },
    ],
  },

  // ===== 단위일 때 (측정 단위) =====
  {
    sentence: 'C\'est ___ appartement de 80 mètres carrés.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (with measurement). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Il a acheté ___ maison de 150 mètres carrés.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (with measurement). Feminine singular',
      },
    ],
  },
  {
    sentence: 'Elle porte ___ robe qui coûte 200 euros.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (with measurement). Feminine singular',
      },
    ],
  },
  {
    sentence: 'Nous avons ___ jardin de 500 mètres carrés.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (with measurement). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Il achète ___ voiture à 30000 euros.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (with measurement). Feminine singular',
      },
    ],
  },
  {
    sentence: 'Je vends ___ appartement de 100 mètres carrés dans ___ centre.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (with measurement). Masculine singular',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (specific location). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Elle habite dans ___ maison de trois étages.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (with measurement). Feminine singular',
      },
    ],
  },
  {
    sentence: 'Il loue ___ studio de 25 mètres carrés.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (with measurement). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Nous cherchons ___ terrain de 1000 mètres carrés.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (with measurement). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Il a construit ___ garage de 50 mètres carrés.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (with measurement). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Elle vend ___ table de 2 mètres de long.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (with measurement). Feminine singular',
      },
    ],
  },
  {
    sentence: 'Je possède ___ terrain de 5000 mètres carrés à ___ campagne.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (with measurement). Masculine singular',
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
        explanation: 'Definite article (specific location). Feminine singular',
      },
    ],
  },

  // ===== 알프스 자연 풍경 묘사 문장 =====
  {
    sentence: '___ montagnes des Alpes sont magnifiques avec ___ neige blanche qui couvre ___ sommets.',
    blanks: [
      {
        index: 0,
        answer: 'Les',
        gender: 'f',
        explanation: 'Definite article (plural). Feminine plural',
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
        explanation: 'Definite article. Feminine singular',
      },
      {
        index: 2,
        answer: 'les',
        gender: 'm',
        explanation: 'Definite article (plural). Masculine plural',
      },
    ],
  },
  {
    sentence: '___ paysage alpestre montre ___ beauté naturelle exceptionnelle.',
    blanks: [
      {
        index: 0,
        answer: 'Le',
        gender: 'm',
        explanation: 'Definite article. Masculine singular',
      },
      {
        index: 1,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article. Feminine singular',
      },
    ],
  },
  {
    sentence: '___ rivière coule entre ___ rochers et ___ forêt de conifères.',
    blanks: [
      {
        index: 0,
        answer: 'La',
        gender: 'f',
        explanation: 'Definite article. Feminine singular',
      },
      {
        index: 1,
        answer: 'les',
        gender: 'm',
        explanation: 'Definite article (plural). Masculine plural',
      },
      {
        index: 2,
        answer: 'la',
        gender: 'f',
        explanation: 'Definite article. Feminine singular',
      },
    ],
  },
  {
    sentence: '___ soleil brille sur ___ vallée.',
    blanks: [
      {
        index: 0,
        answer: 'Le',
        gender: 'm',
        explanation: 'Definite article (specific natural element). Masculine singular',
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
        explanation: 'Definite article (specific location). Feminine singular',
      },
    ],
  },
  {
    sentence: '___ lacs alpins reflètent ___ ciel bleu.',
    blanks: [
      {
        index: 0,
        answer: 'Les',
        gender: 'm',
        explanation: 'Definite article (plural). Masculine plural',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (specific natural element). Masculine singular',
      },
    ],
  },
  {
    sentence: '___ glaciers brillent sous ___ lumière du matin.',
    blanks: [
      {
        index: 0,
        answer: 'Les',
        gender: 'm',
        explanation: 'Definite article (plural). Masculine plural',
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
        explanation: 'Definite article (specific natural element). Feminine singular',
      },
    ],
  },
  {
    sentence: '___ sommets enneigés dominent ___ horizon.',
    blanks: [
      {
        index: 0,
        answer: 'Les',
        gender: 'm',
        explanation: 'Definite article (plural). Masculine plural',
      },
      {
        index: 1,
        answer: 'l\'',
        gender: 'm',
        explanation: 'Definite article elided (before vowel/specific). Masculine singular',
      },
    ],
  },
  {
    sentence: '___ prairies alpines fleurissent au printemps.',
    blanks: [
      {
        index: 0,
        answer: 'Les',
        gender: 'f',
        explanation: 'Definite article (plural). Feminine plural',
      },
    ],
  },
  {
    sentence: '___ cascades descendent de ___ montagnes.',
    blanks: [
      {
        index: 0,
        answer: 'Les',
        gender: 'f',
        explanation: 'Definite article (plural). Feminine plural',
      },
      {
        index: 1,
        answer: 'les',
        gender: 'f',
        explanation: 'Definite article (specific natural elements). Feminine plural',
      },
    ],
  },
  {
    sentence: '___ air pur des Alpes est rafraîchissant.',
    blanks: [
      {
        index: 0,
        answer: 'L\'',
        gender: 'm',
        explanation: 'Definite article elided (before vowel/specific). Masculine singular',
      },
    ],
  },
  {
    sentence: '___ sentiers de montagne serpentent entre ___ arbres.',
    blanks: [
      {
        index: 0,
        answer: 'Les',
        gender: 'm',
        explanation: 'Definite article (plural). Masculine plural',
      },
      {
        index: 1,
        answer: 'les',
        gender: 'm',
        explanation: 'Definite article (specific natural elements). Masculine plural',
      },
    ],
  },

  // ===== 기타 일반적인 문장들 =====
  {
    sentence: 'Je vais à ___ marché pour acheter ___ légumes.',
    blanks: [
      {
        index: 0,
        answer: 'le',
        gender: 'm',
        explanation: 'Contraction au (à + le) for location. Masculine singular',
      },
      {
        index: 1,
        answer: 'des',
        gender: 'm/f',
        explanation: 'Indefinite article (plural). Plural',
      },
    ],
  },
  {
    sentence: '___ étudiants attendent ___ professeur.',
    blanks: [
      {
        index: 0,
        answer: 'Les',
        gender: 'm',
        explanation: 'Definite article (plural/general). Masculine plural',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (specific person). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Nous avons besoin ___ nouvelles chaises.',
    blanks: [
      {
        index: 0,
        answer: 'de',
        gender: 'f',
        explanation: 'No article (avoir besoin de). Feminine plural',
      },
    ],
  },
  {
    sentence: 'Il fait froid ___ aujourd\'hui.',
    blanks: [
      {
        index: 0,
        answer: '',
        gender: null,
        explanation: 'No article (weather expression).',
      },
    ],
  },
  {
    sentence: 'J\'ai faim ___ maintenant.',
    blanks: [
      {
        index: 0,
        answer: '',
        gender: null,
        explanation: 'No article (avoir faim/soif).',
      },
    ],
  },
  {
    sentence: 'Il est midi ___ maintenant.',
    blanks: [
      {
        index: 0,
        answer: '',
        gender: null,
        explanation: 'No article (time expression).',
      },
    ],
  },
  {
    sentence: 'Elle est médecin ___ et il est ingénieur ___ .',
    blanks: [
      {
        index: 0,
        answer: '',
        gender: null,
        explanation: 'No article (profession without adjective).',
      },
      {
        index: 1,
        answer: '',
        gender: null,
        explanation: 'No article (profession without adjective).',
      },
    ],
  },
  {
    sentence: 'C\'est à moi ___ , pas à toi ___ .',
    blanks: [
      {
        index: 0,
        answer: '',
        gender: null,
        explanation: 'No article (C\'est à moi/toi).',
      },
      {
        index: 1,
        answer: '',
        gender: null,
        explanation: 'No article (C\'est à moi/toi).',
      },
    ],
  },
  {
    sentence: 'Il manque ___ de ___ patience.',
    blanks: [
      {
        index: 0,
        answer: '',
        gender: null,
        explanation: 'No article (manquer de).',
      },
      {
        index: 1,
        answer: 'de la',
        gender: 'f',
        explanation: 'Partitive article (after de). Feminine singular',
      },
    ],
  },
  {
    sentence: 'Nous avons besoin ___ de ___ nouvelles chaises.',
    blanks: [
      {
        index: 0,
        answer: '',
        gender: null,
        explanation: 'No article (avoir besoin de).',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'No article (avoir besoin de). Feminine plural',
      },
    ],
  },
  {
    sentence: 'Il va ___ à ___ école tous les jours.',
    blanks: [
      {
        index: 0,
        answer: '',
        gender: null,
        explanation: 'No article (aller à).',
      },
      {
        index: 1,
        answer: 'l\'',
        gender: 'f',
        explanation: 'Definite article elided (after à/before vowel/specific). Feminine singular',
      },
    ],
  },
  {
    sentence: 'Elle vient ___ de ___ France.',
    blanks: [
      {
        index: 0,
        answer: '',
        gender: null,
        explanation: 'No article (venir de).',
      },
      {
        index: 1,
        answer: 'de la',
        gender: 'f',
        explanation: 'Definite article (country). Feminine singular',
      },
    ],
  },
  {
    sentence: 'Il parle ___ sans ___ arrêt.',
    blanks: [
      {
        index: 0,
        answer: '',
        gender: null,
        explanation: 'No article (parler sans).',
      },
      {
        index: 1,
        answer: '',
        gender: null,
        explanation: 'No article (fixed expression).',
      },
    ],
  },
  {
    sentence: 'Nous parlons ___ de ___ travail.',
    blanks: [
      {
        index: 0,
        answer: '',
        gender: null,
        explanation: 'No article (parler de).',
      },
      {
        index: 1,
        answer: 'du',
        gender: 'm',
        explanation: 'Definite article (after de). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Il vit ___ à ___ Paris depuis cinq ans.',
    blanks: [
      {
        index: 0,
        answer: '',
        gender: null,
        explanation: 'No article (vivre à).',
      },
      {
        index: 1,
        answer: '',
        gender: null,
        explanation: 'No article (city name).',
      },
    ],
  },
  {
    sentence: '___ enfants jouent dans ___ parc.',
    blanks: [
      {
        index: 0,
        answer: 'Les',
        gender: 'm/f',
        explanation: 'Definite article (plural/general). Plural',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (specific location). Masculine singular',
      },
    ],
  },

  // ===== 날씨 관련 (구름의 양 등 상세한 묘사) =====
  {
    sentence: 'Il y a ___ nuages gris dans ___ ciel aujourd\'hui.',
    blanks: [
      {
        index: 0,
        answer: 'des',
        gender: 'm',
        explanation: 'Indefinite article (plural). Masculine plural',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (specific natural element). Masculine singular',
      },
    ],
  },
  {
    sentence: '___ soleil brille à travers ___ nuages légers.',
    blanks: [
      {
        index: 0,
        answer: 'Le',
        gender: 'm',
        explanation: 'Definite article (specific natural element). Masculine singular',
      },
      {
        index: 1,
        answer: 'les',
        gender: 'm',
        explanation: 'Definite article (specific natural elements). Masculine plural',
      },
    ],
  },
  {
    sentence: '___ vent souffle fort et ___ pluie commence à tomber.',
    blanks: [
      {
        index: 0,
        answer: 'Le',
        gender: 'm',
        explanation: 'Definite article (specific natural element). Masculine singular',
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
        explanation: 'Definite article (specific natural element). Feminine singular',
      },
    ],
  },
  {
    sentence: 'Il y a ___ arc-en-ciel magnifique après ___ orage.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (unspecified). Masculine singular',
      },
      {
        index: 1,
        answer: 'l\'',
        gender: 'm',
        explanation: 'Definite article elided (before vowel/specific). Masculine singular',
      },
    ],
  },
  {
    sentence: '___ neige tombe doucement sur ___ montagnes.',
    blanks: [
      {
        index: 0,
        answer: 'La',
        gender: 'f',
        explanation: 'Definite article (specific natural element). Feminine singular',
      },
      {
        index: 1,
        answer: 'les',
        gender: 'f',
        explanation: 'Definite article (specific natural elements). Feminine plural',
      },
    ],
  },
  {
    sentence: '___ brouillard épais recouvre ___ vallée ce matin.',
    blanks: [
      {
        index: 0,
        answer: 'Le',
        gender: 'm',
        explanation: 'Definite article (specific natural element). Masculine singular',
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
        explanation: 'Definite article (specific location). Feminine singular',
      },
    ],
  },
  {
    sentence: '___ éclairs illuminent ___ ciel sombre.',
    blanks: [
      {
        index: 0,
        answer: 'Les',
        gender: 'm',
        explanation: 'Definite article (plural). Masculine plural',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (specific natural element). Masculine singular',
      },
    ],
  },
  {
    sentence: '___ température baisse et ___ gel apparaît sur ___ routes.',
    blanks: [
      {
        index: 0,
        answer: 'La',
        gender: 'f',
        explanation: 'Definite article (specific natural element). Feminine singular',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (specific natural element). Masculine singular',
      },
      {
        index: 2,
        answer: 'les',
        gender: 'f',
        explanation: 'Definite article (specific location). Feminine plural',
      },
    ],
  },
  {
    sentence: 'Il y a ___ éclaircie entre ___ nuages sombres.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (unspecified). Feminine singular',
      },
      {
        index: 1,
        answer: 'les',
        gender: 'm',
        explanation: 'Definite article (specific natural elements). Masculine plural',
      },
    ],
  },
  {
    sentence: '___ soleil brille faiblement derrière ___ nuages épais.',
    blanks: [
      {
        index: 0,
        answer: 'Le',
        gender: 'm',
        explanation: 'Definite article (specific natural element). Masculine singular',
      },
      {
        index: 1,
        answer: 'les',
        gender: 'm',
        explanation: 'Definite article (specific natural elements). Masculine plural',
      },
    ],
  },

  // ===== 습관 관련 (매일의 루틴 등) =====
  {
    sentence: 'Chaque matin, je prends ___ café et ___ croissant.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (habit). Masculine singular',
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (habit). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Elle lit ___ journal pendant ___ petit-déjeuner.',
    blanks: [
      {
        index: 0,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (habit). Masculine singular',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (meal name). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Nous faisons ___ sport ___ samedi matin.',
    blanks: [
      {
        index: 0,
        answer: 'du',
        gender: 'm',
        explanation: 'Partitive article (habit). Masculine singular',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (day of week/habit). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Il écoute ___ radio en conduisant ___ voiture.',
    blanks: [
      {
        index: 0,
        answer: 'la',
        gender: 'f',
        explanation: 'Definite article (habit). Feminine singular',
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
        explanation: 'Definite article (specific item). Feminine singular',
      },
    ],
  },
  {
    sentence: 'Tous les soirs, elle regarde ___ télévision avant ___ dîner.',
    blanks: [
      {
        index: 0,
        answer: 'la',
        gender: 'f',
        explanation: 'Definite article (habit). Feminine singular',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (meal name). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Je me promène dans ___ parc ___ dimanche après-midi.',
    blanks: [
      {
        index: 0,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (specific location). Masculine singular',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (day of week/habit). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Tu bois ___ thé vert ___ matin pour ___ énergie.',
    blanks: [
      {
        index: 0,
        answer: 'du',
        gender: 'm',
        explanation: 'Partitive article (habit). Masculine singular',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (time expression/habit). Masculine singular',
      },
      {
        index: 2,
        answer: 'l\'',
        gender: 'f',
        explanation: 'Definite article elided (before vowel/specific). Feminine singular',
      },
    ],
  },
  {
    sentence: 'Elle fait ___ yoga ___ semaine pour rester en forme.',
    blanks: [
      {
        index: 0,
        answer: 'du',
        gender: 'm',
        explanation: 'Partitive article (habit). Masculine singular',
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
        explanation: 'Definite article (time expression/habit). Feminine singular',
      },
    ],
  },
  {
    sentence: 'Nous mangeons ___ restaurant ___ vendredi soir.',
    blanks: [
      {
        index: 0,
        answer: 'au',
        gender: 'm',
        explanation: 'Contraction au (à + le) for location/habit. Masculine singular',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (day of week/habit). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Il lit ___ livre avant ___ coucher chaque nuit.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (habit). Masculine singular',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (time expression/habit). Masculine singular',
      },
    ],
  },

  // ===== 성격 관련 (재능이나 능력, 현재상황 등) =====
  {
    sentence: 'Elle a ___ talent exceptionnel pour ___ musique.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (with adjective). Masculine singular',
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
        explanation: 'Definite article (specific activity). Feminine singular',
      },
    ],
  },
  {
    sentence: 'Il possède ___ grande capacité à résoudre ___ problèmes complexes.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (with adjective). Feminine singular',
      },
      {
        index: 1,
        answer: 'les',
        gender: 'm',
        explanation: 'Definite article (specific concept). Masculine plural',
      },
    ],
  },
  {
    sentence: '___ patience est ___ qualité importante dans ___ vie.',
    blanks: [
      {
        index: 0,
        answer: 'La',
        gender: 'f',
        explanation: 'Definite article (abstract concept). Feminine singular',
      },
      {
        index: 1,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (with adjective). Feminine singular',
      },
      {
        index: 2,
        answer: 'la',
        gender: 'f',
        explanation: 'Definite article (general concept). Feminine singular',
      },
    ],
  },
  {
    sentence: 'Il montre ___ courage remarquable face à ___ difficultés.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (with adjective). Masculine singular',
      },
      {
        index: 1,
        answer: 'les',
        gender: 'f',
        explanation: 'Definite article (specific concept). Feminine plural',
      },
    ],
  },
  {
    sentence: 'Elle a ___ confiance en ses capacités.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (abstract concept). Feminine singular',
      },
    ],
  },
  {
    sentence: '___ optimisme est ___ attitude positive devant ___ situations difficiles.',
    blanks: [
      {
        index: 0,
        answer: 'L\'',
        gender: 'm',
        explanation: 'Definite article elided (before vowel/abstract concept). Masculine singular',
      },
      {
        index: 1,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (with adjective). Feminine singular',
      },
      {
        index: 2,
        answer: 'les',
        gender: 'f',
        explanation: 'Definite article (specific concept). Feminine plural',
      },
    ],
  },
  {
    sentence: 'Il fait preuve de ___ détermination impressionnante pour atteindre ses objectifs.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (with adjective). Feminine singular',
      },
    ],
  },
  {
    sentence: '___ créativité est ___ atout précieux dans ___ travail artistique.',
    blanks: [
      {
        index: 0,
        answer: 'La',
        gender: 'f',
        explanation: 'Definite article (abstract concept). Feminine singular',
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (with adjective). Masculine singular',
      },
      {
        index: 2,
        answer: 'le',
        gender: 'm',
        explanation: 'Definite article (specific activity). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Elle a ___ sens ___ l\'humour et ___ intelligence remarquable.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (compound noun). Masculine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'No article (compound noun de).',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (with adjective). Feminine singular',
      },
    ],
  },
  {
    sentence: '___ honnêteté et ___ sincérité sont ___ valeurs importantes.',
    blanks: [
      {
        index: 0,
        answer: 'L\'',
        gender: 'f',
        explanation: 'Definite article elided (before vowel/abstract concept). Feminine singular',
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
        explanation: 'Definite article (abstract concept). Feminine singular',
      },
      {
        index: 2,
        answer: 'des',
        gender: 'f',
        explanation: 'Indefinite article (specific concept). Feminine plural',
      },
    ],
  },

  // ===== 양사 관련 (양사+관사->관사=de/d') =====
  {
    sentence: 'Je veux beaucoup ___ café et peu ___ sucre.',
    blanks: [
      {
        index: 0,
        answer: 'de',
        gender: 'm',
        explanation: 'Quantity expression: "de" instead of article. Masculine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'Quantity expression: "de" instead of article. Masculine singular',
      },
    ],
  },
  {
    sentence: 'Il mange plus ___ fruits et moins ___ bonbons.',
    blanks: [
      {
        index: 0,
        answer: 'de',
        gender: 'm',
        explanation: 'Quantity expression: "de" instead of article. Masculine plural',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'Quantity expression: "de" instead of article. Masculine plural',
      },
    ],
  },
  {
    sentence: 'Nous avons autant ___ légumes que ___ viande.',
    blanks: [
      {
        index: 0,
        answer: 'de',
        gender: 'm',
        explanation: 'Quantity expression: "de" instead of article. Masculine plural',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'Quantity expression: "de" instead of article. Feminine singular',
      },
    ],
  },
  {
    sentence: 'Elle boit un peu ___ thé et trop ___ café.',
    blanks: [
      {
        index: 0,
        answer: 'de',
        gender: 'm',
        explanation: 'Quantity expression: "de" instead of article. Masculine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'Quantity expression: "de" instead of article. Masculine singular',
      },
    ],
  },
  {
    sentence: 'Il achète assez ___ pain et beaucoup ___ fromage.',
    blanks: [
      {
        index: 0,
        answer: 'de',
        gender: 'm',
        explanation: 'Quantity expression: "de" instead of article. Masculine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'Quantity expression: "de" instead of article. Masculine singular',
      },
    ],
  },
  {
    sentence: 'Tu dépenses trop ___ argent et peu ___ temps pour ___ études.',
    blanks: [
      {
        index: 0,
        answer: 'd\'',
        gender: 'm',
        explanation: 'Quantity expression: "de" instead of article (before vowel). Masculine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'Quantity expression: "de" instead of article. Masculine singular',
      },
      {
        index: 2,
        answer: 'les',
        gender: 'f',
        explanation: 'Definite article (specific activity). Feminine plural',
      },
    ],
  },
  {
    sentence: 'Il y a peu ___ soleil et beaucoup ___ nuages aujourd\'hui.',
    blanks: [
      {
        index: 0,
        answer: 'de',
        gender: 'm',
        explanation: 'Quantity expression: "de" instead of article. Masculine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'Quantity expression: "de" instead of article. Masculine plural',
      },
    ],
  },
  {
    sentence: 'Elle fait beaucoup ___ sport et peu ___ exercice.',
    blanks: [
      {
        index: 0,
        answer: 'de',
        gender: 'm',
        explanation: 'Quantity expression: "de" instead of article. Masculine singular',
      },
      {
        index: 1,
        answer: 'd\'',
        gender: 'm',
        explanation: 'Quantity expression: "de" instead of article (before vowel). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Nous avons plus ___ amis et moins ___ problèmes.',
    blanks: [
      {
        index: 0,
        answer: 'd\'',
        gender: 'm/f',
        explanation: 'Quantity expression: "de" instead of article (before vowel). Plural',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'Quantity expression: "de" instead of article. Masculine plural',
      },
    ],
  },
  {
    sentence: 'Il mange assez ___ salade et trop ___ chocolat.',
    blanks: [
      {
        index: 0,
        answer: 'de',
        gender: 'f',
        explanation: 'Quantity expression: "de" instead of article. Feminine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'Quantity expression: "de" instead of article. Masculine singular',
      },
    ],
  },
  {
    sentence: 'J\'achète énormément ___ livres et pas assez ___ temps pour ___ lire.',
    blanks: [
      {
        index: 0,
        answer: 'de',
        gender: 'm',
        explanation: 'Quantity expression: "de" instead of article. Masculine plural',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'Quantity expression: "de" instead of article. Masculine singular',
      },
      {
        index: 2,
        answer: 'les',
        gender: 'm',
        explanation: 'Definite article (specific action). Masculine plural',
      },
    ],
  },
  {
    sentence: 'Elle consomme très peu ___ sucre et beaucoup ___ eau.',
    blanks: [
      {
        index: 0,
        answer: 'de',
        gender: 'm',
        explanation: 'Quantity expression: "de" instead of article. Masculine singular',
      },
      {
        index: 1,
        answer: 'd\'',
        gender: 'f',
        explanation: 'Quantity expression: "de" instead of article (before vowel). Feminine singular',
      },
    ],
  },
  {
    sentence: 'Il passe trop ___ heures devant ___ ordinateur.',
    blanks: [
      {
        index: 0,
        answer: 'd\'',
        gender: 'f',
        explanation: 'Quantity expression: "de" instead of article (before vowel). Feminine plural',
      },
      {
        index: 1,
        answer: 'l\'',
        gender: 'm',
        explanation: 'Definite article elided (before vowel/specific). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Nous avons un peu ___ courage et beaucoup ___ espoir.',
    blanks: [
      {
        index: 0,
        answer: 'de',
        gender: 'm',
        explanation: 'Quantity expression: "de" instead of article. Masculine singular',
      },
      {
        index: 1,
        answer: 'd\'',
        gender: 'm',
        explanation: 'Quantity expression: "de" instead of article (before vowel). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Tu prends assez ___ vitamines et peu ___ médicaments.',
    blanks: [
      {
        index: 0,
        answer: 'de',
        gender: 'f',
        explanation: 'Quantity expression: "de" instead of article. Feminine plural',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'Quantity expression: "de" instead of article. Masculine plural',
      },
    ],
  },
  {
    sentence: 'Il faut ___ kilo ___ pommes et ___ paquet ___ farine.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (unit). Masculine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'No article (unit + de). Feminine plural',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (unit). Masculine singular',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'f',
        explanation: 'No article (unit + de). Feminine singular',
      },
    ],
  },
  {
    sentence: 'Elle achète ___ tasse ___ café et ___ morceau ___ sucre.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (unit). Feminine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'No article (unit + de). Masculine singular',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (unit). Masculine singular',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
        explanation: 'No article (unit + de). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Il prend ___ bouteille ___ eau et ___ boîte ___ conserves.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (unit). Feminine singular',
      },
      {
        index: 1,
        answer: 'd\'',
        gender: 'f',
        explanation: 'No article (unit + de/before vowel). Feminine singular',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (unit). Feminine singular',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'f',
        explanation: 'No article (unit + de). Feminine plural',
      },
    ],
  },
  {
    sentence: 'Nous avons besoin de ___ tranche ___ pain et ___ verre ___ lait.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (unit). Feminine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'No article (unit + de). Masculine singular',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (unit). Masculine singular',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
        explanation: 'No article (unit + de). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Tu manges ___ barre ___ chocolat et ___ portion ___ gâteau.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (unit). Feminine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'No article (unit + de). Masculine singular',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (unit). Feminine singular',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
        explanation: 'No article (unit + de). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Il achète ___ litre ___ huile et ___ kilogramme ___ pommes de terre.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (unit). Masculine singular',
      },
      {
        index: 1,
        answer: 'd\'',
        gender: 'f',
        explanation: 'No article (unit + de/before vowel). Feminine singular',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (unit). Masculine singular',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'f',
        explanation: 'No article (unit + de). Feminine plural',
      },
    ],
  },
  {
    sentence: 'Elle commande ___ pot ___ confiture et ___ sachet ___ thé.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (unit). Masculine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'No article (unit + de). Feminine singular',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (unit). Masculine singular',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
        explanation: 'No article (unit + de). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Nous avons besoin de ___ cuillère ___ miel et ___ goutte ___ citron.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (unit). Feminine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'No article (unit + de). Masculine singular',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (unit). Feminine singular',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
        explanation: 'No article (unit + de). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Il prend ___ poignée ___ noix et ___ pointe ___ couteau ___ beurre.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (unit). Feminine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'No article (unit + de). Feminine plural',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (unit). Feminine singular',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
        explanation: 'No article (unit + de). Masculine singular',
      },
      {
        index: 4,
        answer: 'de',
        gender: 'm',
        explanation: 'No article (unit + de). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Elle utilise ___ cuillère à soupe ___ farine et ___ pincée ___ sel.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (unit). Feminine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'No article (unit + de). Feminine singular',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (unit). Feminine singular',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
        explanation: 'No article (unit + de). Masculine singular',
      },
    ],
  },

  // ===== 단어 조합 관련 (carte de ..., salle de ..., ...) =====
  {
    sentence: 'Il achète ___ carte ___ crédit et ___ billet ___ train.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (compound noun). Feminine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'No article (compound noun de).',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (compound noun). Masculine singular',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
        explanation: 'No article (compound noun de).',
      },
    ],
  },
  {
    sentence: 'Nous réservons ___ salle ___ conférence et ___ chambre ___ hôtel.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (compound noun). Feminine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'No article (compound noun de).',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (compound noun). Feminine singular',
      },
      {
        index: 3,
        answer: 'd\'',
        gender: 'm',
        explanation: 'No article (compound noun de/before vowel).',
      },
    ],
  },
  {
    sentence: 'Elle cherche ___ table ___ cuisine et ___ chaise ___ bureau.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (compound noun). Feminine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'No article (compound noun de).',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (compound noun). Feminine singular',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
        explanation: 'No article (compound noun de).',
      },
    ],
  },
  {
    sentence: 'Il lit ___ livre ___ histoire et ___ magazine ___ mode.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (compound noun). Masculine singular',
      },
      {
        index: 1,
        answer: 'd\'',
        gender: 'f',
        explanation: 'No article (compound noun de/before vowel).',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (compound noun). Masculine singular',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'f',
        explanation: 'No article (compound noun de).',
      },
    ],
  },
  {
    sentence: 'Tu achètes ___ bouteille ___ vin et ___ verre ___ eau.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (compound noun). Feminine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'No article (compound noun de).',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (compound noun). Masculine singular',
      },
      {
        index: 3,
        answer: 'd\'',
        gender: 'f',
        explanation: 'No article (compound noun de/before vowel).',
      },
    ],
  },
  {
    sentence: 'Elle porte ___ robe ___ soirée et ___ sac à main.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (compound noun). Feminine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'No article (compound noun de).',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (compound noun). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Nous visitons ___ musée ___ art et ___ parc ___ attraction.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (compound noun). Masculine singular',
      },
      {
        index: 1,
        answer: 'd\'',
        gender: 'm',
        explanation: 'No article (compound noun de/before vowel).',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (compound noun). Masculine singular',
      },
      {
        index: 3,
        answer: 'd\'',
        gender: 'f',
        explanation: 'No article (compound noun de/before vowel).',
      },
    ],
  },
  {
    sentence: 'Il utilise ___ clé ___ voiture et ___ téléphone portable.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (compound noun). Feminine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'No article (compound noun de).',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (compound noun). Masculine singular',
      },
    ],
  },
  {
    sentence: 'Elle regarde ___ émission ___ télévision et ___ film ___ science-fiction.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (compound noun). Feminine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'No article (compound noun de).',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (compound noun). Masculine singular',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
        explanation: 'No article (compound noun de).',
      },
    ],
  },
  {
    sentence: 'Tu achètes ___ ticket ___ métro et ___ carte ___ transport.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (compound noun). Masculine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'No article (compound noun de).',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (compound noun). Feminine singular',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
        explanation: 'No article (compound noun de).',
      },
    ],
  },
  {
    sentence: 'Il visite ___ école ___ musique et ___ cours ___ langue.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (compound noun). Feminine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'No article (compound noun de).',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (compound noun). Masculine singular',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'f',
        explanation: 'No article (compound noun de).',
      },
    ],
  },
  {
    sentence: 'Elle achète ___ boîte ___ médicaments et ___ flacon ___ parfum.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (compound noun). Feminine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'No article (compound noun de).',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (compound noun). Masculine singular',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
        explanation: 'No article (compound noun de).',
      },
    ],
  },
  {
    sentence: 'Nous cherchons ___ appartement ___ deux chambres et ___ garage ___ voiture.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (compound noun). Masculine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'No article (compound noun de).',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (compound noun). Masculine singular',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'f',
        explanation: 'No article (compound noun de).',
      },
    ],
  },
  {
    sentence: 'Il lit ___ journal ___ informations et ___ article ___ actualité.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (compound noun). Masculine singular',
      },
      {
        index: 1,
        answer: 'd\'',
        gender: 'f',
        explanation: 'No article (compound noun de/before vowel).',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (compound noun). Masculine singular',
      },
      {
        index: 3,
        answer: 'd\'',
        gender: 'f',
        explanation: 'No article (compound noun de/before vowel).',
      },
    ],
  },
  {
    sentence: 'Elle visite ___ centre commercial et ___ magasin ___ vêtements.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'un centre (compound noun) - indefinite article before noun with adjective',
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
        explanation: 'un magasin (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 2,
        answer: 'de',
        gender: 'm',
        explanation: 'magasin de vêtements (compound noun) - "de" connects nouns in compound expressions',
      },
    ],
  },
  {
    sentence: 'Tu achètes ___ paquet ___ cigarettes et ___ briquet ___ poche.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'un paquet (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'paquet de cigarettes (compound noun) - "de" connects nouns in compound expressions',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'un briquet (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'f',
        explanation: 'briquet de poche (compound noun) - "de" connects nouns in compound expressions',
      },
    ],
  },
  {
    sentence: 'Il utilise ___ machine à café et ___ tasse ___ thé.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'une machine (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 1,
        answer: 'une',
        gender: 'f',
        explanation: 'une tasse (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 2,
        answer: 'de',
        gender: 'm',
        explanation: 'tasse de thé (compound noun) - "de" connects nouns in compound expressions',
      },
    ],
  },
  {
    sentence: 'Elle lit ___ livre ___ cuisine et ___ recette ___ dessert.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'Indefinite article (compound noun). Masculine singular',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'livre de cuisine (compound noun) - "de" connects nouns in compound expressions',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
        explanation: 'une recette (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
        explanation: 'recette de dessert (compound noun) - "de" connects nouns in compound expressions',
      },
    ],
  },
  {
    sentence: 'Nous visitons ___ exposition ___ peinture et ___ galerie ___ art.',
    blanks: [
      {
        index: 0,
        answer: 'une',
        gender: 'f',
        explanation: 'une exposition (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'exposition de peinture (compound noun) - "de" connects nouns in compound expressions',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
        explanation: 'une galerie (compound noun) - indefinite article before noun with "d\'"',
      },
      {
        index: 3,
        answer: 'd\'',
        gender: 'm',
        explanation: 'galerie d\'art (compound noun) - "de" connects nouns in compound expressions (before vowel)',
      },
    ],
  },
  {
    sentence: 'Il achète ___ carton ___ lait et ___ bouteille ___ jus.',
    blanks: [
      {
        index: 0,
        answer: 'un',
        gender: 'm',
        explanation: 'un carton (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'carton de lait (compound noun) - "de" connects nouns in compound expressions',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
        explanation: 'Indefinite article (compound noun). Feminine singular',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
        explanation: 'bouteille de jus (compound noun) - "de" connects nouns in compound expressions',
      },
    ],
  },
]

articleSentences.forEach((sentence) => {
  sentence.articleRelatedWords = extractArticleRelatedWords(sentence)
})

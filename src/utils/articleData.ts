export interface ArticleSentence {
  sentence: string
  blanks: Array<{ index: number; answer: string; gender: 'm' | 'f' | 'm/f' | null; explanation: string }>
  hint?: { word: string; gender: 'm' | 'f'; translation: string }
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
        explanation: 'la montagne (with aimer) - when expressing likes, use definite article',
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
        explanation: 'la mer (with aimer) - when expressing likes, use definite article',
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
        explanation: 'le chocolat (with adorer) - when expressing likes, use definite article',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'le gâteau (with adorer) - when expressing likes, use definite article',
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
        explanation: 'la musique (with aimer) - when expressing likes, use definite article',
      },
      {
        index: 1,
        answer: 'l\'',
        gender: 'm',
        explanation: 'l\'opéra (with aimer) - when expressing likes, use definite article before vowel',
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
        explanation: 'la lecture (with aimer) - when expressing likes, use definite article',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'le cinéma (with aimer) - when expressing likes, use definite article',
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
        explanation: 'la nature (with aimer) - when expressing likes, use definite article',
      },
      {
        index: 1,
        answer: 'les',
        gender: 'm/f',
        explanation: 'les animaux (with aimer) - when expressing likes, use definite article',
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
        explanation: 'le thé (with préférer) - when expressing preference, use definite article',
      },
      {
        index: 1,
        answer: 'au',
        gender: 'm',
        explanation: 'préférer A à B - use "au" (à + le) when comparing',
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
        explanation: 'la plage (with aimer) - when expressing likes, use definite article',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'le soleil (with aimer) - when expressing likes, use definite article',
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
        explanation: 'la danse (with adorer) - when expressing likes, use definite article',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'le théâtre (with adorer) - when expressing likes, use definite article',
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
        explanation: 'le voyage (with aimer) - when expressing likes, use definite article',
      },
      {
        index: 1,
        answer: 'l\'',
        gender: 'f',
        explanation: 'l\'aventure (with aimer) - when expressing likes, use definite article before vowel',
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
        explanation: 'le vin (with préférer) - when expressing preference, use definite article',
      },
      {
        index: 1,
        answer: 'au',
        gender: 'm',
        explanation: 'préférer A à B - use "au" (à + le) when comparing',
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
        explanation: 'la cuisine (with aimer) - when expressing likes, use definite article',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'le fromage (with aimer) - when expressing likes, use definite article',
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
        explanation: 'un appartement (unspecific) - indefinite article for unspecified noun',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'le centre-ville (specific location) - definite article for specific place',
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
        explanation: 'un problème (unspecific) - indefinite article for unspecified problem',
      },
      {
        index: 1,
        answer: 'l\'',
        gender: 'm',
        explanation: 'l\'ordinateur (specific) - definite article before vowel',
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
        explanation: 'une pomme (unspecific) - indefinite article for countable noun',
      },
      {
        index: 1,
        answer: 'du',
        gender: 'm',
        explanation: 'du café (partitive) - partitive article for uncountable masculine noun',
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
        explanation: 'un chien (unspecific) - indefinite article for countable noun',
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
        explanation: 'un chat (unspecific) - indefinite article for countable noun',
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
        explanation: 'une voiture (unspecific) - indefinite article for unspecified noun',
      },
      {
        index: 1,
        answer: 'une',
        gender: 'f',
        explanation: 'une maison (unspecific) - indefinite article for unspecified noun',
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
        explanation: 'une robe (unspecific) - indefinite article before adjective + noun',
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
        explanation: 'un chapeau (unspecific) - indefinite article before adjective + noun',
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
        explanation: 'un livre (unspecific) - indefinite article before adjective + noun',
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
        explanation: 'un magazine (unspecific) - indefinite article for unspecified noun',
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
        explanation: 'un travail (unspecific) - indefinite article for unspecified noun',
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
        explanation: 'un logement (unspecific) - indefinite article for unspecified noun',
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
        explanation: 'une table (unspecific) - indefinite article before adjective + noun',
      },
      {
        index: 1,
        answer: 'des',
        gender: 'f',
        explanation: 'des chaises (plural) - indefinite article for plural nouns',
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
        explanation: 'des fleurs (plural) - indefinite article for plural nouns',
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
        explanation: 'un cadeau (unspecific) - indefinite article for unspecified noun',
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
        explanation: 'un oiseau (unspecific) - indefinite article for unspecified noun',
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
        explanation: 'un arbre (unspecific) - indefinite article for unspecified noun',
      },
      {
        index: 2,
        answer: 'le',
        gender: 'm',
        explanation: 'le parc (specific) - definite article for specific place',
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
        explanation: 'une maison (unspecific) - indefinite article before adjective + noun',
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
        explanation: 'un jardin (unspecific) - indefinite article for unspecified noun',
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
        explanation: 'une voiture (unspecific) - indefinite article before adjective + noun',
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
        explanation: 'un garage (unspecific) - indefinite article before adjective + noun',
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
        explanation: 'pas de pain (negative) - after negation, use "de" instead of article',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'pas de lait (negative) - after negation, use "de" instead of article',
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
        explanation: 'pas d\'argent (negative) - after negation, use "de" instead of article (before vowel)',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'pas de temps (negative) - after negation, use "de" instead of article',
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
        explanation: 'pas de problème (negative) - after negation, use "de" instead of article',
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
        explanation: 'pas d\'amis (negative) - after negation, use "de" instead of article (before vowel)',
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
        explanation: 'pas de voiture (negative) - after negation, use "de" instead of article',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'pas de moto (negative) - after negation, use "de" instead of article',
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
        explanation: 'pas de nouvelles (negative) - after negation, use "de" instead of article',
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
        explanation: 'pas d\'étudiants (negative) - after negation, use "de" instead of article (before vowel)',
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
        explanation: 'la classe (specific) - definite article for specific place',
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
        explanation: 'pas d\'idée (negative) - after negation, use "de" instead of article (before vowel)',
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
        explanation: 'pas d\'enfants (negative) - after negation, use "de" instead of article (before vowel)',
      },
      {
        index: 1,
        answer: 'd\'',
        gender: 'm',
        explanation: 'pas d\'animaux (negative) - after negation, use "de" instead of article (before vowel)',
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
        explanation: 'pas de choix (negative) - after negation, use "de" instead of article',
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
        explanation: 'pas de sucre (negative) - after negation, use "de" instead of article',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'le thé (specific) - definite article for specific item',
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
        explanation: 'de l\'eau (partitive) - partitive article for uncountable nouns',
      },
      {
        index: 1,
        answer: 'du',
        gender: 'm',
        explanation: 'du fromage (partitive) - partitive article for uncountable masculine nouns',
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
        explanation: 'du pain (partitive) - partitive article for uncountable masculine noun',
      },
      {
        index: 1,
        answer: 'du',
        gender: 'm',
        explanation: 'du vin (partitive) - partitive article for uncountable masculine noun',
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
        explanation: 'de la viande (partitive) - partitive article for uncountable feminine noun',
      },
      {
        index: 1,
        answer: 'des',
        gender: 'm',
        explanation: 'des légumes (partitive) - partitive article for plural countable nouns',
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
        explanation: 'de la farine (partitive) - partitive article for uncountable feminine noun',
      },
      {
        index: 1,
        answer: 'des',
        gender: 'm',
        explanation: 'des œufs (partitive) - partitive article for plural countable nouns',
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
        explanation: 'du riz (partitive) - partitive article for uncountable masculine noun',
      },
      {
        index: 1,
        answer: 'des',
        gender: 'f',
        explanation: 'des pâtes (partitive) - partitive article for plural countable nouns',
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
        explanation: 'du café (partitive) - partitive article for uncountable masculine noun',
      },
      {
        index: 1,
        answer: 'des',
        gender: 'm',
        explanation: 'des croissants (partitive) - partitive article for plural countable nouns',
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
        explanation: 'de la salade (partitive) - partitive article for uncountable feminine noun',
      },
      {
        index: 1,
        answer: 'de la',
        gender: 'f',
        explanation: 'de la soupe (partitive) - partitive article for uncountable feminine noun',
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
        explanation: 'du beurre (partitive) - partitive article for uncountable masculine noun',
      },
      {
        index: 1,
        answer: 'de la',
        gender: 'f',
        explanation: 'de la confiture (partitive) - partitive article for uncountable feminine noun',
      },
      {
        index: 2,
        answer: 'la',
        gender: 'f',
        explanation: 'la table (specific) - definite article for specific item',
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
        explanation: 'du sucre (partitive) - partitive article for uncountable masculine noun',
      },
      {
        index: 1,
        answer: 'du',
        gender: 'm',
        explanation: 'du lait (partitive) - partitive article for uncountable masculine noun',
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
        explanation: 'des fruits (partitive) - partitive article for plural countable nouns',
      },
      {
        index: 1,
        answer: 'des',
        gender: 'm',
        explanation: 'des légumes (partitive) - partitive article for plural countable nouns',
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
        explanation: 'du sel (partitive) - partitive article for uncountable masculine noun',
      },
      {
        index: 1,
        answer: 'du',
        gender: 'm',
        explanation: 'du poivre (partitive) - partitive article for uncountable masculine noun',
      },
      {
        index: 2,
        answer: 'le',
        gender: 'm',
        explanation: 'le plat (specific) - definite article for specific item',
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
        explanation: 'une journée (with adjective) - indefinite article before adjective + noun',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'le ciel (specific) - definite article for specific natural element',
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
        explanation: 'une maison (with adjective) - indefinite article before adjective + noun',
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
        explanation: 'un jardin (unspecific) - indefinite article for unspecified noun',
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
        explanation: 'une robe (with adjective) - indefinite article before adjective + noun',
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
        explanation: 'un chapeau (with adjective) - indefinite article before adjective + noun',
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
        explanation: 'une famille (with adjective) - indefinite article before adjective + noun',
      },
      {
        index: 1,
        answer: 'des',
        gender: 'm',
        explanation: 'des enfants (with adjective) - indefinite article before adjective + plural noun',
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
        explanation: 'un paysage (with adjective) - indefinite article before adjective + noun',
      },
      {
        index: 1,
        answer: 'des',
        gender: 'f',
        explanation: 'des montagnes (with adjective) - indefinite article before adjective + plural noun',
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
        explanation: 'une voiture (with adjective) - indefinite article before adjective + noun',
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
        explanation: 'un vélo (with adjective) - indefinite article before adjective + noun',
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
        explanation: 'un livre (with adjective) - indefinite article before adjective + noun',
      },
      {
        index: 1,
        answer: 'des',
        gender: 'm',
        explanation: 'des articles (with adjective) - indefinite article before adjective + plural noun',
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
        explanation: 'une fille (with adjective) - indefinite article before adjective + noun',
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
        explanation: 'un garçon (with adjective) - indefinite article before adjective + noun',
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
        explanation: 'un appartement (with adjective) - indefinite article before adjective + noun',
      },
      {
        index: 1,
        answer: 'une',
        gender: 'f',
        explanation: 'une cuisine (with adjective) - indefinite article before adjective + noun',
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
        explanation: 'un château (with adjective) - indefinite article before adjective + noun',
      },
      {
        index: 1,
        answer: 'des',
        gender: 'f',
        explanation: 'des maisons (with adjective) - indefinite article before adjective + plural noun',
      },
      {
        index: 2,
        answer: 'le',
        gender: 'm',
        explanation: 'le village (specific) - definite article for specific place',
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
        explanation: 'les voyages (with adjective) - definite article when expressing general preference',
      },
      {
        index: 1,
        answer: 'les',
        gender: 'f',
        explanation: 'les vacances (with adjective) - definite article when expressing general preference',
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
        explanation: 'un jardin (with adjective) - indefinite article before adjective + noun',
      },
      {
        index: 1,
        answer: 'des',
        gender: 'f',
        explanation: 'des fleurs (with adjective) - indefinite article before adjective + plural noun',
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
        explanation: 'jouer du piano (instrument) - with jouer + instrument, use "du/de la"',
      },
      {
        index: 1,
        answer: 'de la',
        gender: 'f',
        explanation: 'jouer de la guitare (instrument) - with jouer + instrument, use "du/de la"',
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
        explanation: 'faire du sport (activity) - with faire + sport, use "du/de la"',
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
        explanation: 'jouer du violon (instrument) - with jouer + instrument, use "du/de la"',
      },
      {
        index: 1,
        answer: 'de la',
        gender: 'f',
        explanation: 'jouer de la flûte (instrument) - with jouer + instrument, use "du/de la"',
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
        explanation: 'faire du tennis (activity) - with faire + sport, use "du/de la"',
      },
      {
        index: 1,
        answer: 'de la',
        gender: 'f',
        explanation: 'faire de la natation (activity) - with faire + sport, use "du/de la"',
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
        explanation: 'jouer de la batterie (instrument) - with jouer + instrument, use "du/de la"',
      },
      {
        index: 1,
        answer: 'du',
        gender: 'm',
        explanation: 'jouer du saxophone (instrument) - with jouer + instrument, use "du/de la"',
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
        explanation: 'faire du football (activity) - with faire + sport, use "du/de la"',
      },
      {
        index: 1,
        answer: 'du',
        gender: 'm',
        explanation: 'faire du basketball (activity) - with faire + sport, use "du/de la"',
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
        explanation: 'jouer de la harpe (instrument) - with jouer + instrument, use "du/de la"',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'pratiquer le yoga (activity) - with pratiquer, use definite article',
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
        explanation: 'jouer de l\'accordéon (instrument) - with jouer + instrument, use "du/de la/de l\'"',
      },
      {
        index: 1,
        answer: 'du',
        gender: 'm',
        explanation: 'faire du jogging (activity) - with faire + sport, use "du/de la"',
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
        explanation: 'faire du vélo (activity) - with faire + sport, use "du/de la"',
      },
      {
        index: 1,
        answer: 'de la',
        gender: 'f',
        explanation: 'faire de la course (activity) - with faire + sport, use "du/de la"',
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
        explanation: 'jouer de la clarinette (instrument) - with jouer + instrument, use "du/de la"',
      },
      {
        index: 1,
        answer: 'du',
        gender: 'm',
        explanation: 'jouer du violoncelle (instrument) - with jouer + instrument, use "du/de la"',
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
        explanation: 'faire de la musculation (activity) - with faire + sport, use "du/de la"',
      },
      {
        index: 1,
        answer: 'de la',
        gender: 'f',
        explanation: 'faire de la danse (activity) - with faire + sport, use "du/de la"',
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
        explanation: 'jouer de la trompette (instrument) - with jouer + instrument, use "du/de la"',
      },
      {
        index: 1,
        answer: 'de l\'',
        gender: 'f',
        explanation: 'faire de l\'équitation (activity) - with faire + sport, use "du/de la/de l\'"',
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
        explanation: 'un appartement (with measurement) - indefinite article before noun with measurement',
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
        explanation: 'une maison (with measurement) - indefinite article before noun with measurement',
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
        explanation: 'une robe (with measurement) - indefinite article before noun with measurement',
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
        explanation: 'un jardin (with measurement) - indefinite article before noun with measurement',
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
        explanation: 'une voiture (with measurement) - indefinite article before noun with measurement',
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
        explanation: 'un appartement (with measurement) - indefinite article before noun with measurement',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'le centre (specific location) - definite article for specific place',
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
        explanation: 'une maison (with measurement) - indefinite article before noun with measurement',
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
        explanation: 'un studio (with measurement) - indefinite article before noun with measurement',
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
        explanation: 'un terrain (with measurement) - indefinite article before noun with measurement',
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
        explanation: 'un garage (with measurement) - indefinite article before noun with measurement',
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
        explanation: 'une table (with measurement) - indefinite article before noun with measurement',
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
        explanation: 'un terrain (with measurement) - indefinite article before noun with measurement',
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
        explanation: 'la campagne (specific) - definite article for specific place',
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
        explanation: 'Les montagnes (plural feminine) - mountains in plural form',
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
        explanation: 'la neige (singular feminine) - snow is feminine',
      },
      {
        index: 2,
        answer: 'les',
        gender: 'm',
        explanation: 'les sommets (plural masculine) - peaks/summets are masculine',
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
        explanation: 'Le paysage (singular masculine) - landscape is masculine',
      },
      {
        index: 1,
        answer: 'une',
        gender: 'f',
        explanation: 'une beauté (singular feminine) - beauty is feminine',
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
        explanation: 'La rivière (singular feminine) - river is feminine',
      },
      {
        index: 1,
        answer: 'les',
        gender: 'm',
        explanation: 'les rochers (plural masculine) - rocks are masculine',
      },
      {
        index: 2,
        answer: 'la',
        gender: 'f',
        explanation: 'la forêt (singular feminine) - forest is feminine',
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
        explanation: 'Le soleil (specific) - definite article for specific natural elements',
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
        explanation: 'la vallée (specific) - definite article for specific place',
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
        explanation: 'Les lacs (plural masculine) - lakes in plural form',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'le ciel (specific) - definite article for specific natural element',
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
        explanation: 'Les glaciers (plural masculine) - glaciers in plural form',
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
        explanation: 'la lumière (specific) - definite article for specific natural element',
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
        explanation: 'Les sommets (plural masculine) - peaks in plural form',
      },
      {
        index: 1,
        answer: 'l\'',
        gender: 'm',
        explanation: 'l\'horizon (specific) - definite article before vowel',
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
        explanation: 'Les prairies (plural feminine) - meadows in plural form',
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
        explanation: 'Les cascades (plural feminine) - waterfalls in plural form',
      },
      {
        index: 1,
        answer: 'les',
        gender: 'f',
        explanation: 'les montagnes (specific) - definite article for specific natural elements',
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
        explanation: 'L\'air (specific) - definite article before vowel',
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
        explanation: 'Les sentiers (plural masculine) - paths in plural form',
      },
      {
        index: 1,
        answer: 'les',
        gender: 'm',
        explanation: 'les arbres (specific) - definite article for specific natural elements',
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
        explanation: 'à le marché → au marché (contraction) - use "au" instead of "à le"',
      },
      {
        index: 1,
        answer: 'des',
        gender: 'm/f',
        explanation: 'des légumes (plural) - indefinite article for plural nouns',
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
        explanation: 'Les étudiants (plural) - definite article for plural nouns in general',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'le professeur (specific) - definite article for specific person',
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
        explanation: 'avoir besoin de - "avoir besoin" requires "de" preposition, and no article is used after "de"',
      },
    ],
  },
  {
    sentence: 'Il fait ___ froid aujourd\'hui.',
    blanks: [
      {
        index: 0,
        answer: '',
        gender: null,
        explanation: 'faire froid (no article) - weather expressions don\'t take articles',
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
        explanation: 'Les enfants (plural) - definite article for plural nouns in general',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'le parc (specific) - definite article for specific place',
      },
    ],
  },
]

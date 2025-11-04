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
    sentence: 'Il fait froid ___ aujourd\'hui.',
    blanks: [
      {
        index: 0,
        answer: '',
        gender: null,
        explanation: 'no article needed - weather expressions with "Il fait" do not require an article',
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
        explanation: 'no article needed - "avoir faim/soif" expressions do not require an article',
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
        explanation: 'no article needed - time expressions "Il est midi/minuit" do not require an article',
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
        explanation: 'no article needed - professions without adjective do not require an article',
      },
      {
        index: 1,
        answer: '',
        gender: null,
        explanation: 'no article needed - professions without adjective do not require an article',
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
        explanation: 'no article needed - "C\'est à moi/toi" does not require an article',
      },
      {
        index: 1,
        answer: '',
        gender: null,
        explanation: 'no article needed - "C\'est à moi/toi" does not require an article',
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
        explanation: 'no article needed - "manquer de" does not require an article before "de"',
      },
      {
        index: 1,
        answer: 'de la',
        gender: 'f',
        explanation: 'de la patience (partitive) - partitive article after "de"',
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
        explanation: 'no article needed - "avoir besoin de" does not require an article before "de"',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'besoin de nouvelles chaises - no article after "de" in "avoir besoin de"',
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
        explanation: 'no article needed - "aller à" does not require an article before "à"',
      },
      {
        index: 1,
        answer: 'l\'',
        gender: 'f',
        explanation: 'à l\'école (specific) - definite article after "à"',
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
        explanation: 'no article needed - "venir de" does not require an article before "de"',
      },
      {
        index: 1,
        answer: 'de la',
        gender: 'f',
        explanation: 'de la France (country) - definite article for countries (feminine)',
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
        explanation: 'no article needed - "parler sans" does not require an article before "sans"',
      },
      {
        index: 1,
        answer: '',
        gender: null,
        explanation: 'no article needed - "sans arrêt" is a fixed expression without article',
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
        explanation: 'no article needed - "parler de" does not require an article before "de"',
      },
      {
        index: 1,
        answer: 'du',
        gender: 'm',
        explanation: 'du travail (specific) - definite article after "de"',
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
        explanation: 'no article needed - "vivre à" does not require an article before "à"',
      },
      {
        index: 1,
        answer: '',
        gender: null,
        explanation: 'no article needed - city names do not require an article',
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

  // ===== 날씨 관련 (구름의 양 등 상세한 묘사) =====
  {
    sentence: 'Il y a ___ nuages gris dans ___ ciel aujourd\'hui.',
    blanks: [
      {
        index: 0,
        answer: 'des',
        gender: 'm',
        explanation: 'des nuages (plural) - indefinite article for plural countable nouns',
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
    sentence: '___ soleil brille à travers ___ nuages légers.',
    blanks: [
      {
        index: 0,
        answer: 'Le',
        gender: 'm',
        explanation: 'Le soleil (specific) - definite article for specific natural element',
      },
      {
        index: 1,
        answer: 'les',
        gender: 'm',
        explanation: 'les nuages (specific) - definite article for specific natural elements',
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
        explanation: 'Le vent (specific) - definite article for specific natural element',
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
        explanation: 'la pluie (specific) - definite article for specific natural element',
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
        explanation: 'un arc-en-ciel (unspecific) - indefinite article for countable noun',
      },
      {
        index: 1,
        answer: 'l\'',
        gender: 'm',
        explanation: 'l\'orage (specific) - definite article before vowel',
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
        explanation: 'La neige (specific) - definite article for specific natural element',
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
    sentence: '___ brouillard épais recouvre ___ vallée ce matin.',
    blanks: [
      {
        index: 0,
        answer: 'Le',
        gender: 'm',
        explanation: 'Le brouillard (specific) - definite article for specific natural element',
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
    sentence: '___ éclairs illuminent ___ ciel sombre.',
    blanks: [
      {
        index: 0,
        answer: 'Les',
        gender: 'm',
        explanation: 'Les éclairs (plural) - definite article for plural natural elements',
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
    sentence: '___ température baisse et ___ gel apparaît sur ___ routes.',
    blanks: [
      {
        index: 0,
        answer: 'La',
        gender: 'f',
        explanation: 'La température (specific) - definite article for specific natural element',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'le gel (specific) - definite article for specific natural element',
      },
      {
        index: 2,
        answer: 'les',
        gender: 'f',
        explanation: 'les routes (specific) - definite article for specific places',
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
        explanation: 'une éclaircie (unspecific) - indefinite article for countable noun',
      },
      {
        index: 1,
        answer: 'les',
        gender: 'm',
        explanation: 'les nuages (specific) - definite article for specific natural elements',
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
        explanation: 'Le soleil (specific) - definite article for specific natural element',
      },
      {
        index: 1,
        answer: 'les',
        gender: 'm',
        explanation: 'les nuages (specific) - definite article for specific natural elements',
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
        explanation: 'un café (habit) - indefinite article for habitual action',
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
        explanation: 'un croissant (habit) - indefinite article for habitual action',
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
        explanation: 'le journal (habit) - definite article for habitual action',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'le petit-déjeuner (habit) - definite article for meal names',
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
        explanation: 'du sport (habit) - partitive article for habitual activity',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'le samedi (habit) - definite article for days of week indicating habits',
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
        explanation: 'la radio (habit) - definite article for habitual action',
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
        explanation: 'la voiture (specific) - definite article for specific item',
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
        explanation: 'la télévision (habit) - definite article for habitual action',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'le dîner (habit) - definite article for meal names',
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
        explanation: 'le parc (specific) - definite article for specific place',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'le dimanche (habit) - definite article for days of week indicating habits',
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
        explanation: 'du thé (habit) - partitive article for habitual action',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'le matin (habit) - definite article for time expressions indicating habits',
      },
      {
        index: 2,
        answer: 'l\'',
        gender: 'f',
        explanation: 'l\'énergie (specific) - definite article before vowel',
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
        explanation: 'du yoga (habit) - partitive article for habitual activity',
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
        explanation: 'la semaine (habit) - definite article for time expressions indicating habits',
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
        explanation: 'au restaurant (habit) - contraction of "à le" to "au" for habitual action',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'le vendredi (habit) - definite article for days of week indicating habits',
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
        explanation: 'un livre (habit) - indefinite article for habitual action',
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
        explanation: 'le coucher (habit) - definite article for time expressions indicating habits',
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
        explanation: 'un talent (ability) - indefinite article before adjective + noun',
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
        explanation: 'la musique (specific) - definite article for specific activity',
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
        explanation: 'une capacité (ability) - indefinite article before adjective + noun',
      },
      {
        index: 1,
        answer: 'les',
        gender: 'm',
        explanation: 'les problèmes (specific) - definite article for specific concepts',
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
        explanation: 'La patience (personality trait) - definite article for abstract concepts',
      },
      {
        index: 1,
        answer: 'une',
        gender: 'f',
        explanation: 'une qualité (personality trait) - indefinite article before adjective + noun',
      },
      {
        index: 2,
        answer: 'la',
        gender: 'f',
        explanation: 'la vie (general) - definite article for general concepts',
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
        explanation: 'un courage (personality trait) - indefinite article before adjective + noun',
      },
      {
        index: 1,
        answer: 'les',
        gender: 'f',
        explanation: 'les difficultés (specific) - definite article for specific concepts',
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
        explanation: 'une confiance (personality trait) - indefinite article for abstract concept',
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
        explanation: 'L\'optimisme (personality trait) - definite article before vowel',
      },
      {
        index: 1,
        answer: 'une',
        gender: 'f',
        explanation: 'une attitude (personality trait) - indefinite article before adjective + noun',
      },
      {
        index: 2,
        answer: 'les',
        gender: 'f',
        explanation: 'les situations (specific) - definite article for specific concepts',
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
        explanation: 'une détermination (personality trait) - indefinite article before adjective + noun',
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
        explanation: 'La créativité (personality trait) - definite article for abstract concepts',
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
        explanation: 'un atout (personality trait) - indefinite article before adjective + noun',
      },
      {
        index: 2,
        answer: 'le',
        gender: 'm',
        explanation: 'le travail (specific) - definite article for specific activity',
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
        explanation: 'un sens (personality trait) - indefinite article before noun with "de"',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'sens de l\'humour (compound noun) - "de" connects nouns in compound expressions',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
        explanation: 'une intelligence (personality trait) - indefinite article before adjective + noun',
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
        explanation: 'L\'honnêteté (personality trait) - definite article before vowel',
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
        explanation: 'la sincérité (personality trait) - definite article for abstract concepts',
      },
      {
        index: 2,
        answer: 'des',
        gender: 'f',
        explanation: 'des valeurs (specific) - indefinite article for specific concepts',
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
        explanation: 'beaucoup de café (quantity + de) - after quantity expressions, use "de" instead of article',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'peu de sucre (quantity + de) - after quantity expressions, use "de" instead of article',
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
        explanation: 'plus de fruits (quantity + de) - after quantity expressions, use "de" instead of article',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'moins de bonbons (quantity + de) - after quantity expressions, use "de" instead of article',
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
        explanation: 'autant de légumes (quantity + de) - after quantity expressions, use "de" instead of article',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'autant de viande (quantity + de) - after quantity expressions, use "de" instead of article',
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
        explanation: 'un peu de thé (quantity + de) - after quantity expressions, use "de" instead of article',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'trop de café (quantity + de) - after quantity expressions, use "de" instead of article',
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
        explanation: 'assez de pain (quantity + de) - after quantity expressions, use "de" instead of article',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'beaucoup de fromage (quantity + de) - after quantity expressions, use "de" instead of article',
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
        explanation: 'trop d\'argent (quantity + de) - after quantity expressions, use "de" instead of article (before vowel)',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'peu de temps (quantity + de) - after quantity expressions, use "de" instead of article',
      },
      {
        index: 2,
        answer: 'les',
        gender: 'f',
        explanation: 'les études (specific) - definite article for specific activity',
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
        explanation: 'peu de soleil (quantity + de) - after quantity expressions, use "de" instead of article',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'beaucoup de nuages (quantity + de) - after quantity expressions, use "de" instead of article',
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
        explanation: 'beaucoup de sport (quantity + de) - after quantity expressions, use "de" instead of article',
      },
      {
        index: 1,
        answer: 'd\'',
        gender: 'm',
        explanation: 'peu d\'exercice (quantity + de) - after quantity expressions, use "de" instead of article (before vowel)',
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
        explanation: 'plus d\'amis (quantity + de) - after quantity expressions, use "de" instead of article (before vowel)',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'moins de problèmes (quantity + de) - after quantity expressions, use "de" instead of article',
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
        explanation: 'assez de salade (quantity + de) - after quantity expressions, use "de" instead of article',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'trop de chocolat (quantity + de) - after quantity expressions, use "de" instead of article',
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
        explanation: 'énormément de livres (quantity + de) - after quantity expressions, use "de" instead of article',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'pas assez de temps (quantity + de) - after quantity expressions, use "de" instead of article',
      },
      {
        index: 2,
        answer: 'les',
        gender: 'm',
        explanation: 'les lire (specific) - definite article for specific action',
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
        explanation: 'très peu de sucre (quantity + de) - after quantity expressions, use "de" instead of article',
      },
      {
        index: 1,
        answer: 'd\'',
        gender: 'f',
        explanation: 'beaucoup d\'eau (quantity + de) - after quantity expressions, use "de" instead of article (before vowel)',
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
        explanation: 'trop d\'heures (quantity + de) - after quantity expressions, use "de" instead of article (before vowel)',
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
    sentence: 'Nous avons un peu ___ courage et beaucoup ___ espoir.',
    blanks: [
      {
        index: 0,
        answer: 'de',
        gender: 'm',
        explanation: 'un peu de courage (quantity + de) - after quantity expressions, use "de" instead of article',
      },
      {
        index: 1,
        answer: 'd\'',
        gender: 'm',
        explanation: 'beaucoup d\'espoir (quantity + de) - after quantity expressions, use "de" instead of article (before vowel)',
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
        explanation: 'assez de vitamines (quantity + de) - after quantity expressions, use "de" instead of article',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'peu de médicaments (quantity + de) - after quantity expressions, use "de" instead of article',
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
        explanation: 'un kilo (unit) - indefinite article before unit of measurement',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'un kilo de pommes (unit + de) - after unit expressions, use "de" instead of article',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'un paquet (unit) - indefinite article before unit of measurement',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'f',
        explanation: 'un paquet de farine (unit + de) - after unit expressions, use "de" instead of article',
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
        explanation: 'une tasse (unit) - indefinite article before unit of measurement',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'une tasse de café (unit + de) - after unit expressions, use "de" instead of article',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'un morceau (unit) - indefinite article before unit of measurement',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
        explanation: 'un morceau de sucre (unit + de) - after unit expressions, use "de" instead of article',
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
        explanation: 'une bouteille (unit) - indefinite article before unit of measurement',
      },
      {
        index: 1,
        answer: 'd\'',
        gender: 'f',
        explanation: 'une bouteille d\'eau (unit + de) - after unit expressions, use "de" instead of article (before vowel)',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
        explanation: 'une boîte (unit) - indefinite article before unit of measurement',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'f',
        explanation: 'une boîte de conserves (unit + de) - after unit expressions, use "de" instead of article',
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
        explanation: 'une tranche (unit) - indefinite article before unit of measurement',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'une tranche de pain (unit + de) - after unit expressions, use "de" instead of article',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'un verre (unit) - indefinite article before unit of measurement',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
        explanation: 'un verre de lait (unit + de) - after unit expressions, use "de" instead of article',
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
        explanation: 'une barre (unit) - indefinite article before unit of measurement',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'une barre de chocolat (unit + de) - after unit expressions, use "de" instead of article',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
        explanation: 'une portion (unit) - indefinite article before unit of measurement',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
        explanation: 'une portion de gâteau (unit + de) - after unit expressions, use "de" instead of article',
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
        explanation: 'un litre (unit) - indefinite article before unit of measurement',
      },
      {
        index: 1,
        answer: 'd\'',
        gender: 'f',
        explanation: 'un litre d\'huile (unit + de) - after unit expressions, use "de" instead of article (before vowel)',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'un kilogramme (unit) - indefinite article before unit of measurement',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'f',
        explanation: 'un kilogramme de pommes de terre (unit + de) - after unit expressions, use "de" instead of article',
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
        explanation: 'un pot (unit) - indefinite article before unit of measurement',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'un pot de confiture (unit + de) - after unit expressions, use "de" instead of article',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'un sachet (unit) - indefinite article before unit of measurement',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
        explanation: 'un sachet de thé (unit + de) - after unit expressions, use "de" instead of article',
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
        explanation: 'une cuillère (unit) - indefinite article before unit of measurement',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'une cuillère de miel (unit + de) - after unit expressions, use "de" instead of article',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
        explanation: 'une goutte (unit) - indefinite article before unit of measurement',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
        explanation: 'une goutte de citron (unit + de) - after unit expressions, use "de" instead of article',
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
        explanation: 'une poignée (unit) - indefinite article before unit of measurement',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'une poignée de noix (unit + de) - after unit expressions, use "de" instead of article',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
        explanation: 'une pointe (unit) - indefinite article before unit of measurement',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
        explanation: 'une pointe de couteau (unit + de) - after unit expressions, use "de" instead of article',
      },
      {
        index: 4,
        answer: 'de',
        gender: 'm',
        explanation: 'une pointe de couteau de beurre (unit + de) - after unit expressions, use "de" instead of article',
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
        explanation: 'une cuillère (unit) - indefinite article before unit of measurement',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'une cuillère à soupe de farine (unit + de) - after unit expressions, use "de" instead of article',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
        explanation: 'une pincée (unit) - indefinite article before unit of measurement',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
        explanation: 'une pincée de sel (unit + de) - after unit expressions, use "de" instead of article',
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
        explanation: 'une carte (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'carte de crédit (compound noun) - "de" connects nouns in compound expressions',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'un billet (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
        explanation: 'billet de train (compound noun) - "de" connects nouns in compound expressions',
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
        explanation: 'une salle (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'salle de conférence (compound noun) - "de" connects nouns in compound expressions',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
        explanation: 'une chambre (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 3,
        answer: 'd\'',
        gender: 'm',
        explanation: 'chambre d\'hôtel (compound noun) - "de" connects nouns in compound expressions (before vowel)',
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
        explanation: 'une table (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'table de cuisine (compound noun) - "de" connects nouns in compound expressions',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
        explanation: 'une chaise (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
        explanation: 'chaise de bureau (compound noun) - "de" connects nouns in compound expressions',
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
        explanation: 'un livre (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 1,
        answer: 'd\'',
        gender: 'f',
        explanation: 'livre d\'histoire (compound noun) - "de" connects nouns in compound expressions (before vowel)',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'un magazine (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'f',
        explanation: 'magazine de mode (compound noun) - "de" connects nouns in compound expressions',
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
        explanation: 'une bouteille (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'bouteille de vin (compound noun) - "de" connects nouns in compound expressions',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'un verre (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 3,
        answer: 'd\'',
        gender: 'f',
        explanation: 'verre d\'eau (compound noun) - "de" connects nouns in compound expressions (before vowel)',
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
        explanation: 'une robe (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'robe de soirée (compound noun) - "de" connects nouns in compound expressions',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'un sac (compound noun) - indefinite article before noun with "de"',
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
        explanation: 'un musée (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 1,
        answer: 'd\'',
        gender: 'm',
        explanation: 'musée d\'art (compound noun) - "de" connects nouns in compound expressions (before vowel)',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'un parc (compound noun) - indefinite article before noun with "d\'"',
      },
      {
        index: 3,
        answer: 'd\'',
        gender: 'f',
        explanation: 'parc d\'attraction (compound noun) - "de" connects nouns in compound expressions (before vowel)',
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
        explanation: 'une clé (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'clé de voiture (compound noun) - "de" connects nouns in compound expressions',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'un téléphone (compound noun) - indefinite article before noun with adjective',
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
        explanation: 'une émission (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'émission de télévision (compound noun) - "de" connects nouns in compound expressions',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'un film (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
        explanation: 'film de science-fiction (compound noun) - "de" connects nouns in compound expressions',
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
        explanation: 'un ticket (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'ticket de métro (compound noun) - "de" connects nouns in compound expressions',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
        explanation: 'une carte (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
        explanation: 'carte de transport (compound noun) - "de" connects nouns in compound expressions',
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
        explanation: 'une école (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'école de musique (compound noun) - "de" connects nouns in compound expressions',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'un cours (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'f',
        explanation: 'cours de langue (compound noun) - "de" connects nouns in compound expressions',
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
        explanation: 'une boîte (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
        explanation: 'boîte de médicaments (compound noun) - "de" connects nouns in compound expressions',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'un flacon (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
        explanation: 'flacon de parfum (compound noun) - "de" connects nouns in compound expressions',
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
        explanation: 'un appartement (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
        explanation: 'appartement de deux chambres (compound noun) - "de" connects nouns in compound expressions',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'un garage (compound noun) - indefinite article before noun with "de"',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'f',
        explanation: 'garage de voiture (compound noun) - "de" connects nouns in compound expressions',
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
        explanation: 'un journal (compound noun) - indefinite article before noun with "d\'"',
      },
      {
        index: 1,
        answer: 'd\'',
        gender: 'f',
        explanation: 'journal d\'informations (compound noun) - "de" connects nouns in compound expressions (before vowel)',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
        explanation: 'un article (compound noun) - indefinite article before noun with "d\'"',
      },
      {
        index: 3,
        answer: 'd\'',
        gender: 'f',
        explanation: 'article d\'actualité (compound noun) - "de" connects nouns in compound expressions (before vowel)',
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
        explanation: 'un livre (compound noun) - indefinite article before noun with "de"',
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
        explanation: 'une bouteille (compound noun) - indefinite article before noun with "de"',
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

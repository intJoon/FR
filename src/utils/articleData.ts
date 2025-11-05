export interface ArticleSentence {
  sentence: string
  blanks: Array<{ index: number; answer: string; gender: 'm' | 'f' | 'm/f' | null }>
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
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'l\'',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'les',
        gender: 'm/f',
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
      },
      {
        index: 1,
        answer: 'au',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'l\'',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'au',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'l\'',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'du',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'une',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'des',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
      },
      {
        index: 2,
        answer: 'le',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'd\'',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'du',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'du',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'des',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'des',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'des',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'des',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de la',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'de la',
        gender: 'f',
      },
      {
        index: 2,
        answer: 'la',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'du',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'des',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'du',
        gender: 'm',
      },
      {
        index: 2,
        answer: 'le',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'des',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'des',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'des',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'une',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'des',
        gender: 'f',
      },
      {
        index: 2,
        answer: 'le',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'les',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'des',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'de la',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'de la',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'de la',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'du',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'du',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'du',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de la',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'du',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de la',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'de l\'',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
      },
      {
        index: 2,
        answer: 'les',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'une',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'les',
        gender: 'm',
      },
      {
        index: 2,
        answer: 'la',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'l\'',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'les',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'les',
        gender: 'm',
      },
    ],
  },

  // ===== 기타 일반적인 문장들 =====
  {
    sentence: 'Je vais à ___ marché pour acheter ___ légumes.',
    blanks: [
      {
        index: 0,
        answer: 'au',
        gender: 'm',
      },
      {
        index: 1,
        answer: 'des',
        gender: 'm/f',
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
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: '',
        gender: null,
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
      },
      {
        index: 1,
        answer: '',
        gender: null,
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
      },
      {
        index: 1,
        answer: 'de la',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'l\'',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'de la',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: '',
        gender: null,
      },
    ],
  },
  {
    sentence: 'Nous parlons ___ professeur ___ école.',
    blanks: [
      {
        index: 0,
        answer: 'du',
        gender: 'm',
      },
      {
        index: 1,
        answer: 'de l\'',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: '',
        gender: null,
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
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'les',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'l\'',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'les',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
      },
      {
        index: 2,
        answer: 'les',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'les',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'les',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
      },
      {
        index: 2,
        answer: 'l\'',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'le',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'les',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'une',
        gender: 'f',
      },
      {
        index: 2,
        answer: 'la',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'les',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'une',
        gender: 'f',
      },
      {
        index: 2,
        answer: 'les',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
      },
      {
        index: 2,
        answer: 'le',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'la',
        gender: 'f',
      },
      {
        index: 2,
        answer: 'des',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
      },
      {
        index: 2,
        answer: 'les',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'd\'',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
      },
      {
        index: 2,
        answer: 'les',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'd\'',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'l\'',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'd\'',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'd\'',
        gender: 'f',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'd\'',
        gender: 'f',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
      },
      {
        index: 4,
        answer: 'de',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
      },
      {
        index: 3,
        answer: 'd\'',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'd\'',
        gender: 'f',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
      },
      {
        index: 3,
        answer: 'd\'',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'd\'',
        gender: 'm',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
      },
      {
        index: 3,
        answer: 'd\'',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'd\'',
        gender: 'f',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
      },
      {
        index: 3,
        answer: 'd\'',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'un',
        gender: 'm',
      },
      {
        index: 2,
        answer: 'de',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
      },
      {
        index: 2,
        answer: 'un',
        gender: 'm',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'f',
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
      },
      {
        index: 1,
        answer: 'une',
        gender: 'f',
      },
      {
        index: 2,
        answer: 'de',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'f',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
      },
      {
        index: 3,
        answer: 'd\'',
        gender: 'm',
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
      },
      {
        index: 1,
        answer: 'de',
        gender: 'm',
      },
      {
        index: 2,
        answer: 'une',
        gender: 'f',
      },
      {
        index: 3,
        answer: 'de',
        gender: 'm',
      },
    ],
  },
]

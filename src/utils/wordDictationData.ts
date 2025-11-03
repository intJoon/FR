export interface WordDictationSentence {
  text: string
  blanks: Array<{ start: number; end: number; answers: string[] }>
}

const wordPool = [
  'un voisin',
  'une voisine',
  'regarder',
  'déménager',
  'rue de Rennes',
  'un deux-pièces',
  'un trois-pièces',
  'un séjour',
  'une chambre',
  'une cuisine',
  'une salle de bains',
  'le plan de l\'appartement',
  '80 mètres carrés',
  'un arrondissement',
  'un quartier',
  'un immeuble',
  'un étage',
  'quatrième',
  'cinquième',
  'sixième',
  'pour',
  'neuf',
  'neuve',
  'un petit trois-pièces',
  'un beau cinq-pièces',
  'Ah non, c\'est trop cher',
  'pour moi',
  'loin',
  'grand',
  'un employé',
  'Une employée',
  'sympathique',
  'vivant',
  'vivante',
  'ancien',
  'ancienne',
  'un ascenseur',
  'clair',
  'claire',
  'un jardin',
  'pour le quartier',
  'haut',
  'haute',
  'vous désirez',
  'Attendez',
  'Ah voilà',
  'un quartier vivant',
  'animé',
]

interface SentenceTemplate {
  template: string
  answers: string[]
  wordUsed?: string
}

const baseTemplates: SentenceTemplate[] = [
  { template: 'Je cherche ___ dans ce quartier.', answers: ['un appartement'], wordUsed: 'appartement' },
  { template: 'Il veut ___ un appartement près de la station de métro.', answers: ['regarder'], wordUsed: 'regarder' },
  { template: 'Elle habite ___ depuis cinq ans.', answers: ['rue de Rennes'], wordUsed: 'rue de Rennes' },
  { template: 'Nous regardons ___ avec deux chambres.', answers: ['un appartement'], wordUsed: 'appartement' },
  { template: "C'est ___ mais très bien situé.", answers: ['loin'], wordUsed: 'loin' },
  { template: '___ est au quatrième étage sans ascenseur.', answers: ['L\'appartement'], wordUsed: 'appartement' },
  { template: 'Je préfère ___ avec un jardin.', answers: ['un appartement'], wordUsed: 'appartement' },
  { template: "___ est très ___ et proche de tout.", answers: ['Le quartier', 'vivant'], wordUsed: 'quartier' },
  { template: 'Il y a ___ dans cet immeuble.', answers: ['un ascenseur'], wordUsed: 'un ascenseur' },
  { template: "L'appartement fait ___ mètres carrés.", answers: ['80'], wordUsed: '80' },
  { template: 'Nous habitons au ___ étage.', answers: ['quatrième'], wordUsed: 'quatrième' },
  { template: 'Le quartier est très ___.', answers: ['sympathique'], wordUsed: 'sympathique' },
  { template: 'Cet ___ me plaît beaucoup.', answers: ['appartement'], wordUsed: 'appartement' },
  { template: 'Il cherche ___ pour son déménagement.', answers: ['un deux-pièces'], wordUsed: 'un deux-pièces' },
  { template: 'La chambre est ___ et ___.', answers: ['claire', 'grande'], wordUsed: 'claire' },
  { template: "C'est ___ cher pour moi.", answers: ['trop'], wordUsed: 'trop' },
  { template: '___ est très animé.', answers: ['Ce quartier'], wordUsed: 'quartier' },
  { template: "J'aimerais voir ___ s'il vous plaît.", answers: ['le plan de l\'appartement'], wordUsed: 'le plan de l\'appartement' },
  { template: 'Il y a ___ et ___.', answers: ['une cuisine', 'une salle de bains'], wordUsed: 'une cuisine' },
  { template: "L'immeuble est ___ et moderne.", answers: ['neuf'], wordUsed: 'neuf' },
]

const generateTemplatesFromWordPool = (): SentenceTemplate[] => {
  const templates: SentenceTemplate[] = []
  const wordUsageCount: Record<string, number> = {}
  
  const getWordFromPhrase = (phrase: string): string => {
    const match = phrase.match(/^(un |une |le |la |l'|Une )?(.+)$/i)
    return match ? match[2].toLowerCase() : phrase.toLowerCase()
  }

  const templatesConfig = [
    { pattern: /^(un |une |le |la |l')?voisin(e)?$/i, templates: [
      { template: 'Mon ___ habite à côté.', answer: 'voisin' },
      { template: 'La ___ est très gentille.', answer: 'voisine' },
    ]},
    { pattern: /^déménager$/i, templates: [
      { template: 'Ils vont ___ dans deux semaines.', answer: 'déménager' },
    ]},
    { pattern: /^un deux-pièces$/i, templates: [
      { template: 'Je cherche ___ pour moi seul.', answer: 'un deux-pièces' },
    ]},
    { pattern: /^un trois-pièces$/i, templates: [
      { template: 'Nous avons besoin de ___.', answer: 'un trois-pièces' },
    ]},
    { pattern: /^un séjour$/i, templates: [
      { template: 'Le ___ est très spacieux.', answer: 'un séjour' },
    ]},
    { pattern: /^une chambre$/i, templates: [
      { template: 'Il y a trois ___ dans l\'appartement.', answer: 'chambres' },
      { template: 'La ___ donne sur la rue.', answer: 'chambre' },
    ]},
    { pattern: /^une cuisine$/i, templates: [
      { template: 'La ___ est équipée.', answer: 'cuisine' },
    ]},
    { pattern: /^une salle de bains$/i, templates: [
      { template: 'Il y a deux ___ dans cet appartement.', answer: 'salles de bains' },
    ]},
    { pattern: /^un arrondissement$/i, templates: [
      { template: 'Dans quel ___ habitez-vous?', answer: 'arrondissement' },
    ]},
    { pattern: /^un immeuble$/i, templates: [
      { template: 'Cet ___ est très ancien.', answer: 'immeuble' },
    ]},
    { pattern: /^un étage$/i, templates: [
      { template: 'Nous habitons au troisième ___.', answer: 'étage' },
    ]},
    { pattern: /^cinquième$/i, templates: [
      { template: 'Nous habitons au ___ étage.', answer: 'cinquième' },
    ]},
    { pattern: /^sixième$/i, templates: [
      { template: 'L\'appartement est au ___ étage.', answer: 'sixième' },
    ]},
    { pattern: /^pour$/i, templates: [
      { template: 'C\'est ___ combien?', answer: 'pour' },
    ]},
    { pattern: /^neuve$/i, templates: [
      { template: 'La maison est toute ___.', answer: 'neuve' },
    ]},
    { pattern: /^un petit trois-pièces$/i, templates: [
      { template: 'Il cherche ___.', answer: 'un petit trois-pièces' },
    ]},
    { pattern: /^un beau cinq-pièces$/i, templates: [
      { template: 'C\'est ___ magnifique.', answer: 'un beau cinq-pièces' },
    ]},
    { pattern: /^Ah non, c'est trop cher$/i, templates: [
      { template: '___.', answer: 'Ah non, c\'est trop cher' },
    ]},
    { pattern: /^pour moi$/i, templates: [
      { template: 'C\'est trop cher ___.', answer: 'pour moi' },
    ]},
    { pattern: /^grand$/i, templates: [
      { template: 'L\'appartement est très ___.', answer: 'grand' },
    ]},
    { pattern: /^un employé$/i, templates: [
      { template: 'Le ___ de l\'agence est très professionnel.', answer: 'employé' },
    ]},
    { pattern: /^Une employée$/i, templates: [
      { template: '___ vous aidera à trouver un logement.', answer: 'L\'employée' },
    ]},
    { pattern: /^vivant$/i, templates: [
      { template: 'Le quartier est très ___.', answer: 'vivant' },
    ]},
    { pattern: /^vivante$/i, templates: [
      { template: 'La rue est très ___.', answer: 'vivante' },
    ]},
    { pattern: /^ancien$/i, templates: [
      { template: 'L\'immeuble est ___ mais bien entretenu.', answer: 'ancien' },
    ]},
    { pattern: /^ancienne$/i, templates: [
      { template: 'La maison est ___ mais charmante.', answer: 'ancienne' },
    ]},
    { pattern: /^clair$/i, templates: [
      { template: 'L\'appartement est très ___.', answer: 'clair' },
    ]},
    { pattern: /^un jardin$/i, templates: [
      { template: 'Il y a ___ à l\'arrière.', answer: 'un jardin' },
    ]},
    { pattern: /^pour le quartier$/i, templates: [
      { template: 'C\'est calme ___.', answer: 'pour le quartier' },
    ]},
    { pattern: /^haut$/i, templates: [
      { template: 'L\'immeuble est très ___.', answer: 'haut' },
    ]},
    { pattern: /^haute$/i, templates: [
      { template: 'La tour est très ___.', answer: 'haute' },
    ]},
    { pattern: /^vous désirez$/i, templates: [
      { template: 'Que ___?', answer: 'vous désirez' },
    ]},
    { pattern: /^Attendez$/i, templates: [
      { template: '___, je vais vérifier.', answer: 'Attendez' },
    ]},
    { pattern: /^Ah voilà$/i, templates: [
      { template: '___, c\'est parfait!', answer: 'Ah voilà' },
    ]},
    { pattern: /^un quartier vivant$/i, templates: [
      { template: 'C\'est ___.', answer: 'un quartier vivant' },
    ]},
    { pattern: /^animé$/i, templates: [
      { template: 'Le quartier est très ___.', answer: 'animé' },
    ]},
  ]

  for (const word of wordPool) {
    const baseWord = getWordFromPhrase(word)
    const count = wordUsageCount[baseWord] || 0
    
    if (count >= 2) continue

    for (const config of templatesConfig) {
      if (config.pattern.test(word)) {
        for (const tpl of config.templates) {
          if (count < 2) {
            templates.push({
              template: tpl.template,
              answers: [tpl.answer],
              wordUsed: baseWord,
            })
            wordUsageCount[baseWord] = (wordUsageCount[baseWord] || 0) + 1
            break
          }
        }
        break
      }
    }
  }

  return templates
}

export const generateWordDictationSentence = (): WordDictationSentence => {
  const allTemplates = [...baseTemplates, ...generateTemplatesFromWordPool()]
  
  const template = allTemplates[Math.floor(Math.random() * allTemplates.length)]
  const sentence = template.template
  const blanks: Array<{ start: number; end: number; answers: string[] }> = []

  const placeholder = '___'
  let currentIndex = 0
  let blankCount = 0

  while (true) {
    const blankIndex = sentence.indexOf(placeholder, currentIndex)
    if (blankIndex === -1) break

    const answer = template.answers[blankCount] || template.answers[0]
    
    blanks.push({
      start: blankIndex,
      end: blankIndex + placeholder.length,
      answers: [answer],
    })

    currentIndex = blankIndex + 1
    blankCount++
  }

  return { text: sentence, blanks }
}

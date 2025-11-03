// 프랑스어 단어의 성별 정보
export const wordGender: Record<string, 'm' | 'f' | 'm/f'> = {
  // 명사들
  montagne: 'f',
  mer: 'f',
  chocolat: 'm',
  gâteau: 'm',
  musique: 'f',
  opéra: 'm',
  lecture: 'f',
  cinéma: 'm',
  nature: 'f',
  animaux: 'm',
  plage: 'f',
  danse: 'f',
  théâtre: 'm',
  voyage: 'm',
  aventure: 'f',
  vin: 'm',
  rouge: 'm',
  blanc: 'm',
  française: 'f',
  voiture: 'f',
  moto: 'f',
  amis: 'm',
  ville: 'f',
  solution: 'f',
  argent: 'm',
  temps: 'm',
  classe: 'f',
  idée: 'f',
  choix: 'm',
  viande: 'f',
  farine: 'f',
  œufs: 'm',
  riz: 'm',
  pâtes: 'f',
  croissants: 'm',
  salade: 'f',
  soupe: 'f',
  beurre: 'm',
  confiture: 'f',
  fruits: 'm',
  sel: 'm',
  poivre: 'm',
  plat: 'm',
  famille: 'f',
  magazine: 'm',
  travail: 'm',
  logement: 'm',
  table: 'f',
  fleurs: 'f',
  cadeau: 'm',
  oiseau: 'm',
  arbre: 'm',
  chapeau: 'm',
  robe: 'f',
  fille: 'f',
  garçon: 'm',
  château: 'm',
  maisons: 'f',
  vacances: 'f',
  violon: 'm',
  flûte: 'f',
  tennis: 'm',
  natation: 'f',
  batterie: 'f',
  saxophone: 'm',
  football: 'm',
  basketball: 'm',
  harpe: 'f',
  yoga: 'm',
  accordéon: 'm',
  jogging: 'm',
  course: 'f',
  clarinette: 'f',
  violoncelle: 'm',
  musculation: 'f',
  trompette: 'f',
  équitation: 'f',
  studio: 'm',
  terrain: 'm',
  campagne: 'f',
  lacs: 'm',
  glaciers: 'm',
  lumière: 'f',
  matin: 'm',
  horizon: 'm',
  prairies: 'f',
  printemps: 'm',
  cascades: 'f',
  sentiers: 'm',
  appartement: 'm',
  'centre-ville': 'm',
  pain: 'm',
  lait: 'm',
  eau: 'f',
  fromage: 'm',
  piano: 'm',
  guitare: 'f',
  sport: 'm',
  soleil: 'm',
  vallée: 'f',
  marché: 'm',
  légumes: 'm',
  maison: 'f',
  jardin: 'm',
  chaises: 'f',
  pomme: 'f',
  café: 'm',
  étudiants: 'm',
  professeur: 'm',
  problème: 'm',
  ordinateur: 'm',
  thé: 'm',
  journée: 'f',
  ciel: 'm',
  froid: 'm',
  chien: 'm',
  chat: 'm',
  enfants: 'm',
  parc: 'm',
  montagnes: 'f',
  neige: 'f',
  sommets: 'm',
  paysage: 'm',
  beauté: 'f',
  rivière: 'f',
  rochers: 'm',
  forêt: 'f',
  chaise: 'f',
  alpes: 'f',
}

// 성별 정보를 가져오는 함수
export const getWordGender = (word: string): 'm' | 'f' | 'm/f' | null => {
  let cleanWord = word.replace(/[.,!?;:']/g, '').toLowerCase().trim()
  
  if (!cleanWord) return null
  
  // 직접 찾기
  let gender = wordGender[cleanWord]
  if (gender) return gender
  
  // 복수형 처리 (예: montagnes -> montagne)
  if (cleanWord.endsWith('s') && cleanWord.length > 1) {
    const singular = cleanWord.slice(0, -1)
    gender = wordGender[singular]
    if (gender) return gender
  }
  
  // 복수형 처리 (-es로 끝나는 경우)
  if (cleanWord.endsWith('es') && cleanWord.length > 2) {
    const singular = cleanWord.slice(0, -2)
    gender = wordGender[singular]
    if (gender) return gender
  }
  
  // 일반적인 패턴으로 추론
  // -tion, -sion, -ure, -ade, -ée, -ie, -esse, -euse, -ance, -ence로 끝나면 여성형일 가능성이 높음
  if (cleanWord.endsWith('tion') || cleanWord.endsWith('sion') || 
      cleanWord.endsWith('ure') || cleanWord.endsWith('ade') || 
      cleanWord.endsWith('ée') || cleanWord.endsWith('ie') || 
      cleanWord.endsWith('esse') || cleanWord.endsWith('euse') ||
      cleanWord.endsWith('ance') || cleanWord.endsWith('ence')) {
    return 'f'
  }
  
  // -age, -ment, -isme, -eau, -eur로 끝나면 남성형일 가능성이 높음
  if (cleanWord.endsWith('age') || cleanWord.endsWith('ment') || 
      cleanWord.endsWith('isme') || cleanWord.endsWith('eau') || 
      cleanWord.endsWith('eur')) {
    return 'm'
  }
  
  return null
}


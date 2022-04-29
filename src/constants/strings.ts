export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!
export const GAME_URL = 'https://keclap.xyz'

export const WIN_MESSAGES = [
  'E& Q2!',
  'Sae pisan!',
  'Hade!',
  'Wilujeng!',
  'Salamet keneh',
  'Ampir-ampiran',
]
export const GAME_COPIED_MESSAGE = 'Keclap tos disalin ka clipboard'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Hurupna kirang'
export const WORD_NOT_FOUND_MESSAGE = 'Teu aya kecap eta'
export const HARD_MODE_ALERT_MESSAGE =
  'Mode Hese ngan bisa dihurungkeun pas gamena ngamimitian keneh!'
export const HARD_MODE_DESCRIPTION =
  'Kabeh hurup anu geus katebak kudu dipake deui dina tebakan anu saterusna'
export const HIGH_CONTRAST_MODE_DESCRIPTION =
  'Keur anu titingalianna rada burem'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Kecap jawabanna nyaeta ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Kedah nganggo ${guess} dina posisi ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Tebakan kedah ngandung ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Mupus'
export const STATISTICS_TITLE = 'Statistik'
export const GUESS_DISTRIBUTION_TEXT = 'Distribusi nebak'
export const NEW_WORD_TEXT = 'Kecap anyar deui dina'
export const SHARE_TEXT = 'Bagikeun'
export const SHARE_TWITTER_TEXT = 'Tweet'
export const TOTAL_TRIES_TEXT = 'Dipaenkeun'
export const SUCCESS_RATE_TEXT = '% meunang'
export const CURRENT_STREAK_TEXT = 'Runtuyan ayeuna'
export const BEST_STREAK_TEXT = 'Runtuyan maksimal'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  'Akang-teteh.. Asa mending ulah make browser ti Twitter atanapi di lebet aplikasi sanes. Mending keneh nganggo browser ti hape na langsung. Supados permainan Keclap akang-teteh tiasa kasimpen janten langkung merenah kapayunna.'

export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!
export const GAME_URL = 'https://keclap.xyz'

export const WIN_MESSAGES = ['Sae pisan!', 'Hade!', 'Wilujeng!']
export const GAME_COPIED_MESSAGE = 'Keclap tos disalin ka clipboard'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Hurupna kirang'
export const WORD_NOT_FOUND_MESSAGE = 'Teu aya kecap eta'
export const HARD_MODE_ALERT_MESSAGE =
  'Mode Hese ngan bisa dihurungkeun pas gamena ngamimitian keneh!'
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
export const TOTAL_TRIES_TEXT = 'Dipaenkeun'
export const SUCCESS_RATE_TEXT = '% meunang'
export const CURRENT_STREAK_TEXT = 'Streak ayeuna'
export const BEST_STREAK_TEXT = 'Streak maksimal'

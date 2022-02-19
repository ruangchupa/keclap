import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'
import { GAME_TITLE, GAME_URL } from '../constants/strings'
import { getStoredIsHighContrastMode } from './localStorage'
import { MAX_CHALLENGES } from '../constants/settings'

export const shareStatus = (
  guesses: string[],
  lost: boolean,
  isHardMode: boolean
) => {
  navigator.clipboard.writeText(
    `${GAME_TITLE} ${solutionIndex} ${
      lost ? 'X' : guesses.length
    }/${MAX_CHALLENGES}${isHardMode ? '*' : ''}\n\n` +
      generateEmojiGrid(guesses) + `\n\n${GAME_URL}`
  )
}

export const shareTwitter = (
  guesses: string[],
  lost: boolean,
  isHardMode: boolean
) => {
  const text = `${GAME_TITLE} ${solutionIndex} ${
                lost ? 'X' : guesses.length
                }/${MAX_CHALLENGES}${isHardMode ? '*' : ''}\n\n` +
                generateEmojiGrid(guesses) + `\n\n${GAME_URL}`;
  const encodeURI = text.replace(/\n/g, "%0A");
  const shareToTwitter = `https://twitter.com/intent/tweet?text=${encodeURI}`;
  window.open(shareToTwitter, "_blank");
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      const isHighContrast = getStoredIsHighContrastMode()
      return guess
        .split('')
        .map((_, i) => {
          switch (status[i]) {
            case 'correct':
              if (isHighContrast) {
                return '🟧'
              }
              return '🟩'
            case 'present':
              if (isHighContrast) {
                return '🟦'
              }
              return '🟨'
            default:
              if (localStorage.getItem('theme') === 'dark') {
                return '⬛'
              }
              return '⬜'
          }
        })
        .join('')
    })
    .join('\n')
}

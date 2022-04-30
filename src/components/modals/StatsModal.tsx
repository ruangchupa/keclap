import Countdown from 'react-countdown'
import { StatBar } from '../stats/StatBar'
import { Histogram } from '../stats/Histogram'
import { GameStats } from '../../lib/localStorage'
import { shareStatus, shareTwitter } from '../../lib/share'
import { definition, tomorrow } from '../../lib/words'
import { BaseModal } from './BaseModal'
import {
  STATISTICS_TITLE,
  GUESS_DISTRIBUTION_TEXT,
  NEW_WORD_TEXT,
  SHARE_TEXT,
  SHARE_TWITTER_TEXT,
} from '../../constants/strings'

type Props = {
  isOpen: boolean
  handleClose: () => void
  solution: string
  guesses: string[]
  gameStats: GameStats
  isGameLost: boolean
  isGameWon: boolean
  handleShareToClipboard: () => void
  isHardMode: boolean
  isDarkMode: boolean
  isHighContrastMode: boolean
  numberOfGuessesMade: number
}

export const StatsModal = ({
  isOpen,
  handleClose,
  solution,
  guesses,
  gameStats,
  isGameLost,
  isGameWon,
  handleShareToClipboard,
  isHardMode,
  isDarkMode,
  isHighContrastMode,
  numberOfGuessesMade,
}: Props) => {
  if (gameStats.totalGames <= 0) {
    return (
      <BaseModal
        title={STATISTICS_TITLE}
        isOpen={isOpen}
        handleClose={handleClose}
      >
        <StatBar gameStats={gameStats} />
      </BaseModal>
    )
  }
  let kamusSundaURL =
    'https://www.kamussunda.net/kamus?teks=' +
    solution +
    '&bahasa=bahasa&submit=LIHAT+HASIL+TERJEMAHAN'
  return (
    <BaseModal
      title={STATISTICS_TITLE}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <StatBar gameStats={gameStats} />
      <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
        {GUESS_DISTRIBUTION_TEXT}
      </h4>
      <Histogram
        gameStats={gameStats}
        isGameWon={isGameWon}
        numberOfGuessesMade={numberOfGuessesMade}
      />
      {(isGameLost || isGameWon) && (
        <div>
          <div>
            <h5 className="text-sm leading-6 font-medium text-gray-400 dark:text-gray-400">
              Keclap poe ieu:
            </h5>
            <p className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
              {solution}
            </p>
            <p className="text-sm mt-1 font-medium text-gray-400 dark:text-gray-400">
              Hartos dina Bahasa Indonesiana:
            </p>
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
              <i>{definition}</i>
            </p>
            <p className="text-xs font-medium text-gray-400 dark:text-gray-400">
              Sumber:{' '}
              <a href={kamusSundaURL} target="_blank" rel="noreferrer">
                https://www.kamussunda.net/
              </a>
            </p>
          </div>
          <div className="mt-5 sm:mt-6 columns-2 dark:text-white">
            <div>
              <h5>{NEW_WORD_TEXT}</h5>
              <Countdown
                className="text-lg font-medium text-gray-900 dark:text-gray-100"
                date={tomorrow}
                daysInHours={true}
              />
            </div>
            <button
              type="button"
              className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
              onClick={() => {
                shareStatus(
                  solution,
                  guesses,
                  isGameLost,
                  isHardMode,
                  isDarkMode,
                  isHighContrastMode,
                  handleShareToClipboard
                )
              }}
            >
              {SHARE_TEXT}
            </button>
            <button
              type="button"
              className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-cyan-300 text-base font-medium text-white hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-200 sm:text-sm"
              onClick={() => {
                shareTwitter(
                  solution,
                  guesses,
                  isGameLost,
                  isHardMode,
                  isDarkMode,
                  isHighContrastMode
                )
              }}
            >
              {SHARE_TWITTER_TEXT}
            </button>
          </div>
        </div>
      )}
    </BaseModal>
  )
}

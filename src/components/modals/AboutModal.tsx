import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Diciptakeun di Padalarang - Bandung Barat. Nyandak tina proyek {' '}
        <a
          href="https://github.com/hannahcode/GAME"
          className="underline font-bold"
        >
          open source.
        </a>{' '}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Daptar kecap ku Muhammad Taupiq.<br/>
        Domain .com sumbangan ti Fata El Islami.<br/>
        Dites ku kabeh member grup WhatsApp Gen ARHAS.
      </p>
    </BaseModal>
  )
}

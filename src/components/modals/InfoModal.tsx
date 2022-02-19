import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Cara maen" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Tebak kecap dina 6 kali kasempetan. Unggal saanggeus nebak, warna kotak hurup bakal
        hurung ningalikeun hasil tebakan didinya.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell 
          isRevealing={true}
          isCompleted={true}
          value="H" 
          status="correct" />
        <Cell value="I" />
        <Cell value="R" />
        <Cell value="U"/>
        <Cell value="P" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Hurup H aya dina kecap jawaban, jeung geus bener posisina.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="M" />
        <Cell value="A" />
        <Cell 
          isRevealing={true}
          isCompleted={true}
          value="N" 
          status="present" />
        <Cell value="E" />
        <Cell value="H" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Hurup N geus bener, ngan posisina salah.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="W" />
        <Cell value="A" />
        <Cell value="T" />
        <Cell 
          isRevealing={true} 
          isCompleted={true}
          value="I" 
          status="absent" />
        <Cell value="R" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Hurup I euweuh dina kecap jawaban.
      </p>
      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Diciptakeun di Padalarang - Bandung Barat. Nyandak tina proyek {' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          open source.
        </a>{' '}
      </p>
      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Daptar kecap ku Muhammad Taupiq.<br/>
        Domain .com sumbangan ti Fata El Islami.<br/>
        Dites ku kabeh member grup WhatsApp Gen ARHAS.
      </p>
    </BaseModal>
  )
}

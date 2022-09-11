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
        Tebak kecap dina 6 kali kasempetan. Unggal saanggeus nebak, warna kotak
        hurup bakal hurung ningalikeun hasil tebakan didinya.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="H"
          status="correct"
        />
        <Cell value="I" isCompleted={true}/>
        <Cell value="R" isCompleted={true}/>
        <Cell value="U" isCompleted={true}/>
        <Cell value="P" isCompleted={true}/>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Hurup H aya dina kecap jawaban, jeung geus bener posisina.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="M" isCompleted={true}/>
        <Cell value="A" isCompleted={true}/>
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="N"
          status="present"
        />
        <Cell value="E" isCompleted={true}/>
        <Cell value="H" isCompleted={true}/>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Hurup N geus bener, ngan posisina salah.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="W" isCompleted={true}/>
        <Cell value="A" isCompleted={true}/>
        <Cell value="T" isCompleted={true}/>
        <Cell isRevealing={true} isCompleted={true} value="I" status="absent" />
        <Cell value="R" isCompleted={true}/>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Hurup I euweuh dina kecap jawaban.
      </p>
      <p className="mt-6 text-sm italic text-gray-500 dark:text-gray-300">
        Diciptakeun di Padalarang - Bandung Barat. Nyandak tina proyek{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          target="_blank" 
          rel="noopener noreferrer"
          className="font-bold underline"
        >
          open source.
        </a>{' '}
      </p>
      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Daptar kecap ku Muhammad Taupiq.
        <br />
        Domain .com sumbangan ti Fata El Islami.
        <br />
        Dites ku kabeh member grup WhatsApp Gen ARHAS.
      </p>
    </BaseModal>
  )
}

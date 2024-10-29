// lib
import { App } from '@/lib/constants/texts'

export default function Copyright() {

  return (
    <div>
      <p className='text-menuTextLight text-sm w-full text-center'>&copy;{' '}{App.NAME}{', '}{App.SUBNAME} 2024</p>
    </div>
  )
}
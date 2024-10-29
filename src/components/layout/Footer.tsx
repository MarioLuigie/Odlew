import Logo from '@/components/content/Logo'
import Navbar from './menu/Navbar'

export default function Footer() {

  return (
    <footer className="flex flex-col items-center justify-center bg-footer text-white p-4">
      <Logo variant='mono' />
      <Navbar />
    </footer>
  )
}
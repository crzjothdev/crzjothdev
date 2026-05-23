import Social from '../Social/Social'
import Disclaimers from '../Disclaimers/Disclaimers'

export default function Footer() {
  return (
    <footer className="bg-footer-dark text-white px-6 py-8 md:px-16 md:py-20 flex items-center">
      <Disclaimers />
      <Social />
    </footer>
  )
}

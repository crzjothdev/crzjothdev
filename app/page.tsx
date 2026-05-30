import AppBar from '../components/AppBar/AppBar'
import Parallax from '../components/Parallax/Parallax'
import Section from '../components/Section/Section'
import Aboutme from '../components/Aboutme/Aboutme'
import Experience from '../components/Experience/Experience'
import SkilledTools from '../components/SkilledTools/SkilledTools'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import FadeIn from '../components/FadeIn/FadeIn'

const pages = [
  { label: 'About Me', target: 'about-me' },
  { label: 'Experience', target: 'experience' },
  { label: 'Skills', target: 'skilled-tools' },
  { label: 'Projects', target: 'projects' },
  { label: 'Contact', target: 'contact' },
]

export default function Home() {
  return (
    <>
      <AppBar pages={pages} />
      <main>
        <Parallax />
        <div className="md:w-[70%] lg:w-[60%] mx-auto">
          <FadeIn><Section><Aboutme /></Section></FadeIn>
          <FadeIn><Section><Experience /></Section></FadeIn>
          <FadeIn><Section><SkilledTools /></Section></FadeIn>
          <FadeIn><Section><Projects /></Section></FadeIn>
          <FadeIn><Section><Contact /></Section></FadeIn>
        </div>
      </main>
      <Footer />
    </>
  )
}

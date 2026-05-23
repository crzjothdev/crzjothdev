import AppBar from '../components/AppBar/AppBar'
import Parallax from '../components/Parallax/Parallax'
import Section from '../components/Section/Section'
import Aboutme from '../components/Aboutme/Aboutme'
import Experience from '../components/Experience/Experience'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const pages = [
  { label: 'About Me', target: 'about-me' },
  { label: 'Experience', target: 'experience' },
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
          <Section><Aboutme /></Section>
          <Section><Experience /></Section>
          <Section><Projects /></Section>
          <Section><Contact /></Section>
        </div>
      </main>
      <Footer />
    </>
  )
}

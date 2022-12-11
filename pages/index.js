import React from 'react'
import Head from 'next/head'
import Box from '@mui/material/Box'

import AppBar from '../components/AppBar'
import Parallax from '../components/Parallax'
import Section from '../components/Section'
import Aboutme from '../components/Aboutme'
import Experience from '../components/Experience'
import Testimonials from '../components/Testimonials'
import Customers from '../components/Customers'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import SquiledTools from '../components/SkilledTools'

const pages = [
  { label: 'About Me', target: 'about-me' },
  { label: 'Experience', target: 'experience' },
  // { label: 'SquiledTools', target: '#tools' },
  // { label: 'Customers', target: '#customers' },
  // { label: 'Projects', target: '#projects' },
  // { label: 'Testimonials', target: 'testimonials' },
  { label: 'Contact', target: 'contact' }
]

export default function App() {

  const handleNavigate = (page) => {
    document.getElementById(page.target).scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Head>
        <title>Angelo Cruz - Software Developer</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>
      <AppBar pages={pages} onNavigateClick={handleNavigate} />
      <main>
          <Parallax />
          <Box
            sx={(theme) => ({
              [theme.breakpoints.up('md')]: {
                width: '70%',
                margin: '0 auto'
              },
              [theme.breakpoints.up('lg')]: {
                width: '60%',
                margin: '0 auto'
              }
            })}
            >
            <Section>
              <Aboutme />
            </Section>
            <Section
            >
              <Experience />
            </Section>
            {/* <Section>
              <SquiledTools />
            </Section>
            <Section>
              <Customers />
            </Section> */}
            {/* <Section>
              <Projects />
            </Section> */}
            {/* <Section
            >
              <Testimonials />
            </Section> */}
            <Section>
              <Contact />
            </Section>
          </Box>
      </main>
      <Footer />
    </>
  )
}
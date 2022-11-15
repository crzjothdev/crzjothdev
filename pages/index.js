import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import TextField from '@mui/material/TextField'
import makeStyles from '@mui/styles/makeStyles'
import useMediaQuery from '@mui/material/useMediaQuery'
import useTheme from '@mui/styles/useTheme' 

import AppBar from '../components/AppBar'
import Article from '../components/Article'
import Social from '../components/Social'
import Disclaimers from '../components/Disclaimers'
import Contact from '../components/Contact'

const pages = ['About Me', 'Projects', 'Contact']

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    width: '100%',
    overflow: 'hidden',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url('/back.png')`,
    backgroundSize: 'cover',
    flexDirection: 'column'
  },
  footer: {
    display: 'flex',
    backgroundColor: '#343439',
  },
  disclaimers: {
    flexGrow: 1,
  },
  social: {
    display: 'flex'
  },
  contact: {
    padding: theme.spacing(8, 0),
    backgroundColor: '#496a78'
  },
  me: {
    padding: theme.spacing(8, 0)
  }
}))

export default function App() {
  const classes = useStyles()
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

  const [email, setEmail] = React.useState('')

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <>
      <AppBar pages={pages} />
      <main>
        <div className={classes.root}>
          <Typography variant="h2" color="white">Angelo Cruz</Typography>
          <Typography variant="h4" color="white">Software Developer</Typography>
        </div>
        <div className={classes.me}>
          <Container>
            <div>
              <div></div>
              <div>
                <Typography>
                  Este es el texto sobre mi que debe aparecer en cualquier lado
                </Typography>
              </div>
            </div>
          </Container>
        </div>
        <Container style={{ marginBottom: '50px' }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Article
                title="Web"
                text="Tu puedes diseñar lo que tu quieras haciendo mejor las cosas"
                elevation={0}
              />
            </Grid>
            <Grid item xs={12}>
              <Article
                title="Mobile"
                text="Tu puedes diseñar lo que tu quieras haciendo mejor las cosas"
                elevation={0}
              />
            </Grid>
            <Grid item xs={12}>
              <Article
                title="Database Management"
                text="Tu puedes diseñar lo que tu quieras haciendo mejor las cosas"
                elevation={0}
              />
            </Grid>
          </Grid>
        </Container>
        <div className={classes.contact}>
          <Container>
            <Contact />
          </Container>
        </div>
      </main>
      <footer>
        <div
          className={classes.footer}
          style={{ padding: `${isDesktop ? '60px 40px' : '40px 20px'}`}}
        >
          <Disclaimers className={classes.disclaimers} />
          <Social />
        </div>
      </footer>
    </>
  )
}
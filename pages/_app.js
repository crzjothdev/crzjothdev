import React from 'react'
import Script from 'next/script'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import TagManager from 'react-gtm-module'

import createEmotionCache from '../utility/createEmotionCache'
import lightTheme from '../styles/theme/lightTheme'
import darkTheme from '../styles/theme/darkTheme'

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  React.useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-N3H9T76' })
  }, [])

  return (
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
  )
}

export default MyApp

import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import { ThemeProvider } from '@mui/material/styles'

import theme from './common/cremaTheme'

import Event from './views/Event'

const AppContainer = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container maxWidth='md' disableGutters>
      <Event />
    </Container>
  </ThemeProvider>
)

export default AppContainer

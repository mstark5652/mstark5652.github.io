import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import theme from './common/theme'

import Header from './components/Header'
import Footer from './components/Footer'
import Layout from './components/Layout'
import About from './views/About'
import Current from './views/Current'
import ProjectsView from './views/ProjectsView'

const AppContainer = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    <Layout>
      <About />
      <Current />
      <ProjectsView />
    </Layout>
    <Footer />
  </ThemeProvider>
)

export default AppContainer

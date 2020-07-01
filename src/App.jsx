import React from 'react'
import { ThemeProvider } from '@material-ui/styles'

import theme from './common/theme'

import Header from './components/Header'
import Footer from './components/Footer'
import Layout from './components/Layout'
import ProjectsView from './views/ProjectsView'

const AppContainer = () => (
  <ThemeProvider theme={theme}>
    <Header />
    <Layout>
      <ProjectsView />
    </Layout>
    <Footer />
  </ThemeProvider>
)

export default AppContainer

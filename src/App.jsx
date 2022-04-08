import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import theme from './common/theme'

import Header from './components/Header'
import Footer from './components/Footer'
import Layout from './components/Layout'
import ProjectsView from './views/ProjectsView'
import Event from './views/Event'

const AppContainer = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Routes>
        <Route
          path='/event'
          element={<Event />}
        />
        <Route
          path='*'
          element={(
            <>
              <Header />
              <Layout>
                <ProjectsView />
              </Layout>
              <Footer />
            </>
          )}
        />
      </Routes>
    </Router>
  </ThemeProvider>
)

export default AppContainer

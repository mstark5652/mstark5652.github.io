import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

import Header from './components/Header'
import Footer from './components/Footer'
import Layout from './components/Layout'
import Routes from './routes'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2fabb4' },
    secondary: { main: '#ffffff' }
  }
})

class AppContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  componentDidCatch () {

  }

  componentDidMount () {

  }

  componentWillUnmount () {
  }

  static getDerivedStateFromError (error) {
    console.error('An error occurred.', error)
  }

  render () {
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <Layout>
          <Routes />
        </Layout>
        <Footer />
      </ThemeProvider>
    )
  }
}

export default AppContainer

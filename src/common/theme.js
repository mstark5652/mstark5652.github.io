import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2fabb4' },
    secondary: { main: '#ffffff' }
  },
  typography: {
    fontFamily: [
      'Helvetica',
      'Arial',
      'sans-serif'
    ].join(','),
    fontStyle: 'normal',
    h1: {
      fontSize: '34px',
      fontWeight: 'normal',
      color: '#4a4a4a'
    },
    h2: {
      fontSize: '35px',
      fontWeight: 'bold',
      color: '#4a4a4a'
    },
    h3: {
      fontSize: '30px',
      fontWeight: 'normal',
      color: '#4a4a4a'
    },
    h4: {
      fontSize: '32px',
      fontWeight: 'normal',
      color: '#4a4a4a'
    },
    body1: {
      fontSize: '20px',
      fontWeight: 'lighter',
      color: '#4a4a4a'
    }
  }
})

export default theme

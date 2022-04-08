import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
})

const customTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#EDE645' },
    secondary: { main: '#ffffff' }
  },
  typography: {
    fontFamily: [
      'Karla',
      'Helvetica',
      'Arial',
      'sans-serif'
    ].join(','),
    fontStyle: 'normal',
    h1: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: 'white'
    },
    h2: {
      fontSize: '24px',
      fontWeight: 'normal',
      color: 'white'
    },
    h3: {
      fontSize: '24px',
      fontWeight: 'normal',
      color: 'black'
    },
    h4: {
      fontSize: '20px',
      fontWeight: 'normal',
      color: 'black'
    },
    body1: {
      fontSize: '20px',
      fontWeight: 'lighter',
      color: 'black',
      [theme.breakpoints.down('sm')]: {
        fontSize: '16px'
      }
    }
  }
})

export default responsiveFontSizes(customTheme)

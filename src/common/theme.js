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
    primary: { main: '#005781' },
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
      fontSize: '40px',
      fontWeight: 'bold',
      color: '#ffffff',
      [theme.breakpoints.down('sm')]: {
        fontSize: '30px'
      }
    },
    h2: {
      fontSize: '24px',
      fontWeight: 'normal',
      color: '#ffffff',
      [theme.breakpoints.down('sm')]: {
        fontSize: '28px'
      }
    },
    h3: {
      fontSize: '30px',
      fontWeight: 'normal',
      color: '#4a4a4a',
      [theme.breakpoints.down('sm')]: {
        fontSize: '26px'
      }
    },
    h4: {
      fontSize: '32px',
      fontWeight: 'normal',
      color: '#4a4a4a',
      [theme.breakpoints.down('sm')]: {
        fontSize: '28px'
      }
    },
    subtitle1: {
      fontSize: '22px',
      color: '#4a4a4a',
      [theme.breakpoints.down('sm')]: {
        fontSize: '18px'
      }
    },
    subtitle2: {
      fontSize: '18px',
      color: '#4a4a4a',
      [theme.breakpoints.down('sm')]: {
        fontSize: '16px'
      }
    },
    body1: {
      fontSize: '20px',
      fontWeight: 'lighter',
      color: '#4a4a4a',
      [theme.breakpoints.down('sm')]: {
        fontSize: '16px'
      }
    },
    body2: {
      fontSize: '16px',
      fontWeight: 'lighter',
      color: '#4a4a4a',
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px'
      }
    }
  }
})

export default responsiveFontSizes(customTheme)

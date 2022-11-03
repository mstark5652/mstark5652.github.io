import React from 'react'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import makeStyles from '@mui/styles/makeStyles'

import strings from '../common/strings'

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(4)
  },
  content: {
    textAlign: 'center'
  },
  avatar: {
    '& img': {
      margin: 'auto',
      border: '1px solid transparent',
      borderRadius: '25px',
      width: '200px',
      height: '200px'
    }
  }
}))

const profile = require('../img/me.jpg')

const Header = () => {
  const classes = useStyles()

  return (
    <header className={classes.header}>
      <Container
        maxWidth='lg' disableGutters
      >
        <Grid
          container spacing={1}
          justify='center'
          alignItems='center'
        >
          <Grid
            item xs={12} sm={6}
            className={classes.avatar}
          >
            <CardMedia
              src={profile}
              component='img'
              title='Profile Picture'
            />
          </Grid>
          <Grid
            item xs={12} sm={6}
            className={classes.content}
          >
            <Typography variant='h1' color='secondary'>
              {strings.header.name}
            </Typography>
            <Typography variant='h2' color='secondary'>
              {strings.header.title}
            </Typography>
          </Grid>

        </Grid>
        <br />
      </Container>
    </header>
  )
}

export default Header

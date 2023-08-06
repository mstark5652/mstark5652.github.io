import React from 'react'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import makeStyles from '@mui/styles/makeStyles'

import MailOutlineIcon from '@mui/icons-material/MailOutline'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

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
            <Typography variant='h1' color='secondary' mt={3}>
              {strings.header.name}
            </Typography>
            <Typography variant='h2' color='secondary' mt={3}>
              {strings.header.title}
            </Typography>
            <Box m={2} display="flex" alignItems="center" justifyContent="space-evenly">
              <Button href={strings.footer.github}>
                <GitHubIcon fontSize='large' color='secondary' />
              </Button>
              <Button href={strings.footer.linkedin}>
                <LinkedInIcon fontSize='large' color='secondary' />
              </Button>
              <Button href={strings.footer.email}>
                <MailOutlineIcon fontSize='large' color='secondary' />
              </Button>
            </Box>
          </Grid>

        </Grid>
        <br />
      </Container>
    </header>
  )
}

export default Header

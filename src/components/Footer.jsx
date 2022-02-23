import React from 'react'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import MailOutlineIcon from '@mui/icons-material/MailOutline'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'

import makeStyles from '@mui/styles/makeStyles'

import strings from '../common/strings'

const useStyles = makeStyles(({
  footer: {
    backgroundColor: 'gray',
    textAlign: 'center',
    padding: '25px'
  }
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        spacing={2}
      >
        <Grid item>
          <Button href={strings.footer.github}>
            <GitHubIcon fontSize='large' color='secondary' />
          </Button>
        </Grid>
        <Grid item>
          <Button href={strings.footer.instagram}>
            <InstagramIcon fontSize='large' color='secondary' />
          </Button>
        </Grid>
        <Grid item>
          <Button href={strings.footer.linkedin}>
            <LinkedInIcon fontSize='large' color='secondary' />
          </Button>
        </Grid>
        <Grid item>
          <Button href={strings.footer.email}>
            <MailOutlineIcon fontSize='large' color='secondary' />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography component='p' variant='h5' color='secondary'>
            {strings.footer.title}
          </Typography>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer

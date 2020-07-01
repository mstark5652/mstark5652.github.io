import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'

import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'

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
        justify='center'
        alignItems='center'
        spacing={2}
      >
        <Grid item>
          <Button href='https://github.com/mstark5652'>
            <GitHubIcon fontSize='large' color='secondary' />
          </Button>
        </Grid>
        <Grid item>
          <Button href='https://www.instagram.com/m.stark5652/'>
            <InstagramIcon fontSize='large' color='secondary' />
          </Button>
        </Grid>
        <Grid item>
          <Button href='https://www.linkedin.com/in/michaelstark5652'>
            <LinkedInIcon fontSize='large' color='secondary' />
          </Button>
        </Grid>
        <Grid item>
          <Button href='mailto:mstark5652@gmail.com'>
            <MailOutlineIcon fontSize='large' color='secondary' />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography component='p' variant='h5' color='secondary'>
            Michael Stark
          </Typography>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer

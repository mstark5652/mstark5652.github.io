import React from 'react'
import { Typography, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.primary.main,
    textAlign: 'center',
    padding: 5
  },
  title: {
    marginTop: '5px',
    fontSize: '36px',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: '24px'
  },
  avatar: {
    margin: 'auto',
    marginBottom: '5px',
    width: '100px',
    height: '100px'
  }
}))

const profile = 'build/' + require('../img/me.jpg')

const Header = () => {
  const classes = useStyles()
  return (
    <header className={classes.header}>
      <Typography className={classes.title} component='h1' type='title'>
        Michael Stark
      </Typography>
      <br />
      <Typography className={classes.subtitle} component='h2' type='title'>
        Software Engineer
      </Typography>
      <br />
      <Avatar
        className={classes.avatar}
        src={profile}
        alt='Profile Picture'
        title='Profile Picture'
      />
    </header>
  )
}

export default Header

import React from 'react'
import { Typography, AppBar, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  header: {
    padding: 10
  }
})

const Header = () => {
  const classes = useStyles()
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography className={classes.header}>
          Home
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header

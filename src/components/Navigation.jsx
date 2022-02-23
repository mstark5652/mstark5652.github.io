import React from 'react'
import { Typography, AppBar, Toolbar } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'

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

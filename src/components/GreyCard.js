import React from 'react'
import Box from '@mui/material/Box'

import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  greyBox: {
    padding: props => props.dense ? theme.spacing(3) : theme.spacing(6),
    margin: props => props.dense ? theme.spacing(1) : theme.spacing(3),
    width: props => props.maxWidth ? '100%' : 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    alignItems: props => props.alignItems,
    justifyContent: 'space-evenly',
    backgroundColor: '#e9e7e7',
    border: '1px solid transparent',
    borderRadius: 25,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4),
      margin: theme.spacing(2)
    }
  }
}))

const GreyCard = ({ dense = false, maxWidth = false, alignItems = 'center', children }) => {
  const classes = useStyles({ dense, maxWidth, alignItems })

  return (
    <Box className={classes.greyBox}>
      {children}
    </Box>
  )
}

export default GreyCard

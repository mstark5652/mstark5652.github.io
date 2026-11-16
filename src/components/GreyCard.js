import React from 'react'
import Box from '@mui/material/Box'

const GreyCard = ({ dense = false, maxWidth = false, alignItems = 'center', children }) => {
  return (
    <Box
      sx={theme => ({
        padding: dense ? theme.spacing(3) : theme.spacing(6),
        margin: dense ? theme.spacing(1) : theme.spacing(3),
        width: maxWidth ? '100%' : 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        alignItems,
        justifyContent: 'space-evenly',
        backgroundColor: '#e9e7e7',
        border: '1px solid transparent',
        borderRadius: '25px',
        [theme.breakpoints.down('md')]: {
          padding: theme.spacing(4),
          margin: theme.spacing(2)
        }
      })}
    >
      {children}
    </Box>
  )
}

export default GreyCard

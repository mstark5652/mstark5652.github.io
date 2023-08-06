import React from 'react'

import Typography from '@mui/material/Typography'
import makeStyles from '@mui/styles/makeStyles'

import GreyCard from '../components/GreyCard'
import strings from '../common/strings'

const useStyles = makeStyles(theme => ({
  header: {
    textAlign: 'center',
    margin: theme.spacing(4, 0, 2, 0),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2, 0)
    }
  }
}))

const About = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.header}>
        <Typography variant='h3'>
          {strings.about.title}
        </Typography>
      </div>
      <GreyCard>
        <Typography variant='body1' textAlign='center' component='div'>
          {strings.about.description}
        </Typography>
      </GreyCard>
    </>
  )
}

export default About

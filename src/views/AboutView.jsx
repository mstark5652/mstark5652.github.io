import React from 'react'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  header: {
    textAlign: 'center',
    margin: '5px',
    fontSize: '2rem'
  },
  content: {
    padding: '10px 10%',
    fontSize: '1rem'
  }
}))

const About = () => {
  const classes = useStyles()
  return (
    <>
      <Typography className={classes.header} component='h2'>
        About
      </Typography>
      <Typography className={classes.content} component='h3'>
        Experienced engineer skilled in full stack development, natural language processing, and text classification. With a passion for learning and creating new things.
      </Typography>
    </>
  )
}

export default About

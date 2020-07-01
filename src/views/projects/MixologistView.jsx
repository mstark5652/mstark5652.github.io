import React from 'react'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'

import { makeStyles } from '@material-ui/styles'
import CtaButton from '../../components/CtaButton'

const mixologist = 'build/' + require('../../img/mixologist.jpg')

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0.5, 1)
  },
  media: {
    maxHeight: '500px',
    maxWidth: '500px',
    width: '100%',
    borderRadius: '5px',
    margin: 'auto'
  }
}))

const MixologistView = () => {
  const classes = useStyles()
  return (
    <Grid
      container
      justify='center'
      alignItems='center'
      className={classes.root}
      spacing={2}
    >
      <Grid item xs={12} md={6}>
        <Typography variant='h4'>
          Mixologist - The Robotic Bartender
        </Typography>
        <Typography variant='body1'>
          Mixologist is the world's first voice-powered robotic bartender that uses natural language to take your order and serve your favorite mixed drinks.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardMedia
          className={classes.media}
          src={mixologist}
          component='img'
          title='Mixologist Robotic Bartender'
        />
      </Grid>
      <Grid item xs={12}>
        <CtaButton text='Drink Up' to='https://www.mixologist.ai?cid=mstark' />
        {/* <CtaButton text='Article Post' to='https://www.dimin.com/blog/creative-tech-kc-the-future-will-have-robot-bartenders/' /> */}
        {/* <CtaButton text='Watch a video' to='https://www.instagram.com/p/B9YEOoRn4IJ/' /> */}
      </Grid>
    </Grid>
  )
}

export default MixologistView

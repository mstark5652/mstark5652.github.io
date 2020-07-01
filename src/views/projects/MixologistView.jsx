import React from 'react'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'

import { makeStyles } from '@material-ui/styles'

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
        <Button size='small' color='primary' href='https://www.mixologist.ai?cid=mstark'>
          Website
        </Button>
        <Button size='small' color='primary' href='https://www.dimin.com/blog/creative-tech-kc-the-future-will-have-robot-bartenders/'>
          Article
        </Button>
        <Button size='small' color='primary' href='https://www.instagram.com/p/B9YEOoRn4IJ/?utm_source=ig_web_button_share_sheet'>
          Video
        </Button>
      </Grid>
    </Grid>
  )
}

export default MixologistView

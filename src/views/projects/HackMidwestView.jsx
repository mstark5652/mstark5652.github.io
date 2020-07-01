import React from 'react'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'

import { makeStyles } from '@material-ui/styles'
import CtaButton from '../../components/CtaButton'

const useHackStyles = makeStyles({
  root: {
    padding: '5px 10px'
  },
  media: {
    maxHeight: '350px',
    width: '100%',
    borderRadius: '5px'
  }
})

const hackGroup = 'build/' + require('../../img/hackGroup.jpg')
const neighborhoodAlexa = 'build/' + require('../../img/neighborhood_alexa.png')

const HackMidwestView = () => {
  const classes = useHackStyles()
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
          HackMidwest 2018 Winner
        </Typography>
        <CardMedia
          className={classes.media}
          src={hackGroup}
          component='img'
          title='My Hack Midwest Team'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <CardMedia
          className={classes.media}
          src={neighborhoodAlexa}
          component='img'
          title='My Hack Midwest Team'
        />
        <Typography variant='body1'>
          Welcome to the Neighborhood. A hyper-local, real-time, real-life network and exchange made up of your actual neighbors that rewards "neighborly" acts of kindness and brings us all closer together.
        </Typography>
        <CtaButton text='Be Neighborly' to='https://www.intouchsol.com/blog/intouch-team-wins-big-hack-midwest-competition/' />
      </Grid>
    </Grid>
  )
}

export default HackMidwestView

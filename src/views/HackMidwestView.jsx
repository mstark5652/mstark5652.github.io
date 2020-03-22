import * as React from 'react'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import CardMedia from '@material-ui/core/CardMedia'

import { makeStyles } from '@material-ui/styles'

const useHackStyles = makeStyles({
  paper: {
    margin: '10px',
    padding: '10px'
  },
  root: {
    flexGrow: 1,
    padding: '5px 10px'
  },
  media: {
    maxHeight: '350px',
    width: '100%',
    borderRadius: '5px'
  }
})

const hackGroup = 'build/' + require('../img/hackGroup.jpg')
const neighborhoodAlexa = 'build/' + require('../img/neighborhood_alexa.png')

const HackMidwestView = () => {
  const classes = useHackStyles()
  return (
    <Paper className={classes.paper} elevation={3}>
      <Grid
        container
        justify='center'
        alignItems='center'
        className={classes.root}
        spacing={2}
      >
        <Grid item xs={12} md={6}>
          <Typography component='h3' variant='h4'>
            2018 HackMidwest Winner!
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
          <Button size='small' color='primary' href='https://www.intouchsol.com/blog/intouch-team-wins-big-hack-midwest-competition/'>
            Article
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default HackMidwestView

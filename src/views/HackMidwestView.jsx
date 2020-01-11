import * as React from 'react'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'

import { makeStyles } from '@material-ui/styles'

const useHackStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '5px 10px'
  },
  media: {
    maxHeight: '350px',
    width: '100%'
  }
})

const hackGroup = 'build/' + require('../img/hackGroup.jpg')
const neighborhoodAlexa = 'build/' + require('../img/neighborhood_alexa.png')

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
        <Card>
          <CardContent>
            <Typography component='h3' variant='h4'>
              2018 HackMidwest Winner!
            </Typography>
          </CardContent>
          <CardMedia
            className={classes.media}
            src={hackGroup}
            component='img'
            title='My Hack Midwest Team'
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardMedia
            className={classes.media}
            src={neighborhoodAlexa}
            component='img'
            title='My Hack Midwest Team'
          />
          <CardContent>
            <Typography component='h3'>
              Welcome to the Neighborhood. A hyper-local, real-time, real-life network and exchange made up of your actual neighbors that rewards "neighborly" acts of kindness and brings us all closer together.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small' color='primary' href='https://www.intouchsol.com/blog/intouch-team-wins-big-hack-midwest-competition/'>
              Article
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}

export default HackMidwestView

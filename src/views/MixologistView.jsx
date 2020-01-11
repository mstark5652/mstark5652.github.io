import * as React from 'react'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'

import { makeStyles } from '@material-ui/styles'

const mixologist = 'build/' + require('../img/mixologist.jpg')

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '5px 10px'
  },
  media: {
    maxHeight: '500px',
    width: '100%'
  }
})

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
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography component='h3' variant='h4'>
                Mixologist the Robotic Bartender
              </Typography>
            </CardContent>
            <CardMedia
              className={classes.media}
              src={mixologist}
              component='img'
              title='Mixologist Robotic Bartender'
            />
          </CardActionArea>
          <CardActions>
            <Button size='small' color='primary' href='https://www.mixologist.ai?cid=mstark'>
              Website
            </Button>
            <Button size='small' color='primary' href='https://www.dimin.com/blog/creative-tech-kc-the-future-will-have-robot-bartenders/'>
              Article
            </Button>
            <Button size='small' color='primary' href='https://www.facebook.com/jacobshepherd/videos/10160063700095370'>
              Video
            </Button>
          </CardActions>
        </Card>
      </Grid>

    </Grid>
  )
}

export default MixologistView

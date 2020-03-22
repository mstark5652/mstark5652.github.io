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
  innerGrid: {
    flexGrow: 1
  },
  media: {
    height: '100%',
    maxWidth: '700px',
    borderRadius: '5px'
  },
  storeIcon: {
    maxWidth: '150px'
  }
})

const iosAppStore = 'build/' + require('../img/iosAppStore.png')
const droidAppStore = 'build/' + require('../img/androidAppStore.png')
// const cbrLogo = 'build/' + require('../img/cbr_long_logo.png')
const cbrScreens = 'build/' + require('../img/cbr_screens.png')

const CBRView = () => {
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
        <Grid item xs={12}>
          <Grid
            container
            justify='space-around'
            className={classes.innerGrid}
          >
            <Grid item xs={12}>
              <Typography component='h3' variant='h4'>
                Comic Book Realm Mobile Apps
              </Typography>
              <Typography variant='body1'>
                Price guide and tracking for all your comic books.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button size='medium' href='https://itunes.apple.com/us/app/comicbookrealm/id1348310066'>
                <CardMedia
                  className={classes.storeIcon}
                  src={iosAppStore}
                  component='img'
                  title='Apple App Store'
                />
              </Button>
              <Button size='medium' href='https://play.google.com/store/apps/details?id=com.comicbookrealmgp.cbr'>
                <CardMedia
                  className={classes.storeIcon}
                  src={droidAppStore}
                  component='img'
                  title='Play Store'
                />
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardMedia
                className={classes.media}
                src={cbrScreens}
                component='img'
                title='App Screenshots'
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default CBRView

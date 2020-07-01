import React from 'react'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  media: {
    maxWidth: '350px',
    height: '100%',
    borderRadius: '5px',
    margin: 'auto'
  },
  logo: {
    textAlign: 'center',
    width: '100%',
    height: '100%',
    '& img': {
      maxWidth: '350px',
      margin: 'auto'
    }
  }
}))

const humanKindLogo = 'build/' + require('../../img/hkLogo2.png')
const humanKindPizza = 'build/' + require('../../img/hkPizzaScreen.png')

const HKView = () => {
  const classes = useStyles()
  return (
    <Grid
      container
      justify='center'
      alignItems='center'
      className={classes.root}
    >
      <Grid item xs={12} md={6}>
        <Typography component='h3' variant='h4'>
          Hedera 20 Hackathon Winner
        </Typography>
        <CardMedia
          className={classes.media}
          src={humanKindPizza}
          component='img'
          title='HumanKind Example Pizza Deal'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <div className={classes.logo}>
          <CardMedia
            src={humanKindLogo}
            component='img'
            title='HumanKind Logo'
          />
        </div>
        <Typography variant='body1'>
          HumanKind is a decentralized marketplace that aggregates, sponsors and rewards altruistic behavior and random acts of kindness, giving back to the communities, businesses and charities you care about. Essentially, the kinder you are, the more you—and the community you are a part of—get back.
        </Typography>
        <Button size='small' color='primary' href='https://www.intouchsol.com/blog/intouchers-win-big-in-the-hedera20-hackathon'>
          Article
        </Button>
        <Button size='small' color='primary' href='https://humankind.ly'>
          Website
        </Button>
        <Button size='small' color='primary' href='https://www.hedera.com/blog/winners-of-hedera20-virtual-hackathon-chosen-from-over-800-competing-developers'>
          Article
        </Button>
      </Grid>
    </Grid>
  )
}

export default HKView

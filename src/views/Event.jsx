import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Grow from '@mui/material/Grow'
import Divider from '@mui/material/Divider'
import AvatarGroup from '@mui/material/AvatarGroup'
import Avatar from '@mui/material/Avatar'

import EventSeatIcon from '@mui/icons-material/EventSeat'
import EventIcon from '@mui/icons-material/Event'
import IosShareIcon from '@mui/icons-material/IosShare'
import makeStyles from '@mui/styles/makeStyles'

import useQuery from '../hooks/useQuery/useQuery'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  welcome: {
    backgroundColor: 'black',
    color: 'white',
    // backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\")",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'end'
  },
  event: {
  },
  date: {
  },
  eventActions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    '& button': {
      width: '40%',
      margin: theme.spacing(1)
    }
  },
  presentedImage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: theme.spacing(2),
    '& img': {
      width: '60%'
    },
    '& a': {
      color: 'white'
    }
  }
}))

const avatars = {
  Alison: 'https://media-exp1.licdn.com/dms/image/C4E03AQE_8rvzJH1rSw/profile-displayphoto-shrink_200_200/0/1634082289713?e=1654732800&v=beta&t=9vQJDz0zVIovKHo1-B7GCChOUow0Ydo1zwMjeVMMDqU',
  Michael: 'https://www.mstark.dev/build/img/3decbc9ca3c6aea4e408985f737a800a.jpg',
  Georgia: require('../img/georgia.png'),
  George: 'https://assets.website-files.com/5b6b50e79e9b6f5948395973/5f121365364a1d05b8d0d2c6_George%20smiling.jpg'
}

const people = [
  require('../img/avatars.png'),
  require('../img/avatars-1.png'),
  require('../img/avatars-2.png')
  // 'https://mui.com/static/images/avatar/1.jpg',
  // 'https://mui.com/static/images/avatar/2.jpg',
  // 'https://mui.com/static/images/avatar/3.jpg',
  // 'https://mui.com/static/images/avatar/4.jpg'
]

const Event = () => {
  const query = useQuery()
  const classes = useStyles()

  const name = query && query.get('name')
  const welcome = name ? `${name}, we are glad you are here.` : 'Welcome!'

  return (
    <div className={classes.root}>
      <Grow in>
        <Box p={2} className={classes.welcome}>
          <Avatar sx={{ width: 125, height: 125 }} alt={name} src={avatars[name]}>{name}</Avatar>
          <Box m={1}>
            <Typography variant='h1' component='h1' style={{ fontSize: 28 }}>People of Product</Typography>
            <Typography variant='h2' component='h2'>{welcome}</Typography>
          </Box>
        </Box>
      </Grow>
      <Divider variant='fullWidth' />
      <Grow in timeout={500}>
        <Box className={classes.event}>
          <p style={{ margin: 16, fontSize: 35, fontWeight: 'bold' }}>Upcoming Event in KC</p>
          {/* <div style={{ marginTop: 16, marginBottom: 16 }}>
            <Typography variant='h3' component='h2' style={{ color: 'white', backgroundColor: '#065E5D', padding: 8, width: '100%', textAlign: 'center' }}>Upcoming Event</Typography>
          </div> */}
          <Box m={2} display='flex' alignItems='center' justifyContent='space-around'>
            <EventIcon sx={{ fontSize: 70 }} />
            <Box>
              <Typography variant='subtitle1'>Thursday, March 31</Typography>
              <Typography variant='subtitle1'>4pm-6:30pm</Typography>
              <Typography variant='subtitle1'>The Savory at 21c</Typography>
            </Box>
          </Box>
          {/* <span className={classes.date}>Sat, April 29, 7:00 pm</span>
          <Typography variant='subtitle1'>Crema Headquarters | Kansas City, MO</Typography> */}
          <AvatarGroup max={5} total={50} sx={{ margin: 2 }}>
            {people.map(p => <Avatar key={p} alt='person' src={p} />)}
          </AvatarGroup>

          <Box mt={2} className={classes.eventActions}>
            <Button startIcon={<EventSeatIcon />} variant='contained'>
              RSVP
            </Button>
            <Button startIcon={<IosShareIcon />} variant='contained'>
              Share
            </Button>
          </Box>
        </Box>
      </Grow>
      <Grow in timeout={1000}>
        <Box>
          <Typography m={2} variant='h3' component='h2'>Presented By</Typography>
          <Box className={classes.presentedImage}>
            <img
              alt='Crema'
              src='https://assets.website-files.com/5b6b50e79e9b6f5948395973/5b6b50e79e9b6f25e539598f_Crema.svg'
            />
            <br />
            <Typography variant='subtitle1'><Link href='https://crema.us'>Check us out!</Link></Typography>
          </Box>
        </Box>
      </Grow>
    </div>
  )
}

export default Event

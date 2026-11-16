import React from 'react'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import MailOutlineIcon from '@mui/icons-material/MailOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import strings from '../common/strings'

const profile = require('../img/me.jpg')

const Header = () => {
  return (
    <Box
      component='header'
      sx={theme => ({ backgroundColor: theme.palette.primary.main, padding: theme.spacing(4) })}
    >
      <Container
        maxWidth='lg' disableGutters
      >
        <Grid
          container spacing={1}
          justifyContent='center'
          alignItems='center'
        >
          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{
              '& img': {
                margin: 'auto',
                border: '1px solid transparent',
                borderRadius: '25px',
                width: '200px',
                height: '200px'
              }
            }}
          >
            <CardMedia
              src={profile}
              component='img'
              title='Profile Picture'
            />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{ textAlign: 'center' }}
          >
            <Typography variant='h1' color='secondary' sx={{ mt: 3 }}>
              {strings.header.name}
            </Typography>
            <Typography variant='h2' color='secondary' sx={{ mt: 3 }}>
              {strings.header.title}
            </Typography>
            <Box sx={{ m: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
              <Button href={strings.footer.github}>
                <GitHubIcon fontSize='large' color='secondary' />
              </Button>
              <Button href={strings.footer.linkedin}>
                <LinkedInIcon fontSize='large' color='secondary' />
              </Button>
              <Button href={strings.footer.email}>
                <MailOutlineIcon fontSize='large' color='secondary' />
              </Button>
            </Box>
          </Grid>

        </Grid>
        <br />
      </Container>
    </Box>
  )
}

export default Header

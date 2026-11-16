import React from 'react'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

import MailOutlineIcon from '@mui/icons-material/MailOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import strings from '../common/strings'

const Footer = () => {
  return (
    <Box component='footer' sx={{ backgroundColor: 'gray', textAlign: 'center', padding: '25px' }}>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        spacing={2}
      >
        <Grid>
          <Button href={strings.footer.github}>
            <GitHubIcon fontSize='large' color='secondary' />
          </Button>
        </Grid>
        <Grid>
          <Button href={strings.footer.linkedin}>
            <LinkedInIcon fontSize='large' color='secondary' />
          </Button>
        </Grid>
        <Grid>
          <Button href={strings.footer.email}>
            <MailOutlineIcon fontSize='large' color='secondary' />
          </Button>
        </Grid>
        <Grid size={12}>
          <Typography component='p' variant='h5' color='secondary'>
            {strings.footer.title}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer

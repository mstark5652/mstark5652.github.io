import React from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import GreyCard from '../components/GreyCard'
import strings from '../common/strings'
import { sectionHeader } from '../common/styles'

const About = () => {
  return (
    <>
      <Box sx={sectionHeader}>
        <Typography variant='h3'>
          {strings.about.title}
        </Typography>
      </Box>
      <GreyCard>
        <Typography variant='body1' component='div' sx={{ textAlign: 'center' }}>
          {strings.about.description}
        </Typography>
      </GreyCard>
    </>
  )
}

export default About

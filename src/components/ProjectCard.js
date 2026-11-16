import React from 'react'

import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import CtaButton from './CtaButton'
import GreyCard from './GreyCard'

const mediaStyles = {
  maxWidth: '350px',
  height: '100%',
  borderRadius: '5px',
  margin: 'auto'
}

const ProjectCard = ({ title, description, link, img }) => {
  return (
    <GreyCard>
      <CardMedia
        sx={{ ...mediaStyles, ...(img.style || {}) }}
        src={img.src}
        component='img'
        title={img.title}
      />
      <Typography variant='h4' sx={{ textAlign: 'center', m: 2 }}>{title}</Typography>
      <Typography variant='body1' sx={{ m: 1 }}>{description}</Typography>
      <CtaButton text={link.text} to={link.to} />
    </GreyCard>
  )
}

export default ProjectCard

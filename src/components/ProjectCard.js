import React from 'react'

import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import makeStyles from '@mui/styles/makeStyles'
import CtaButton from './CtaButton'
import GreyCard from './GreyCard'

const useStyles = makeStyles(theme => ({
  // paper: {
  //   margin: theme.spacing(4),
  //   padding: theme.spacing(3),
  //   [theme.breakpoints.down('sm')]: {
  //     margin: theme.spacing(2)
  //   },
  //   '& h4': {
  //     textAlign: 'center',
  //     margin: theme.spacing(2)
  //   },
  //   '& p': {
  //     margin: theme.spacing(1)
  //   }
  // },
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

const ProjectCard = ({ title, description, link, img }) => {
  const classes = useStyles()
  return (
    <GreyCard>
      <CardMedia
        className={classes.media}
        src={img.src}
        component='img'
        title={img.title}
        style={img.style || {}}
      />
      <Typography variant='h4' textAlign='center' m={2}>{title}</Typography>
      <Typography variant='body1' m={1}>{description}</Typography>
      <CtaButton text={link.text} to={link.to} />
    </GreyCard>
  )
}

export default ProjectCard

import React from 'react'

import Typography from '@material-ui/core/Typography'

import ProjectCard from '../components/ProjectCard'
import HackMidwestView from './projects/HackMidwestView'
import MixologistView from './projects/MixologistView'
import CBRView from './projects/CBRView'
import HKView from './projects/HKView'

import { makeStyles } from '@material-ui/styles'
import theme from '../common/theme'

const useStyles = makeStyles({
  header: {
    textAlign: 'center',
    margin: theme.spacing(6, 0, 2, 0),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2, 0)
    }
  }
})

const ProjectsView = () => {
  const classes = useStyles()
  return (
    <div className='projects-container'>
      <Typography className={classes.header} component='h3'>
        Projects
      </Typography>
      <ProjectCard component={<MixologistView />} />
      <ProjectCard component={<CBRView />} />
      <Typography className={classes.header} component='h3'>
        Hackathons
      </Typography>
      <ProjectCard component={<HKView />} />
      <ProjectCard component={<HackMidwestView />} />
      <br />
    </div>
  )
}

export default ProjectsView

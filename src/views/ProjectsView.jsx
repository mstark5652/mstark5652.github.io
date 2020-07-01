import React from 'react'

import Typography from '@material-ui/core/Typography'

import ProjectCard from '../components/ProjectCard'
import HackMidwestView from './projects/HackMidwestView'
import MixologistView from './projects/MixologistView'
import CBRView from './projects/CBRView'
import HKView from './projects/HKView'

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  header: {
    textAlign: 'center',
    margin: '5px',
    fontSize: '2rem'
  },
  content: {
    padding: '10px 10%',
    fontSize: '1rem'
  }
})

const ProjectsView = () => {
  const classes = useStyles()
  return (
    <div className='projects-container'>
      <Typography className={classes.header} component='h2'>
        Projects
      </Typography>
      <ProjectCard component={<HKView />} />
      <ProjectCard component={<MixologistView />} />
      <ProjectCard component={<HackMidwestView />} />
      <ProjectCard component={<CBRView />} />
      <br />
    </div>
  )
}

export default ProjectsView

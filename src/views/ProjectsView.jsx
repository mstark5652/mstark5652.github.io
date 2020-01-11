import * as React from 'react'

import Typography from '@material-ui/core/Typography'

import HackMidwestView from './HackMidwestView'
import MixologistView from './MixologistView'
import CBRView from './CBRView'

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
      <br />
      <HackMidwestView />
      <br />
      <MixologistView />
      <br />
      <CBRView />
      <br />
      <br />
    </div>
  )
}

export default ProjectsView

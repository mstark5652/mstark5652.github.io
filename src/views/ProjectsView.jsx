import React from 'react'

import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import ProjectCard from '../components/ProjectCard'

import makeStyles from '@mui/styles/makeStyles'
import theme from '../common/theme'
import projects from '../common/projects'

const useStyles = makeStyles({
  header: {
    textAlign: 'center',
    margin: theme.spacing(4, 0, 2, 0),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2, 0)
    }
  }
})

const ProjectsView = () => {
  const classes = useStyles()
  return (
    <div className='projects-container'>
      <div className={classes.header}>
        <Typography variant='h3'>
          Projects
        </Typography>
      </div>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
      >
        {projects.map((item, idx) => (
          <Grid key={idx} item sm={12} md={6}>
            <ProjectCard
              {...item}
            />
          </Grid>
        ))}
      </Grid>
      <br />
    </div>
  )
}

export default ProjectsView

import React from 'react'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import ProjectCard from '../components/ProjectCard'

import { makeStyles } from '@material-ui/styles'
import theme from '../common/theme'
import projects from '../common/projects'

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
      <Grid
        container
        justify='center'
        alignItems='center'
      >
        {projects.map((item, idx) => (
          <Grid key={idx} item xs={12} sm={6}>
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

import React from 'react'

import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import makeStyles from '@mui/styles/makeStyles'

import ProjectCard from '../components/ProjectCard'
import GreyCard from '../components/GreyCard'
import CtaButton from '../components/CtaButton'

import { projects, subprojects } from '../common/projects'
import strings from '../common/strings'

const useStyles = makeStyles(theme => ({
  header: {
    textAlign: 'center',
    margin: theme.spacing(4, 0, 2, 0),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2, 0)
    }
  }
}))

const ProjectsView = () => {
  const classes = useStyles()
  return (
    <div className='projects-container'>
      <div className={classes.header}>
        <Typography variant='h3'>
          {strings.projects.title}
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
      <List>
        {subprojects.map((item, idx) => (
          <ListItem key={idx}>
            <GreyCard dense maxWidth alignItems='flex-start'>
              <Typography variant='subtitle1' textAlign='start'>{item.title}</Typography>
              <Typography variant='body1' textAlign='start'>{item.description}</Typography>
              <CtaButton {...item.link} />
            </GreyCard>
          </ListItem>
        ))}
      </List>
      <br />
      <br />
    </div>
  )
}

export default ProjectsView

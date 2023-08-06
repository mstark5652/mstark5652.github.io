import React from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import makeStyles from '@mui/styles/makeStyles'

import ProjectCard from '../components/ProjectCard'
import GreyCard from '../components/GreyCard'
import CtaButton from '../components/CtaButton'
import Expandable from '../components/Expandable'

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
      <Box marginX={3}>
        <Expandable title='More Projects'>
          <List>
            {subprojects.map((item, idx) => (
              <ListItem key={idx}>
                <GreyCard dense maxWidth alignItems='flex-start'>
                  <Typography variant='subtitle2' textAlign='start'>{item.title}</Typography>
                  <Typography variant='body2' textAlign='start'>{item.description}</Typography>
                  {item.link && <CtaButton {...item.link} />}
                </GreyCard>
              </ListItem>
            ))}
          </List>
        </Expandable>
      </Box>
      <br />
      <br />
    </div>
  )
}

export default ProjectsView

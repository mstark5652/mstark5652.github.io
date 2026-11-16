import React from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

import ProjectCard from '../components/ProjectCard'
import GreyCard from '../components/GreyCard'
import CtaButton from '../components/CtaButton'
import Expandable from '../components/Expandable'

import { projects, subprojects } from '../common/projects'
import strings from '../common/strings'
import { sectionHeader } from '../common/styles'

const ProjectsView = () => {
  return (
    <div className='projects-container'>
      <Box sx={sectionHeader}>
        <Typography variant='h3'>
          {strings.projects.title}
        </Typography>
      </Box>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
      >
        {projects.map((item, idx) => (
          <Grid key={idx} size={{ xs: 12, md: 6 }}>
            <ProjectCard
              {...item}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mx: 3 }}>
        <Expandable title='More Projects'>
          <List>
            {subprojects.map((item, idx) => (
              <ListItem key={idx}>
                <GreyCard dense maxWidth alignItems='flex-start'>
                  <Typography variant='subtitle2' sx={{ textAlign: 'start' }}>{item.title}</Typography>
                  <Typography variant='body2' sx={{ textAlign: 'start' }}>{item.description}</Typography>
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

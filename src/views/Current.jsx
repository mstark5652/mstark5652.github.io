import React from 'react'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import makeStyles from '@mui/styles/makeStyles'

import ProjectCard from '../components/ProjectCard'
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

const Current = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.header}>
        <Typography variant='h3'>
          {strings.current.title}
        </Typography>
      </div>

      <Grid
        container
        justifyContent='center'
        alignItems='center'
      >
        {strings.current.items.map((item, idx) => (
          <Grid key={idx} item sm={12} md={6}>
            <ProjectCard
              {...item}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Current

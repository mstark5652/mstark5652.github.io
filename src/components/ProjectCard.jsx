import React from 'react'

import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(4),
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2)
    }
  }
}))

const ProjectCard = ({ component }) => {
  const classes = useStyles()
  return (
    <Paper className={classes.paper} elevation={3}>
      {component}
    </Paper>
  )
}

export default ProjectCard

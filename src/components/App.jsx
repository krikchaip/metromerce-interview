import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'

import CreateButtonContainer from 'containers/CreateButtonContainer'
import UserList from 'containers/UserList'

/** @type {import('@material-ui/core/styles').StyleRules} */
const styles = {
  root: {
    padding: '3rem'
  },
  container: {
    minHeight: '25rem',
    padding: '1.5rem 0',
    position: 'relative'
  },
  create: {
    position: 'absolute',
    top: 0,
    right: 0,
    transform: 'translate(-50%, -50%)'
  }
}

/**
 * @param {object} props
 * @param {Object<string, string>} props.classes
 */
function App({ classes }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container justify="center" className={classes.root}>
        <Grid item xs={8}>
          <Paper className={classes.container}>
            <Grid container alignItems="center" direction="column">
              <UserList />
            </Grid>
            <CreateButtonContainer className={classes.create} />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default withStyles(styles)(App)

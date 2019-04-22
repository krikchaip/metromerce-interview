import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'

/** @type {import('@material-ui/core/styles').StyleRules} */
const styles = {
  root: {
    padding: '3rem'
  },
  container: {
    height: '25rem'
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
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default withStyles(styles)(App)

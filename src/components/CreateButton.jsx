import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import Fab from '@material-ui/core/Fab'
import Fade from '@material-ui/core/Fade'
import IconButton from '@material-ui/core/IconButton'
import Popover from '@material-ui/core/Popover'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

/** @type {import('@material-ui/core/styles').StyleRules} */
const styles = {
  content: {
    width: '16rem'
  },
  heading: {
    textTransform: 'uppercase'
  },
  actions: {
    padding: '0.25rem',
    justifyContent: 'flex-end'
  },
  button: {
    padding: '0.50rem'
  }
}

/**
 * @param {object} props
 * @param {string} props.className
 * @param {Object<string, string>} props.classes
 */
function CreateButton({ className, classes }) {
  const [anchorEL, updateAnchorEl] = useState(
    /** @type {HTMLElement?} */ (null)
  )

  return (
    <React.Fragment>
      <Fab
        color="secondary"
        className={className}
        onClick={e => updateAnchorEl(e.currentTarget)}
      >
        <AddIcon />
      </Fab>
      <Popover
        anchorEl={anchorEL}
        onClose={() => updateAnchorEl(null)}
        open={Boolean(anchorEL)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        TransitionComponent={Fade}
      >
        <CardContent className={classes.content}>
          <Typography
            variant="h6"
            color="secondary"
            className={classes.heading}
          >
            Create a new user
          </Typography>
          <TextField margin="dense" label="Name" />
          <TextField margin="dense" label="Lastname" />
        </CardContent>
        <CardActions className={classes.actions}>
          <IconButton className={classes.button}>
            <CheckIcon fontSize="small" />
          </IconButton>
          <IconButton
            className={classes.button}
            onClick={() => updateAnchorEl(null)}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </CardActions>
      </Popover>
    </React.Fragment>
  )
}

export default withStyles(styles)(CreateButton)

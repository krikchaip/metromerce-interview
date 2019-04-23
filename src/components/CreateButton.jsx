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

import useUserForm from 'hooks/useUserForm'

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
 * @param {(user: import('hooks/useUserForm').UserFormState) => void} [props.onSubmit]
 */
function CreateButton({ onSubmit = () => {}, className, classes }) {
  const [user, setUser] = useUserForm()
  const validated = user.firstname.length > 0
  const [anchorEL, updateAnchorEl] = useState(
    /** @type {HTMLElement?} */ (null)
  )

  /** @param {React.MouseEvent<HTMLElement, MouseEvent>} event */
  function handleOpen(event) {
    updateAnchorEl(event.currentTarget)
  }

  function handleClose() {
    updateAnchorEl(null)
  }

  function handleSubmit() {
    onSubmit(user)
    setUser.reset()
  }

  return (
    <React.Fragment>
      <Fab color="secondary" className={className} onClick={handleOpen}>
        <AddIcon />
      </Fab>
      <Popover
        anchorEl={anchorEL}
        onClose={handleClose}
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
          <TextField
            margin="dense"
            label="Name"
            value={user.firstname}
            onChange={e => setUser.firstname(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Lastname"
            value={user.lastname}
            onChange={e => setUser.lastname(e.target.value)}
          />
        </CardContent>
        <CardActions className={classes.actions}>
          <IconButton
            disabled={!validated}
            className={classes.button}
            onClick={handleSubmit}
          >
            <CheckIcon fontSize="small" />
          </IconButton>
          <IconButton className={classes.button} onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </CardActions>
      </Popover>
    </React.Fragment>
  )
}

export default withStyles(styles)(CreateButton)

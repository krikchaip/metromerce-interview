import React from 'react'
import classNames from 'classnames'
import Avatar from '@material-ui/core/Avatar'
import DeleteIcon from '@material-ui/icons/Delete'
import Divider from '@material-ui/core/Divider'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import FilledInput from '@material-ui/core/FilledInput'
import IconButton from '@material-ui/core/IconButton'
import SaveIcon from '@material-ui/icons/Save'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

import useUserForm from 'hooks/useUserForm'

/** @type {import('@material-ui/core/styles').StyleRulesCallback} */
const styles = theme => ({
  container: {
    width: '75%'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'auto 0.5fr 0.85fr',
    columnGap: '1rem',
    alignItems: 'center'
  },
  details: {
    paddingTop: 0,
    marginLeft: '-0.75rem'
  },
  avatar: {
    backgroundColor: theme.palette.primary.light
  },
  actions: {
    padding: '0.5rem'
  },
  input: {
    paddingTop: '0.625rem'
  },
  button: {
    padding: '0.50rem'
  }
})

/**
 * @param {object} props
 * @param {Object<string, string>} props.classes
 * @param {User} props.data
 * @param {(newData: import('hooks/useUserForm').UserFormState) => void} [props.onUpdate]
 * @param {() => void} [props.onDelete]
 */
function UserPanel({
  data,
  onUpdate = () => {},
  onDelete = () => {},
  classes
}) {
  const [user, setUser] = useUserForm()
  return (
    <ExpansionPanel className={classes.container}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        classes={{ content: classes.grid }}
      >
        <Avatar className={classes.avatar}>{data.name[0].toUpperCase()}</Avatar>
        <Typography>{data.name}</Typography>
        <Typography>{data.lastname}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails
        className={classNames(classes.grid, classes.details)}
      >
        <div style={{ width: '2.5rem' }} />
        <FilledInput
          placeholder="Name"
          classes={{ input: classes.input }}
          value={user.firstname}
          onChange={e => setUser.firstname(e.target.value)}
        />
        <FilledInput
          placeholder="Lastname"
          classes={{ input: classes.input }}
          value={user.lastname}
          onChange={e => setUser.lastname(e.target.value)}
        />
      </ExpansionPanelDetails>
      <Divider />
      <ExpansionPanelActions className={classes.actions}>
        <IconButton className={classes.button} onClick={() => onUpdate(user)}>
          <SaveIcon fontSize="small" />
        </IconButton>
        <IconButton className={classes.button} onClick={onDelete}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </ExpansionPanelActions>
    </ExpansionPanel>
  )
}

export default withStyles(styles)(UserPanel)

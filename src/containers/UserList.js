import React from 'react'
import { connect } from 'react-redux'

import { updateUser } from 'actions'
import UserPanel from 'components/UserPanel'

/**
 * @param {object} props
 * @param {User[]} props.users
 * @param {(id: string, newData: import('hooks/useUserForm').UserFormState) => void} props.updater
 *
 */
function UserList({ users, updater }) {
  return (
    <React.Fragment>
      {users.map(u => (
        <UserPanel data={u} onUpdate={updater} />
      ))}
    </React.Fragment>
  )
}

/** @param {AppState} state */
const mapStateToProps = state => ({
  users: state.users
})

/**
 * @param {import('redux').Dispatch<AppActions>} dispatch
 */
const mapDispatchToProps = dispatch => ({
  /**
   * @param {string} id
   * @param {{ firstname: string, lastname: string }} data
   */
  updater: (id, data) =>
    dispatch(updateUser(id, { first: data.firstname, last: data.lastname }))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)

import React from 'react'
import { connect } from 'react-redux'

import { updateUser, deleteUser } from 'actions'
import UserPanel from 'components/UserPanel'

/**
 * @param {object} props
 * @param {User[]} props.users
 * @param {(id: string, newData: import('hooks/useUserForm').UserFormState) => void} props.updater
 * @param {(id: string) => void} props.deleter
 */
function UserList({ users, updater, deleter }) {
  return (
    <React.Fragment>
      {users.map(u => (
        <UserPanel data={u} onUpdate={updater} onDelete={deleter} />
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
    dispatch(updateUser(id, { first: data.firstname, last: data.lastname })),

  /** @param {string} id */
  deleter: id => dispatch(deleteUser(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)

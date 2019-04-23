import React from 'react'
import { connect } from 'react-redux'

import UserPanel from 'components/UserPanel'

/**
 * @param {object} props
 * @param {User[]} props.users
 */
function UserList({ users }) {
  return (
    <React.Fragment>
      {users.map(u => (
        <UserPanel data={u} />
      ))}
    </React.Fragment>
  )
}

/** @param {AppState} state */
const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps)(UserList)

import { connect } from 'react-redux'

import { createUser } from 'actions'
import CreateButton from 'components/CreateButton'

/**
 * @param {import('redux').Dispatch} dispatch
 */
const mapDispatchToProps = dispatch => ({
  /**
   * @param {import('hooks/useUserForm').UserFormState} user
   */
  onSubmit: user => dispatch(createUser(user.firstname, user.lastname))
})

export default connect(
  null,
  mapDispatchToProps
)(CreateButton)

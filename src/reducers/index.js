import uuid from 'uuid/v4'

/** @type {AppState} */
const initialState = {
  users: []
}

/** @type {import('redux').Reducer<AppState, AppActions>} */
function rootReducer(state = initialState, action) {
  const { users } = state
  switch (action.type) {
    case 'USER_CREATE':
      const { first: name, last: lastname } = action.name
      return { users: users.concat({ id: uuid(), name, lastname }) }
    case 'USER_UPDATE':
      return state
    case 'USER_DELETE':
      return state
    default:
      return state
  }
}

export default rootReducer

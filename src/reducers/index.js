import uuid from 'uuid/v4'

/** @type {AppState} */
const initialState = {
  users: []
}

/** @type {import('redux').Reducer<AppState, AppActions>} */
function rootReducer(state = initialState, action) {
  const { users } = state
  switch (action.type) {
    case 'USER_CREATE': {
      const { first: name, last: lastname } = action.name
      return { users: users.concat({ id: uuid(), name, lastname }) }
    }
    case 'USER_UPDATE': {
      const { first: name, last: lastname } = action.data
      const newData = { id: action.id, name, lastname }
      return { users: users.map(u => (newData.id === u.id ? newData : u)) }
    }
    case 'USER_DELETE': {
      const { id } = action
      return { users: users.filter(u => u.id !== id) }
    }
    default:
      return state
  }
}

export default rootReducer

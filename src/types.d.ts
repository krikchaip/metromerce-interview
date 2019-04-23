type User = {
  id: string
  name: string
  lastname: string
}

interface UserCreateAction {
  type: 'USER_CREATE',
  name: { first: string, last: string }
}

interface UserUpdateAction {
  type: 'USER_UPDATE'
}

interface UserDeleteAction {
  type: 'USER_DELETE'
}

type UserActions =
  UserCreateAction | UserUpdateAction | UserDeleteAction

interface AppState {
  users: User[]
}

type AppActions =
  UserActions

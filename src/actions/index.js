/** @type {(first: string, last: string) => UserCreateAction} */
export const createUser = (first, last) => ({
  type: 'USER_CREATE',
  name: { first, last }
})

export const updateUser = undefined

export const deleteUser = undefined

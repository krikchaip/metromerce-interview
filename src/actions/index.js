/** @type {(first: string, last: string) => UserCreateAction} */
export const createUser = (first, last) => ({
  type: 'USER_CREATE',
  name: { first, last }
})

/**
 * @param {string} id
 * @param {{ first: string, last: string }} data
 * @return {UserUpdateAction}
 */
export const updateUser = (id, data) => ({
  type: 'USER_UPDATE',
  id,
  data
})

export const deleteUser = undefined

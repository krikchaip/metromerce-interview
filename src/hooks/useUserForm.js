import { useState } from 'react'

/**
 * @typedef {object} UserFormState
 * @property {string} firstname
 * @property {string} lastname
 */

/**
 * @typedef {object} UserFormStateSetter
 * @property {(first: string) => void} firstname
 * @property {(last: string) => void} lastname
 * @property {() => void} reset
 */

/** @type {UserFormState} */
const initialState = {
  firstname: '',
  lastname: ''
}

/**
 * @return {[UserFormState, UserFormStateSetter]}
 */
function useUserForm() {
  const [state, setState] = useState(initialState)

  /** @param {string} first */
  function firstname(first) {
    setState(state => ({ ...state, firstname: first }))
  }

  /** @param {string} last */
  function lastname(last) {
    setState(state => ({ ...state, lastname: last }))
  }

  function reset() {
    setState({ firstname: '', lastname: '' })
  }

  return [state, { firstname, lastname, reset }]
}

export default useUserForm

import { useState } from 'react'

/**
 * @typedef {object} CreateFormState
 * @property {string} firstname
 * @property {string} lastname
 */

/**
 * @typedef {object} CreateFormStateSetter
 * @property {(first: string) => void} firstname
 * @property {(last: string) => void} lastname
 * @property {() => void} reset
 */

/** @type {CreateFormState} */
const initialState = {
  firstname: '',
  lastname: ''
}

/**
 * @return {[CreateFormState, CreateFormStateSetter]}
 */
function useCreateForm() {
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

export default useCreateForm

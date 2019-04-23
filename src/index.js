import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import 'typeface-roboto'

import App from './components/App'
import rootReducer from 'reducers'

/** @type {import('redux').Store<AppState, AppActions>} */
const store = createStore(
  rootReducer,
  typeof window !== 'undefined'
  && window['__REDUX_DEVTOOLS_EXTENSION__']
  && window['__REDUX_DEVTOOLS_EXTENSION__']()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

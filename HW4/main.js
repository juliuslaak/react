import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import speedTypingAppReducer from './reducers/reducers.js'
import App from './components/App.jsx'

let store = createStore(speedTypingAppReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#ReactApp')
)
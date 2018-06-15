import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// import createSagaMiddleware from 'redux-saga'
import App from './App'
import rootReducer from './root.reducer'

// IIFE 
// (() => {
//   var x = 2
//   console.log(x)
// })()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Store
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

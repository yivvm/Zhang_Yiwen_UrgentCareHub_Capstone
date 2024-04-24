import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { thunk } from'redux-thunk'

import reducers from './reducers'

import { BrowserRouter } from 'react-router-dom'

const store = createStore(reducers, compose(applyMiddleware(thunk)))
// const store = configureStore({ reducer: reducers })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)

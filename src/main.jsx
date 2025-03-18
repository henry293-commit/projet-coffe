import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createStore } from 'redux'
import { reducer } from './Tools/reducer.jsx'
import { Provider } from 'react-redux'

const store = createStore(reducer)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
	<App/>
  </Provider>,
)

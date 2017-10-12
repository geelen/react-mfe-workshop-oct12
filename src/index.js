import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import './index.css'
import ChatApp from './components/ChatApp'
import configureStore from './store'
import { Provider } from 'react-redux'

const store = configureStore()

document.getElementById('root').innerHTML =
  ReactDOMServer.renderToString(
    <Provider store={store}>
      <ChatApp/>
    </Provider>
  )

setTimeout(() => {
  ReactDOM.hydrate(
    <Provider store={store}>
      <ChatApp/>
    </Provider>,
    document.getElementById('root')
  )
}, 1000)

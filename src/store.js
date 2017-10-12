import { applyMiddleware, createStore } from 'redux'
import { addMessageReducer } from './reducers'
import logger from 'redux-logger'

const INITIAL_STATE = {
  messages: [
    {
      avatar: 'http://fillmurray.com/96/96',
      username: 'Bill Murray',
      lines: [
        'Line one',
        'Line two',
        'Line three',
      ],
    },
    {
      avatar: 'http://fillmurray.com/94/94',
      username: 'Bill Murray the Second',
      lines: [
        'Another line one',
        'Another line two',
        'Another line three',
      ],
    },
  ]
}

export default () => {
  return createStore(
    addMessageReducer,
    INITIAL_STATE,
    applyMiddleware(logger)
  )
}

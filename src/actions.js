import store from './store'

export const addMessage = (message) => {
  store.messages = store.messages.concat({
    avatar: 'http://fillmurray.com/88/88',
    username: 'Me',
    lines: [
      message
    ],
  })
}

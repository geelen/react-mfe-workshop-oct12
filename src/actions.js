import store from './store'

export const addMessage = (message) => {
  const lastMessage = store.messages[store.messages.length - 1]

  if (lastMessage && lastMessage.username === 'Me') {
    lastMessage.lines.push(message)
  } else {
    store.messages.push({
      avatar: 'http://fillmurray.com/88/88',
      username: 'Me',
      lines: [
        message
      ],
    })
  }
}

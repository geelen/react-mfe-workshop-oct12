const store = {
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
export default store

export const addMessage = (message) => {
  store.messages = store.messages.concat({
    avatar: 'http://fillmurray.com/88/88',
    username: 'Me',
    lines: [
      message
    ],
  })
}

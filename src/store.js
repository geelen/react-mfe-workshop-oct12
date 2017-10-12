import { observable } from 'mobx'

const store = observable({
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
})

export default store

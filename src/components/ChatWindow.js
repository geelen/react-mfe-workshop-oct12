import React from 'react'
import Entry from './Entry'

const messages = [
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

const ChatWindow = () => (
  <div className="ChatWindow">
    {
      messages.map((message, i) => (
        <Entry key={i}
               message={message}/>
      ))
    }
  </div>
)

export default ChatWindow

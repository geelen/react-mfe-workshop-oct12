import React from 'react'
import Entry from './Entry'

const ChatWindow = ({ messages }) => (
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

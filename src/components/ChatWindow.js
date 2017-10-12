import React from 'react'
import Entry from './Entry'
import { connect } from 'react-redux'

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

export default connect(
  store => ({
    messages: store.messages
  })
)(ChatWindow)

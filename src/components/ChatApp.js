import React from 'react'
import './ChatApp.css'
import InputArea from './InputArea'
import ChatWindow from './ChatWindow'

class ChatApp extends React.Component {
  render() {
    return (
      <div className="ChatApp">
        <ChatWindow/>
        <InputArea/>
      </div>
    )
  }
}

export default ChatApp

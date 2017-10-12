import React from 'react'
import './ChatApp.css'
import InputArea from './InputArea'
import ChatWindow from './ChatWindow'
import store, { addMessage } from '../store'

class ChatApp extends React.Component {
  handleNewMessage = (message) => {
    addMessage(message)
    this.forceUpdate()
  }

  render() {
    return (
      <div className="ChatApp">
        <ChatWindow messages={store.messages}/>
        <InputArea onNewMessage={this.handleNewMessage}/>
      </div>
    )
  }
}

export default ChatApp

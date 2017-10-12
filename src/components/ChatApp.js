import React from 'react'
import './ChatApp.css'
import InputArea from './InputArea'
import ChatWindow from './ChatWindow'

class ChatApp extends React.Component {
  state = {
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

  handleNewMessage = (message) => {
    this.setState({
      messages: this.state.messages.concat({
        avatar: 'http://fillmurray.com/88/88',
        username: 'Me',
        lines: [
          message
        ],
      })
    })
  }

  render() {
    return (
      <div className="ChatApp">
        <ChatWindow messages={this.state.messages}/>
        <InputArea onNewMessage={this.handleNewMessage}/>
      </div>
    )
  }
}

export default ChatApp

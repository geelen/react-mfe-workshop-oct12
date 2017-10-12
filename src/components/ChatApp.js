import React from 'react'
import './ChatApp.css'
import InputArea from './InputArea'
import ChatWindow from './ChatWindow'

const ChatApp = () => (
  <div className="ChatApp">
    <ChatWindow/>
    <InputArea/>
  </div>
)

export default ChatApp

import React from 'react'
import Entry from './Entry'
import { observer } from 'mobx-react'
import store from '../store'

const ChatWindow = () => (
  <div className="ChatWindow">
    {
      store.messages.map((message, i) => (
        <Entry key={i}
               message={message}/>
      ))
    }
  </div>
)

export default observer(ChatWindow)

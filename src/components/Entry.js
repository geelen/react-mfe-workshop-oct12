import React from 'react'
import { observer } from 'mobx-react'

const Entry = ({ message }) => (
  <div className="Entry">
    <img className="Entry_Avatar"
         alt={`Avatar for ${message.username}`}
         src={message.avatar}/>
    <div className="Entry_Lines">
      {
        message.lines.map((line, i) => (
          <div key={i}>{ line }</div>
        ))
      }
    </div>
  </div>
)

export default observer(Entry)

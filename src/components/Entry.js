import React from 'react'

const Entry = ({ message }) => (
  <div className="Entry">
    <img className="Entry_Avatar"
         alt={`Avatar for ${message.name}`}
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

export default Entry

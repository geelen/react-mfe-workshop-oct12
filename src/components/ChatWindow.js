import React from 'react'
import Entry from './Entry'
import { connect } from 'react-redux'

class ChatWindow extends React.Component {
  state = { mounted: false }

  componentDidMount() {
    this.setState({ mounted: true })
  }

  render() {
    const { messages } = this.props
    return (
      <div className="ChatWindow">
        <h1>{ this.state.mounted ? 'MOUNTED!' : 'UNMOUNTED' }</h1>
        {
          messages.map((message, i) => (
            <Entry key={i}
                   message={message}/>
          ))
        }
      </div>
    )
  }
}

export default connect(
  store => ({
    messages: store.messages
  })
)(ChatWindow)

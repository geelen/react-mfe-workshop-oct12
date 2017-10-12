import React from 'react'
import { connect } from 'react-redux'
import { addNewMessage } from '../actions'

class InputArea extends React.Component {
  state = { message: '' }

  handleInput = (event) => {
    this.setState({ message: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addNewMessage(this.state.message)
    this.setState({ message: '' })
  }

  render() {
    return (
      <form className="InputArea"
            onSubmit={this.handleSubmit}>
        <div className="InputArea_Field">
          <input type="text"
                 onChange={this.handleInput}
                 value={this.state.message}/>
        </div>
        <button className="InputArea_Button"
                type="submit">
          ⬆
        </button>
      </form>
    )
  }
}

export default connect(
  null,
  { addNewMessage }
)(InputArea)


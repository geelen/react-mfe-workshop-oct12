import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class AsyncButton extends Component {
  render() {
    console.log(this.props)
    return <button onClick={this.props.onClick}>
      Click me!
    </button>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <AsyncButton foo="bar"
                     baz="boo"
                     a={5}
                     b={() => 6}
                     onClick={() => console.log('Clicked!')}
        />
      </div>
    )
  }
}

export default App

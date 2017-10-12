import React from 'react'
import logo from './logo.svg'
import './App.css'

const AppHeader = (props) => {
  console.log("Rendering AppHeader")
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h1 className="App-title">
        Welcome to React
        {props.clicked ? '!!!!' : ''}
      </h1>
    </header>
  )
}

const obj = { a: 1, b: 2, c: 3, d: 5 }
console.log(obj)

const { foo, ...otherKeys } = obj
console.log(foo, otherKeys)

const AppIntro = () => {
  console.log("Rendering AppIntro")
  return (
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  )
}

class App extends React.Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    console.log("Rendering App")
    return (
      <div className="App">
        <AppHeader clicked={this.state.clicked}/>
        <AppIntro/>
        <p>
          <button type="button" onClick={this.handleClick}>
            Click me!
          </button>
        </p>
      </div>
    )
  }
}

export default App

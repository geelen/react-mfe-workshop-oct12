import React from 'react'
import logo from './logo.svg'
import './App.css'

const AppHeader = (props) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo"/>
    <h1 className="App-title">
      Welcome to React
      { props.clicked ? '!!!!' : '' }
    </h1>
  </header>
)

const obj = {
  id: '1234',
  foo() {
    console.log("Foo got called with `this`:")
    console.log(this)
  }
}
//obj.foo = obj.foo.bind(obj)

const fn = obj.foo
fn()

class App extends React.Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <div className="App">
        <AppHeader clicked={this.state.clicked}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
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

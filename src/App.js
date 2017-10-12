import React from 'react'
import logo from './logo.svg'
import styles from './App.css'

console.log(logo)
console.log(styles)

const AppHeader = ({ greeting }) => (
  <header className={styles.header}>
    <img src={logo} className={styles.logo} alt="logo"/>
    <h1 className={styles.title}>
      {greeting}
    </h1>
  </header>
)

const AppIntro = () => (
  <p className={styles.intro}>
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
)

const AppButton = ({ onClick, icon, children }) => (
  <p>
    <button type="button" onClick={onClick}>
      <span role="img" aria-label="icon">{icon} </span>
      {children}
    </button>
  </p>
)

class App extends React.Component {
  state = { greeting: 'Welcome to React' }

  handleClick = () => {
    const nextGreeting = this.state.greeting.endsWith('!!!!!')
      ? 'Welcome to React'
      : this.state.greeting + '!'

    this.setState({ greeting: nextGreeting })
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <AppHeader greeting={this.state.greeting}/>
        <AppIntro/>
        <AppButton onClick={this.handleClick} icon="✅">
          Click me!
        </AppButton>
      </div>
    )
  }
}

export default App

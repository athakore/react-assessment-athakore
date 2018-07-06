import React, { Component } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Body from './components/Body/Body'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <NavBar />
        <Body />
      </div>
    )
  }
}

export default App

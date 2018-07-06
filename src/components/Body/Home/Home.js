import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
  render () {
    return (
      <div className='home'>
        <img className='headshot' src='./AThakore.jpg' />
        <h1 className='name'>Aarth Thakore</h1>
        <h2 className='subtitle'>Software Developer</h2>
      </div>
    )
  }
}

export default Home

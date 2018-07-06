import React, { Component } from 'react'
import './Resume.css'

class Resume extends Component {
  render () {
    return (
      <div className='resume'>
        <object
          className='resume-doc'
          data="./FastTrack'D Aarth Thakore Resume.pdf"
        />
      </div>
    )
  }
}

export default Resume

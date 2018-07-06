import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

class NavBar extends Component {
  render () {
    return (
      <div className='nav-bar'>
        <ul className='nav-links'>
          <li className='nav-item'>
            <NavLink
              exact
              to='/'
              activeStyle={{
                color: '#e3d83f'
              }}
            >
              <span className='nav-icon'>
                <i className='fas fa-home' />
              </span><span className='nav-text'>Home</span>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/about-me'
              activeStyle={{
                color: '#e3d83f'
              }}
            >
              <span className='nav-icon'>
                <i className='fas fa-user' />
              </span><span className='nav-text'>About Me</span>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/projects'
              activeStyle={{
                color: '#e3d83f'
              }}
            >
              <span className='nav-icon'>
                <i className='fas fa-project-diagram' />
              </span><span className='nav-text'>Projects</span>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/resume'
              activeStyle={{
                color: '#e3d83f'
              }}
            >
              <span className='nav-icon'>
                <i className='fas fa-file-alt' />
              </span><span className='nav-text'>Resume</span>
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavBar

import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import './Body.css'
import About from './About/About'
import Projects from './Projects/Projects'
import Resume from './Resume/Resume'
import Home from './Home/Home'

class Body extends Component {
  render () {
    return (
      <div className='body'>
        <Switch>
          <Route path='/about-me' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/resume' component={Resume} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    )
  }
}

export default Body

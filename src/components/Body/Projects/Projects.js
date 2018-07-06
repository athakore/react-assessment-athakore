import React, { Component } from 'react'
import './Projects.css'

class Projects extends Component {
  render () {
    return (
      <div className='projects'>
        <h1 className='projects-title'>Projects</h1>
        <div className='assessment left'>
          <h3 className='project-title'>XML File Transfer</h3>
          <ul className='project-description'>
            <li>Read a file into an application using InputStream.</li>
            <li>Marshall the data from the file into an XML Document.</li>
            <li>
              Create a Socket to communicate with a ServerSocket to transfer the XML Document.
            </li>
            <li>
              Create a multi-threaded ServerSocket to recieve the XML Document and generate a new Thread to Unmarshall XML Document.
            </li>
            <li>Write the data from the XML Document to a new file.</li>
          </ul>
        </div>
        <div className='assessment right'>
          <h3 className='project-title'>Service Creation</h3>
          <ul className='project-description'>
            <li>
              Generate Entities, DTO's, Mappers, Controllers, Repositories and Services.
            </li>
            <li>
              Create HTTP Endpoints to utilize Controllers to query the database for information.
            </li>
            <li>
              Built a PostgreSQL database to be utilized by the Services.
            </li>
          </ul>
        </div>
        <div className='assessment left'>
          <h3 className='project-title'>Quizler</h3>
          <ul className='project-description'>
            <li>
              Use Javascript and Functional programming methods to create a quiz-taking application.
            </li>
            <li>
              Write and implement curried functions to create prompts, create question sets and randomly generate quizes from the question sets.
            </li>
            <li>
              Create Promises to take functions as arguments an execute on them asynchronously at a later time.
            </li>
          </ul>
        </div>
        <div className='assessment right'>
          <h3 className='project-title'>Portfolio</h3>
          <ul className='project-description'>
            <li>
              Use JSX and React to build and assemble various Components into a portfolio website.
            </li>
            <li>
              Utilize CSS to improve the flow and aesthetic of the portfolio.
            </li>
            <li>
              Implement react-router-dom to navigate between the various Components.
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Projects

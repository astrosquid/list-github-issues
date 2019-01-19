import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './App.css';

import ResultsSelector from './components/ResultsSelector';
import IssueViewer from './components/IssueViewer';

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      issues: [],
      comments: [],
      project: 'rails/rails'
    }
  }

  baseUri = 'https://api.github.com/repos/'
  defaultRepo = 'rails/rails'
  issuesUri = '/issues?page=1&per_page=100'

  componentDidMount() {
    this.fetchNewProject(`${this.baseUri}${this.defaultRepo}${this.issuesUri}`)
  }

  fetchNewProject = url => {
    fetch(url)
    .then( response => response.json() )
    .then( issues => {
      this.setState( { issues } )
    })
  }

  analyzeIssues = issues => {
    const contribs = issues.map( issue => {
      return issue.author_association
    })
    console.log(contribs)
  }

  render() {
    return (
      <div className="App">
        <Router>
          <>
          <div className="nav">
            <Link to="/" className="home-button">Home</Link>
            <div className="url-input-form">
              <input type="text" placeholder="e.g. 'rails/rails'" />
              <button onClick={() => this.changeUrl(this.state.urlText)}>Update URL</button>
            </div>
          </div>
          <div className="issue-app-container">
            <ResultsSelector issues={this.state.issues} />
            <IssueViewer issues={this.state.issues} />
          </div>
          </>
        </Router>
      </div>
    );
  }
}

export default App;
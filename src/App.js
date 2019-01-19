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
      repo: 'rails/rails'
    }
  }

  baseUri = 'https://api.github.com/repos/'
  issuesUri = '/issues?page=1&per_page=100'

  componentDidMount() {
    this.fetchNewProject(`${this.baseUri}${this.state.repo}${this.issuesUri}`)
  }

  fetchNewProject = url => {
    fetch(url)
    .then( response => response.json() )
    .then( issues => {
      this.analyzeIssues(issues)
    })
    .catch(function(error) {
      this.resetRepo()
    });
  }

  analyzeIssues = issues => {
    if (issues.length) {
      this.setState({ issues })
    } else {
      this.resetRepo()
    }
  }

  resetRepo = () => {
    this.setState({ repo: 'rails/rails' }, this.changeUrl(this.state.repo))
  }

  changeUrl = repo => {
    this.fetchNewProject(`${this.baseUri}${repo}${this.issuesUri}`)
  }

  updateRepo = repo => {
    this.setState({ repo })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <>
          <div className="nav">
            <Link to="/" className="home-button">Home</Link>
            <div className="url-input-form">
              <input 
                type="text" 
                placeholder="e.g. 'rails/rails'" 
                value={this.state.repo} 
                onChange={(e) => this.updateRepo(e.target.value)}
                className="repo-input"
              />
              <button onClick={() => this.changeUrl(this.state.repo)}>Update Repo</button>
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
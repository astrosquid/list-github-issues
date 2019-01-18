import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';

import ResultsSelector from './components/ResultsSelector';
import IssueViewer from './components/IssueViewer';

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      issues: []
    }
  }

  baseUri = 'https://api.github.com/repos/'
  defaultRepo = 'rails/rails/issues?page=1&per_page=100'

  componentDidMount() {
    fetch(`${this.baseUri}${this.defaultRepo}`)
    .then( response => response.json() )
    .then( issues => {
      this.setState( { issues } )
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
            <div className="issue-app-container">
            <ResultsSelector issues={this.state.issues} />
            <IssueViewer issues={this.state.issues} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
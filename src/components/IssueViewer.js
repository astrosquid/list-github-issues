import React from 'react'
import { Route } from 'react-router-dom'

import IssueDetails from './IssueDetails'

import './styles/IssueViewer.css'

class IssueViewer extends React.Component {
  render() {
    return (
      <div className="issue-viewer-container">
        <Route exact={true} path="/" render={() => (
          <p>Please select an issue.</p>
        )}></Route>

        <Route path='/issue/:issueId' render={
          ({ match }) => {
            return (
              <IssueDetails issue={this.props.issues.find( i => {
                return `${i.id}` === match.params.issueId
              })} />
            )
          }
        } />
      </div>
    )
  }
}

export default IssueViewer
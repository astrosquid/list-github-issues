import React from 'react' 
import { Link } from 'react-router-dom'

import './styles/ResultsSelector.css'

class ResultsSelector extends React.Component {
  createIssueTitles = issuesJson => {
    return issuesJson.map( issue => {
      return (
        <div className="issue-title-card" key={issue.id}>
          <Link to={`/issue/${issue.id}`}>
          <p>
            {issue.title}
          </p>
          </Link>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="results-selector">
        { this.props.issues.length > 0 ? 
            this.createIssueTitles(this.props.issues)
          :
            <p>{this.props.message}</p>
        }
      </div>
    )
  }
}

export default ResultsSelector
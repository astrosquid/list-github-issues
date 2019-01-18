import React from 'react'
import MDReactComponent from 'markdown-react-js'

import CommentsContainer from './CommentsContainer'

import './styles/IssueDetails.css' 

class IssueDetails extends React.Component {
  makeLabels = labels => {
    return labels.map( label => {
      return (
        <div className="label-badge" key={label.name}>
          <p>{label.name}</p>
        </div>
      )
    })
  }
  
  makeIssueDetail = issue => {
    return (
      <>
      <h1>
        <MDReactComponent text={issue.title} />
      </h1>
      <div className="labels-container">
        {this.makeLabels(issue.labels)}
      </div>
      <br />
      <a href={issue.url}>
        See issue on Github
      </a>
      <p>Opened by <a href={issue.user.url}>{issue.user.login}</a></p>
      <div className="issue-body">
        <MDReactComponent text={issue.body} />
      </div>
      <CommentsContainer commentsUrl={issue.comments_url} />
      </>
    )
  }

  render() {
    return (
      this.props.issue ? 
      this.makeIssueDetail(this.props.issue) :
      (<p>No issue found.</p>)
    )
  }
}

export default IssueDetails
import React from 'react' 
import MDReactComponent from 'markdown-react-js'

class CommentsContainer extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    this.loadComments(this.props.commentsUrl)
  }

  loadComments = commentsUrl => {
    fetch(commentsUrl)
    .then( response => response.json() )
    .then(comments => {
      this.setState({ comments })
    })
  }

  makeComments = comments => {
    return comments.map( comment => {
      console.log('generating comment')
      return (
        <div className="comment">
          <h3>{comment.user.login}:</h3>
          <MDReactComponent text={comment.body} />
        </div>
      )
    })
  }
  
  render() {
    return (
      <div className="comments-container">
        {this.state.comments.length > 0 ? (<h2>Comments</h2>) : <h2>No comments.</h2> }
        {this.makeComments(this.state.comments)}
      </div>
    )
  }
}

export default CommentsContainer
/**
 * Class that represent the Post 
 */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCommentsFromPost, deletePost, votePost } from '../actions';

class PostActionButtons extends Component {

  constructor(props) {
    super(props);

    this.handleDeletion = this.handleDeletion.bind(this);
    this.handleVote = this.handleVote.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    if(this.props.id)
      this.props.fetchCommentsFromPost(this.props.id);
  }

  handleDeletion() {
    this.props.deletePost(this.props.id);
    this.props.history.push('/');
  }

  handleVote(id, vote) {
    this.props.handleVote(id, vote);
  }

  handleUpdate(id) {
    this.props.history.push(`/edit/${id}`);
  }

  render() {
    const comments = this.props.comments[this.props.id];

    return (
      <div className="action-buttons">
        <div className="buttons has-addons">
          <span className="button is-small is-dark info">Vote Score: {this.props.voteScore}</span>
          <span className="button is-small is-light info">{ (comments) ?  `${comments.length} comment${(comments.length > 1) ? 's': ''}` : `No comments yet` }</span>
          <span className="button is-small is-success" onClick={() => this.handleVote(this.props.id, 'upVote')}>Upvote</span>
          <span className="button is-small is-warning" onClick={() => this.handleVote(this.props.id, 'downVote')}>Downvote</span>
          <span className="button is-small is-info" onClick={() => this.handleUpdate(this.props.id)}>Edit</span>
          <span className="button is-small is-danger" onClick={this.handleDeletion}>Delete Post</span>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ comment }) {
  return {
    comments: comment
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCommentsFromPost: (id) => dispatch(fetchCommentsFromPost(id)),
    deletePost: (id) => dispatch(deletePost(id)),
    handleVote: (id, vote) => dispatch(votePost(id, vote))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostActionButtons));

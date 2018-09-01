/**
 * Class that represent the Post 
 */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchPostById, fetchCommentsFromPost, deletePost, votePost } from '../actions';
import NewComment from '../components/NewComment';
import Comments from '../components/Comments';
import PostDetails from '../components/PostDetails';

class PostPage extends Component {

  constructor(props) {
    super(props);

    this.handleDeletion = this.handleDeletion.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }

  componentDidMount() {
    this.props.fetchPostById(this.props.match.params.id);
    this.props.fetchCommentsFromPost(this.props.match.params.id);
  }

  handleDeletion() {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  }

  handleVote(id, vote) {
    this.props.handleVote(id, vote);
  }

  render() {
    return (
      <div className="column">
        <PostDetails {...this.props.post} />

        <div className="buttons has-addons">
          <span className="button is-small is-success" onClick={() => this.handleVote(this.props.post.id, 'upVote')}>Upvote</span>
          <span className="button is-small is-warning" onClick={() => this.handleVote(this.props.post.id, 'downVote')}>Downvote</span>
          <span className="button is-small is-danger" onClick={this.handleDeletion}>Delete Post</span>
        </div>

        <NewComment post={this.props.post} />

        <Comments comments={this.props.comments}/>
      </div>
    );
  }
}

function mapStateToProps({ post, comment }) {
  return {
    post: post.activePost,
    comments: comment.comments
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostById: (id) => dispatch(fetchPostById(id)),
    fetchCommentsFromPost: (PostId) => dispatch(fetchCommentsFromPost(PostId)),
    deletePost: (id) => dispatch(deletePost(id)),
    handleVote: (id, vote) => dispatch(votePost(id, vote))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostPage));

/**
 * Class that represent the Post 
 */

import React, { Component } from 'react';

import PostHeadline from './PostHeadline';
import { connect } from 'react-redux';

import { fetchPostById, fetchCommentsFromPost, deletePost } from '../actions';
import NewComment from './NewComment';
import Comments from './Comments';

class PostDetails extends Component {

  constructor(props) {
    super(props);

    this.handleDeletion = this.handleDeletion.bind(this);
  }

  componentDidMount() {
    this.props.fetchPostById(this.props.match.params.id);
    this.props.fetchCommentsFromPost(this.props.match.params.id);
  }

  handleDeletion() {
    this.props.deletePost(this.props.post.id);
  }

  render() {
    return (
      <div className="column">
        <PostHeadline {...this.props.post} />

        <a className="button is-danger" onClick={this.handleDeletion}>Delete Post</a>

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
    deletePost: (id) => dispatch(deletePost(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);

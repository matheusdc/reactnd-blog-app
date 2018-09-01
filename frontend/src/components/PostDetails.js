/**
 * Class that represent the Post 
 */

import React, { Component } from 'react';

import PostHeadline from './PostHeadline';
import { connect } from 'react-redux';

import { fetchPostById, fetchCommentsFromPost } from '../actions';

class PostDetails extends Component {

  componentDidMount() {
    this.props.fetchPostById(this.props.match.params.id);
    this.props.fetchCommentsFromPost(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <PostHeadline {...this.props.post} />
        <ul>
          {this.props.comments.map((comment) => (
            <li key={comment.id}>{ comment.body }</li>
          ))}
        </ul>
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
    fetchCommentsFromPost: (PostId) => dispatch(fetchCommentsFromPost(PostId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);

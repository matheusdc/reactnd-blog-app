/**
 * Class that represent the Post 
 */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchPostById, fetchCommentsFromPost } from '../actions';
import CommentEditor from '../components/CommentEditor';
import Comments from '../components/Comments';
import PostDetails from '../components/PostDetails';
import PostActionButtons from '../components/PostActionButtons';

class PostPage extends Component {

  componentDidMount() {
    this.props.fetchPostById(this.props.match.params.id);
    this.props.fetchCommentsFromPost(this.props.match.params.id);
  }

  componentDidUpdate() {
    if(this.props.notFound)
      this.props.history.push('/');
  }

  render() {
    if(!this.props.post) 
      return <div className="column">Please wait, loading post...</div>;

    return (
      <div className="column">
        <PostDetails {...this.props.post} />

        <PostActionButtons id={this.props.post.id} voteScore={this.props.post.voteScore}/>

        <CommentEditor post={this.props.post} />

        <Comments comments={this.props.comments}/>
      </div>
    );
  }
}

function mapStateToProps({ post, comment }) {
  let comments = [];
  if(post.activePost.id && comment[post.activePost.id]) {
    comments = comment[post.activePost.id]
  }

  return {
    post: post.activePost,
    notFound: post.notFound,
    comments,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostById: (id) => dispatch(fetchPostById(id)),
    fetchCommentsFromPost: (PostId) => dispatch(fetchCommentsFromPost(PostId))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostPage));

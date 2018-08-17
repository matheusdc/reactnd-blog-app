/**
 * Class that represent the Post list 
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

import Post from './Post'

class Posts extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.posts.map(post => (
            <li key={post.id}><Post {...post} /></li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ post, comment }) {
  return {
    posts: post.posts.map(p => {
      return {
        ...p,
        comments: comment.comments.filter(c => c.parentId === p.id)
      };
    })
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: () => dispatch(fetchPosts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);

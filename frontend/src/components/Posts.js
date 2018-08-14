/**
 * Class that represent the Post list 
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Posts extends Component {
  render() {
    console.log(this.props.posts);
    return (
      <div>
        <ul>
          {this.props.posts.map(post => (
            <li key={post.id}>{post.name}</li>
          ))}
        </ul>
      </div>
    )
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
  }
}

export default connect(
  mapStateToProps
)(Posts)

/**
 * Class that represent the CategoryPage list 
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Posts from '../components/Posts';
import { fetchPostsByCategory } from '../actions';

class CategoryPage extends Component {

  fetchPosts () {
    const category = this.props.match.params.id;
    this.props.fetchPosts(category);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.fetchPosts();
    }
  }

  render() {
    const categoryName = this.props.match.params.id;
    return (
      <div className="column">
        <h2 className="title">{(categoryName) ? categoryName + ' Category' : 'All Categories'}</h2>
        <Posts posts={this.props.posts} /> 
      </div>
    );
  }
}

function mapStateToProps({ post }) {
  return {
    posts: post.posts
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (name) => dispatch(fetchPostsByCategory(name))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryPage));
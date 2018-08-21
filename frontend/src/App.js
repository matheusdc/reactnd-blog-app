import React, { Component } from 'react';
import './App.css';

import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import NewPost from './components/NewPost';
import Categories from './components/Categories';

import { fetchPosts } from './actions';
import CategoryPage from './pages/CategoryPage';
import PostDetails from './components/PostDetails';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Categories</h1>
        <Categories />

        <Route exact path="/" component={CategoryPage}/>
        <Route exact path="/category/:id" component={CategoryPage}/>
        <Route exact path="/new" component={NewPost}/>
        <Route exact path="/post/:id" component={PostDetails}/>
        
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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));

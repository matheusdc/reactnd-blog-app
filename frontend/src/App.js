import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import NewPost from './components/NewPost';
import Categories from './components/Categories';

import CategoryPage from './pages/CategoryPage';
import PostPage from './pages/PostPage';

class App extends Component {

  render() {
    return (
      <div className="columns">
        <Categories />

        <Route exact path="/" component={CategoryPage}/>
        <Route exact path="/category/:id" component={CategoryPage}/>
        <Route exact path="/new" component={NewPost}/>
        <Route exact path="/posts/:id" component={PostPage}/>
      </div>
    );
  }
}

export default (App);

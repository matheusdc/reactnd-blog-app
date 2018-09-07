import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import PostEditor from './components/PostEditor';
import Categories from './components/Categories';

import CategoryPage from './pages/CategoryPage';
import PostPage from './pages/PostPage';
import EditPostPage from './pages/EditPostPage';

class App extends Component {

  render() {
    return (
      <div className="columns">
        <Categories />

        <Route exact path="/" component={CategoryPage}/>
        <Route exact path="/category/:id" component={CategoryPage}/>
        <Route exact path="/posts/:id" component={PostPage}/>
        <Route exact path="/new" component={PostEditor}/>
        <Route exact path="/edit/:id" component={EditPostPage}/>
      </div>
    );
  }
}

export default (App);

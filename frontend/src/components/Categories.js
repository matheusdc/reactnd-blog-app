/**
 * Class that represent the Category list 
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';

import { Link } from 'react-router-dom';

class Categories extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <nav className="panel column is-one-quarter">
        <p className="panel-heading">
          Categories
        </p>
        {this.props.categories.map(category => (
          <Link to={'/category/' + category.path} className="panel-block" key={category.name}>{category.name}</Link>
        ))}
        <Link to="/" className="panel-block" key='allcategories'>All categories</Link>
        <Link to="/new" className="panel-block" key='newpost'>Create a Post</Link>
      </nav>
    )
  };
}

function mapStateToProps({ category }) {
  return {
    categories: category.categories
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: () => dispatch(fetchCategories())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);

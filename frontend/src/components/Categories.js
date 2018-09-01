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
      <div className="column is-one-quarter">
        <aside className="menu">
          <p className="menu-label">
            Categories
          </p>
          <ul className="menu-list">
            {this.props.categories.map(category => (
              <li key={category.name}><Link to={'/category/' + category.path}>{category.name}</Link></li>
            ))}
            <li key='allcategories'><Link to="/">All categories</Link></li>
          </ul>
          <p className="menu-label">
            Administration
          </p>
          <ul className="menu-list">
            <li><Link to="/new" key='newpost'>Create a Post</Link></li>
          </ul>
        </aside>
      </div>
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

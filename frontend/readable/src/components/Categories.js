import React, { Component } from 'react';

class Categories extends Component {

    render() {
        let { categories } = this.props;
        return (
            <div className="blog-categories">
                <h1 className="blog-categories-title">Categories</h1>
                <ul className="blog-categories-list">
                    {categories.map( (categorie, index ) => <li key={index} className='blog-categories-item'> { categorie.name } </li>) }
                </ul>
            </div>
        )
    }
}

export default Categories
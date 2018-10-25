import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeList.css';

class RecipeList extends Component {
  // TODO::: Switch from react component styles to string class names
  render() {
    const {recipes} = this.props;
    return (
      <div className="recipe-list">
        <ul>
        {
          recipes.map((recipe)=>
          <li className="recipe-list-item">
            <Recipe
              recipe={recipe}
             />
          </li>
        )
        }
      </ul>
      </div>
    );
  }

}

export default RecipeList;

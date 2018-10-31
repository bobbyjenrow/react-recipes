import React, { Component } from 'react';
import Recipe from './Recipe';
// import './RecipeList.css';

class RecipeList extends Component {
  // TODO::: Switch from react component styles to string class names
  render() {
    const {recipes,handleDelete,handleUpdate} = this.props;
    return (
      <div className="recipe-list">
        <ul>
        <li className="recipe-list-item">
        </li>
        {
          recipes.map((recipe, i)=>
          <li key={i} className="recipe-list-item">
            <Recipe
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
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

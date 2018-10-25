import React, { Component } from 'react';
import Recipe from './Recipe';
import List from '@material-ui/core/List'

class RecipeList extends Component {
  // TODO::: Switch from react component styles to string class names
  render() {
    const {recipes} = this.props;
    return (
      <div className="recipe-list">
        <List>
        {
          recipes.map((recipe)=>
          <li className="recipe-list-item">
            <Recipe
              recipe={recipe}
             />
          </li>
        )
        }
      </List>
      </div>
    );
  }

}

export default RecipeList;

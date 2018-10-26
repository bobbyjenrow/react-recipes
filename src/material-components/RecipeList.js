import React, { Component } from 'react';
import Recipe from './Recipe';
import {List,ListItem} from '@material-ui/core'

class RecipeList extends Component {
  // TODO::: Switch from react component styles to string class names
  render() {
    const {recipes} = this.props;
    return (
      <div className="recipe-list" style={{display: 'flex', justifyContent: 'center'}}>
        <List>
        {
          recipes.map((recipe,index)=>
          <ListItem key={index} className="recipe-list-item">
            <Recipe
              recipe={recipe}
              style={{marginBottom: '1rem'}}
             />
          </ListItem>
        )
        }
      </List>
      </div>
    );
  }

}

export default RecipeList;

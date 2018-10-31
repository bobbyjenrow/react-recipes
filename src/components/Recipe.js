import React, { Component } from 'react';
import RecipeTag from './RecipeTag';
// import './Recipe.css';

class Recipe extends Component {
  render() {
    const {recipe: {_id,name,subtitle,ingredients,instructions,tags,author}} = this.props;
    return (
      <div className="recipe">
        <div className="recipe-header">
          <h3 className="header-name">
            {name}
          </h3>
          <h5 className="header-subtitle">
            {subtitle}
          </h5>
        </div>
        <div className="recipe-body">
          <div className="body-instructions">
            <ol>
          </ol>
          </div>
          <div className="body-ingredients">
            <ul>
            {ingredients.map((ingredient)=>
              <li>
                <Ingredient ingredient={ingredient} />
              </li>)}
            </ul>
          </div>
        </div>
        <div className="recipe-footer">
          <div className="footer-tags">
            <ul>
            {
              tags.map(
                (tag)=> <RecipeTag tag={tag} />
              )
            }
            </ul>
          </div>
          <button type="submit" onClick={()=>this.props.handleDelete(_id)} className='delete-button'>
            X
          </button>
          <button className='update-button'>
            Update
          </button>
        </div>
      </div>
    );
  }

}
const Ingredient = ({ingredient})=>{
  return(
    <div className="ingredient">
      <p className="ingredient-name">{ingredient.name} {ingredient.amount} {ingredient.units}</p>
    </div>
  )
}

export default Recipe;

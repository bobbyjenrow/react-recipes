import React, { Component } from 'react';
import RecipeTag from './RecipeTag';
import './Recipe.css';

class Recipe extends Component {

  // TODO: Figure out how to pass in the props correctly
  //
  render() {
    const {recipe: {name,subtitle,ingredients,instructions,tags,author}} = this.props;
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
            {instructions.map((step)=><li className="step">{step}</li>)}
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
              this.props.recipe.tags.map(
                (tag)=> <RecipeTag tag={tag} />
              )
            }
            </ul>
          </div>
        </div>
      </div>
    );
  }

}
const Ingredient = ({ingredient})=>{
  return(
    <div className="ingredient">
      <p className="ingredient-name">{ingredient.ingredient}</p>
      <p className="ingredient-amount">{ingredient.amount} {ingredient.units}</p>
    </div>
  )
}

export default Recipe;

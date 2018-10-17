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
          <h3 className="recipe-name">
            {name}
          </h3>
          <h5 className="recipe-subtitle">
            {subtitle}
          </h5>
        </div>
        <div className="recipe-body">
          <div className="recipe-instructions">
            <ol>
            {instructions.map((step)=><li className="step">{step}</li>)}
          </ol>
          </div>
          <div className="recipe-ingredients">
            <ul className="recipe-ingredients-list">
            {ingredients.map((ingredient)=>
              <li>
                <Ingredient className="ingredient" ingredient={ingredient} />
              </li>)}
            </ul>
          </div>
        </div>
        <div className="recipe-footer">
          <div className="recipe-tags">
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

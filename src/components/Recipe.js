import React, { Component } from 'react';
import RecipeTag from './RecipeTag';
import styled from 'react-emotion';
import {css} from 'emotion'
// import './Recipe.css';

const CardContainer = styled('article')`
  width: 350px;
  border-radius: 5px;
  transition: 0.5s ease-out;
  box-shadow: 0 5px 8px 2px rgba(24,24,24,50%);
  &:hover{
    box-shadow: 0 5px 10px 3px rgba(24,24,24,50%);
  }
`
const contentSpacing = css(`
  padding: .5rem 1rem;
`)
const CardHeader = styled('div')`
${contentSpacing}
`
const CardBody = styled('div')`
${contentSpacing}

`
const CardFooter = styled('div')`
${contentSpacing}

`

class Recipe extends Component {
  render() {
    const {recipe: {_id,name,subtitle,ingredients,instructions,tags,author}} = this.props;
    return (
      <CardContainer className="recipe">
        <CardHeader className="recipe-header">
          <h3 className="header-name">
            {name}
          </h3>
          <h5 className="header-subtitle">
            {subtitle}
          </h5>
        </CardHeader>
        <CardBody className="recipe-body">
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
        </CardBody>
        <CardFooter className="recipe-footer">
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
        </CardFooter>
      </CardContainer>
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

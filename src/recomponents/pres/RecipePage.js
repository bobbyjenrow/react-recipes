import React, { Component } from 'react';

import {CardHeader,CardFooter,CardBody} from '../styled/components'
import {StyledButton,ScrollableBody} from '../styled/elements'
import styled from 'react-emotion'
import {css} from 'emotion'
import {unsplash800} from '../../endpoints'
import {Link} from 'react-router-dom'

const ImageHeader = styled('div')`
  display: block;
  padding: .5rem 1rem;
  background: linear-gradient(var(--overlay),var(--overlay)), url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: var(--accent);
  transition: .3s ease;
  &:hover{
    color: var(--background);
    cursor: pointer;
  }
`
export const StyledCard = styled('article')`
width: 100%;
height: 100vh;
margin: 1rem;
border-radius: 5px;
transition: 0.5s ease-out;
box-shadow: 0 5px 8px 2px rgba(24,24,24,50%);
&:hover{
  box-shadow: 0 5px 10px 3px rgba(24,24,24,50%);
}
`
const RecipePage = ({handleDelete, recipe: {_id,name,subtitle,ingredients,instructions,tags,author}}) => {
    const genRandom = () => Math.floor(Math.random() * 200);
    const random = genRandom();
    const imageUrl = `${unsplash800}/?sig=${random}`;
    return (
      <StyledCard className="recipe">
      <Link to={`/recipes/${_id}`}>
        <ImageHeader imageUrl={imageUrl} >
        <h3>{name}</h3>
        <h5>{subtitle}</h5>
        </ImageHeader>
      </Link>
        <CardBody className="recipe-body">
          <ScrollableBody className="body-instructions">{instructions}</ScrollableBody>
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
          <StyledButton type="submit" onClick={()=>handleDelete(_id)} className='delete-button'>
            X
          </StyledButton>
          <StyledButton className='update-button'>
            Update
          </StyledButton>
        </CardFooter>
      </StyledCard>
)}

const Ingredient = ({ingredient})=>{
  return(
    <div className="ingredient">
      <p className="ingredient-name">{ingredient.name} {ingredient.amount} {ingredient.units}</p>
    </div>
  )
}

export default RecipePage;

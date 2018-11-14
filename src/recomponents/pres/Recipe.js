import React, { Component } from 'react';

import {StyledCard,CardHeader,CardFooter,CardBody} from '../styled/components'
import {StyledButton,ScrollableBody} from '../styled/elements'
import styled from 'react-emotion'
import {css,cx} from 'emotion'
import {unsplash800} from '../../endpoints'
import {Link} from 'react-router-dom'
import TabbedSection from './TabbedSection'

const ImageHeader = styled('div')`
  display: block;
  padding: .5rem 1rem;
  background: linear-gradient(var(--overlay),var(--overlay)), url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: var(--primary);
  transition: .3s ease;
  &:hover{
    color: var(--background);
    cursor: pointer;
  }
`
const activeClass = css`
background-color: var(--primary);
color: var(--background);
`
class Recipe extends Component{
  render(){
    const {handleDelete,recipe: {_id,name,body,subtitle,ingredients,instructions,tags,author}} = this.props
    const genRandom = () => Math.floor(Math.random() * 200);
    const random = genRandom();
    const imageUrl = `${unsplash800}/?sig=${random}`;
    return (
      <StyledCard className="recipe">
        <Link to={`/recipes/${name}`}>
          <ImageHeader imageUrl={imageUrl} >
          <h3>{name}</h3>
          <h5>{subtitle}</h5>
          </ImageHeader>
        </Link>
        <TabbedSection description={body} ingredients={ingredients} instructions={instructions} />
        <CardFooter className="recipe-footer">
          <StyledButton type="submit" onClick={()=>handleDelete(_id)} className='delete-button'>
            X
          </StyledButton>
          <StyledButton className='update-button'>
            Update
          </StyledButton>
        </CardFooter>
      </StyledCard>
)}}

const Ingredient = ({ingredient})=>{
  return(
    <div className="ingredient">
      <p className="ingredient-name">{ingredient.name} {ingredient.amount} {ingredient.units}</p>
    </div>
  )
}

export default Recipe;

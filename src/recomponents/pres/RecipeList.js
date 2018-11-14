import React, { Component } from 'react';
import Recipe from './Recipe';

import styled from 'react-emotion'

const RecipeListContainer = styled('div')`
  display: grid;
  grid-gap: 1rem;
  margin: 0 auto;
  @media screen and (min-width: 748px){
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1200px){
    grid-template-columns: 1fr 1fr 1fr;
  }
`
const GridItem = styled('div')`
  display: flex;
  width: 100%;
  justify-content: center;
`

// Needs State
// Needs Handlers
// Needs

const RecipeList = ({recipes,handleDelete,handleUpdate}) => {
    return (
      <RecipeListContainer className="recipe-list">
        {
          recipes.map((recipe, i)=>
          <GridItem>
            <Recipe
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              recipe={recipe}
             />
          </GridItem>
        )}
      </RecipeListContainer>
)}

export default RecipeList;

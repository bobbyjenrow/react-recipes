import React, { Component } from 'react';
import Recipe from './Recipe';
// import './RecipeList.css';
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
class RecipeList extends Component {
  // TODO::: Switch from react component styles to string class names
  render() {
    const {recipes,handleDelete,handleUpdate} = this.props;
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
        )
        }
      </RecipeListContainer>
    );
  }
}

export default RecipeList;

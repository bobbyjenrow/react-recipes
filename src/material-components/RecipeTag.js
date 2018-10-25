import React from 'react';
import Chip from '@material-ui/core/Chip'


const RecipeTag = ({tag}) => (
  <Chip label={tag} color='secondary' clickable className="recipe-tag"/>
);

export default RecipeTag;

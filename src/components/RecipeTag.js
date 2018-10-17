import React, { Component } from 'react';
import './RecipeTag.css';


const RecipeTag = ({tag}) => (
  <button className="recipe-tag">
    {tag}
  </button>
);

export default RecipeTag;

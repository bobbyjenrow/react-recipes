import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import './NewRecipe.css'

class Recipe extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      subtitle: '',
      steps: [''],
      ingredients: [{ingredient: '', amount: null, units: null}]
    }
  }
  updateName = (e)=>{
    this.setState({name: e.target.value});
  }
  updateSubtitle = (e)=>{
    this.setState({subtitle: e.target.value});
  }
  addStep = ()=>{
    let newState = this.state.steps;
    newState.push('')
    this.setState({steps: newState})
  }
  updateStep = (inc,e)=>{
    let steps = [...this.state.steps];
    let step = e.target.value;
    steps[inc] = step;
    this.setState({steps: steps});
  }
  addIngredient = () =>{
    let newIngredient = {ingredient: null, amount: null, units: null};
    let newState = this.state.ingredients;
    newState.push(newIngredient);
    this.setState({ingredients: newState})
  }
  updateIngredient(e, i, type){
    let value = e.target.value;
    let ingredients = this.state.ingredients;
    switch (type) {
      case 'ingredient':
        ingredients[i].ingredient = value;
        break;
      case 'amount':
        ingredients[i].amount = value;
        break;
      case 'units':
        ingredients[i].units = value;
        break;
    }
    this.setState({ingredients: ingredients})
  }
  render(){
    return (
    <form action="" className="new-recipe">
      <div className="recipe-header">
        <input type="text" className="recipe-name" onKeyUp={this.updateName}/>
        <input type="text" className="recipe-subtitle" onKeyUp={this.updateSubtitle}/>
      </div>
    <div className="recipe-body">
      <div className="recipe-steps">
        { this.state.steps.map((step,i) =>
          <input onKeyUp={(e)=>(this.updateStep(i,e))} type="text" className="recipe-step" key={i} placeholder="next step..."/>)}
        <button type="button" className="add-step" onClick={this.addStep}>+</button>
      </div>
      <div className="recipe-ingredients">
        { this.state.ingredients.map((ingredient,i) =>
          <div key={i} className="recipe-ingredient">
            <input className="ingredient-name" onKeyUp={(e)=>(this.updateIngredient(e,i, 'ingredient'))} type="text" placeholder="next ingredient..."/>
            <input className="ingredient-amount" onKeyUp={(e)=>(this.updateIngredient(e,i, 'amount'))} type="text" placeholder="amount..."/>
            <input className="ingredient-units" onKeyUp={(e)=>(this.updateIngredient(e,i, 'units'))} type="text" placeholder="units..."/>
          </div>
        )}
        <button type="button" className="add-ingredient" onClick={this.addIngredient}>+</button>
      </div>
    </div>
    </form>
  )}
}

export default Recipe;

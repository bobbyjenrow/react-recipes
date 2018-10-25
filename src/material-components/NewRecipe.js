import React, {Component} from 'react';

import {  FormControl,
          FormControlLabel,
          FormGroup,Input,
          FormLabel} from '@material-ui/core'

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
    <FormControl action="" className="new-recipe">
      <FormGroup className="recipe-header">
        <Input type="text" className="recipe-name" onKeyUp={this.updateName}/>
        <Input type="text" className="recipe-subtitle" onKeyUp={this.updateSubtitle}/>
      </FormGroup>
    <FormGroup className="recipe-body">
      <FormGroup className="recipe-steps">
        { this.state.steps.map((step,i) =>
          <Input onKeyUp={(e)=>(this.updateStep(i,e))} type="text" className="recipe-step" key={i} placeholder="next step..."/>)}
        <button type="button" className="add-step" onClick={this.addStep}>+</button>
      </FormGroup>
      <FormGroup className="recipe-ingredients">
        { this.state.ingredients.map((ingredient,i) =>
          <div key={i} className="recipe-ingredient">
            <Input className="ingredient-name" onKeyUp={(e)=>(this.updateIngredient(e,i, 'ingredient'))} type="text" placeholder="next ingredient..."/>
            <Input className="ingredient-amount" onKeyUp={(e)=>(this.updateIngredient(e,i, 'amount'))} type="text" placeholder="amount..."/>
            <Input className="ingredient-units" onKeyUp={(e)=>(this.updateIngredient(e,i, 'units'))} type="text" placeholder="units..."/>
          </div>
        )}
        <button type="button" className="add-ingredient" onClick={this.addIngredient}>+</button>
      </FormGroup>
    </FormGroup>
    </FormControl>
  )}
}

export default Recipe;

import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import { reduxForm, Field, FieldArray } from 'redux-form'

import styled from 'react-emotion';
import {css,keyframes} from 'emotion'
// import './NewRecipe.css'

const StyledForm = styled('form')`
  box-shadow: var(--shadow-base);
  max-width: 350px;
  margin: 1rem auto;
  padding: 1rem;
  line-height: 4rem;
  transition: 0.5s ease;
  &:hover{
  box-shadow: var(--shadow-hover);
  }
`
const StyledInputLine = styled('div')`
  display: flex;
  flex-flow: column;
  align-items: left;

`
const inputBorderTransition = keyframes(`
  0% { border-bottom: 1px solid var(--text); opacity: .6;}
  50% { border-bottom: 1px solid var(--text); opacity: 1;}
  100% { border-bottom: 1px solid var(--primary); opacity: 1;}
`)
const styledTextInput = css(`
  font-size: 1rem;
  border-radius: 2px;
  outline: none;
  border: 0;
  box-shadow: 0;
  border-bottom: 1px solid var(--text);
  opacity: .6;
  color: var(--text);
  &:hover{

  }
  &:focus{
    animation: ${inputBorderTransition} 300ms ease;
    border-bottom: 1px solid var(--primary);
    opacity: 1;
    &::placeholder{
      animation: ${inputBorderTransition} 300ms ease;
      color: var(--primary);
    }
  }
  &:after{

  }
`)
const subForm = css(`
  padding-left: 1rem;
`)
const newRecipe = ({handleSubmit, pristine, reset, submitting}) => {
    return (
    <StyledForm autocomplete="off" onSubmit={handleSubmit} className="new-recipe" >
    <StyledInputLine>
      <label className="label">Title</label>
      <Field name="name" component="input" type="text" className={styledTextInput} placeholder="recipe title..."/>
    </StyledInputLine>
    <StyledInputLine>
      <label className="label">Subtitle</label>
      <Field name="subtitle" component="input" type="text" className={styledTextInput} placeholder="recipe subtitle..."/>
    </StyledInputLine>
        <FieldArray name="ingredients" component={renderIngredients} />
        <FieldArray name="instructions" component={renderInstructions} />
      <button type="submit" className="button is-link">Submit</button>
    </StyledForm>
  )}

const renderIngredients = ({fields, meta:{error, submitFailed}}) => (
  <div>
  <label htmlFor=""><h3>Ingredients</h3></label>

    {
      fields.map((ingredient,i)=>(
        <StyledInputLine className="new-ingredient-item" key={i}>
          <Field className={styledTextInput} name={`${ingredient}.name`} type="text" component={renderField} label={`Ingredient Name`}  />
          <Field className={styledTextInput} name={`${ingredient}.amount`} type="text" component={renderField} label={`Amount`}  />
          <Field className={styledTextInput} name={`${ingredient}.units`} type="text" component={renderField} label={`Units`}  />
          <button type="button" title="Remove Ingredient" onClick={()=> fields.remove(i)}>Remove</button>
        </StyledInputLine>
      ))
    }{error &&
    <StyledInputLine className="error">
      {error}
    </StyledInputLine>}
    <StyledInputLine>
    <button type="button" title="Add Ingredient" onClick={()=> fields.push()}>Add Ingredient</button>
    {submitFailed &&
      error &&
      <span>
      {error}
      </span>}
    </StyledInputLine>
  </div>
)

const renderInstructions = ({fields, meta:{error, submitFailed}}) => (
  <div>
    <label htmlFor=""><h3>Instructions</h3></label>
    <StyledInputLine>
    <button type="button" title="Add Step" onClick={()=> fields.push()}>Add Step</button>
      {submitFailed &&
        error &&
        <span>
          {error}
        </span>}
    </StyledInputLine>
    {
      fields.map((step,i)=>(
        <StyledInputLine className="new-instruction-item" key={i}>
        <Field autocomplete="off" className={styledTextInput}  name={`${step.content}`} type="text" component={renderField} label={`Step ${i + 1}`}  />
        <button type="button" title="Remove Step" onClick={()=> fields.remove(i)}>Remove</button>
        </StyledInputLine>
      ))
    }{error &&
      <li className="error">
        {error}
      </li>}
  </div>
)
const renderField = ({ input, label, type, meta: { touched, error } }) =>(
  <div className={subForm}>
    <div>
      <input autocomplete="off" className={styledTextInput} {...input} type={type} placeholder={label} />
      {touched &&
        error &&
        <span>
          {error}
        </span>}
    </div>
  </div>
)

export default reduxForm({
  form: 'newRecipe'
})(newRecipe);

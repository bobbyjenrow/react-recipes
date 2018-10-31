import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import { reduxForm, Field, FieldArray } from 'redux-form'
// import './NewRecipe.css'

const newRecipe = ({handleSubmit, pristine, reset, submitting}) => {
    return (
    <form onSubmit={handleSubmit} className="new-recipe" >
      <label className="label">Title</label>
        <Field name="name" component="input" type="text" className="new-recipe-title" placeholder="recipe title..."/>
      <label className="label">Subtitle</label>
        <Field name="subtitle" component="input" type="text" className="new-recipe-subtitle" placeholder="recipe subtitle..."/>
        <FieldArray name="ingredients" component={renderIngredients} />
        <FieldArray name="instructions" component={renderInstructions} />
      <button type="submit" className="button is-link">Submit</button>
    </form>
  )}

const renderIngredients = ({fields, meta:{error, submitFailed}}) => (
  <ul>
  <label htmlFor=""><h3>Ingredients</h3></label>

    {
      fields.map((ingredient,i)=>(
        <li className="new-ingredient-item" key={i}>
          <Field name={`${ingredient}.name`} type="text" component={renderField} label={`Ingredient Name`}  />
          <Field name={`${ingredient}.amount`} type="text" component={renderField} label={`Amount`}  />
          <Field name={`${ingredient}.units`} type="text" component={renderField} label={`Units`}  />
          <button type="button" title="Remove Ingredient" onClick={()=> fields.remove(i)}>Remove</button>
        </li>
      ))
    }{error &&
    <li className="error">
      {error}
    </li>}
    <li>
    <button type="button" title="Add Ingredient" onClick={()=> fields.push()}>Add Ingredient</button>
    {submitFailed &&
      error &&
      <span>
      {error}
      </span>}
    </li>
  </ul>
)

const renderInstructions = ({fields, meta:{error, submitFailed}}) => (
  <ul>
    <label htmlFor=""><h3>Instructions</h3></label>
    <li>
    <button type="button" title="Add Step" onClick={()=> fields.push()}>Add Step</button>
      {submitFailed &&
        error &&
        <span>
          {error}
        </span>}
    </li>
    {
      fields.map((step,i)=>(
        <li className="new-instruction-item" key={i}>
        <Field name={`${step.content}`} type="text" component={renderField} label={`Step ${i + 1}`}  />
        <button type="button" title="Remove Step" onClick={()=> fields.remove(i)} />
        </li>
      ))
    }{error &&
      <li className="error">
        {error}
      </li>}
  </ul>
)
const renderField = ({ input, label, type, meta: { touched, error } }) =>(
  <div>
    <label>
      {label}
    </label>
    <div>
      <input {...input} type={type} placeholder={label} />
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

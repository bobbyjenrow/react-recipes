import React, {Component} from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form'
import {StyledForm,StyledInputLine,StyledFormSection} from '../styled/components'
import {StyledButton,baseInputs} from '../styled/elements'
import {css} from 'emotion'

const subForm = css(`
  padding-left: 1rem;
`)
const newRecipe = ({handleSubmit, pristine, reset, submitting}) => {
    return (
    <StyledForm autocomplete="off" onSubmit={handleSubmit} className="new-recipe" >
    <StyledInputLine>
      <label className="label">Title</label>
      <Field name="name" component="input" type="text" className={baseInputs} placeholder="recipe title..."/>
    </StyledInputLine>
    <StyledInputLine>
      <label className="label">Subtitle</label>
      <Field name="subtitle" component="input" type="text" className={baseInputs} placeholder="recipe subtitle..."/>
    </StyledInputLine>
        <FieldArray name="ingredients" component={IngredientsSection} />
        <FieldArray name="instructions" component={InstructionsSection} />
      <StyledButton type="submit" className="button is-link">Submit</StyledButton>
    </StyledForm>
  )}

const IngredientsSection = ({fields, meta:{error, submitFailed}}) => (
  <StyledFormSection>
    <label htmlFor=""><h3>Ingredients</h3></label>
      {
        fields.map((ingredient,i)=>(
          <StyledInputLine className="new-ingredient-item" key={i}>
            <Field className={baseInputs} name={`${ingredient}.name`} type="text" component={renderField} label={`Ingredient Name`}  />
            <Field className={baseInputs} name={`${ingredient}.amount`} type="text" component={renderField} label={`Amount`}  />
            <StyledButton type="button" title="Remove Ingredient" onClick={()=> fields.remove(i)}>Remove</StyledButton>
          </StyledInputLine>
        ))
      }{error &&
      <StyledInputLine className="error">
        {error}
      </StyledInputLine>}
      <StyledInputLine>
      <StyledButton type="button" title="Add Ingredient" onClick={()=> fields.push()}>Add Ingredient</StyledButton>
      {submitFailed &&
        error &&
        <span>
        {error}
        </span>}
    </StyledInputLine>
  </StyledFormSection>
)

const InstructionsSection = ({fields, meta:{error, submitFailed}}) => (
  <StyledFormSection>
    <label htmlFor=""><h3>Instructions</h3></label>
    <StyledInputLine>
    <StyledButton type="button" title="Add Step" onClick={()=> fields.push()}>Add Step</StyledButton>
      {submitFailed &&
        error &&
        <span>
          {error}
        </span>}
    </StyledInputLine>
    {
      fields.map((step,i)=>(
        <StyledInputLine className="new-instruction-item" key={i}>
        <Field autocomplete="off" className={baseInputs}  name={`${step.content}`} type="text" component={renderField} label={`Step ${i + 1}`}  />
        <StyledButton type="button" title="Remove Step" onClick={()=> fields.remove(i)}>Remove</StyledButton>
        </StyledInputLine>
      ))
    }{error &&
      <li className="error">
        {error}
      </li>}
  </StyledFormSection>
)
const renderField = ({ input, label, type, meta: { touched, error } }) =>(
  <div className={subForm}>
      <input autocomplete="off" className={baseInputs} {...input} type={type} placeholder={label} />
      {touched &&
        error &&
        <span>
          {error}
        </span>}
  </div>
)

export default reduxForm({
  form: 'newRecipe'
})(newRecipe);

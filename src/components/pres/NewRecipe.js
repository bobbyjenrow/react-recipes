import React, { Component } from 'react';

import {StyledForm,StyledInputLine,StyledFormSection,StyledCard,CardHeader,CardFooter,CardBody} from '../styled/components'
import {baseInputs,baseButtons,primary,StyledInput,StyledInputLabel,Alert} from '../styled/elements'
import styled from 'react-emotion'
import {css,cx} from 'emotion'
import {Link} from 'react-router-dom'
import TabbedSection from './TabbedSection'
import validate from "./NewRecipeValidators"

import { reduxForm, Field, FieldArray } from 'redux-form'

const StyledFormWrapper = styled('div')`
  max-width: 350px;
  height: 100%;
  padding: 1rem;
`
const StyledButton = styled('button')`
  ${baseButtons}
  ${primary}
  font-size: 1rem;
  padding: .8rem;
  border-radius: 1px;
  transition: .2s ease;
  cursor: pointer;
`
const StyledButtonSm = styled('button')`
  ${baseButtons}
  ${primary}
  font-size: .8rem;
  padding: .5rem;
  border-radius: 1px;
  transition: .2s ease;
  cursor: pointer;
`
const StyledDeleteButton = styled('button')`
  ${baseButtons}
  ${primary}
  margin: .1rem 0;
  padding: .2rem;
  border-radius: 1px;
  transition: .2s ease;
  cursor: pointer;
  font-size: .8rem;
  align-self: flex-end;
`
const ColorHeader = styled('div')`
  display: block;
  padding: .5rem 1rem;
  background-color: var(--primary);
  color: var(--background);
  transition: .3s ease;
`
const fullSize = css(`
height: 100%;
`)
const activeClass = css(`
background-color: var(--primary);
color: var(--background);
`)
const FormFooter = styled('div')(`
width: 100%;
padding: 1rem 0;
display: flex;
flex-flow: row;
justify-content: space-between;
`)
const UList = styled('ul')`
list-style-type: none;
padding: 0;
`
const OList = styled('ol')`
list-style-type: none;
padding: 0;
`
const UListItem = styled('li')`

`
const OListItem = styled('li')`
`
class NewRecipeWizard extends Component{
  state = {page: 1};

  nextPage = ()=>{this.setState({page: this.state.page + 1})}
  prevPage = ()=>{this.setState({page: this.state.page - 1})}

  render(){
    const {onSubmit} = this.props
    const {page} = this.state
    return (
      <StyledForm className={fullSize}>
      {page === 1 && (<WizardFirst handleNext={this.nextPage} />)}
      {page === 2 && (<WizardSecond previousPage={this.prevPage} handleNext={this.nextPage} />)}
      {page === 3 && (<WizardThird previousPage={this.prevPage} handleSubmit={onSubmit} />)}
      </StyledForm>)
}}
const WizardFirst = ({handleNext})=>(
  <form >
    <Field label="Name" name="name" component={renderField} type="text"/>
    <Field label="Subtitle" name="subtitle" component={renderField} type="text"/>
    <Field label="Description" name="description" component={renderField} type="text"/>
    <FormFooter>
      <StyledButton theme="primary" type="button" onClick={handleNext}>Next</StyledButton>
    </FormFooter>
  </form>
)

const WizardSecond = ({handleNext,previousPage})=>(
  <form >
    <StyledInputLabel>Ingredients</StyledInputLabel>
    <FieldArray name="ingredients" label="Ingredient" component={renderIngredients}/>
    <FormFooter>
      <StyledButton theme="primary" onClick={previousPage} type="button">Previous</StyledButton>
      <StyledButton theme="primary" onClick={handleNext} type="button">Next</StyledButton>
    </FormFooter>
  </form>
)
const WizardThird = ({handleSubmit,previousPage})=>(
  <form onSubmit={handleSubmit}>
    <StyledInputLabel>Instructions</StyledInputLabel>
    <FieldArray label="Instructions" name="instructions" component={renderInstructions}/>
    <FormFooter>
      <StyledButton theme="primary" onClick={previousPage} type="button">Previous</StyledButton>
      <StyledButton theme="primary" type="submit">Submit</StyledButton>
    </FormFooter>
  </form>
)

const renderField = ({ input, inputSize, label, labelSize, type, meta: { touched, error } }) =>(
  <StyledInputLine>
      <StyledInputLabel size={labelSize}>{label}</StyledInputLabel>
      <StyledInput autocomplete="off" {...input} inputSize={inputSize} type={type} placeholder={label} />
      {touched &&  error &&  <Alert type="error" > {error} </Alert>}
  </StyledInputLine>
)
const renderSimpleField = ({ input, inputSize, label, labelSize, type, meta: { touched, error } }) =>(
      <StyledInput autocomplete="off" {...input} inputSize={inputSize} type={type} placeholder={label} />
)
const renderIngredients = ({ fields, meta: { touched, error } }) =>(
  <UList>
    { fields.map((f,i)=> (
      <UListItem>
        <StyledInputLine>
          <Field  label="Ingredient Name" name={`${f}.name`} component={renderSimpleField} type="text" />
          <Field  label="Amount"  name={`${f}.amount`} component={renderSimpleField} type="text" />
          <StyledDeleteButton onClick={() => fields.remove(i)} type="button" style={{width: '30%',justifySelf: 'flex-end'}}>Remove</StyledDeleteButton>
        </StyledInputLine>
      </UListItem>
    ))}
    <StyledButtonSm type="button" onClick={() => fields.push()}>Add</StyledButtonSm>
  </UList>
)
const renderInstructions = ({ fields, meta: { touched, error } }) =>(
  <OList>
    { fields.map((f,i)=> (
      <OListItem>
        <StyledInputLine>
          <Field  label="Ingredient Name" name={`${f}`} component={renderSimpleField} type="text" />
          <StyledDeleteButton onClick={() => fields.remove(i)} type="button" >Remove</StyledDeleteButton>
        </StyledInputLine>
      </OListItem>
    ))}
    <StyledButtonSm type="button" onClick={() => fields.push()}>Add</StyledButtonSm>
  </OList>
)
export default reduxForm({
  form: 'newRecipe',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(NewRecipeWizard);

import React, { Component , Fragment} from 'react';

import {StyledCard,CardHeader,CardFooter,CardBody} from '../styled/components'
import {StyledButton,ScrollableBody} from '../styled/elements'
import styled from 'react-emotion'
import {css,injectGlobal} from 'emotion'
import {unsplash800} from '../../endpoints'
import {Link} from 'react-router-dom'
import Transitions from './Transitions'
const activeClass = css`
background-color: var(--primary);
color: var(--background);
`
const ButtonContainer= styled('div')`
  display: flex;
  flex-flow: row;
`
const Button = styled('button')`
border: 0;
outline: none;
font-size: 1rem;
width: 33.333%;
padding: 1rem;
color: var(--primary);
transition: .2s ease;
&:hover{
  transition: .2s ease;
  cursor: pointer;
  color: var(--background);
  background-color: var(--primary);
}
&:active{
  color: var(--background);
  background-color: var(--primary);
}
`
injectGlobal(`
  .fade-
`)
const ButtonGroup = ({active,toggleSection}) => {
  return (
  <ButtonContainer>
    <Button className={active == 'description'? activeClass : 'inactive'} type="button" onClick={()=>toggleSection('description')}>Description</Button>
    <Button className={active == 'ingredients'? activeClass : 'inactive'} type="button" onClick={()=>toggleSection('ingredients')}>Ingredients</Button>
    <Button className={active == 'instructions'? activeClass : 'inactive'} type="button" onClick={()=>toggleSection('instructions')}>Instructions</Button>
  </ButtonContainer>
)}
class TabbedSection extends Component{
  state = {
    active: 'description'
  }
  toggleSection = (section) =>{
    this.setState({active: section})
  }
  render(){
    const {description,ingredients,instructions} = this.props;
    return (
        <Fragment>
        <ButtonGroup active={this.state.active} toggleSection={this.toggleSection} />
        <Transitions duration="300ms" transition="fade">
            <CardBody className="recipe-body">
              {
                (this.state.active == 'description') ?
                  description || `Here is a default description. This is here because the recipe has no description. Doesn't sound very tasty to me..` :
                (this.state.active  == 'ingredients') ?
                  ingredients.map((g,i)=>(<li key={i}>{`${g.name} ${g.amount} ${g.units}`}</li>)) :
                (this.state.active  == 'instructions') ?
                  instructions.map((g,i)=>(<li key={i}>{g}</li>)) :
                  ' Nothing to show '

              }
            </CardBody>
        </Transitions>
        </Fragment>

)}}

export default TabbedSection;

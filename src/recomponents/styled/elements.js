import styled from 'react-emotion'
import {css, keyframes} from 'emotion'

// Theme Styles
const primary = css(`
  color: var(--background);
  background-color: var(--primary);
  &:hover{
    color: var(--primary);
    background-color: var(--background);
  }
`)
const light = css(`
  color: var(--primary);
  background-color: var(--background);
  &:hover{
    color: var(--background);
    background-color: var(--primary);
  }
`)
// Buttons

const baseButtons = css(`
border: 0;
outline: none;
`)

export  const StyledButton = ({theme}) => styled('button')`
  ${baseButtons}
  ${theme == 'primary' ? primary : null}
  ${theme == 'light' ? light : null}
`
export  const FabButton = styled('button')`
  ${baseButtons}
`
// Inputs
const inputBorderTransition = keyframes(`
  0% { border-bottom: 1px solid var(--text); opacity: .6;}
  50% { border-bottom: 1px solid var(--text); opacity: 1;}
  100% { border-bottom: 1px solid var(--primary); opacity: 1;}
`)
export const baseInputs = css(`
  font-size: 1rem;
  border-radius: 2px;
  outline: none;
  border: 0;
  box-shadow: 0;
  border-bottom: 1px solid var(--text);
  opacity: .6;
  color: var(--text);
  &:hover{}
  &:focus{
    animation: ${inputBorderTransition} 300ms ease;
    border-bottom: 1px solid var(--primary);
    opacity: 1;
    &::placeholder{
      animation: ${inputBorderTransition} 300ms ease;
      color: var(--primary);
    }
  }
  &:after{}
`)
export const StyledInput = styled('input')`
  ${baseInputs}
`
// Other

export const ScrollableBody = styled('div')``

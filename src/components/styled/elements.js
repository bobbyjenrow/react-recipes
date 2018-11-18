import styled from 'react-emotion'
import {css, keyframes} from 'emotion'

const theme = {
  error: css`color: var(--primary);`,
  info: css`color: var(--primary);`,
  success: css`color: var(--primary);`,
  warm: css`color: var(--primary);`
}


// Theme Styles
export const primary = css(`
  color: var(--background);
  background-color: var(--primary);
  &:hover{
    color: var(--primary);
    background-color: var(--background);
  }
`)
export const light = css(`
  color: var(--primary);
  background-color: var(--background);
  &:hover{
    color: var(--background);
    background-color: var(--primary);
  }
`)
// Buttons

export const baseButtons = css(`
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
  ${
    (props)=>
    (props.size == 'sm') ?
      'width: 33.3333%' :
    (props.size == 'md') ?
      'width: 50%'  :
    (props.size == 'lg') ?
      'width: 80%': null
  }
`
export const StyledInputLabel = styled('label')`
${
  (props)=>
  (props.size == 'sm') ?
    'font-size: .8rem' :
  (props.size == 'md') ?
    'font-size: 1rem'  :
  (props.size == 'lg') ?
    'font-size: 1.2rem': null
}
`
// Other

export const ScrollableBody = styled('div')``

export const Alert = styled('span')`
font-size: .8rem;
line-height: 1rem;
  ${
    (props)=>
    (props.type == 'error') ?
      theme.error :
    (props.type == 'success') ?
      theme.success :
    (props.type == 'info') ?
      theme.info :
    (props.type == 'warn') ?
      theme.warn : null
  }
`

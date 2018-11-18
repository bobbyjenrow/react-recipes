import styled from 'react-emotion';
import {css} from 'emotion'

export const StyledCard = styled('article')`
width: 350px;
border-radius: 5px;
transition: 0.5s ease-out;
box-shadow: 0 5px 8px 2px rgba(24,24,24,50%);
&:hover{
  box-shadow: 0 5px 10px 3px rgba(24,24,24,50%);
}
`
export const contentSpacing = css(`
  padding: .5rem 1rem;
`)
export const CardHeader = styled('div')`
${contentSpacing}
`
export const CardBody = styled('div')`
${contentSpacing}
font-size: 1rem
min-height: 300px;
max-height: 300px;
`
export const CardFooter = styled('div')`
${contentSpacing}
`
export const StyledForm = styled('form')`
  box-shadow: var(--shadow-base);
  width: 100%;
  height: 100%;
  max-width: 350px;
  margin: 1rem auto;
  padding: 1rem;
  line-height: 4rem;
  transition: 0.5s ease;
  &:hover{
  box-shadow: var(--shadow-hover);
  }
`
export const ScrollableBody = styled('div')`

`

// Forms

export const StyledFormSection = styled('section')`

`
export const StyledInputLine = styled('div')`
  display: flex;
  flex-flow: column;

`

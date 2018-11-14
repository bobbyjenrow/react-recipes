import React from 'react';

import {CardBody} from '../styled/components'

import styled from 'react-emotion'
import {css,injectGlobal,keyframes} from 'emotion'

import {TransitionGroup, CSSTransition} from 'react-transition-group'

injectGlobal(`
  .fade-enter {
      opacity: 0.01;
  }
  .fade-enter.fade-enter-active {
      opacity: 1;
      transition: opacity 300ms ease-in;
  }
  .fade-exit {
      opacity: 1;
  }

  .fade-exit.fade-exit-active {
      opacity: 0.01;
      transition: opacity 300ms ease-in;
  }
`)

const Transitions = ({duration,transition,children}) =>{

    return (
        <TransitionGroup>
          <CSSTransition timeout={duration} classNames={transition}>
            <CardBody className="recipe-body">
              {
                children
              }
            </CardBody>
          </CSSTransition>
        </TransitionGroup>

)}

export default Transitions;

import React from 'react'
import {css} from 'emotion'
import {Link} from 'react-router-dom'

const container = css`
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 0 2rem 2rem 0;
  border: 0;
  padding: 0;
  background-color: transparent;
`

const NewRecipeButton = ({isActive,toggleNewRecipe})=>{
  if (isActive == true){
    return (
      <Link className={container} onClick={toggleNewRecipe} to="/">
      <svg width="82px" height="82px" viewBox="0 0 82 82" version="1.1" xmlns="http://www.w3.org/2000/svg" >
          <defs>
              <filter x="-28.6%" y="-28.6%" width="157.1%" height="157.1%" filterUnits="objectBoundingBox" id="filter-1">
                  <feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                  <feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                  <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
                  <feMerge>
                      <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                      <feMergeNode in="SourceGraphic"></feMergeNode>
                  </feMerge>
              </filter>
          </defs>
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Close-Button" filter="url(#filter-1)" transform="translate(6.000000, 2.000000)">
                  <circle id="Oval-Copy-3" fill="#E27272" cx="35" cy="35" r="35"></circle>
                  <path d="M35,22.5 L35,46.5" id="Path-2-Copy-2" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" transform="translate(35.000000, 34.500000) rotate(90.000000) translate(-35.000000, -34.500000) "></path>
              </g>
          </g>
      </svg>
      </ Link>
    )
  }
  else {
    return(
      <Link className={container} onClick={toggleNewRecipe} to="/NewRecipe">
      <svg width="82px" height="82px" viewBox="0 0 82 82" version="1.1" xmlns="http://www.w3.org/2000/svg" >
          <defs>
              <filter x="-28.6%" y="-28.6%" width="157.1%" height="157.1%" filterUnits="objectBoundingBox" id="filter-1">
                  <feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                  <feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                  <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
                  <feMerge>
                      <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                      <feMergeNode in="SourceGraphic"></feMergeNode>
                  </feMerge>
              </filter>
          </defs>
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Open-Button" filter="url(#filter-1)" transform="translate(6.000000, 2.000000)">
                  <circle id="Oval" fill="#E27272" cx="35" cy="35" r="35"></circle>
                  <path d="M35,35 L35,23 L35,35 L47,35 L35,35 Z M35,35 L35,47 L35,35 L23,35 L35,35 Z" id="Combined-Shape" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
          </g>
      </svg>
      </ Link>
    )
  }
}

export default NewRecipeButton

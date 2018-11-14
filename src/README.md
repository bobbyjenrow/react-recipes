# My Recipes app
This is a cool app.

## What are all these dependencies?
- axios -- Alternative to fetch for API calls.
- emotion -- CSS in JS library
- react -- View Library
- react-dom -- DOM utilites for React.
- react-emotion -- CSS in JS helper to create styled react components.
- react-redux -- Redux helpers for React.
- react-script -- Comes standard with create react app.
- recompose -- Extracting logic from presentational components. Helps generate Higher order components.
- redux -- State management
- redux-actions -- Generates  FSA-compliant actions in Redux. Greatly reduces boilerplate.
- redux-form -- Form management utility
- redux-logger -- A logger middleware for redux
- redux-thunk -- Asynchronous action helper

## How does all this work?

1. Application state is managed by redux.
  - Actions are dispatched by react components to effect state changes.
  - How actions change the state is determined by reducer functions.
2. View components are rendered by React and styled using Emotion, a CSS in JS library.
3. API calls made on action dispatch.

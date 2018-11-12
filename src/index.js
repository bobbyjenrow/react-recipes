import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {injectGlobal} from 'emotion'
// redux
import { Provider } from 'react-redux';
import configureStore from './redux/store';

ReactDOM.render(
  <Provider store={configureStore()}>
  <App />
</Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
injectGlobal(`
@import url('https://fonts.googleapis.com/css?family=Poppins|Raleway|Source+Code+Pro');
:root{
  /* Colors */
  --primary: #E27272;
  --accent:  salmon;
  --accent-l: color(salmon lightness(40%));
  --text: #6A6868;
  --background: #DEE3E7;
  /* Fonts */
  --base-font-size: 20px;
  --font-family-body: 'Raleway', sans-serif;
  --font-family-heading: 'Poppins', sans-serif;
  --font-family-code: 'Source Code Pro', sans-serif;

  --shadow-base: 0 5px 8px 2px rgba(24,24,24,50%);
  --shadow-hover: 0 5px 10px 3px rgba(24,24,24,50%);
}
*{
  box-sizing: border-box;
}

html,body,#root{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body{
  font-size:  var(--base-font-size);
  font-family: var(--font-family-body);
  font-weight: 300;
  color: var(--text);
  margin: 0;
  padding: 0;
}

h1,h2,h3,h4,h5,h6{
  font-family: var(--font-family-heading);
  font-weight: 300;
}
a{
  color: var(--accent);
  text-decoration: none;
}
a:hover{
  color: var(--accent-l);
}

code {
  font-family: "Source Code Pro", Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
`)

//import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

//React without JSX 

/* createRoot(document.getElementById('root')).render(
  React.createElement("ul", {
    children: [React.createElement("li", {
      children: "One"
    }), React.createElement("li", {
      children: "Two"
    }), React.createElement("li", {
      children: "Three"
    })]
  })
) */

/**
 * <ul>
 * <li>1</li>
 * <li>1</li>
 * <li>1</li>
 * </ul>
 */


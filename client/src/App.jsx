/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
} */

/* import { useState } from "react"; */
import "./App.css";
import ContextAPIExample from "./ReactHooks/ContextAPIExample";
/* import ResponsiveAppBar from "./components/AppBar";
import SimpleContainer from "./components/Container"; */
/* import Counter from "./components/Counter"; */
/* import EffectHook from "./ReactHooks/EffectHook"; */
/* import StateExample from "./ReactHooks/StateExampleHook"; */
/* import PropsExample from "./concepts/Props";
import ReactChildren from "./concepts/ChildrenExample";
import JavaScriptExpression from "./concepts/JavaScriptExpression";
import ReactFragment from "./concepts/ReactFragment";
import ComponentUsingArrowFunction from "./concepts/ComponentUsingArrowFunction";
import ArrayComponent from "./concepts/ArrayComponent";
import ConditionalRendering from "./concepts/ConditionalRendering";
import CustomElement from "./concepts/CustomElement";
import EventHandlers from "./concepts/EventHandlers";
import InlineStyleExample from "./concepts/InlineStyles";
import StylesUsingCSSModules from "./concepts/StylesUsingCSSModules"; 
import FormWithStyledComponents from "./concepts/FormWithStyledComponents"; */

function App() {
  /* const [data, setData] = useState(0); */
  console.log("APp component");

  return (
    <div>
      {/* <h1>Hello there!</h1>
      <PropsExample title="Props" />

      <ReactChildren count="1">
        I will render as a children and i am just a text
      </ReactChildren>

      <ReactChildren count="2">
        <div>Children Example using JSX syntax</div>
      </ReactChildren>

      <JavaScriptExpression />

      <ReactFragment />

      <ComponentUsingArrowFunction />

      <ArrayComponent />

      <h2>Conditional Rendering</h2>
      <ConditionalRendering />
      <ConditionalRendering />

      <CustomElement CustomTag="button" />
      <CustomElement CustomTag="span" />
      <CustomElement CustomTag="p" /> */}
      {/* <CustomElement CustomTag={ArrayComponent} /> */}

      {/* <EventHandlers /> */}
      {/* <InlineStyleExample />
      <StylesUsingCSSModules /> */}
      {/* <FormWithStyledComponents /> */}
      {/* <StateExample /> */}
      {/* <Counter /> */}
      {/* <EffectHook data={data} setData={setData} /> */}
      {/* <ResponsiveAppBar />
      <SimpleContainer /> */}
      <ContextAPIExample />
    </div>
  );
}

export default App;

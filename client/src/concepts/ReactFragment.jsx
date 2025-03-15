import React, { Fragment } from "react";

function ReactFragment() {
  return (
    <>
      <h2>React - Fragment</h2>
      <div>
        A common pattern in React is for a component to return multiple
        elements. Fragments let you group a list of children without adding
        extra nodes to the DOM.
      </div>
    </>
  );
}

function ReactFragment2() {
  return (
    <React.Fragment>
      <h2>React - Fragment2</h2>
      <div>
        A common pattern in React is for a component to return multiple
        elements. Fragments let you group a list of children without adding
        extra nodes to the DOM.
      </div>
    </React.Fragment>
  );
}

function ReactFragment3() {
  return (
    <Fragment>
      <h2>React - Fragment3</h2>
      <div>
        A common pattern in React is for a component to return multiple
        elements. Fragments let you group a list of children without adding
        extra nodes to the DOM.
      </div>
    </Fragment>
  );
}

export default ReactFragment;

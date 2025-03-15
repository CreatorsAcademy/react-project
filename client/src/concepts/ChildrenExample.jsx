function ReactChildren({ children, count }) {
  return (
    <div>
      <h2>Children Example - {count}</h2>
      <p>
        Children lets you manipulate and transform the JSX you received as the
        children prop.
      </p>
      <div>{children}</div>
    </div>
  );
}

export default ReactChildren;

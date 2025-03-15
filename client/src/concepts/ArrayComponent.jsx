function ArrayComponent() {
  return (
    <div>
      <h2>Using Array inside JSX - Also adding key in react</h2>
      {[1, 2, 3, 4, 5].map((num) => num)}
      {[
        <div key="1">One</div>,
        <div key="2">Two</div>,
        <div key="3">Three</div>,
        <div key="4">Four</div>,
      ]}
    </div>
  );
}

export default ArrayComponent;

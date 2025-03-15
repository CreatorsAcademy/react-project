function JavaScriptExpression() {
  return (
    <div>
      <h2>Run JS code inside JSX syntax</h2>
      <div>
        In JSX, wrap any JS code inside curly braces. For Example - {"{1 + 1}"}
      </div>
      <code>
        <pre>1 + 1 = {1 + 1}</pre>
        <pre>4 * 5 = {4 * 5}</pre>
      </code>
    </div>
  );
}

export default JavaScriptExpression;

function PropsExample({ title }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Props are read-only</p>
      <p>
        React components use props to communicate with each other. Every parent
        component can pass some information to its child components by giving
        them props. Props might remind you of HTML attributes, but you can
        passany JavaScript value through them, including objects, arrays, and
        functions.
      </p>
    </div>
  );
}

export default PropsExample;

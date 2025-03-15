function CustomElement({ CustomTag }) {
  return (
    <div>
      <h2>Dynamic Element = {CustomTag}</h2>
      <CustomTag>I am custom tag</CustomTag>
    </div>
  );
}

export default CustomElement;

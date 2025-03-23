import { useState } from "react";

/**
 * useState will always return an array with length 2
 * index - 0 contains the state value
 * index 1 contains a method, which will be used to update the state value
 * state updates can be done in 2 ways
 * setData(value) - Approach 1
 * setData((prevState)=>value); - Approach 2
 *
 *
 * @returns
 */

function StateExample() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  let content;
  if (name) {
    content = <h2>Hello {name}</h2>;
  } else {
    content = <h2>Hello User</h2>;
  }

  return (
    <div>
      <div>
        <label>Enter Name: </label>
        <input name="name" value={name} onChange={handleChange} />
      </div>
      <div style={{ paddingTop: "1rem" }}>{content}</div>
    </div>
  );
}

export default StateExample;

import { useEffect, useState } from "react";
/**
 * useEffect hook
 * using useEffect hook we can perform some actions based on component lifecycle
 * Also called as side effects
 * useEffect hook will accepts 2 parameter
 * parameter 1 - A callback function
 * parameter 2 - An array with list of dependencies
 *
 * Component Lifecylce
 * Stage 1 : Mounting Phase
 * Stage 2 : Updating Phase
 * Stage 3 : UnMounting Phase
 *
 *
 * Lifting state up
 *
 * what is prop drilling
 * A - user data
 * A->B,C
 * B- D,E,F
 * C - G,H,I
 *
 * E, H, I -> User information
 *
 * A
 * return <B user={user} />
 * <C user={user} />
 *
 * B
 * return <E user={user}
 *
 * C
 * return <H user={user} />
 * <I user={user} />
 *
 *
 *
 * Context API
 *
 * A Componet - Context API define user obj
 *
 *
 *
 */

function EffectHook(props) {
  const [count, setCount] = useState(0);
  //const [data, setData] = useState(0);
  const { data, setData } = props;
  console.log(data);

  useEffect(() => {
    console.log("Component mounting phase");
    console.log("I will execute only once");
    return () => {
      //component unmount
      //This is the right place to do any cleanup
    };
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  useEffect(() => {
    console.log("Component update", count, data);
  }, [count, data]);

  const clickHandler = () => {
    setCount((prev) => prev + 1);
    setData((prev) => prev + 1);
  };

  return (
    <div>
      <div>A sample component</div>
      <div>
        <button onClick={clickHandler}>Click</button>
      </div>
      <div>You have clicked {count} times</div>
    </div>
  );
}

export default EffectHook;

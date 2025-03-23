import { useContext } from "react";
import { SampleContext } from "./SampleContext";

const ContextAPIExample = () => {
  const { name, updateName } = useContext(SampleContext);
  const handleClick = () => {
    updateName("Bella");
  };
  return (
    <div>
      <div>ContextAPIExample - {name}</div>
      <button onClick={() => handleClick()}>Click</button>
    </div>
  );
};

export default ContextAPIExample;

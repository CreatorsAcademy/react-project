import { createContext, useState } from "react";

export const SampleContext = createContext({
  name: "John",
  updateName: () => {},
  onClick: () => {},
  data: [],
  items: [],
});

export const ContextExample = ({ children }) => {
  const [name, setName] = useState("John");
  const updateName = (userName) => {
    setName(userName);
  };
  return (
    <SampleContext.Provider value={{ name, updateName }}>
      {children}
    </SampleContext.Provider>
  );
};

/***
 * 1. create createContext
 * 2. Add Context.Provider with value
 * 3. Child components can access value by using useContext
 */

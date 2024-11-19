import React, { useState } from "react";
import Child from "./components/Examples/Child";
import ParentContext from "./components/Assignment 1/ParentContext";
import HocParent from "./components/Assignment 2/HocParent";
import withFetchHoc from "./components/Assignment 2/HocCustomHook";
import HookUser from "./components/Asignment 3/HookUser";

export interface User {
  id: number;
  name: string;
  email: string;
}

//1. Context Creation
export const contexObj = React.createContext<User | null>(null);

const App: React.FC = () => {
  const [userObj, setUserObj] = useState<User>({
    id: 1,
    name: "Scott",
    email: "scott@gmail.com",
  });

  const HocParentWithGrid = withFetchHoc(HocParent);

  return (
    <div>
      {/* <div style={{ margin: "10px", border: "2px solid red" }}>
        <h3>This is App Component</h3>
        <hr />
        <contexObj.Provider value={userObj}>
          <Child />
        </contexObj.Provider>
      </div> */}
      <hr />
      <div style={{ margin: "20px", textAlign: "center" }}>
        <label>Assignment 1</label>
        <h2>Using Class Components</h2>
        <ParentContext />
      </div>
      <hr />
      <div style={{ margin: "20px", textAlign: "center" }}>
        <label>Assignment 2</label>
        <HocParentWithGrid
          url={"https://reqres.in/api/users"}
          dataProperties={["id", "first_name", "last_name", "email"]}
        />
      </div>
      <div style={{ margin: "20px", textAlign: "center" }}>
        <label>Assignment 3</label>
        <HookUser />
      </div>
    </div>
  );
};

export default App;

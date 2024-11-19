import { Component, createContext } from "react";
import ChildContext from "../Assignment 1/ChildContext";

interface User {
  id: number;
  name: string;
  email: string;
}

export const UserContext = createContext<User | null>(null);

class ParentContext extends Component {
  state = {
    userObj: {
      id: 1,
      name: "Aditya",
      email: "aditya@gmail.com",
    },
  };

  render() {
    const { userObj } = this.state;

    return (
      <div>
        <div style={{ margin: "10px", border: "2px solid red" }}>
          <h3>This is Parent Component using Class component</h3>
          <hr />

          {/* 2. Context Provider */}
          <UserContext.Provider value={userObj}>
            <ChildContext />
          </UserContext.Provider>
        </div>
      </div>
    );
  }
}

export default ParentContext;

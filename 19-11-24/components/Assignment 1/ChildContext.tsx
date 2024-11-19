import React from "react";
import GrandChildContext from "./GrandChildContext";

class ChildContext extends React.Component {
  render() {
    return (
      <div style={{ margin: "10px", border: "2px solid Green" }}>
        <h3>This is Child Component using class component</h3>
        <hr />
        <GrandChildContext />
      </div>
    );
  }
}

export default ChildContext;

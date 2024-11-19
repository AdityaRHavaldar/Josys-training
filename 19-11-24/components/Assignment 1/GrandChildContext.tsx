import React, { Component } from "react";
import { UserContext } from "./ParentContext";

class GrandChildContext extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {(user) => (
          <div style={{ margin: "10px", border: "2px solid Blue" }}>
            <h3>This is Grand Child Component using class component</h3>
            <hr />

            <div>
              <h3>User Details:</h3>
              <p>
                User Id: {user?.id} <br />
                User Name: {user?.name} <br />
                User Email: {user?.email}
              </p>
            </div>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default GrandChildContext;

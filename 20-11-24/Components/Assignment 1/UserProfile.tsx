import React, { useContext } from "react";
import AuthContext from "./01.AuthContext";

const UserProfile: React.FC = () => {
  const context = useContext(AuthContext);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      {context.user ? (
        <div>
          <h2>Welcome, {context.user.name}!</h2>
          <button
            onClick={context.logout}
            style={{
              border: "none",
              padding: "5px 8px",
              background: "red",
              borderRadius: "4px",
            }}
          >
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <h2>You are not logged in.</h2>
          <button
            onClick={() => context.login({ id: 1, name: "Aditya" })}
            style={{
              border: "none",
              padding: "5px 8px",
              background: "yellow",
              borderRadius: "4px",
            }}
          >
            Log In
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;

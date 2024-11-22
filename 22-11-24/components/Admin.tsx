import React from "react";
import { Link, Outlet } from "react-router-dom";

const Admin: React.FC = () => {
  return (
    <div style={{ backgroundColor: "orange", padding: "10px" }}>
      <h1>This is Admin Component</h1>
      <div>
        <Link to="/Admin/AdminHome">Admin Home</Link> |{" "}
        <Link to="/Admin/Projects">Projects</Link> |
        <Link to="/Admin/Customers">Customers</Link> |
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;

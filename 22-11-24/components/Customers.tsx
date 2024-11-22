import React from "react";
import UserTable from "./Pagination";

const Customers: React.FC = () => {
  return (
    <div
      style={{ backgroundColor: "LightPink", padding: "10px", margin: "14px" }}
    >
      <h1>Customers</h1>
      <UserTable />
    </div>
  );
};

export default Customers;

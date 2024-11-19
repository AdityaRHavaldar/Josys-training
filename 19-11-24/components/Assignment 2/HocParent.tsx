import React from "react";
import "./Hoc.css";

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
};

type HocParentProps = {
  url: string;
  dataProperties: string[];
  data: User[];
};

const HocParent: React.FC<HocParentProps> = ({ data, dataProperties }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h1>User Table using Hoc</h1>
      <table
        style={{
          width: "60%",
          margin: "auto",
          borderCollapse: "collapse",
          border: "1px solid grey",
        }}
        className="UserTable"
      >
        <thead>
          <tr>
            {dataProperties.map((property) => (
              <th key={property}>{property}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              {dataProperties.map((property) => (
                <td key={property}>{user[property as keyof User]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HocParent;

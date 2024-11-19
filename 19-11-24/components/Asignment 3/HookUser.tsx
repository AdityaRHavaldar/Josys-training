import React, { useState } from "react";
import useStorage from "./CustomHook";

const HookUser: React.FC = () => {
  const { getItem, setItem, removeItem } = useStorage();
  const [name, setName] = useState("");

  const handleAddName = () => {
    setItem("name", name);
    alert("Added");
  };

  const handleRemoveName = () => {
    removeItem("name");
    alert("Removed");
  };

  const handleGetName = () => {
    const storedName = getItem("name");
    if (storedName) {
      alert(`Name from localStorage: ${storedName}`);
    } else {
      alert("Not found in localStorage.");
    }
  };

  return (
    <div>
      <h1>LocalStorage Example</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={handleAddName}>Add Name</button>
      <button onClick={handleRemoveName}>Remove Name</button>
      <button onClick={handleGetName}>Get Name</button>
    </div>
  );
};

export default HookUser;

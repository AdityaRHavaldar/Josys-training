import React from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import AddUserForm from "./components/AddUserForm";
import EmpList from "./components/Assignment 1/EmpList";
import VehicleRegistrationForm from "./components/Assignment 2/VehicleRegistration";
import LifecycleDemo from "./components/Assignment 3/LifecycleDemo";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <ul className="navBar">
          <li>
            <Link to="/" className="link">
              Add User (Example 1)
            </Link>
          </li>
          <li>
            <Link to="/add-user-form" className="link">
              Add User Form (Example 2)
            </Link>
          </li>
          <li>
            <Link to="/employee-list" className="link">
              Employee List (Assignment 1)
            </Link>
          </li>
          <li>
            <Link to="/vehicle-registration" className="link">
              Vehicle Registration (Assignment 2)
            </Link>
          </li>
          <li>
            <Link to="/Lifecycle-Demo" className="link">
              Lifecycle Demo (Assignment 3)
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<AddUser />} />
        <Route path="/add-user-form" element={<AddUserForm />} />
        <Route path="/employee-list" element={<EmpList />} />
        <Route
          path="/vehicle-registration"
          element={<VehicleRegistrationForm />}
        />
        <Route path="/Lifecycle-Demo" element={<LifecycleDemo />} />
      </Routes>
    </Router>
  );
};
export default App;

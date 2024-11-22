import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import App from "./App";
import ProtectedRoute from "./components/ProtectedRoute";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const NotFound = lazy(() => import("./components/NotFound"));
const Emps = lazy(() => import("./components/Emps"));
const Depts = lazy(() => import("./components/Depts"));
const Admin = lazy(() => import("./components/Admin"));
const AdminHome = lazy(() => import("./components/AdminHome"));
const Projects = lazy(() => import("./components/Projects"));
const Customers = lazy(() => import("./components/Customers"));
const Login = lazy(() => import("./components/Login"));
const Details = lazy(() => import("./components/Details"));

const router = (
  <Router>
    <h3 style={{ textAlign: "center" }}>
      Routing Implementation in React Applications
    </h3>
    <hr />

    <div style={{ textAlign: "center" }}>
      <Link to="/">Home</Link> |<Link to="/Emps">Employees</Link> |
      <Link to="/Depts">Departments</Link> |<Link to="/About">About Us</Link> |
      <Link to="/Contact">Contact Us</Link> |<Link to="/Login">Login</Link> |{" "}
      <Link to="/Admin">Admin</Link>
    </div>
    <hr />

    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Details/:id" element={<Details />} />

        <Route
          path="/Admin"
          element={
            <ProtectedRoute returnUrl="/Admin" roles={["admin"]}>
              <Admin />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminHome />} />
          <Route path="AdminHome" element={<AdminHome />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Customers" element={<Customers />} />
        </Route>

        <Route
          path="/Emps"
          element={
            <ProtectedRoute returnUrl="/Emps" roles={["user", "admin"]}>
              <Emps />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Depts"
          element={
            <ProtectedRoute returnUrl="/Depts" roles={["user", "admin"]}>
              {" "}
              <Depts />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </Router>
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(router);

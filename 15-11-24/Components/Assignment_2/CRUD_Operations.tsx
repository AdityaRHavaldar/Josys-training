import React, { useState } from "react";
import "./CRUD_Operations.css";

type Employee = {
  employeeNumber: number;
  employeeName: string;
  departmentId: number;
  salary: number;
};

const Crud_Operations: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [employeeNumber, setEmployeeNumber] = useState<number | string>("");
  const [employeeName, setEmployeeName] = useState("");
  const [departmentId, setDepartmentId] = useState<number | string>("");
  const [salary, setSalary] = useState<number | string>("");
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );

  const getData = () => {
    setEmployees((prev) => [
      {
        employeeNumber: 1,
        employeeName: "Aditya",
        departmentId: 21,
        salary: 30000,
      },
      {
        employeeNumber: 2,
        employeeName: "Aviral",
        departmentId: 22,
        salary: 40000,
      },
      {
        employeeNumber: 3,
        employeeName: "Archit",
        departmentId: 23,
        salary: 50000,
      },
      {
        employeeNumber: 4,
        employeeName: "Samir",
        departmentId: 21,
        salary: 60000,
      },
      {
        employeeNumber: 5,
        employeeName: "Rijish",
        departmentId: 23,
        salary: 50000,
      },
      {
        employeeNumber: 6,
        employeeName: "Satish",
        departmentId: 22,
        salary: 40000,
      },
      ...prev,
    ]);
  };

  const addEmployee = () => {
    const empNumber = Number(employeeNumber);
    const deptId = Number(departmentId);
    const empSalary = Number(salary);

    if (empNumber && employeeName && deptId && empSalary) {
      const newEmployee: Employee = {
        employeeNumber: empNumber,
        employeeName,
        departmentId: deptId,
        salary: empSalary,
      };
      setEmployees([...employees, newEmployee]);
      clearFields();
    } else {
      alert("All fields must be filled out and valid!");
    }
  };

  const updateEmployee = () => {
    if (selectedEmployee) {
      const updatedEmployees = employees.map((emp) =>
        emp.employeeNumber === selectedEmployee.employeeNumber
          ? {
              ...selectedEmployee,
              employeeNumber: Number(employeeNumber),
              employeeName,
              departmentId: Number(departmentId),
              salary: Number(salary),
            }
          : emp
      );
      setEmployees(updatedEmployees);
      clearFields();
      setSelectedEmployee(null);
    } else {
      alert("Please select an employee to update");
    }
  };

  const clearFields = () => {
    setEmployeeNumber("");
    setEmployeeName("");
    setDepartmentId("");
    setSalary("");
  };

  const deleteEmployee = (employeeNumber: number) => {
    const updatedEmployees = employees.filter(
      (emp) => emp.employeeNumber !== employeeNumber
    );
    setEmployees(updatedEmployees);
  };

  const selectEmployee = (employee: Employee) => {
    setSelectedEmployee(employee);
    setEmployeeNumber(employee.employeeNumber);
    setEmployeeName(employee.employeeName);
    setDepartmentId(employee.departmentId);
    setSalary(employee.salary);
  };

  return (
    <div>
      <h1 className="crudHeading">CRUD Operations</h1>

      <div className="inputContainer">
        <div>
          <label htmlFor="EmployeeNumber">Employee Number : </label>
          <input
            id="EmployeeNumber"
            type="number"
            placeholder="Employee Number"
            value={employeeNumber}
            onChange={(e) => setEmployeeNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="EmployeeName">Employee Name : </label>
          <input
            id="EmployeeName"
            type="text"
            placeholder="Employee Name"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="DepartmentId">Department Id : </label>
          <input
            id="DepartmentId"
            type="number"
            placeholder="Department ID"
            value={departmentId}
            onChange={(e) => setDepartmentId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Salary">Salary : </label>
          <input
            id="Salary"
            type="number"
            placeholder="Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
      </div>

      <div className="buttonsContainer">
        <button onClick={getData} className="button getData">
          Get Data
        </button>
        <button onClick={addEmployee} className="button addEmp">
          Add Employee
        </button>
        <button onClick={updateEmployee} className="button updateEmp">
          Update Employee
        </button>
        <button onClick={clearFields} className="button clearFields">
          Clear Fields
        </button>
      </div>

      <h2 className="crudHeading">Employee Table</h2>
      <table className="empTable">
        <thead>
          <tr>
            <th>Employee Number</th>
            <th>Employee Name</th>
            <th>Department ID</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee?.employeeNumber}>
              <td>{employee?.employeeNumber}</td>
              <td>{employee?.employeeName}</td>
              <td>{employee?.departmentId}</td>
              <td>{employee?.salary}</td>
              <td>
                <button
                  className="button selectEmp"
                  onClick={() => selectEmployee(employee)}
                >
                  Select
                </button>
                <button
                  className="button deleteEmp"
                  onClick={() => deleteEmployee(employee?.employeeNumber)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crud_Operations;

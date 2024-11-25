import React, { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addEmployee,
  updateEmployee,
  deleteEmployee,
  Employee,
} from "../../api/emp.service";
import "./Emp.css";

interface EmpOperationsProps {
  selectedEmployee?: Employee;
}

const EmpOperations: React.FC<EmpOperationsProps> = ({ selectedEmployee }) => {
  const [employee, setEmployee] = useState<Employee>({
    name: "",
    email: "",
    position: "",
    department: "",
  });

  const queryClient = useQueryClient();

  useEffect(() => {
    if (selectedEmployee) {
      setEmployee(selectedEmployee);
    }
  }, [selectedEmployee]);

  const addMutation = useMutation({
    mutationFn: addEmployee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
      setEmployee({
        name: "",
        email: "",
        position: "",
        department: "",
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateEmployee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteEmployee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (employee.id) {
      updateMutation.mutate(employee);
    } else {
      addMutation.mutate(employee);
    }
    setEmployee({
      name: "",
      email: "",
      position: "",
      department: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2 className="empHeading" style={{ margin: "0" }}>
        {employee.id ? "Update Employee" : "Add Employee"}
      </h2>
      <form onSubmit={handleSubmit} className="inputContainer">
        <div>
          <label htmlFor="">Name : </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={employee.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="">Email : </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={employee.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="">Position : </label>
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={employee.position}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="">Department : </label>
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={employee.department}
            onChange={handleInputChange}
            required
          />
        </div>

        <button className="button submit" type="submit">
          {employee.id ? "Update Employee" : "Add Employee"}
        </button>
      </form>

      {(addMutation.isPending ||
        updateMutation.isPending ||
        deleteMutation.isPending) && <p>Processing...</p>}

      {(addMutation.isError ||
        updateMutation.isError ||
        deleteMutation.isError) && (
        <p>
          Error:{" "}
          {
            (addMutation.error || updateMutation.error || deleteMutation.error)
              ?.message
          }
        </p>
      )}

      {addMutation.isSuccess && <p>Employee added successfully!</p>}
      {updateMutation.isSuccess && <p>Employee updated successfully!</p>}
      {deleteMutation.isSuccess && <p>Employee deleted successfully!</p>}
    </div>
  );
};

export default EmpOperations;

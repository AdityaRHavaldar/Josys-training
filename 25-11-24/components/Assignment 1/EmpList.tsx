import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchEmployees,
  Employee,
  deleteEmployee,
} from "../../api/emp.service";
import "./Emp.css";

import EmpOperations from "./EmpOperations";

const EmpList: React.FC = () => {
  const { data, error, isLoading } = useQuery<Employee[], Error>({
    queryKey: ["employees"],
    queryFn: fetchEmployees,
  });

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteEmployee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );
    if (confirmDelete) {
      deleteMutation.mutate(id);
    }
  };

  // Manage selected employee for update
  const [selectedEmployee, setSelectedEmployee] = React.useState<
    Employee | undefined
  >(undefined);

  const handleUpdate = (employee: Employee) => {
    setSelectedEmployee(employee); // Populate selectedEmployee when update is clicked
  };

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2 className="empHeading">Employee List</h2>
      <div className="empContainer">
        <EmpOperations selectedEmployee={selectedEmployee} />
        <div>
          <table className="empTable">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Position</th>
                <th>Department</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.position}</td>
                  <td>{employee.department}</td>
                  <td>
                    <button
                      className="button update"
                      onClick={() => handleUpdate(employee)}
                    >
                      Update
                    </button>
                    <button
                      className="button delete"
                      onClick={() => handleDelete(employee.id ?? 0)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Display processing status */}
          {deleteMutation.isPending && <p>Deleting...</p>}
          {deleteMutation.isError && <p>Error deleting employee</p>}
        </div>
      </div>
    </div>
  );
};

export default EmpList;

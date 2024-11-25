import axios from "axios";

export interface Employee {
  id?: number;
  name: string;
  email: string;
  position: string;
  department: string;
}

const API_URL = "http://localhost:3200/employees";

export const fetchEmployees = async (): Promise<Employee[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching employees");
  }
};

export const addEmployee = async (employee: Employee): Promise<Employee> => {
  try {
    const response = await axios.post(API_URL, employee);
    return response.data;
  } catch (error) {
    throw new Error("Error adding employee");
  }
};

export const updateEmployee = async (employee: Employee): Promise<Employee> => {
  try {
    const response = await axios.put(`${API_URL}/${employee.id}`, employee);
    return response.data;
  } catch (error) {
    throw new Error("Error updating employee");
  }
};

export const deleteEmployee = async (id: number): Promise<number> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  } catch (error) {
    throw new Error("Error deleting employee");
  }
};

import axios from "axios";

const BASE_URL = process.env.REACT_APP_USERS_API_URL;

export interface TotalPurchase {
  name: string;
  price: number;
}

export interface User {
  CustomerId: number;
  Name: string;
  City: string;
  ContactNumber: string;
  Year: number;
  Photo: string;
  TotalPurchasesPerYear: TotalPurchase[];
}

const getAllUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(`${BASE_URL}`);
  return response.data;
};

const getUserById = async (id: number): Promise<User> => {
  const response = await axios.get<User>(`${BASE_URL}/${id}`);
  return response.data;
};

const createUser = async (user: User): Promise<User> => {
  const response = await axios.post<User>(`${BASE_URL}`, user);
  return response.data;
};

const updateUser = async (user: User): Promise<User> => {
  const response = await axios.put<User>(
    `${BASE_URL}/${user.CustomerId}`,
    user
  );
  return response.data;
};

const deleteUser = async (id: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/${id}`);
};

export const userService = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

import axios from "axios";

// Vehicle Interface
export interface Vehicle {
  ownerName: string;
  contactNumber: string;
  model: string;
  registrationNumber: string;
  color: string;
}

// Fetch all vehicles
export const fetchVehicles = async (): Promise<Vehicle[]> => {
  const response = await axios.get("http://localhost:3200/vehicles");
  return response.data;
};

// Add a new vehicle
export const addVehicle = async (
  vehicle: Omit<Vehicle, "id">
): Promise<Vehicle> => {
  const response = await axios.post("http://localhost:3200/vehicles", vehicle);
  return response.data;
};

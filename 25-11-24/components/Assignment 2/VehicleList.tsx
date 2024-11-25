import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchVehicles, Vehicle } from "../../api/vehicle.service";

const VehicleList: React.FC = () => {
  const { data, error, isLoading } = useQuery<Vehicle[], Error>({
    queryKey: ["vehicles"],
    queryFn: fetchVehicles,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h3>Registered Vehicles</h3>
      <ul>
        {data?.map((vehicle, index) => (
          <li key={index}>
            {vehicle.ownerName} - {vehicle.model} - {vehicle.registrationNumber}{" "}
            - {vehicle.color}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;

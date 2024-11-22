import React, { useState, useEffect } from "react";
import { User, userService } from "../Assignment 1/UsersService";

const UserByCity: React.FC = () => {
  const [usersArray, setUsersArray] = useState<User[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>("All Cities");
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const users = await userService.getAllUsers();
      setUsersArray(users);
      extractCities(users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const extractCities = (users: User[]) => {
    const allCities = users.map((user) => user.City);
    const uniqueCities = Array.from(new Set(allCities));
    setCities(["All Cities", ...uniqueCities]);
  };

  const filteredUsers =
    selectedCity === "All Cities"
      ? usersArray
      : usersArray.filter((user) => user.City === selectedCity);

  const sortedUsers = filteredUsers.sort((a, b) =>
    a.City.localeCompare(b.City)
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex">
      <section className="w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-6 text-gray-700">
          Customers by City
        </h2>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Select City:
          </label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="mt-1 p-2 w-52 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          >
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">User ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">City</th>
              <th className="border px-4 py-2">Contact Number</th>
              <th className="border px-4 py-2">Year</th>
              <th className="border px-4 py-2">Total Purchases</th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.length > 0 ? (
              sortedUsers.map((user) => (
                <tr key={user.CustomerId} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{user.CustomerId}</td>
                  <td className="border px-4 py-2">{user.Name}</td>
                  <td className="border px-4 py-2">{user.City}</td>
                  <td className="border px-4 py-2">{user.ContactNumber}</td>
                  <td className="border px-4 py-2">{user.Year}</td>
                  <td className="border px-4 py-2">
                    {user.TotalPurchasesPerYear.reduce(
                      (total, purchase) => total + purchase.price,
                      0
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-4">
                  No users found for this city.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default UserByCity;

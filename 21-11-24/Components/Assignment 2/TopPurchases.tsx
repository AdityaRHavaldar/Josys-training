import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_USERS_API_URL;

interface Purchase {
  name: string;
  price: number;
}

interface Customer {
  CustomerId: number;
  Name: string;
  City: string;
  ContactNumber: string;
  Year: number;
  Photo: string;
  TotalPurchasesPerYear: Purchase[];
}

const TopPurchasers: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get(`${BASE_URL}`);
        setCustomers(response.data);
      } catch (error) {
        console.error("Error fetching customer data", error);
      }
    };

    fetchCustomers();
  }, []);

  const calculateTotalPurchases = (purchases: Purchase[]) => {
    return purchases.reduce((total, purchase) => total + purchase.price, 0);
  };

  const sortedCustomers = [...customers]
    .map((customer) => ({
      ...customer,
      totalPurchases: calculateTotalPurchases(customer.TotalPurchasesPerYear),
    }))
    .sort((a, b) => b.totalPurchases - a.totalPurchases)
    .slice(0, 5);

  return (
    <div>
      <h1 className="text-2xl font-bold m-5 text-center w-full">
        Top Customers
      </h1>
      <div className="grid grid-cols-5  gap-6">
        {sortedCustomers.map((customer) => (
          <div
            key={customer.CustomerId}
            className="max-w-xs rounded-lg shadow-lg bg-white"
          >
            <img
              className=" h-40 object-cover rounded-full m-auto"
              src={customer.Photo}
              alt={customer.Name}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{customer.Name}</h2>
              <p className="text-gray-500">{customer.City}</p>
              <p className="mt-2 font-medium">
                Total Purchases: ${customer.totalPurchases}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPurchasers;

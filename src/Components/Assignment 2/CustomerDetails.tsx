// 2.  Create a react component to display customer details with below url:

// 		https://www.w3schools.com/angular/customers.php

// 		a.  In page load it should display all customers
// 		b.  Provide drop-down that shows Country names
// 		c.  Data should update if the user change the country

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CustomerDetails.css";

type Customer = {
  Name: string;
  City: string;
  Country: string;
};

const CustomerList: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [filteredCustomers, setFilteredCustomers] = useState<Customer[]>([]);
  const [countries, setCountries] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("https://www.w3schools.com/angular/customers.php")
      .then((response) => {
        const customerData: Customer[] = response.data.records;

        setCustomers(customerData);
        setFilteredCustomers(customerData);

        const countryList: string[] = [""];
        customerData.forEach((customer) => {
          if (!countryList.includes(customer.Country)) {
            countryList.push(customer.Country);
          }
        });

        setCountries(countryList);
      });
  }, []);

  useEffect(() => {
    if (selectedCountry === null) {
      setFilteredCustomers(customers);
    } else {
      setFilteredCustomers(
        customers.filter((customer) => customer.Country === selectedCountry)
      );
    }
  }, [selectedCountry, customers]);
  //I am using React.changeEvent on select element
  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value === "" ? null : event.target.value);
  };

  return (
    <div className="customerDetailsContainer">
      <label>Assignment 2</label>
      <h1>Customer Details</h1>

      <div>
        <label htmlFor="countrySelect">Country : </label>
        <select
          id="countrySelect"
          value={selectedCountry || ""}
          onChange={handleCountryChange}
        >
          <option value="">Select Country</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country || "All"}
            </option>
          ))}
        </select>
      </div>

      <table className="customerTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.Name}</td>
              <td>{customer.City}</td>
              <td>{customer.Country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;

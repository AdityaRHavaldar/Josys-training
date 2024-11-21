import React, { useEffect, useState } from "react";
import { User, userService } from "./UsersService";

const UserCrud: React.FC = () => {
  const [usersArray, setUsersArray] = useState<User[]>([]);
  const [CustomerId, setCustomerId] = useState<number>(0);
  const [Name, setName] = useState<string>("");
  const [City, setCity] = useState<string>("");
  const [ContactNumber, setContactNumber] = useState<string>("");
  const [Year, setYear] = useState<number>(0);
  const [Photo, setPhoto] = useState<string>("");
  const [TotalPurchasesPerYear, setTotalPurchasesPerYear] = useState<
    { name: string; price: number }[]
  >([]);
  const [newPurchase, setNewPurchase] = useState<{
    name: string;
    price: number;
  }>({
    name: "",
    price: 0,
  });
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    userService.getAllUsers().then((data: User[]) => setUsersArray(data));
  };

  const calculateTotalPurchases = (
    totalPurchases: { name: string; price: number }[]
  ) => {
    return totalPurchases.reduce(
      (total, purchase) => total + purchase.price,
      0
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors: { [key: string]: string } = {};

    if (!Name.trim()) validationErrors.Name = "Name is required";
    if (!City.trim()) validationErrors.City = "City is required";
    if (!ContactNumber.trim())
      validationErrors.ContactNumber = "Contact number is required";
    else if (!/^\d{10}$/.test(ContactNumber))
      validationErrors.ContactNumber = "Invalid contact number";

    if (Year <= 0) validationErrors.Year = "Year must be a positive number";
    if (!Photo.trim()) validationErrors.Photo = "Photo URL is required";
    if (TotalPurchasesPerYear.length === 0)
      validationErrors.TotalPurchasesPerYear =
        "At least one total purchase is required";

    if (Object.keys(validationErrors).length > 0) {
      alert("Please fill out all fields correctly.");
      return;
    }

    const userObj: User = {
      CustomerId,
      Name,
      City,
      ContactNumber,
      Year,
      Photo,
      TotalPurchasesPerYear,
    };

    if (selectedUser == null) {
      userService.createUser(userObj).then(() => {
        alert("New User created in server successfully.");
        fetchData();
      });
    } else {
      userService.updateUser(userObj).then(() => {
        alert("Selected User updated in server successfully.");
        fetchData();
      });
    }

    setSelectedUser(null);
    clearFields();
  };

  const handleDelete = (CustomerId: number) => {
    if (window.confirm("Do you want to delete this User?") == false) {
      return;
    }

    userService.deleteUser(CustomerId).then(() => {
      alert(`Requested User-${CustomerId} was deleted successfully.`);
      fetchData();
    });
  };

  const handleCancel = () => {
    setSelectedUser(null);
    clearFields();
  };

  const clearFields = () => {
    setName("");
    setCity("");
    setContactNumber("");
    setYear(0);
    setPhoto("");
    setTotalPurchasesPerYear([]);
    setCustomerId(0);
  };

  const handleUpdate = (CustomerId: number) => {
    userService.getUserById(CustomerId).then((response: User) => {
      const userObj = response;
      setCustomerId(userObj.CustomerId);
      setName(userObj.Name);
      setCity(userObj.City);
      setContactNumber(userObj.ContactNumber);
      setYear(userObj.Year);
      setPhoto(userObj.Photo);
      setTotalPurchasesPerYear(userObj.TotalPurchasesPerYear);
      setSelectedUser(CustomerId);
    });
  };

  const handleAddPurchase = () => {
    if (!newPurchase.name.trim() || newPurchase.price <= 0) {
      alert("Please fill in both fields correctly.");
      return;
    }

    setTotalPurchasesPerYear([
      ...TotalPurchasesPerYear,
      { name: newPurchase.name, price: newPurchase.price },
    ]);

    setNewPurchase({ name: "", price: 0 });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex">
      <section className="w-1/2 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl text-center font-bold mb-6 text-gray-700">
          Perform CRUD operations on Users using AXIOS Package
        </h2>
        <h2 className="text-xl font-bold mb-6 text-gray-700">
          {selectedUser !== null ? "Update User" : "Add New User"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-between gap-2 items-center">
            <label className="block text-sm font-medium w-52 text-gray-700">
              UserNo
            </label>
            <input
              type="text"
              value={CustomerId}
              readOnly={!!selectedUser}
              onChange={(e) => setCustomerId(Number(e.target.value))}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter UserNo"
              required
            />
          </div>
          <div className="flex justify-between gap-2 items-center">
            <label className="block text-sm font-medium w-52 text-gray-700">
              User Name
            </label>
            <input
              type="text"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              pattern="[A-Za-z ]+"
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter Name"
              required
            />
          </div>
          <div className="flex justify-between gap-2 items-center">
            <label className="block text-sm font-medium w-52 text-gray-700">
              City
            </label>
            <input
              type="text"
              value={City}
              onChange={(e) => setCity(e.target.value)}
              pattern="[A-Za-z ]+"
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter City"
              required
            />
          </div>
          <div className="flex justify-between gap-2 items-center">
            <label className="block text-sm font-medium w-52 text-gray-700">
              Contact Number
            </label>
            <input
              type="text"
              value={ContactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter Contact Number"
              required
            />
          </div>
          <div className="flex justify-between gap-2 items-center">
            <label className="block text-sm font-medium w-52 text-gray-700">
              Year
            </label>
            <input
              type="number"
              value={Year}
              onChange={(e) => setYear(Number(e.target.value))}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter Year"
              required
            />
          </div>
          <div className="flex justify-between gap-2 items-center">
            <label className="block text-sm font-medium w-52 text-gray-700">
              Photo
            </label>
            <input
              type="text"
              value={Photo}
              pattern="https?://(?:www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}([\/\w \.-]*)*"
              onChange={(e) => setPhoto(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter Photo URL"
              required
            />
          </div>
          <div className="flex justify-between gap-2 items-center">
            <label className="block text-sm font-medium w-52 text-gray-700">
              Purchases
            </label>
            <div className="space-y-2 border rounded-md p-2">
              {TotalPurchasesPerYear.map((purchase, index) => (
                <div key={index} className="flex justify-evenly">
                  <span>{purchase.name}</span>
                  <span>${purchase.price}</span>
                </div>
              ))}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newPurchase.name}
                  onChange={(e) =>
                    setNewPurchase({ ...newPurchase, name: e.target.value })
                  }
                  placeholder="Product Name"
                  className="mt-1 p-2 w-1/2 border border-gray-300 rounded-lg"
                />
                <input
                  type="number"
                  value={newPurchase.price}
                  onChange={(e) =>
                    setNewPurchase({
                      ...newPurchase,
                      price: Number(e.target.value),
                    })
                  }
                  placeholder="Price"
                  className="mt-1 p-2 w-1/2 border border-gray-300 rounded-lg"
                />
              </div>
              <button
                type="button"
                onClick={handleAddPurchase}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Add Product
              </button>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </form>
      </section>

      <section className="w-full ml-6">
        <h2 className="text-xl font-bold mb-6 text-gray-700">Users List</h2>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">User ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">City</th>
              <th className="border px-4 py-2">Contact Number</th>
              <th className="border px-4 py-2">Year</th>
              <th className="border px-4 py-2">Total Purchases</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {usersArray.map((user) => (
              <tr key={user.CustomerId} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{user.CustomerId}</td>
                <td className="border">
                  <div className="flex items-center gap-2 max-h-full">
                    <img
                      className="w-9 rounded-full m-2"
                      src={user.Photo}
                      alt="UserPhoto"
                    />
                    {user.Name}
                  </div>
                </td>
                <td className="border px-4 py-2">{user.City}</td>
                <td className="border px-4 py-2">{user.ContactNumber}</td>
                <td className="border px-4 py-2">{user.Year}</td>
                <td className="border px-4 py-2">
                  {calculateTotalPurchases(user.TotalPurchasesPerYear)}
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleUpdate(user.CustomerId)}
                    className="bg-blue-500 text-white m-1 p-2 rounded-lg hover:bg-blue-700"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(user.CustomerId)}
                    className="bg-red-500 text-white m-1 p-2 rounded-lg hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default UserCrud;

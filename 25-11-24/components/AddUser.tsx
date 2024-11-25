import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUser, User } from "../api/user.serivce";
import UserList from "./UserList";

const AddUser: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      // Invalidate and refetch the "users" query
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const handleSubmit = () => {
    mutation.mutate({ name, email }); // Ensure the input matches `Omit<User, 'id'>`
  };

  return (
    <div>
      <h2>useMutation Example</h2>
      <UserList />
      <br />
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button onClick={handleSubmit} disabled={mutation.isPending}>
        Add User
      </button>
      {mutation.isPending && <p>Adding user...</p>}
      {mutation.error && <p>Error: {mutation.error.message}</p>}
    </div>
  );
};

export default AddUser;

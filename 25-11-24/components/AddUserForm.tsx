import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUser, User } from "../api/user.serivce";
import { useForm } from "react-hook-form";
import UserList from "./UserList";

const AddUserForm: React.FC = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      // Invalidate and refetch the "users" query
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  // const handleSubmit = () => {
  //   mutation.mutate({ name, email }); // Ensure the input matches Omit<User, 'id'>
  // };

  return (
    <div>
      <h2>form using useForm hook</h2>
      <UserList />
      <form
        onSubmit={handleSubmit(({ name, email }) =>
          mutation.mutate({ name, email })
        )}
      >
        <input
          {...register("name", { required: true })}
          placeholder="Enter name"
        />
        {errors.name && <span>name is required.</span>} <br />
        <input
          {...register("email", { required: true })}
          placeholder="Enter email"
        />
        {errors.email && <span>email is required.</span>} <br />
        {/* <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      /> */}
        <input type="submit" />
        {/* <button onClick={handleSubmit} disabled={mutation.isPending}>
        Add User
      </button> */}
      </form>
      {mutation.isPending && <p>Adding user...</p>}
      {mutation.error && <p>Error: {mutation.error.message}</p>}
    </div>
  );
};

export default AddUserForm;

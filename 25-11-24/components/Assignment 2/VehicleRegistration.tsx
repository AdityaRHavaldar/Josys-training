import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addVehicle, Vehicle } from "../../api/vehicle.service";
import VehicleList from "./VehicleList";

const VehicleRegistrationForm: React.FC = () => {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      ownerName: "",
      contactNumber: "",
      model: "",
      registrationNumber: "",
      color: "",
    },
  });

  const mutation = useMutation({
    mutationFn: addVehicle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["vehicles"] });
      reset();
    },
  });

  const onSubmit = (data: Vehicle) => {
    mutation.mutate(data);
  };

  return (
    <div>
      <h2>Vehicle Registration Form using useForm Hook</h2>
      <VehicleList />
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Owner Name:</label>
          <input
            {...register("ownerName", { required: "Owner name is required" })}
          />
          {errors.ownerName && <span>{errors.ownerName.message}</span>}
        </div>

        <div>
          <label>Contact Number:</label>
          <input
            {...register("contactNumber", {
              required: "Contact number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Contact number must be 10 digits",
              },
            })}
          />
          {errors.contactNumber && <span>{errors.contactNumber.message}</span>}
        </div>

        <div>
          <label>Vehicle Model:</label>
          <input
            {...register("model", { required: "Vehicle model is required" })}
          />
          {errors.model && <span>{errors.model.message}</span>}
        </div>

        <div>
          <label>Registration Number:</label>
          <input
            {...register("registrationNumber", {
              required: "Registration number is required",
              pattern: {
                value: /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/,
                message: "Invalid registration number",
              },
            })}
          />
          {errors.registrationNumber && (
            <span>{errors.registrationNumber.message}</span>
          )}
        </div>

        <div>
          <label>Vehicle Color:</label>
          <input {...register("color", { required: "color is required" })} />
          {errors.color && <span>{errors.color.message}</span>}
        </div>

        <button
          type="submit"
          className="button submit"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default VehicleRegistrationForm;

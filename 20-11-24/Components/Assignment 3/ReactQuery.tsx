// React Query helps in the process of fetching data from APIs,
// It is a good way to manage server state in a React application.
// It provides automatic caching, background fetching, error handling,
//  refetching and other features that improve performance.

import React from "react";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const fetchUsers = async () => {
  const response = await fetch("https://reqres.in/api/users/");
  const data = await response.json();
  return data.data;
};

const QueryFn: React.FC = () => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) {
    return <div>Loading users...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul style={{ width: "20%", margin: "auto" }}>
        {data.map(
          (user: { id: number; first_name: string; last_name: string }) => (
            <li key={user.id}>
              {user.first_name} {user.last_name}
            </li>
          )
        )}
      </ul>

      <button
        onClick={() => refetch()}
        style={{
          border: "none",
          padding: "5px 8px",
          background: "yellow",
          borderRadius: "4px",
          margin: "2% auto",
        }}
      >
        Refetch Users
      </button>
    </div>
  );
};

const ReactQuery: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <QueryFn />
  </QueryClientProvider>
);

export default ReactQuery;

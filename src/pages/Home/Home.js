import React from "react";
import { useAuth } from "../../contexts/auth";

export const Home = () => {
  const { loggedUser } = useAuth();

  return (
    <div>
      <h1>Welcome: {loggedUser.name}</h1>
    </div>
  );
};

import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../../graphql";
import { IClient } from "../../types/Client";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Oops, something went wrong</h1>;

  return (
    <div>
      {data.clients?.map((client: IClient) => (
        <Link to={`/${client.id}`} key={client.id}>
          <h1>Client Name: {client.name}</h1>
        </Link>
      ))}
    </div>
  );
};

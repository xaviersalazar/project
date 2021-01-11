import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../../graphql";
import { IClient } from "../../types/Client";
import "./Home.css";

export const Home: React.FC = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Oops, something went wrong</h1>;

  return (
    <div className="container">
      <h1 className="title">Clients</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.clients?.map((client: IClient) => (
            <tr key={client.id}>
              <td>
                <Link to={`/${client.id}`}>{client.id}</Link>
              </td>
              <td>{client.name}</td>
              <td>{client.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

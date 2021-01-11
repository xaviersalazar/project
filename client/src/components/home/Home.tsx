import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GET_CLIENTS } from "../../graphql";
import { IClient } from "../../types/Client";
import { Loader } from "../loader/Loader";
import { getClients } from "../../redux/actions/clientActions";
import "./Home.css";

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const clients = useSelector((state: any) => state.client.clients);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = () => {
    dispatch(getClients());
    setIsLoading(false);
  };

  return (
    <div className="container">
      <h1 className="title">Clients</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {clients.data?.clients?.map((client: IClient) => (
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
      )}
    </div>
  );
};

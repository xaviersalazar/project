import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_CLIENT } from "../../graphql";
import { ClientDetails } from "./ClientDetails";
import "./Client.css";

export const Client: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery(GET_CLIENT, {
    variables: { id: id },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Oops, something went wrong</h1>;
  console.log("data: ", data);

  return (
    <div className="client-card">
      <div className="client-pic">
        <div className="pic" />
        <p className="pic-name">
          {data.client?.name
            .split(" ")
            .map((n: string) => n[0])
            .join("")}
        </p>
        <h1>{data.client?.name}</h1>
      </div>
      {Object.entries(data.client?.additionalInfo).map(
        ([k, v]) =>
          k !== "__typename" && <ClientDetails key={k} label={k} info={v} />
      )}
    </div>
  );
};

import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_CLIENT } from "../../graphql";
import { ClientDetails } from "./ClientDetails";
import { Loader } from "../loader/Loader";
import "./Client.css";

export const Client: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, data } = useQuery(GET_CLIENT, {
    variables: { id: id },
  });

  return (
    <div className="client-card">
      {loading ? (
        <Loader />
      ) : (
        <React.Fragment>
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
        </React.Fragment>
      )}
    </div>
  );
};

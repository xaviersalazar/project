import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_CLIENT } from "../../graphql";

export const Client: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery(GET_CLIENT, {
    variables: { id: id },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Oops, something went wrong</h1>;

  return (
    <div>
      <h1>{data.client?.additionalInfo?.company}</h1>
      <h1>{data.client?.additionalInfo?.phone}</h1>
      <h1>{data.client?.additionalInfo?.email}</h1>
      <h1>{data.client?.additionalInfo?.address}</h1>
    </div>
  );
};

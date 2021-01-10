import { gql } from "@apollo/client";

export const GET_CLIENTS = gql`
  query GetClients {
    clients {
      id
      name
      age
    }
  }
`;

export const GET_CLIENT = gql`
  query GetClient($id: ID!) {
    client(id: $id) {
      name
      additionalInfo {
        company
        email
        address
        phone
      }
    }
  }
`;

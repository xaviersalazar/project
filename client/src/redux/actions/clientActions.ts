import { GET_CLIENTS, GET_CLIENT } from "../types";

const getClient = (id: string) => async (dispatch: any) => {
  fetch("http://localhost:5000/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
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
    `,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: GET_CLIENT,
        payload: res,
      });
    });
};

const getClients = () => async (dispatch: any) => {
  fetch("http://localhost:5000/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query GetClients {
          clients {
            id
            name
            age
          }
        }
      `,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: GET_CLIENTS,
        payload: res,
      });
    });
};

export { getClient, getClients };

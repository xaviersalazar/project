import { GET_CLIENT, GET_CLIENTS } from "../types";

interface Action {
  type: string;
  payload: any;
}

const initialState = {
  clients: [],
  selectedClient: {},
};

const client = (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_CLIENT:
      return {
        ...state,
        selectedClient: action.payload,
      };

    case GET_CLIENTS:
      return {
        ...state,
        clients: action.payload,
      };

    default:
      return state;
  }
};

export default client;

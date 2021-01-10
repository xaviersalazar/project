import { GraphQLID, GraphQLList, GraphQLObjectType } from "graphql";
import fs from "fs";
import { AdditionalInfoType, ClientType } from "./type";
import { Client } from "src/models/info";

const data = fs.readFileSync(__dirname + "/../../sampleData.json", "utf-8");

const parseData = () => {
  return JSON.parse(data).clients as Client[];
};

export const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve: (source, args) => {
        const clients = parseData();
        return clients.find((client) => client.id === args.id);
      },
    },
    clients: {
      type: new GraphQLList(ClientType),
      resolve: () => {
        const clients = parseData();
        return clients;
      },
    },
    additionalInfo: {
      type: AdditionalInfoType,
      args: { id: { type: GraphQLID } },
      resolve: (source, args) => {
        const clients = parseData();
        return clients.find((client) => client.id === args.id)?.additionalInfo;
      },
    },
  },
});

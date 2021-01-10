import { GraphQLList, GraphQLObjectType } from "graphql";
import fs from "fs";
import { ClientType } from "./type";
import { Client } from "src/models/info";

const data = fs.readFileSync(__dirname + "/../../sampleData.json", "utf-8");

export const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    clients: {
      type: new GraphQLList(ClientType),
      resolve: () => {
        const clients: Client[] = JSON.parse(data).clients;
        return clients;
      },
    },
  },
});

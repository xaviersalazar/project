import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull,
} from "graphql";

export const ClientType = new GraphQLObjectType({
  name: "ClientType",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    age: { type: GraphQLInt },
    name: { type: GraphQLString },
    gender: { type: GraphQLString },
    additionalInfo: { type: AdditionalInfoType },
  }),
});

export const AdditionalInfoType = new GraphQLObjectType({
  name: "AdditionalInfo",
  fields: () => ({
    company: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    address: { type: GraphQLString },
  }),
});

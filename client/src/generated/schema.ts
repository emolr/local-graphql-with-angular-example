import gql from "graphql-tag";

export const schema = gql`
  type Pokemon {
    name: String!
    picture: String!
  }

  type Query {
    hello: String
    pokemon(name: String!): Pokemon!
  }
`;

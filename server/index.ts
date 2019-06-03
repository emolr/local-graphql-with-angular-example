import { httpClient } from "./http-client";
import { ApolloServer } from 'apollo-server';
import { resolvers } from './resolvers'
import { importSchema } from 'graphql-import'
import gql from 'graphql-tag'

const typeDefs = gql(importSchema('schema.graphql'));

const server = new ApolloServer({ 
    typeDefs, 
    resolvers, 
    context: { 
        http: httpClient 
    } 
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
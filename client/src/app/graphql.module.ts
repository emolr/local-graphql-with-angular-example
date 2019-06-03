import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

// The magical part
import { httpClient } from '../../../server/http-client'
import { SchemaLink } from 'apollo-link-schema';
import { resolvers } from '../../../server/resolvers'
import { schema as typeDefs } from '../generated/schema'
import { makeExecutableSchema } from 'graphql-tools'


const uri = ''; // <-- add the URL of the GraphQL server here

const schema = makeExecutableSchema({ resolvers, typeDefs })
export function createApollo(httpLink: HttpLink) {
  return {
    // link: httpLink.create({uri}),
    link: new SchemaLink({ schema, context: { http: httpClient}}),
    cache: new InMemoryCache()
  };
}

@NgModule({
  exports: [
    ApolloModule,
    // HttpLinkModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [
        // HttpLink
      ],
    },
  ],
})
export class GraphQLModule {}

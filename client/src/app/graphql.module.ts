import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SchemaLink } from 'apollo-link-schema';
import { makeExecutableSchema } from 'graphql-tools'
import { environment } from 'src/environments/environment.prod';

// Local GraphQL rescources
import { httpClient } from '../../../server/http-client'
import { resolvers } from '../../../server/resolvers'
import typeDefs from '../generated/schema'


const uri = (environment as any).GRAPHQL_ENDPOINT;

export function createApollo(httpLink: HttpLink) {
  // Load local GraphQL rescources if no endpoint is defined
  if (!uri) {
    const schema = makeExecutableSchema({ resolvers, typeDefs })

    return {
      link: new SchemaLink({ schema, context: { http: httpClient } }),
      cache: new InMemoryCache()
    };
  } else {
    return {
      link: httpLink.create({ uri }),
      cache: new InMemoryCache()
    };
  }

}

@NgModule({
  exports: [
    ApolloModule,
    HttpLinkModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [
        HttpLink
      ],
    },
  ],
})
export class GraphQLModule { }

# Angular with GraphQL, Apollo Client, locally.

This is an example for those who wants to get the developer experience benefits from using GraphQL but are building front-end applications against already exisiting API's like REST or others and don't have the time, infrastructure or need for hosting it in the cloud.

This way all the logic for getting and mapping the data recieved from varius endpoints are decoupled from the client application, and it's a simple task to later move the graphql server to an server in the cloud or a cloud function for getting the benefits of sharing with multiple clients and transporting less data to the client.

## The stack

* [Angular 8](https://angular.io) - Client application
* [Apollo Angular](https://www.apollographql.com/docs/angular/) - GraphQL client for Angular with a single store and much more...
* [Apollo Server](https://www.apollographql.com/docs/apollo-server/) - Used for inspecting the GraphQL API using [GraphQL Playground](https://github.com/prisma/graphql-playground).
* [GraphQL-tools](https://www.apollographql.com/docs/graphql-tools/) - Used for stiching together a schema from `type definitions` and `resolvers` to load locally with the `Apollo Angular Module`.
* [GraphQL code generator](https://graphql-code-generator.com/) - Used for generating typescript types based on the GraphQL schema and generating Angular services from `.graphql` file queries in the Angular client.
    * [graphql-tag-typescript-schema](https://www.npmjs.com/package/graphql-tag-typescript-schema) - Additional unofficial GraphQL code generator plugin for transforming graphql `schemas` to [graphql-tag](https://github.com/apollographql/graphql-tag) exported from a `.ts` file.
* [PokéAPI](https://pokeapi.co/) - Used for testing REST from graphql

## Get started

### Install dependencies

This will install dependencies for both the server and client
```sh
npm run bootstrap
```

### Start the server and client concurrently

After starting the server you can open up http://localhost:4000 to inspect the GraphQL server on the playground and http://localhost:4200 for the angular application. (Also watches for graphql file changes)

```sh
npm start
```


### To generate Typescript types, schema for apollo-angular and angular services

> This watches for file changes automatically if startet using `npm start`

```sh
npm run generate
```

### Build the client application

```sh
npm run build
```

### Build the client application for production

> It's a good idea to generate build from this root `package.json` to ensure all depencies are updated at build time.

```sh
npm run build:prod
```
# Angular with GraphQL, Apollo Client, locally.

This is an example for those who wants to get the developer experience benefits from using GraphQL but are building front-end applications against already exisiting API's like REST or others and don't have the time, infrastructure or need for hosting it in the cloud.

This way all the logic for getting and mapping the data recieved from varius endpoints are decoupled from the client application, and it's a simple task to later move the graphql server to an server in the cloud or a cloud function for getting the benefits of sharing with multiple clients and transporting less data to the client.

## The stack

* [Angular 8](https://angular.io) - Client application
* [Apollo Angular](https://www.apollographql.com/docs/angular/) - GraphQL client for Angular with a single store and much more...
* [Apollo Server](https://www.apollographql.com/docs/apollo-server/) - Used for inspecting the GraphQL API using [GraphQL Playground](https://github.com/prisma/graphql-playground).
* [GraphQL-tools](https://www.apollographql.com/docs/graphql-tools/) - Used for stiching together a schema from `type definitions` and `resolvers` to load locally with the `Apollo Angular Module`.
* [GraphQL code generator](https://graphql-code-generator.com/) - Used for generating typescript types based on the GraphQL schema and generating Angular services from `.graphql` file queries in the Angular client.

## Get started

### Install dependencies

This will install dependencies for both the server and client
```sh
cd client && npm install && .. && cd server && npm install && ..
```

### Start the server

After starting the server you can open up http://localhost:4000 to inspect the GraphQL server on the playground

```sh
cd server && npm start
```

### Start the client application

If you already started the server, make sure to be in the root folder.

```sh
cd client && npm start
```

### To generate Typescript types

This will run a ts-node server to generate a `.graphql` file and use it by `GraphQL Code Generator` to generate typescript types. It will also look for `.graphql` files in `client/src/app/graphql/**/*` for `.graphql` files containing GraphQL queries and mutations and generate Angular services automatically. Read more in the [official documentation](https://graphql-code-generator.com/docs/plugins/typescript-apollo-angular)

```sh
cd client && npm run generate
```

### Build the client application for production

```sh
cd client && npm run build -- --prod
```
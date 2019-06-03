import gql from "graphql-tag";
import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Pokemon = {
  __typename?: "Pokemon";
  name: Scalars["String"];
  picture: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  hello?: Maybe<Scalars["String"]>;
  pokemon: Pokemon;
};

export type QueryPokemonArgs = {
  name: Scalars["String"];
};
export type PokemonQueryVariables = {
  name: Scalars["String"];
};

export type PokemonQuery = { __typename?: "Query" } & {
  pokemon: { __typename?: "Pokemon" } & Pick<Pokemon, "name" | "picture">;
};

export const PokemonDocument = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      name
      picture
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class PokemonGQL extends Apollo.Query<
  PokemonQuery,
  PokemonQueryVariables
> {
  document = PokemonDocument;
}
export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}

const result: IntrospectionResultData = {
  __schema: {
    types: []
  }
};

export default result;

import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { PokemonGQL } from '../generated/graphql'
import gql from 'graphql-tag'

const HELLO_WORLD_GQL = gql`
  query HelloWorld {
    hello
  }
`

const POKEMON_GQL = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      name
      picture
    }
  }
`

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  world$ = this.apollo.query({query: HELLO_WORLD_GQL})
  pokemon$ = this.pokemonGQL.fetch({name: 'pikachu'})

  constructor(public apollo: Apollo, public pokemonGQL: PokemonGQL) {}

}

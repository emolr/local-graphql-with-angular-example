import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
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
  title = 'client';
  world$ = this.apollo.query({query: HELLO_WORLD_GQL})
  pokemon$ = this.apollo.query({query: POKEMON_GQL, variables: {name: 'pikachu'}})

  constructor(public apollo: Apollo) {}

}

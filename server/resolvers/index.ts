import { pokemon, selectPokemonPicture } from './pokemon.resolver'
import { hello } from './hello.resolver'

export const resolvers = {
    Query: {
        hello,
        pokemon
    },
    Pokemon: {
        picture: selectPokemonPicture
    }
}

export default resolvers
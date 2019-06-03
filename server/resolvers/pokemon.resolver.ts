export const pokemon = async (obj, {name}, {http}, info) => {
    const response = await http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return response.data;
}

export const selectPokemonPicture = (obj) => {
    return obj.sprites.front_default
}
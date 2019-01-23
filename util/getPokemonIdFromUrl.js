const getPokemonIdFromUrl = url => {
    const splitUrlArr = url.split('/');
        const pokemonIdNum = splitUrlArr.length - 2;
        const pokemonId = splitUrlArr[pokemonIdNum];
        return pokemonId
}
module.exports = getPokemonIdFromUrl
import axios from 'axios';

function getAllPokemons() {
  return axios.get('https://pokeapi.co/api/v2/pokemon');
}

export default {getAllPokemons};
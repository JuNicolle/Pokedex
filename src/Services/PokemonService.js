import axios from 'axios';

function getAllPokemons() {
  return axios.get('https://pokeapi.co/api/v2/pokemon');
}

function getPokemonById(id) {
  return axios.get('https://pokeapi.co/api/v2/pokemon/' + id);
}

function getPokemonDetails(id){
  return axios.get('https://pokeapi.co/api/v2/pokemon-species/' + id);
}

function getPokemonWeakness(id){
  return axios.get('https://pokeapi.co/api/v2/type/'+id);
}

export default {getAllPokemons, getPokemonById, getPokemonDetails, getPokemonWeakness};
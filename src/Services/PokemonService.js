import axios from 'axios';

function getAllPokemons(currentPage, limit = 80) {
  const offset = (currentPage - 1) * limit;
  return axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
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

function getPokemonByType(type){
  return axios.get('https://pokeapi.co/api/v2/type/'+type);
}

export default {getAllPokemons, getPokemonById, getPokemonDetails, getPokemonWeakness, getPokemonByType};
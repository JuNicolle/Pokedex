import React, { useEffect, useState } from 'react';
import PokemonCard from '../Components/PokemonCard';
import PokemonService from '../Services/PokemonService';

const HomePage = () => {

    const [pokemon, setPokemon] = useState([]);

    const fetchPokemons = async () => {
        try {
            const response = await PokemonService.getAllPokemons();
            const res = response.data.results;

            setPokemon(res);
            console.log(res)

        } catch (error) {
            console.error(error);
        }
    };

useEffect(() => {
    fetchPokemons();
},[]);

  return <>
   
      <h1>TEst</h1>
      <div className="d-flex justify-content-center flex-wrap gap-3 mt-3">
            {pokemon.map((pokemon) => {
                return <PokemonCard PokemonCard={pokemon} key={pokemon.id}></PokemonCard>

            })}

        </div>
      </>
}

export default HomePage;
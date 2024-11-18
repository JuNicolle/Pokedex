import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import PokemonService from "../Services/PokemonService";
import PokemonCard from "../Components/PokemonCard";
import { Container } from "react-bootstrap";



const PokemonDetailPage = () => {
    const {id} = useParams();
    const [pokemon, setPokemon] = useState([]);
    const [details, setDetails] = useState([]);

    const fetchPokemonById = async () => {
        try { 
            const response = await PokemonService.getPokemonById(id);
            const res = response.data;
            console.log(res);
            setPokemon(res);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchDetailsPokemon = async () => {
        try { 
            const rasponse = await PokemonService.getPokemonDetails(id);
            const ras = rasponse.data;
            console.log(ras);
            setDetails(ras);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPokemonById(), fetchDetailsPokemon();
    },[]);


    return <>
    <div>
        <Container>
            <h1>{pokemon.name}</h1>
            <img src={"https://img.pokemondb.net/artwork/" + pokemon.name + ".jpg"} />
            <h2>Types</h2>
            <ul>
                {pokemon.types && pokemon.types.map((type, index) => {
                    return <li key={index}>{type.type.name}</li>
                })}
            </ul>
            <h2>Stats</h2>
            <ul>
                {pokemon.stats && pokemon.stats.map((stat, index) => {
                    return <li key={index}>{stat.stat.name} : {stat.base_stat}</li>
                })}
            </ul>

            <h2>Lore</h2>
            
            <ul>
            {details.flavor_text_entries && details.flavor_text_entries.map((text, langage, version)=>{
                return <li key={text}>{text.flavor_text}</li>
                    
            })}
            </ul>
        </Container>
    </div>

        
    </>
}

export default PokemonDetailPage;

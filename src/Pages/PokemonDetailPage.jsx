import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import PokemonService from "../Services/PokemonService";
import GraphicStat from '../Components/GraphicStat';
import typeColors from "../Services/TypeColors";


const PokemonDetailPage = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState([]);
    const [details, setDetails] = useState([]);
    const [weakness, setWeakness] = useState([]);

    const fetchPokemonById = async () => {
        try {
            const response = await PokemonService.getPokemonById(id);
            const res = response.data;
            const resbis = await PokemonService.getPokemonWeakness(res.types[0].type.name);
            setPokemon(res);
            setWeakness(resbis.data);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchDetailsPokemon = async () => {
        try {
            const rasponse = await PokemonService.getPokemonDetails(id);
            const ras = rasponse.data;
            setDetails(ras);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPokemonById(), fetchDetailsPokemon();
    }, []);

    const primaryType = pokemon.types?.[0]?.type?.name || "default";
    const backgroundColor = typeColors[primaryType] || typeColors.default;

    return <>

        <div id="bodyDetail">
            <div className="leftPart">
                <div id="pokemonName"><h1>{pokemon.name}</h1></div>

                <div id="pokemonImg"><img src={"https://img.pokemondb.net/artwork/" + pokemon.name + ".jpg"} /></div>

                {/* Pokemon's Stats */}
                <div className="pokemonStats">
                    <h2>Stats</h2>
                    {/* <ul>
                        {pokemon.stats && pokemon.stats.map((stat, index) => {
                            return <li key={index}>{stat.stat.name} : {stat.base_stat}</li>
                        })}
                    </ul> */}
                    <GraphicStat pokemon={pokemon} />
                </div>


            </div>
            <div className="rightPart" style={{ backgroundColor }}>
                
                {/* Pokemon's Bio */}
                <div className="pokemonBio">
                    <h2>Lore</h2>
                    <p>
                        {details.flavor_text_entries && details.flavor_text_entries[1].flavor_text}
                        {/* {details.flavor_text_entries && details.flavor_text_entries.map((text, index)=>{
                    return <li key={index}>{text.flavor_text}</li>       
                })} */}
                    </p>
                </div>

                {/* Pokemon's Types */}
                <div className="pokemonTypes">
                    <h4>Types :</h4>
                    <ul>
                        {pokemon.types && pokemon.types.map((type, index) => {
                            return <button key={index} className={type.type.name}>{type.type.name}</button>
                        })}
                    </ul>
                </div>

                {/* Pokemon's Weakness */}
                <div className="pokemonWeakness">
                    <h4>Weakness :</h4>
                    <ul>
                        {weakness.damage_relations?.double_damage_from && (
                            <p>
                             
                                {weakness.damage_relations.double_damage_from.map((relation, index) => (
                                    <button key={index} className={relation.name}>{relation.name}</button>
                                ))}
                            </p>
                        )}

                        {/* {weakness.damage_relations?.double_damage_to && (
                            <li>
                                <strong>Double damage to:</strong>

                                {weakness.damage_relations.double_damage_to.map((relation) => (
                                    <button className={relation.name}>{relation.name}</button>
                                ))}

                            </li>
                        )} */}
                    </ul>
                </div>

                {/* <div className="pokemonStats">
                    <h2>Stats</h2>
                    <ul>
                        {pokemon.stats && pokemon.stats.map((stat, index) => {
                            return <li key={index}>{stat.stat.name} : {stat.base_stat}</li>
                        })}
                    </ul>
                </div> */}

                

                {/* Game version */}
                <div className="pokemonGameVersion">
                    <h2>Game Versions</h2>
                    <ul className="gameVersion">
                        {pokemon.game_indices &&
                            pokemon.game_indices.map((game, index) => (
                                <div key={index} >
                                    <button className={game.version.name}>{game.version.name}</button>
                                </div>
                            ))}
                    </ul>
                </div>
            </div>




        </div>
    </>
}

export default PokemonDetailPage;

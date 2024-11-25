import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TypeService from '../Services/TypeService';
import PokemonCard from '../Components/PokemonCard';


const TypeDetail = () => {
    const { type } = useParams();
    const [typeData, setTypeData] = useState({});
  
    const fetchTypeData = async () => {
        try {
          const response = await TypeService.getTypeById(type);
          setTypeData(response.data)
        } catch (error) {
            if (error.response && error.response.status === 404) {
              setError("Erreur : Ressource non trouvée");
            } else {
              setError("Erreur : Une erreur s'est produite");
            }
            console.log(error);
          }
        };

      useEffect(() => {
        fetchTypeData();
      }, [type]);
    

    return <>
        <div className='d-flex justify-content-center flex-wrap mt-3'>
        {typeData.pokemon && typeData.pokemon.map((type, index) => (
          <PokemonCard key={index} PokemonCard={type.pokemon}></PokemonCard>
        ))}

    </div>
    </>
}
  export default TypeDetail;
import React, { useEffect, useState } from 'react';
import PokemonCard from '../Components/PokemonCard';
import PokemonService from '../Services/PokemonService';
import { Container, Pagination } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';



const HomePage = () => {

    const [pokemon, setPokemon] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(20);
    const [searchValue, setSearchValue] = useState("");
    const [filteredPokemons, setFilteredPokemons] = useState([]);

    const handleChange= (event) => {
        setSearchValue(event.currentTarget.value);;
    }



    const fetchPokemons = async () => {
        try {
            const response = await PokemonService.getAllPokemons(currentPage);
            const res = response.data.results;

            setPokemon(res);
            setFilteredPokemons(res);
            setMaxPage(20);
            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "instant",
                });
            }, 50)

           

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchPokemons();
    }, [currentPage]);

    useEffect(() => {
        setFilteredPokemons(pokemon.filter((pokemon) => {
            return pokemon.name.toLowerCase().includes(searchValue.toLowerCase());
        }));
    },[searchValue]);
    

    return <>
        <div id='bodyHomePage'>
            <div className='searchDiv'>
                <div className="searchForm">
                <Form.Control type="text" placeholder="Catch one !" value={searchValue} onChange={handleChange}/>    
                </div>
            </div>
        
        <div className="d-flex justify-content-center flex-wrap gap-3 mt-3">
            {filteredPokemons.map((pokemon)=>
            (<PokemonCard PokemonCard={pokemon} key={pokemon.id}/>))}
        </div>

        {/* <div className="d-flex justify-content-center flex-wrap gap-3 mt-3">
            {pokemon.map((pokemon) => {
                return <PokemonCard PokemonCard={pokemon} key={pokemon.id}></PokemonCard>
            })}
        </div> */}

        <Container className='d-flex justify-content-center mb-3'>
            <Pagination className="mt-5">
                {currentPage > 1 && <>
                    <Pagination.First onClick={() => { setCurrentPage(1) }} />
                    <Pagination.Prev onClick={() => { setCurrentPage(currentPage - 1) }} />
                    <Pagination.Item onClick={() => { setCurrentPage(1) }}>{1}</Pagination.Item>
                </>}

                {currentPage - 5 > 0 && <>
                    <Pagination.Ellipsis onClick={() => { setCurrentPage(currentPage - 5) }} />
                </>}


                {(currentPage != 2 && currentPage > 1) && <>
                    <Pagination.Item onClick={() => { setCurrentPage(currentPage - 1) }}>{currentPage - 1}</Pagination.Item>
                </>}

                <Pagination.Item active>{currentPage}</Pagination.Item>

                {currentPage + 1 < maxPage && <>
                    <Pagination.Item onClick={() => { setCurrentPage(currentPage + 1) }}>{currentPage + 1}</Pagination.Item>
                </>}

                {currentPage + 5 <= maxPage && <>
                    <Pagination.Ellipsis onClick={() => { setCurrentPage(currentPage + 5) }} />
                </>}

                {currentPage < maxPage && <>
                    <Pagination.Item onClick={() => { setCurrentPage(maxPage) }}>{maxPage}</Pagination.Item>
                    <Pagination.Next onClick={() => { setCurrentPage(currentPage + 1) }} />
                    <Pagination.Last onClick={() => { setCurrentPage(maxPage) }} />
                </>}

            </Pagination>
        </Container>
        </div>
    </>
}

export default HomePage;
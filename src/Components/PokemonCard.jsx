import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const PokemonCard = ({ PokemonCard }) => {

    const navigate=useNavigate();
    const navigateTo = (id) => {
        navigate('/pokemon/'+id);
    }



    return (
        <div className="pokecard" onClick={() => {navigateTo(PokemonCard.name)}}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={"https://img.pokemondb.net/artwork/" + PokemonCard.name +".jpg"} />
          <Card.Body>
            <Card.Title className="titlePoke">{PokemonCard.name} N°{PokemonCard.url.replace("https://pokeapi.co/api/v2/pokemon/","").replace("/","")}</Card.Title>
            <Card.Text>
              
            </Card.Text>
            <Button variant="primary">Voir détails</Button>
          </Card.Body>
        </Card>
        </div>
      );
}

export default PokemonCard;
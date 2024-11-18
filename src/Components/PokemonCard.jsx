import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const PokemonCard = ({ PokemonCard }) => {

    // const navigate=useNavigate();
    // const navigateTo = (id) => {
    //     navigate('/pokemon/'+id);
    // }


    return (

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={"https://img.pokemondb.net/artwork/" + PokemonCard.name +".jpg"} />
          <Card.Body>
            <Card.Title>{PokemonCard.name}</Card.Title>
            <Card.Text>
              
            </Card.Text>
            <Button variant="primary">Voir détails</Button>
          </Card.Body>
        </Card>
      );
}

export default PokemonCard;
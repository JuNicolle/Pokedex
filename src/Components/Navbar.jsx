import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import PokeLogo from '../Assets/pngpokemon.png';
import { useEffect, useState } from 'react';
import TypeService from '../Services/TypeService';

const NavBar = () => {

  const navigate = useNavigate();
  const [types, setTypes] = useState([]);

  const fetchTypes = async () => {
    try{
      const response =  await TypeService.GetAllTypes();
      setTypes(response.data.results);
    }
    catch(error){
      console.error(error);
    }
  }

  useEffect(() => {
    fetchTypes();
  },[])

  return <>
    <Navbar expand="lg" id="navbar" className='navBar'>
      <Container className='d-flex gap-3'>
        <Navbar.Brand href="#home">
          <img src={PokeLogo} alt="logo Pokemon" width="170vw" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex gap-4 align-items-center">
            <Link to={"/pokemon"} href="#action1">Pokémons</Link>

            <NavDropdown title="Types" id="basic-nav-dropdown">
              {types.map((type, index)=>{
                return <NavDropdown.Item key={type.name + "nav"} onClick={()=>{navigate('/type/'+type.name)}}>{type.name}</NavDropdown.Item>
              }
              )}
            </NavDropdown>

            
            <Link to={"/generations"} href="#action1">Générations</Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}

export default NavBar;
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import PokeLogo from '../Assets/pngpokemon.png';
import { useEffect, useState } from 'react';
import TypeService from '../Services/TypeService';
import GenerationService from '../Services/GenerationService';

const NavBar = () => {

  const navigate = useNavigate();
  const [types, setTypes] = useState([]);
  const [gen, setGen] = useState([]);
  const [gameVersion, setGameVersion] = useState([]);
  

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

  const fetchGenerations = async () => {
    try{
      const response =  await GenerationService.GetAllGenerations();
      setGen(response.data.results);
    }
    catch(error){
      console.error(error);
    }
  }

  useEffect(() => {
    fetchGenerations()
  },[])


    const fetchGamesVersions = async () => {
        try{
          const response =  await GenerationService.GetAllGenerations();

          setGameVersion(response.data);
          console.log(response.data)
        }
        catch(error){
          console.error(error);
        }
      }
    
      useEffect(() => {
        fetchGamesVersions()
      },[])



  return <>
    <Navbar expand="lg"  className='navBar'>
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

            <NavDropdown title="Generations" id="basic-nav-dropdown">
              {gen.map((gen, index)=>{
                return <NavDropdown.Item key={gen.name + "nav"} onClick={()=>{navigate('/generation/'+ gen.name)}}>{gen.name}</NavDropdown.Item>
              }
              )}
            </NavDropdown>
            <Link to={"/generation/:gameversion"} href="#action1">Versions</Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}

export default NavBar;
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import PokeLogo from '../Assets/pngpokemon.png';

const NavBar = () => {
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
              <Link to={"/types"} href="#action/3.1">Grass</Link>
              <br />
              <Link to={"/types"} href="#action/3.1">Fire</Link>
              <br />
              <Link to={"/types"} href="#action/3.1">Ice</Link>
              <br />
              <Link href="#action/3.2">
                Another action
              </Link>
              <br />
              <Link href="#action/3.3">Something</Link>
              <NavDropdown.Divider />
              <Link href="#action/3.4">
                Separated link
              </Link>
            </NavDropdown>

            
            <Link to={"/generations"} href="#action1">Générations</Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}

export default NavBar;
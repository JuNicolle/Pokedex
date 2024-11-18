import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
    return <>
        <Navbar expand="lg" id="navbar">
          <Container>
            <Navbar.Brand href="#home">Pokedex</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to={"/"} href="#action1">Pokémons</Link>
                <Link to={"/generations"} href="#action1">Générations</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
}

export default NavBar;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">INSPIRESPACE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto text-center">

                        <NavLink className={"nav-link"} to="/">
                            Home
                        </NavLink>
                        <NavLink className={"nav-link"} to="/UserProduct">
                            Products
                        </NavLink>
                        <NavLink className={"nav-link"} to="/products">
                            Product Dashboard
                        </NavLink>

                    </Nav>
                    <div className="d-flex justify-content-center">
                        <button className='btn btn-success '> Login </button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
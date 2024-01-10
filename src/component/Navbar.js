import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import '../style/header.css'
function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home" className="logo text-success">INSPIRESPACE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto text-center logo-nav">

                        <NavLink className={"nav-link"} to="/">
                            Home
                        </NavLink>
                        <NavLink className={"nav-link"} to="/UserProduct">
                            Products
                        </NavLink>
                        <NavLink className={"nav-link"} to="/productDash">  
                            Dashboard
                        </NavLink>
                        <NavLink className={"nav-link"} to="/UserDashBoard">
                            User Dashboard
                        </NavLink>
                    </Nav>
                    <div className="d-flex justify-content-center">
                    <NavLink to="/login" className="btn btn-success" role="button">Login</NavLink>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
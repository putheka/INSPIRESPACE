import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = ({ isLoggedIn, onLogout }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/" className="logo text-success">
          INSPIRESPACE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center logo-nav">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/UserProduct">
              Products
            </NavLink>
            {isLoggedIn ? (
              <>
                <NavLink className="nav-link" to="/productDash">
                  Dashboard
                </NavLink>
                <NavLink className="nav-link" to="/UserDashBoard">
                  User Dashboard
                </NavLink>
              </>
            ) : null}
          </Nav>

          <div className="d-flex justify-content-center">
            {!isLoggedIn ? (
              <NavLink to="/login" className="btn btn-success me-2" role="button">
                Login
              </NavLink>
            ) : (
              <button className="btn btn-danger me-2" onClick={onLogout} role="button">
                Logout
              </button>
            )}
            <NavLink to="/login" className="btn btn-warning" role="button">
              Sign Up
            </NavLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

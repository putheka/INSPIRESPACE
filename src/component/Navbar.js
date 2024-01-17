// NavBar.js

import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = ({ isLoggedIn, onLogout }) => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      // Fetch user profile data when the component mounts
      fetchUserProfile();
    }
  }, [isLoggedIn]);

  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem('authToken');
      console.log('Token:', token); // Log the token to check if it's present
      const response = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const userData = await response.json();
        setUserProfile(userData);
        console.log('User Profile:', userData); // Log the user profile

        // Check if the avatar property exists in the user profile
        if (userData && userData.avatar) {
          console.log('Avatar URL:', userData.avatar);
        } else {
          console.error('Avatar URL not found in user profile');
        }
      } else {
        console.error('Failed to fetch user profile. HTTP Status:', response.status);
        console.error('Response Body:', await response.text());
      }
    } catch (error) {
      console.error('Error during fetchUserProfile:', error.message);
    }
  };

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
            ) : userProfile && userProfile.avatar ? (
              // Display the user's avatar if userProfile is available and has avatar property
              <div className="me-2">
                <img
                  src={userProfile.avatar}
                  alt="User Avatar"
                  className="avatar-img"
                />
              </div>
            ) : null}
            {isLoggedIn ? (
              <button className="btn btn-danger me-2" onClick={onLogout} role="button">
                Logout
              </button>
            ) : null}
            {!isLoggedIn ? (
              <NavLink to="/singup" className="btn btn-warning" role="button">
                Sign Up
              </NavLink>
            ) : null}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

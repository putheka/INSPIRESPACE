import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

const lngs = [
  {
    code: "en",
    nativeName: "English",
    flagUrl: "https://imgs.search.brave.com/TwAFJlZ0uLA3-pnyjhRIt-s4pLINrKAKCOHmlzc18v0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzgwLzkzLzEz/LzM2MF9GXzgwOTMx/MzYyX2hjN012a2dr/alRVak9sbkNYSmpP/QVNFTnVhWVROb3h2/LmpwZw", 
  },
  {
    code: "kh",
    nativeName: "Khmer",
    flagUrl: "https://imgs.search.brave.com/9Si-RZx0F-c5SeStH0DF2-JG4K7Zb5EFZTUHK-_lLEc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vMjcvNDAyNy0w/MDQtQjU3Rjg0RTkv/RmxhZy1DYW1ib2Rp/YS5qcGc", 
  },
  {
    code: "kr",
    nativeName: "Korean",
    flagUrl: "https://imgs.search.brave.com/q3yJ4g0eqg1-foij80lNLkVU_ZXS8xzMv7uZeNne40E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9uYXRpb25hbC1m/bGFnLXNvdXRoLWtv/cmVhLWJhY2tncm91/bmQtd2l0aC1mbGFn/LXNvdXRoLWtvcmVh/XzY1OTk4Ny0zNTgu/anBnP3NpemU9NjI2/JmV4dD1qcGc", 
  }
];

const NavBar = ({ isLoggedIn, onLogout }) => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      fetchUserProfile();
    }
  }, [isLoggedIn]);

  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const userData = await response.json();
        setUserProfile(userData);
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

          <NavDropdown title="Language" id="basic-nav-dropdown" className="ms-2 me-3">
            {lngs.map((lng) => (
              <NavDropdown.Item
                key={lng.code}
                onClick={() => i18n.changeLanguage(lng.code)}
              >
                <img
                  src={lng.flagUrl}
                  alt={lng.nativeName}
                  style={{ width: '30px', marginRight: '5px' }}
                />
                {lng.nativeName}
              </NavDropdown.Item>
            ))}
          </NavDropdown>

          <div className="d-flex justify-content-center">
            {!isLoggedIn ? (
              <NavLink to="/login" className="btn btn-success me-2" role="button">
                Login
              </NavLink>
            ) : userProfile && userProfile.avatar ? (
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
              <NavLink to="/signup" className="btn btn-warning" role="button">
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

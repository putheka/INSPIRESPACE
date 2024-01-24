import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThreeCircles } from 'react-loader-spinner'

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      // a login API call
      const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        onLogin(data);

        toast.success('Login successful!', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        });
      } else {
        console.error('Login failed');

        toast.error('Login failed. Please check your credentials.', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        });
      }
    } catch (error) {
      console.error('Error during login:', error.message);

      toast.error('An unexpected error occurred. Please try again later.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="container mb-5 mt-5 w-50">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password:
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="d-grid">
        <button type="button" className="btn btn-success d-flex align-items-center justify-content-center" onClick={handleLogin} disabled={loading}>
          {loading ?
           <ThreeCircles
           visible={true}
           height="25"
           width="50"
           color="#4fa94d"
           ariaLabel="three-circles-loading"
           wrapperClass=""/>: 'Login'}
        </button>
        <NavLink type="button" className="btn btn-warning mt-2" to="/signup">
          Don't have an account? Sign Up Now
        </NavLink>
      </div>
      <ToastContainer />
    </Container>
  );
};

export default LoginPage;

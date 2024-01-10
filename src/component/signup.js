// SignUp.js

import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [userData, setUserData] = useState({
    email: '',
    name: '',
    password: '',
    role: 'customer',
    avatar: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://api.escuelajs.co/api/v1/users', userData)
      .then((response) => {
        console.log('User registered successfully:', response.data);
        // Handle success (e.g., redirect to login page)
      })
      .catch((error) => {
        console.error('Error registering user:', error);
        // Handle error (e.g., show error message)
      });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" name="email" value={userData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" name="name" value={userData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={userData.password} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

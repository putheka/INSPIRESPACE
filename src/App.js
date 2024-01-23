import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import NavBar from './component/Navbar';
import Footer from './component/Footer';
import Header from "./page/header";
import Partner from "./page/partner";
import About from "./page/aboutus";
import Comment from "./page/comment";
import Team from "./page/Team";
import Contact from "./page/Contact";
import UserProduct from "./page/UserProduct";
import ProductDash from "./component/ProductDashBoard";
import UserDashBoard from "./component/UserDashBoard";
import NotFoundpage from "./page/NotFoundpage"
import LoginPage from "./component/LoginPage";
import SignUp from "./component/SignUp";
import { ToastContainer } from "react-toastify";
import JsonData from "./data/data.json";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
    // Check for saved authentication status when the component mounts
    const savedToken = localStorage.getItem('authToken');
    if (savedToken) {
      setIsLoggedIn(true);
      // Fetch user data using the token (you need to implement this)
      // setUserData(fetchUserData(savedToken));
    }
  }, []);

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUserData(user);
    // Store the authentication token in localStorage
    localStorage.setItem('authToken', user.token);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    // Clear the authentication token from localStorage
    localStorage.removeItem('authToken');
  };

  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={<HomePage landingPageData={landingPageData} />}
        />
        <Route path="/UserProduct" element={<UserProduct />} />
        {isLoggedIn ? (
          <>
            <Route
              path="/productDash"
              element={<ProductDash userData={userData} />}
            />
            <Route
              path="/UserDashBoard"
              element={<UserDashBoard userData={userData} />}
            />
          </>
        ) : null}
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/singup" element={<SignUp />} />
        <Route path="*" element={<NotFoundpage />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </Router>
  );
};

const HomePage = ({ landingPageData }) => (
  <>
    <Header data={landingPageData.Header} />
    <Partner data={landingPageData.Partner} />
    <About data={landingPageData.About} />
    <Comment data={landingPageData.Comment} />
    <Team data={landingPageData.Team} />
    <Contact data={landingPageData.Contact} />
  </>
);

export default App;

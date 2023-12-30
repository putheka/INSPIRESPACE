import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import NavBar from './component/Navbar';
import Footer from './component/Footer';
import Header from "./page/header";
import Partner from "./page/partner";
import About from "./page/aboutus";
import Comment from "./page/comment";
import Team from "./page/Team";
import Contact from "./page/Contact";
import Products from "./page/product";
import UserProduct  from "./page/UserProduct";
import ProductDetails from "./page/ProductDetails";
import Services from "./page/service";
import JsonData from "./data/data.json";
import NotFoundpage from "./page/NotFoundpage";
import ProductDashBoard from "./component/ProductDashBoard";
const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    
      <BRouter>
        <NavBar />
        <Routes>
        <Route path="/" element={<HomePage landingPageData={landingPageData} />} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/UserProduct" element={<UserProduct/>}/>
        <Route path="/product-details/:id" element={<ProductDetails/>}/>
        <Route path="/productDash" element={<ProductDashBoard/>}/>
        <Route path="*" element={<NotFoundpage/>} />
        </Routes>
        <Footer />
      </BRouter>
  
  );
};

const HomePage = ({ landingPageData }) => (
  <>
    <Header data={landingPageData.Header} />
    <Partner data={landingPageData.Partner} />
    <About data={landingPageData.About} />
    <Services data={landingPageData.Services} />
    <Comment data={landingPageData.Comment} />
    <Team data={landingPageData.Team} />
    <Contact data={landingPageData.Contact} />
  </>
);


export default App;

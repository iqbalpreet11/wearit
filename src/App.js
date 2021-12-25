//import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router,Route, Routes } from  "react-router-dom";
import Header from './components/Header';
import Home from './components/pages/Home'
import About from './components/section/About';
import Products from './components/section/Products';
import SingleProduct from './components/section/SingleProduct';
import Contact from './components/section/Contact';
import LoginSignUp from './components/pages/LoginSignUp';
import Mens from './components/pages/Mens';
import Womens from './components/pages/Womens';
import Explore from './components/Explore';
import Footer from './components/Footer';
import Kids from './components/pages/Kids';

function App() {
  return (
    
    <Router>
    <div class="App">
            <Header/>

            <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/mens" element={<Mens/>}/>
        <Route path="womens" element={<Womens/>}/>
        <Route path="/kids" element={<Kids/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="single-product" element={<SingleProduct/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="loginsignup" element={<LoginSignUp/>}/>
      
      </Routes>
      {/* <Explore/> */}
      <Footer/>
      
      </div>
      </Router>
  
    
  );
}

export default App;

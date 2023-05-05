import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Header from './components/Header.jsx'
import  Home from './components/Home.jsx'
import  Menu from './components/Menu.jsx'
import  Cart from './components/Cart.jsx'
import  Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <header><Header></Header></header>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu/>}  />
          <Route path="/cart" element={<Cart/>}  />
        </Routes>
        <footer><Footer></Footer></footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

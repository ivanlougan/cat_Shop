import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import Basket from "./pages/Basket";
import './App.css';
// IMAGES
import basketIcon from "./images/basket.png"
import catLogo from "./images/CATLOGO.png"

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>

        <nav id="navbar">
          <img id="catlogo" src={catLogo} alt="catlogo"></img>
          <Link to="/" > Home </Link>
          <Link to="/about" > About </Link>
          <Link to="/basket" > Basket </Link>
        </nav>

        <Routes>

          <Route path="/"></Route>
          <Route path="/about/"></Route>
          <Route path="/basket/"></Route>

        </Routes>

        </BrowserRouter>

    </div>
  );
}

export default App;

// STYLED COMPONENTS

// const NavBar = styled.nav `

// `;
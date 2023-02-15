import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';  
import Home from "./pages/Home";
import About from "./pages/About";
import Basket from "./pages/Basket";
import './App.css';
// IMAGES
import basketIcon from "./images/basket.png"
import catLogo from "./images/CATLOGO.png"

const App = () => {   
  const [CatPics, SetCatPics] = useState([]);   
  const [ErrorMsg, SetErrorMsg] = useState(null);    
  
  useEffect(() => {   
    const fetchCat = async () => {     
      try {     
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');     
        if (!response.ok){       
          throw new Error(response.statusText)     
        }     
        const CatPicData = await response.json();     
        SetCatPics(CatPicData)   
      } catch (err) {     
        SetErrorMsg("Oops, a cat has knocked the router off the shelf. Please try again")   
      }   
    };    
    fetchCat()  
  }, []); 


  return (
    
      <BrowserRouter>

        <nav id="navbar">
          <img id="catlogo" src={catLogo} alt="catlogo"></img>
          <Link to="/" > Home </Link>
          <Link to="/about" > About </Link>
          <Link to="/basket" > Basket </Link>
        </nav>

        <Routes>

          <Route path="/" element={ <Home CatPics={CatPics} ErrorMsg={ErrorMsg}/>}></Route>
          <Route path="/about/"></Route>
          <Route path="/basket/"></Route>

        </Routes>

        </BrowserRouter>

    )
  }
  
  export default App;

// STYLED COMPONENTS

// const NavBar = styled.nav `

// `;
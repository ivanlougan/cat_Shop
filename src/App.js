import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';  
import Home from "./pages/Home";
import About from "./pages/About";
import Basket from "./pages/Basket";
import './App.css';
// IMAGES
import catLogo from "./images/CATLOGO.png"

const App = () => {   
  // CatPics state now holds both images from API & faker info
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
        // New array for faker info
        const catInfoData = CatPicData.map((NewCatObject) => {
          return({

            catImg: NewCatObject.url,
            name: faker.name.firstName(),
            breed: faker.animal.cat(),
            phone: faker.phone.number(),
            price: faker.commerce.price()
            // Add price here?
          })

        })
        SetCatPics(catInfoData)
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
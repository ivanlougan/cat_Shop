import './App.css';
import {useEffect, useState} from 'react';
import { faker } from '@faker-js/faker';

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

  fetchCat();
}, []);
  // const [CatData, SetCatData] = useState([])
  // const  NewCat = () => {
  // return {
  //   Name: faker.name.firstName(),
  //   Breed: faker.animal.cat() 
  //   }
  // }
  // SetCatData(NewCat)
  
;



return (
    <>
    <h1>Cats for Life Page header</h1>
    {ErrorMsg !== null && <h3>{ErrorMsg}</h3>}
    {CatPics.map((CatPicData, index) =>{
      return (
      <div className='AllCats'>
        <img className='indivCats' key={index} src={CatPicData.url} alt="cat"></img> 
        <p>Name: Moggy</p>
        <button> Add to basket</button>
      </div>
      )
      })}
      <div className='Basket'>
        <h1>The Basket will go here?</h1>
      </div>
    </>
  )  
}



export default App;

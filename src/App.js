import './App.css';
import {useState} from 'react';



const App = () => {
  const [Cat, SetCat] = useState([]);
  const fetchCat = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
  }    
}

export default App;

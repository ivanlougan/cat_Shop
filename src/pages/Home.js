import { useEffect, useState } from "react";
import AboutModals from "../functions/AboutModals";


const Home = ({CatPics, ErrorMsg, CatList, BaskTotal}) => {
  const [Basket, setBasket] = useState([]);
  const [BasketTotal, SetBasketTotal] = useState();

  useEffect(() => {
      const total = () => {
      let TotalVal = 0; 
      for (let i = 0; i < Basket.length; i++) {
        console.log(typeof Basket[i].price)
        TotalVal += parseInt(Basket[i].price)
      }
      SetBasketTotal(TotalVal);
    };  
      total();
      }, [Basket]);
  


  const handleAddCat = (index) =>{
    let storedCatPics = [...CatPics];
    let BasketCopy = [...Basket];
    BasketCopy.push(storedCatPics.splice(index,1)[0]);
    CatList(storedCatPics);
    setBasket(BasketCopy);
    console.log(BasketCopy, storedCatPics)
}
  const handleRemoveCat = (index) =>{
    let storedCatPics = [...CatPics];
    let BasketCopy = [...Basket];
    storedCatPics.push(BasketCopy.splice(index,1)[0])
    CatList(storedCatPics);
    setBasket(BasketCopy)
    console.log(BasketCopy, storedCatPics)
}


  return (
  <div className="HomePageWrapper">
      <h1>Purrruse these fine felines</h1>
    <div className="MainContent">
        {ErrorMsg !== null && <h3>{ErrorMsg}</h3>}
      <div className="CatCardDisplay">
  
        {CatPics.map((CatPicData, index) => {
          return (
          <div key={index} className='CatCard'> 
            <img className='indivCats' src={CatPicData.catImg} alt="cat"></img>
            <h4>{CatPicData.name}</h4>
            <p><b>Breed: </b>{CatPicData.breed}</p>
            <p>£{CatPicData.price}</p>
            <AboutModals Info = {CatPicData}></AboutModals>
            <button onClick = {()=>handleAddCat(index)}>Add to Cat Basket</button>
          </div>
            )
          })}
      </div>
  
      <div className='Basket'>
        <h1>Cats in your basket!</h1>
        <h3>Total: £{BasketTotal}</h3>
        <button>Proceed to Checkout</button>
        {Basket.map((CatPicData, index) =>{
          return (
            <div key={index} className='CatCard'>
            <img className='indivCats' src={CatPicData.catImg} alt="cat"></img>
            <h4>{CatPicData.name}</h4>
            <p><b>Breed: </b>{CatPicData.breed}</p>
            <p>£{CatPicData.price}</p>
            <AboutModals Info = {CatPicData}></AboutModals>
            <button onClick={()=>handleRemoveCat(index)}>Remove from basket</button>
            </div>
          )
          
        })}
      </div>
    </div>
   </div>
   )
  }
  
  export default Home
  
  // Basket Counter will use State to update?
  // Cat Card will be onclick event?

const Home = ({CatPics, ErrorMsg}) => {
return (
  <div className="HomePageWrapper">
    <h1>CHECK OUT THESE CATS YO</h1>
      {ErrorMsg !== null && <h3>{ErrorMsg}</h3>}
    <div className="CatCardDisplay">

      {CatPics.map((CatPicData, index) => {
        return (
        <div key={index} className='CatCard'> 
          <img className='indivCats' src={CatPicData.catImg} alt="cat"></img>
          <h4>{CatPicData.name}</h4>
          <p><b>Breed: </b>{CatPicData.breed}</p>
          <p>£ {CatPicData.price}</p>
        </div>
          )
        })}
    </div>

    <div className='Basket'>
      <h1>The Basket will go here?</h1>
    </div>

 </div>
 )
}

export default Home

// Basket Counter will use State to update?
// Cat Card will be onclick event?
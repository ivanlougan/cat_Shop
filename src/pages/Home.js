
const Home = ({CatPics, ErrorMsg}) => {
return (     
    <>
     <h1>Cats for Life Page header</h1>    
     {ErrorMsg !== null && <h3>{ErrorMsg}</h3>}     
     {CatPics.map((CatPicData, index) => {   
      return (       
      <div key={index} className='AllCats'>         
        <img className='indivCats' src={CatPicData.catImg} alt="cat"></img>          
        <p>{CatPicData.name}</p>       
      </div>  
     )
    })}
      <div className='Basket'>
        <h1>The Basket will go here?</h1>
      </div>
    </>  
 )
}

export default Home
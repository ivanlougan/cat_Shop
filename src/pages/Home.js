const Home = () => {

return (     
    <>     
     <h1>Cats for Life Page header</h1>    
     {ErrorMsg !== null && <h3>{ErrorMsg}</h3>}     
     {CatPics.map((CatPicData, index) => {       
      return (       
      <div className='AllCats'>         
      <img className='indivCats' key={index} src={CatPicData.url} alt="cat"></img>          
      <p >Cat name will go here?</p>       
      </div>  
     )
    })}
    <div className='Basket'>
      <h1>The Basket will go here?</h1>
    </div>
    </>  
 )
}   

const NewCat = () => {
    return {
    Name: faker.name.firstName(),
    Breed: faker.animal.cat(),
    Phone: faker.phone.phoneNumber('') 
    }
}

export default Home
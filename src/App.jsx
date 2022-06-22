import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import Card from "./components/Card/Card";
import CardCharacter from "./components/CardCharacter/CardCharacter";
import useLocationApi from "./hooks/useLocationApi";
import useCharacterApi from "./hooks/useCharacterApi";
import Search from "./components/Search/Search";
import "./App.css"
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";
/*


import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";
import Pagination from "./components/Pagination/Pagination";

*/

const App = ()  =>  {

 const  [searchLocation, setSearchLocation] = useState()  
 
 console.log(searchLocation)

 const  location  = useLocationApi(searchLocation)

  return (
    <div  className="App">
      <div  className="container-wrapper">
        <Wrapper/>
      </div>
      
      <div  className='container-search'> 
      <Search setSearchLocation={setSearchLocation}/>
      </div>
      <div  className="container-location">
        <Card  location  = {location}  />
      </div>
      <div className="card-character" >
        {location?.residents.map(resident =>  (
          
          <CardCharacter  
          resident={resident}
          key={resident} 
          
          />
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default App

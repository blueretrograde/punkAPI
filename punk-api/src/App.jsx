import "./App.scss";

import Card from "./components/Card/Card";
import SideNav from "./components/SideNav/SideNav";
import CardTiles from "./components/CardTiles/CardTiles";
import { useState, useEffect } from "react";

const App = () => {

  const [ Beers, setBeers ] = useState([]) 
  

  const getBeverages = async() => {

    const url = "https://api.punkapi.com/v2/beers"

    const res = await fetch(url);
    const data = await res.json();
    
    setBeers(data)
    
  
  }

  useEffect(() => {
    getBeverages()
  }, [] )





const beverages = Beers.map((beverage) => <Card getBeverages={getBeverages} beverage={beverage.name} image={beverage.image_url} tagline={beverage.tagline}/> )
    
    


  return (
    <>
    <div className="app">
      <SideNav/>
      
      <CardTiles  beverages = {beverages}/>
    </div>
    </>
  );
};

export default App;
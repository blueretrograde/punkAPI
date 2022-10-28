import "./App.scss";

import Card from "./components/Card/Card";
import SideNav from "./components/SideNav/SideNav";
import CardTiles from "./components/CardTiles/CardTiles";
import { useState, useEffect } from "react";

const App = () => {

  const [highABVFilter, setHighABVFilter] = useState(false)
  const [classicFilter, setClassicFilter] = useState(true)
  const [acidicFilter, setAcidicFilter] = useState(true)


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


const handleCheckBoxes = (event) => {

  if (event.target.check === true)
  { 
    if (event.target.value === highABV)
    {
      getHighABVBeers()
      setHighABVFilter(true)
    }
  }
  else {

  }

}


//FILTERS

  //HIGH ABV


 let highABVBeers = [];

  const getHighABVBeers = () => {
 
    Beers.forEach(item => {

    if (item.abv >= 6.0)
    highABVBeers.push(item);
  })
  return(highABVBeers)
  // console.log("This is the high ABV array", highABVBeers);
  }



//ACIDIC 

let acidicBeers =[];

const getAcidicBeers = () => {

  Beers.forEach(item => {
    if (item.ph <= 4.0 )
    acidicBeers.push(item);

    console.log("This is the Acidic array", acidicBeers)
  })

}

getAcidicBeers();

//ClASSIC RANGE

let classicRangeBeers = [];

const getClassicRangeBeers = () => {


  Beers.forEach(item => {

    const productionDate = item.first_brewed
    const productionDateNew = productionDate.split("")
    const productionYear = productionDateNew.splice(-4).join("")
    // console.log("This is the production year:", productionYear)

    if(productionYear < 2010)
    classicRangeBeers.push(item);

    console.log("This is the ClassicRange array", classicRangeBeers)
  })
}

getClassicRangeBeers()




const beverages = Beers.map((beverage) => <Card getBeverages={getBeverages} beverage={beverage.name} image={beverage.image_url} tagline={beverage.tagline}/> )
    
const highABV = highABVBeers.map((beverage) => <Card getBeverages={getBeverages} beverage={beverage.name} image={beverage.image_url} tagline={beverage.tagline}/> )


  return (
    <>
    <div className="app">
      <SideNav handleCheckBoxes={handleCheckBoxes}/>
      {highABVFilter ? <CardTiles  beverages = {highABV} /> : <CardTiles  beverages = {beverages} /> }
      
    </div>
    </>
  );
};

export default App;
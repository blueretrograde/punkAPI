import "./App.scss";

import Card from "./components/Card/Card";
import SideNav from "./components/SideNav/SideNav";
import CardTiles from "./components/CardTiles/CardTiles";
import { useState, useEffect } from "react";

const App = () => {

  // const [highABVFilter, setHighABVFilter] = useState(false)
  // const [classicFilter, setClassicFilter] = useState(false)
  // const [acidicFilter, setAcidicFilter] = useState(false)


  const [ Beers, setBeers ] = useState([]) 

  const [searchText, setSearchText] = useState("");
  

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

  if (event.target.checked)
    { 
      if (event.target.value === "highABV")
      {
        getHighABVBeers()
        // setHighABVFilter(true)
      }
      if (event.target.value === "classicRange"){
        getClassicRangeBeers()
        // setClassicFilter(true)
      }
      if (event.target.value === "acidic"){
        getAcidicBeers()
        // setAcidicFilter(true)
      }
    }
  else {
    getBeverages()
  }

}


//FILTERS

  //HIGH ABV




  const getHighABVBeers = () => {
    const ABV = Beers.filter(item => item.abv >= 6.0)
    setBeers(ABV)
    return

  // console.log("This is the high ABV array", highABVBeers);
  }



//ACIDIC 

const getAcidicBeers = () => {
  const acidic = Beers.filter(item => item.ph <=4.0 )
  setBeers(acidic)
  return
}





//ClASSIC RANGE


const getClassicRangeBeers = () => {


    const classicRange = Beers.filter(item => 
    item.first_brewed.split("").splice(-4).join("") < 2010)
    setBeers(classicRange)
    return

  
  }

  
//Searchbox 

const handleInput = (event) => {
  console.log(event)

if (event.target.value !== ""){

  const userInput = event.target.value.toLowerCase();
  setSearchText(userInput)

console.log("this is the user input coming from the APP:", searchText)

const filteredBeers = Beers.filter(item=> item.name.includes(searchText) )
setBeers(filteredBeers)

console.log("These are the search results:", filteredBeers)}
else {
  getBeverages()
}
}







    
const highABV = Beers.map((beverage) => <Card getBeverages={getBeverages} beverage={beverage.name} image={beverage.image_url} tagline={beverage.tagline}/> )

const classicRange = Beers.map((beverage) => <Card getBeverages={getBeverages} beverage={beverage.name} image={beverage.image_url} tagline={beverage.tagline}/> )

const acidic = Beers.map((beverage) => <Card getBeverages={getBeverages} beverage={beverage.name} image={beverage.image_url} tagline={beverage.tagline}/> )


  return (
    <>
    <div className="app">
      <SideNav handleCheckBoxes={handleCheckBoxes} handleInput={handleInput}/>
      <CardTiles beverages={Beers} highABV={highABV} classicRange={classicRange} acidic={acidic} />
      
    </div>
    </>
  );
};

export default App;
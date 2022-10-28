import "../SideNav/SideNav.scss";
import SearchBox from "../../containers/SearchBox/SearchBox";
// import { useState } from "react";
// import Beers from "../../App.jsx"
// import CardTiles from "../CardTiles/CardTiles";
import CheckBox from "../../components/CheckBox/CheckBox.jsx"

const SideNav = ({handleCheckBoxes}) => {
console.log(handleCheckBoxes)
//   const [searchText, setSearchText] = useState("");

//   const handleInput = (event) => {
//     const userInput = event.target.value.toLowerCase();
//     setSearchText(userInput)
//   }

//   const filteredBeers = Beers.filter((beer) => {
//     const beerName = beer.name.toLowercase();

//     return beerName.includes(searchText);
//   })


// console.log(filteredBeers)
  


    return (
    <nav className="sidenav">
      
      <h3 className="sidenav__heading">Can't find what you're looking for?</h3>
      <SearchBox />
      <CheckBox handleCheckBoxes={handleCheckBoxes}/>
  




    </nav>
    )
}

export default SideNav;
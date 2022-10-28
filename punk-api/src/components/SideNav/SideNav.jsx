import "../SideNav/SideNav.scss";
import SearchBox from "../../components/SearchBox/SearchBox.jsx"
// import { useState } from "react";
// import Beers from "../../App.jsx"
// import CardTiles from "../CardTiles/CardTiles";
import CheckBox from "../../components/CheckBox/CheckBox.jsx"

const SideNav = ({handleCheckBoxes}) => {

  const image = "https://cdn.myportfolio.com/2ac6260b132f88c99a1bc366f98ff4ca/931c4145-2e2f-4e63-b39b-84e372f81d9d_rw_600.gif?h=eac296c68c59eb0c44ca2edd0cbad582"

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
      
      <h4 className="sidenav__heading">Can't find what you're looking for?</h4>
      <SearchBox />
      <CheckBox handleCheckBoxes={handleCheckBoxes}/>
      <img className="sidenav__image" src={image} alt="" />
  




    </nav>
    )
}

export default SideNav;
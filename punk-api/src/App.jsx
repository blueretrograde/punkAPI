import "./App.scss";
import beers from "../../punk-api/src/data/beers"
import Card from "./components/Card/Card";
import SideNav from "./components/SideNav/SideNav";
import CardTiles from "./components/CardTiles/CardTiles";

const App = () => {

  console.log(beers)

  const beverages = beers.map((beverage) => <Card beverage={beverage.name} image={beverage.image_url} tagline={beverage.tagline}/> )
    
    


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
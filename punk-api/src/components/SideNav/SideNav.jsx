import "../SideNav/SideNav.scss";
import SearchBox from "../../containers/SearchBox/SearchBox";

const SideNav = () => {


    return (
    <nav className="sidenav">
      
      <h3 className="sidenav__heading">Can't find what you're looking for?</h3>
      <SearchBox  />
    

      <div className="sidenav__checkboxes">
        <input type="checkbox" className="highABV"></input>
        <label for="htmlFor"> High ABV </label>
        <input type="checkbox" className="classicRange"></input>
        <label for="htmlFor"> Classic Range </label>
        <input type="checkbox" className="acidic"></input> 
        <label for="htmlFor"> Acidic</label>

    
      </div>


    </nav>
    )
}

export default SideNav;
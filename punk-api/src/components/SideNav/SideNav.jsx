import "../SideNav/SideNav.scss";

const SideNav = () => {

    return (
    <nav className="sidenav">
      
      <h3 className="sidenav__heading">Can't find what you're looking for?</h3>
      <input className="sidenav__searchbox" type="text" placeholder="Search.."/>

      <div className="sidenav__checkboxes">

        <input type="checkbox" className="highABV"></input>
        <label for="highABV"> High ABV </label>
        <input type="checkbox" className="classicRange"></input>
        <label for="highABV"> Classic Range </label>
        <input type="checkbox" className="acidic"></input> 
        <label for="highABV"> Acidic</label>

      </div>
    </nav>
    )
}

export default SideNav;

import "../SearchBox/SearchBox.scss"



const SearchBox = ({handleInput, searchText}) => {




return(
    <>

<input
className="sidenav__searchbox" 
type="text"
placeholder="Search.."
value={searchText}
onChange={handleInput}
/>
    </>)
}

export default SearchBox
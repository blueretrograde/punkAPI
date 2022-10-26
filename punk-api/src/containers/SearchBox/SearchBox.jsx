
import "./SearchBox.scss"


const SearchBox = (onChange) => {





    return(<>

<input
className="sidenav__searchbox" 
type="text"
placeholder="Search.."
onChange={onChange}
/>
    </>)
}

export default SearchBox
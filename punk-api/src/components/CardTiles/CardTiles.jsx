import "../CardTiles/CardTiles.scss";
import Card from "../Card/Card";

const CardTiles = ({beverages}) => {

    const allBeverages = beverages.map((beverage) => <Card name={beverage.name} image={beverage.image_url} tagline={beverage.tagline}/> )

    
    return(
        <div className="card__container">
            <div className="card__display">
            {allBeverages}
            </div>
            
        </div>
    )
}

export default CardTiles;
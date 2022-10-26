import "../CardTiles/CardTiles.scss";

const CardTiles = ({beverages}) => {



    
    return(
        <div className="card__container">
            <div className="card__display">
            {beverages}
            </div>
            
        </div>
    )
}

export default CardTiles;
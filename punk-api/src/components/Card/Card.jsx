
import "./Card.scss"

const Card = (props) => {


    const {name, image, tagline} = props;
    


    return(
        <div className="card">
        <img src={image} alt="this is the beer" className="card__image" />
        <h3 data-testid="cardName" className="card__name" >{name}</h3>
        <p className="card__tagline" >{tagline}</p>
        </div>
        
    )
}

export default Card;
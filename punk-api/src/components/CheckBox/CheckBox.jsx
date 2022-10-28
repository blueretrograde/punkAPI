
import "../../components/CheckBox/CheckBox.scss"



const CheckBox = ({handleCheckBoxes}) => {





    return (

        
<>
        <form className="checkboxes">

       
          <input className="checkboxes__checkbox"
            type="checkbox"
            id="highABV"
            onClick={handleCheckBoxes}
            value="highABV"
            
            
          />
          <label className="checkboxes__label">High ABV</label>
          
          
            <input className="checkboxes__checkbox"
              type="checkbox"
              id="classicRange"
              onClick={handleCheckBoxes}
              value="classicRange"
            
            />
            <label className="checkboxes__label">Classic Range</label>
         
          
            <input className="checkboxes__checkbox"
              type="checkbox"
              id="acidic"
              onClick={handleCheckBoxes}
              value="acidic"
              
            />
            <label className="checkboxes__label">Acidic</label>
         

      </form>
        </>
    )
}

export default CheckBox;
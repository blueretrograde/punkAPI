import { useState } from "react"
import "../../components/CheckBox/CheckBox.scss"



const CheckBox = ({handleCheckBoxes}) => {






  // const clickHighABV = () => {
  //   setHighABVFilter(!highABVFilter)

  //   if ( highABVFilter === true)
  //   console.log("The high ABV filter is on")

  //   else 
  //     console.log("The high ABV filter is off")
  
  // }

  // const clickClassicRange = () => {
  //   setClassicFilter(!classicFilter)

  //   if ( classicFilter === true)
  //   console.log("The Classic Range filter is on")

  //   else 
  //   console.log("The Classic Range filter is off")

  // }

  // const clickAcidic = () => {
  //   setAcidicFilter(!acidicFilter)
  //   console.log("The Acidic checkbox is clicked and this is the filter's state:", acidicFilter)

  // }

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
import { useState } from "react"
import "../../components/CheckBox/CheckBox.scss"

const CheckBox = () => {

  const [highABVFilter, setHighABVFilter] = useState(true)
  const [classicFilter, setClassicFilter] = useState(true)
  const [acidicFilter, setAcidicFilter] = useState(true)



  const getHighABV = () => {
    setHighABVFilter(!highABVFilter)

    if ( highABVFilter === true)
    console.log("It's true!")

    else 
    console.log("FAAALSE")
  
    

  }

  const getClassicRange = () => {
    setClassicFilter(!classicFilter)

    if ( classicFilter === true)
    console.log("It's true!")

    else 
    console.log("FAAALSE")

    console.log("The Classic Range checkbox is clickeda nd this is the filter's state:", classicFilter)

  }

  const getAcidic = () => {
    setAcidicFilter(!acidicFilter)
    console.log("The Acidic checkbox is clicked and this is the filter's state:", acidicFilter)

  }

    return (

        
<>
        <form className="checkboxes">

       
          <input className="checkboxes__checkbox"
            type="checkbox"
            id="highABV"
            onClick={getHighABV}
            
          />
          <label className="checkboxes__label">High ABV</label>
          
          
            <input className="checkboxes__checkbox"
              type="checkbox"
              id="classicRange"
              onClick={getClassicRange}
            
            />
            <label className="checkboxes__label">Classic Range</label>
         
          
            <input className="checkboxes__checkbox"
              type="checkbox"
              id="acidic"
              onClick={getAcidic}
              
            />
            <label className="checkboxes__label">Acidic</label>
         

      </form>
        </>
    )
}

export default CheckBox;
import * as React from "react"
import { useEffect } from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.item.item_name}</h4>

      <ul className="fact-list">{/* WRITE CODE HERE */}
      {nutritionFacts.map((fact,id)=>(
        <NutritionalLabelFact item ={props.item} elem={fact} key={fact.id} atr={fact.attribute} label={fact.label}/>
      ))}
      </ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{/* WRITE CODE HERE */}{props.label}</span>{" "}
      <span className="fact-value">{/* WRITE CODE HERE */}{props.item[props.atr]}</span>
    </li>
  )
}

export default NutritionalLabel

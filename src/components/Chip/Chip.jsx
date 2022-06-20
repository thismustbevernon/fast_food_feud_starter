import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = true }) {

  var buttonClassName
  if (isActive){
    buttonClassName = "chip active"
  }

  else {
    buttonClassName = "chip"
  }
  return (
    <button className={buttonClassName}>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip

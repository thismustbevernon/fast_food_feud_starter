import * as React from "react"
import "./Instructions.css"

export function Instructions(props) {
  return (
    <aside className="instructions">
      <p className="start">{props.input}</p>
    
    </aside>
  )
}

export default Instructions

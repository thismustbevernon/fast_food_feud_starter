import * as React from "react"
import "./Chip.css"
import { useState } from "react";

export function Chip({ label = "", isActive = false, onClick}) {

  var buttonClassName = '';
  if (isActive){
    buttonClassName = "chip active"
  }

  else {
    buttonClassName = "chip"
  }
  return (
    <button className={buttonClassName} onClick={onClick}>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip

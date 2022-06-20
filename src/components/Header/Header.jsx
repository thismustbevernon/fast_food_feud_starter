import * as React from "react"
import "./Header.css"

export function Header(props) {
  return (
    <header className="header">
      <h1 className="title">{props.input.title}</h1>
      <h4 className="tagline">{props.input.tagline}</h4>
      <p className="description">{props.input.description}</p>
    </header>
  )
}

export default Header

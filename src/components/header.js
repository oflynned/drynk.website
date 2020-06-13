import React from "react"
import { Link } from "gatsby"
import { GooglePlayBadge } from "./google-play.badge"

import logo from "../images/logo.svg"

import "./header.scss"

export const Header = () => {
  return (
    <header>
      <div className={"content"}>
        <div className={"container"}>
          <img className={"logo"} src={logo} alt={"App logo"}/>
          <h3><Link to={"/"}>drynk</Link></h3>
        </div>
        <div className={"container"}>
          <GooglePlayBadge/>
        </div>
      </div>
    </header>
  )
}

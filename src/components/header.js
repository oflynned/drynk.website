import React from "react"
import "./header.scss"
import { GooglePlayBadge } from "./google-play.badge"
import logo from "../images/logo.svg"

export const Header = () => {
  return (
    <header>
      <div className={"content"}>
        <div className={"container"}>
          <img className={"logo"} src={logo} alt={"App logo"}/>
          <h3>drynk</h3>
        </div>
        <div className={"container"}>
          <GooglePlayBadge/>
        </div>
      </div>
    </header>
  )
}

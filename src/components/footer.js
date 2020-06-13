import { Link } from "gatsby"
import React from "react"
import "./footer.scss"

export const Footer = () => {
  return (
    <footer>
      <div className={"content"}>
        <div className={"container"}>
          <a href={"https://syzible.com"}>Syzible</a>
        </div>
        <div className={"container"}>
          <Link to={"/privacy-policy"}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}

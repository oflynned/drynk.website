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
          <ul>
            <li>
              <Link to={"/privacy-policy"}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={"/terms-of-service"}>Terms of Policy</Link>
            </li>
            <li>
              <Link to={"/gdpr-policy"}>GDPR Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

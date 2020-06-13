import React from "react"

import "normalize.css"
import "./index.scss"

import SEO from "../components/seo"
import { Header } from "../components/header"
import { Layout } from "../components/layout"
import { GooglePlayBadge } from "../components/google-play.badge"
import { Footer } from "../components/footer"

import logo from "../images/logo.svg"

const IndexPage = () => (
  <div className={"index-page"}>
    <SEO title="Home"/>
    <Layout>
      <Header/>
      <div className={"overview"}>
        <div className={"layout-content"}>
          <img className={"logo"} src={logo} alt={"App logo"}/>
          <h2>drynk</h2>
          <h1>Become healthier and discover insights about your alcohol intake</h1>
          <GooglePlayBadge/>
        </div>
      </div>
      <Footer/>
    </Layout>
  </div>
)

export default IndexPage

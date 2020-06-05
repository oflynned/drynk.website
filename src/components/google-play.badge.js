import React from "react"
import "./badge.scss"

export const GooglePlayBadge = () => {
  return (
    <a className={"badge"}
       target="_blank"
       rel="noreferrer"
       href='https://play.google.com/store/apps/details?id=com.syzible.drynk&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
      <img
        alt='Get it on Google Play'
        src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
    </a>
  )
}

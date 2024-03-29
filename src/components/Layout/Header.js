import { useState } from "react"

import { NAV_LINKS, EXTERNAL_LINKS } from "../../data/constants"
import Backdrop from "../Backdrop"

const Header = () => {
   const [sideDrawer, setSideDrawer] = useState(false)

   // Toggle sideDrawer
   const handleSideDrawer = () => {
      setSideDrawer((prevDrawerState) => !prevDrawerState)
   }

   // Remove backdrop and hide sideDrawer
   const handleBackdrop = () => {
      setSideDrawer(false)
   }

   let sideDrawerState = ""
   let backdrop

   if (sideDrawer) {
      sideDrawerState = "active"
      backdrop = <Backdrop click={handleBackdrop} />
   }

   return (
      <header>
         <button
            aria-label="Navigation Menu"
            className={`hamburger ${sideDrawerState}`}
            onClick={handleSideDrawer}
         >
            <div className="line-one"></div>
            <div className="line-two"></div>
            <div className="line-three"></div>
         </button>
         <nav className={`navigation ${sideDrawerState}`}>
            <ul>
               {NAV_LINKS.map((link, index) => (
                  <li key={index}>
                     <a
                        href={link.url}
                        className="nav-link"
                        onClick={handleSideDrawer}
                     >
                        {link.name}
                     </a>
                  </li>
               ))}
            </ul>
         </nav>
         <ul className="external-links">
            {EXTERNAL_LINKS.map((link, index) => (
               <li key={index}>
                  <a
                     href={link.url}
                     aria-label={link.name}
                     title={link.name}
                     target="_blank"
                     rel="noreferrer"
                  >
                     {link.icon}
                  </a>
               </li>
            ))}
         </ul>
         {backdrop}
      </header>
   )
}

export default Header

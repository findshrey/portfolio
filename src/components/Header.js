import { useState } from 'react'
import Backdrop from './Backdrop/Backdrop'
import { svgGithub, svgLinkedin, svgEmail } from './../data/svg-icons'

const Header = () => {
   const [sideDrawer, setSideDrawer] = useState(false)

   // Toggle sideDrawer
   const handleSideDrawer = () => setSideDrawer(!sideDrawer)

   // Remove backdrop and hide sideDrawer
   const handleBackdrop = () => setSideDrawer(false)

   let navClass = 'navigation'
   let backdrop

   if (sideDrawer) {
      navClass = 'navigation active'
      backdrop = <Backdrop click={handleBackdrop} />
   }

   const navOptions = ['home', 'projects', 'about', 'experience', 'contact']

   return (
      <header>
         {
            backdrop
         }
         <button className="hamburger" onClick={handleSideDrawer}>
            <div></div>
            <div></div>
            <div></div>
         </button>
         <nav className={navClass}>
            <ul>
               {
                  navOptions.map((option, index) =>
                     <li key={index}>
                        <a href={`#${option}`} onClick={handleSideDrawer}>
                           {option}
                        </a>
                     </li>
                  )
               }
            </ul>
         </nav>
         <div className="external">
            <a href="https://github.com/findshrey" title="Github" target="_blank">
               {svgGithub}
            </a>
            <a href="https://www.linkedin.com/in/findshrey/" title="Linkedin" target="_blank">
               {svgLinkedin}
            </a>
            <a href="mailto:shrey9april@gmail.com" title="Email" target="_blank">
               {svgEmail}
            </a>
         </div>
      </header>
   )
}

export default Header
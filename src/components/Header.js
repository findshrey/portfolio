import { useState } from 'react'
import { IconGithub, IconLinkedin, IconEmail } from './svg/Icons'
import Backdrop from './Backdrop'

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

   // Navigation links
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
               <IconGithub />
            </a>
            <a href="https://www.linkedin.com/in/findshrey/" title="Linkedin" target="_blank">
               <IconLinkedin />
            </a>
            <a href="mailto:shrey9april@gmail.com" title="Email" target="_blank">
               <IconEmail />
            </a>
         </div>
      </header>
   )
}

export default Header
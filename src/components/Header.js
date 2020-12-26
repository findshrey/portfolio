import { useState } from 'react'
import { IconGithub, IconLinkedin, IconEmail } from './svg/Icons'
import Backdrop from './Backdrop'

const Header = () => {
   const [sideDrawer, setSideDrawer] = useState(false)

   // Toggle sideDrawer
   const handleSideDrawer = () => setSideDrawer(!sideDrawer)

   // Remove backdrop and hide sideDrawer
   const handleBackdrop = () => setSideDrawer(false)

   let hamClass = 'hamburger'
   let navClass = 'navigation'
   let backdrop

   if (sideDrawer) {
      hamClass = 'hamburger active'
      navClass = 'navigation active'
      backdrop = <Backdrop click={handleBackdrop} />
   }

   // Navigation links
   const navOptions = ['home', 'projects', 'about', 'experience', 'contact']

   return (
      <header>
         <button className={hamClass} onClick={handleSideDrawer}>
            <div className="line-one"></div>
            <div className="line-two"></div>
            <div className="line-three"></div>
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
         {
            backdrop
         }
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
import Image from 'next/image'

const Header = () => {
   return (
      <header>
         <div className="container">
            {/* <button className="hamburger">
               <div></div>
               <div></div>
               <div></div>
            </button> */}
            <nav className="nav">
               <ul>
                  <li><a href="">Home</a></li>
                  <li><a href="">Projects</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Experience</a></li>
                  <li><a href="">Contact</a></li>
               </ul>
            </nav>
            <div className="external">
               <a href="https://www.linkedin.com/in/findshrey/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
               </a>
               <a href="https://github.com/findshrey" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
               </a>
               <a href="mailto:shrey9april@gmail.com" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" /></svg>
               </a>
            </div>
            <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g id="trynex">
                  <path id="brackets" d="M3.26458 0.500031L0.375488 1.95917V3.65176L4.49025 5.69456L3.26458 6.30739L0.375488 4.96499V6.54085L3.26458 7.99999L6.12448 6.54085V4.81907L1.98054 2.7471L3.26458 2.10508L6.12448 3.56422V1.87162L3.26458 0.500031Z" fill="url(#paint0_linear)" />
                  <path id="middle-part" d="M0.375488 3.65177V1.95917L6.12448 4.78989V6.51167L0.375488 3.65177Z" fill="#2B7E47" />
               </g>
               <defs>
                  <linearGradient id="paint0_linear" x1="3.24999" y1="0.500031" x2="3.24999" y2="7.99999" gradientUnits="userSpaceOnUse">
                     <stop stop-color="#23E27B" />
                     <stop offset="1" stop-color="#26924B" />
                  </linearGradient>
               </defs>
            </svg>





         </div>
      </header>
   )
}

export default Header
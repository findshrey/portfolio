import { IconGithub, IconLink } from '../svg/Icons'

const Projects = () => {
   return (
      <section id="projects" className="projects">
         <div className="container">
            <header className="head-pink">
               <h3>Some Things I've built</h3>
            </header>
            <div className="projects-wrapper">
               <div className="project">
                  <div className="project-image">
                     <a href="https://www.google.com/" target="_blank">
                        <img src="/photography.png" alt="" />
                     </a>
                  </div>
                  <div className="project-content">
                     <h4>Exotica</h4>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, consequuntur?</p>
                     <ul className="project-tech-list">
                        <li>HTML5</li>
                        <li>SASS</li>
                        <li>ReactJS</li>
                     </ul>
                     <div className="project-links">
                        <a href="https://www.google.com/" target="_blank">
                           <IconGithub />
                        </a>
                        <a href="https://www.google.com/" target="_blank">
                           <IconLink />
                        </a>
                     </div>
                  </div>
               </div>
               {/* ANOTHER */}
               <div className="project">
                  <div className="project-image">
                     <a href="https://www.google.com/" target="_blank">
                        <img src="/photography.png" alt="" />
                     </a>
                  </div>
                  <div className="project-content">
                     <h4>Exotica</h4>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, consequuntur?</p>
                     <ul className="project-tech-list">
                        <li>HTML5</li>
                        <li>SASS</li>
                        <li>ReactJS</li>
                     </ul>
                     <div className="project-links">
                        <a href="https://www.google.com/" target="_blank">
                           <IconGithub />
                        </a>
                        <a href="https://www.google.com/" target="_blank">
                           <IconLink />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Projects
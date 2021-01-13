import { Image, CloudinaryContext } from 'cloudinary-react'
import { IconGithub, IconLink } from '../svg/Icons'

const Projects = () => {
   return (
      <section id="projects" className="projects">
         <div className="container">
            <header className="head-pink">
               <h3>Some Things I've built</h3>
            </header>
            <CloudinaryContext cloudName="dg4arvkpw" className="projects-wrapper">
               <div className="project">
                  <div className="project-image">
                     <a href="https://emmaearl.netlify.app" target="_blank">
                        <Image
                           publicId="portfolio/projects/emma-earl_cznfli.png"
                           loading="lazy"
                           srcSet="
                              https://res.cloudinary.com/dg4arvkpw/image/upload/w_600/portfolio/projects/emma-earl_cznfli.png 600w,
                              https://res.cloudinary.com/dg4arvkpw/image/upload/w_1200/portfolio/projects/emma-earl_cznfli.png 1200w"
                           sizes="(max-width: 800px) 90vw, 45vw"
                        />
                     </a>
                  </div>
                  <div className="project-content">
                     <h4>Emma Earl</h4>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, consequuntur?</p>
                     <ul className="project-tech-list">
                        <li>Javascript</li>
                        <li>CSS3</li>
                        <li>HTML5</li>
                     </ul>
                     <div className="project-links">
                        <a href="https://github.com/findshrey/photography-website" target="_blank">
                           <IconGithub />
                        </a>
                        <a href="https://emmaearl.netlify.app" target="_blank">
                           <IconLink />
                        </a>
                     </div>
                  </div>
               </div>
               {/* ANOTHER */}
               <div className="project">
                  <div className="project-image">
                     <a href="https://lacasetta.netlify.app" target="_blank">
                        <Image
                           publicId="portfolio/projects/la-casetta_uvq8xt.png"
                           loading="lazy"
                           srcSet="
                              https://res.cloudinary.com/dg4arvkpw/image/upload/w_600/portfolio/projects/la-casetta_uvq8xt.png 600w,
                              https://res.cloudinary.com/dg4arvkpw/image/upload/w_1200/portfolio/projects/la-casetta_uvq8xt.png 1200w"
                           sizes="(max-width: 800px) 90vw, 45vw"
                        />
                     </a>
                  </div>
                  <div className="project-content">
                     <h4>La Casetta</h4>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, consequuntur?</p>
                     <ul className="project-tech-list">
                        <li>ReactJS</li>
                        <li>SCSS</li>
                        <li>HTML5</li>
                     </ul>
                     <div className="project-links">
                        <a href="https://github.com/findshrey/restaurant-website" target="_blank">
                           <IconGithub />
                        </a>
                        <a href="https://lacasetta.netlify.app" target="_blank">
                           <IconLink />
                        </a>
                     </div>
                  </div>
               </div>
            </CloudinaryContext>
         </div>
      </section>
   )
}

export default Projects
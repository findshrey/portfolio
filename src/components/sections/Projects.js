import { Image, CloudinaryContext } from 'cloudinary-react'
import { IconGithub, IconLink } from '../svg/Icons'

import projectsToShow from './../../data/projects-to-show'

const Projects = () => {
   return (
      <section id="projects" className="projects">
         <div className="container">
            <header className="head-pink">
               <h3>Some Things I've built</h3>
            </header>
            <CloudinaryContext cloudName="dg4arvkpw" className="projects-wrapper">
               {
                  projectsToShow.map((project) => (
                     <div key={project.name} className="project">
                        <div className="project-image">
                           <a href={project.link} target="_blank">
                              <Image
                                 publicId={project.image.id}
                                 loading="lazy"
                                 srcSet={`${project.image.sm} 600w, ${project.image.md} 1200w`}
                                 sizes="(max-width: 800px) 90vw, 45vw"
                              />
                           </a>
                        </div>
                        <div className="project-content">
                           <h4>{project.name}</h4>
                           <p>{project.about}</p>
                           <ul className="project-tech-list">
                              {
                                 project.techList.map((tech, index) => (
                                    <li key={index}>{tech}</li>
                                 ))
                              }
                           </ul>
                           <div className="project-links">
                              <a href={project.github} target="_blank">
                                 <IconGithub />
                              </a>
                              <a href={project.link} target="_blank">
                                 <IconLink />
                              </a>
                           </div>
                        </div>
                     </div>
                  ))
               }

            </CloudinaryContext>
         </div>
      </section>
   )
}

export default Projects
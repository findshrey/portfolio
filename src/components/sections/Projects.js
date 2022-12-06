import IconGithub from "../../icons/IconGithub"
import IconLink from "../../icons/IconLink"

const Projects = ({ projects }) => {
   return (
      <section id="projects" className="projects container">
         <header className="head-pink">
            <h2>Some Things I've built</h2>
         </header>
         <div className="projects-inner">
            {projects
               .sort((a, b) => a.id - b.id)
               .map((project) => (
                  <figure key={project.name}>
                     <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="project-img"
                     >
                        <img
                           alt={`Preview image for ${project.name}`}
                           loading="lazy"
                           srcSet={`${project.image.sm} 750w, ${project.image.md} 1500w`}
                           sizes="(max-width: 800px) 90vw, 45vw"
                        />
                     </a>
                     <figcaption className="project-text">
                        <h3>{project.name}</h3>
                        <p className="description">{project.description}</p>
                        <ul className="project-tech-list">
                           {project.techList.map((tech, index) => (
                              <li key={index}>{tech}</li>
                           ))}
                        </ul>
                        <p className="project-links">
                           <a
                              href={project.github}
                              aria-label="Project code link (github)"
                              target="_blank"
                              rel="noreferrer"
                           >
                              <IconGithub />
                           </a>
                           <a
                              href={project.link}
                              aria-label="Live project link"
                              target="_blank"
                              rel="noreferrer"
                           >
                              <IconLink />
                           </a>
                        </p>
                     </figcaption>
                  </figure>
               ))}
         </div>
      </section>
   )
}

export default Projects

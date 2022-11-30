import { useState, useEffect } from "react"

import IconGithub from "../../icons/IconGithub"
import IconLink from "../../icons/IconLink"
import firebase from "../../firebase/firebase"

const Projects = () => {
   const [projects, setProjects] = useState([])

   // Get data from firestore and update state
   useEffect(() => {
      let data = []

      firebase
         .firestore()
         .collection("projects")
         .orderBy("id", "asc")
         .get()
         .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
               data = [...data, doc.data()]
            })

            setProjects(data)
         })
   }, [])

   return (
      <section id="projects" className="projects container">
         <header className="head-pink">
            <h3>Some Things I've built</h3>
         </header>
         <div className="projects-inner">
            {projects.map((project) => (
               <figure key={project.name}>
                  <a
                     href={project.link}
                     target="_blank"
                     rel="noreferrer"
                     className="project-img"
                  >
                     <img
                        loading="lazy"
                        srcSet={`${project.image.sm} 750w, ${project.image.md} 1500w`}
                        sizes="(max-width: 800px) 90vw, 45vw"
                     />
                  </a>
                  <figcaption className="project-text">
                     <h4>{project.name}</h4>
                     <p className="description">{project.description}</p>
                     <ul className="project-tech-list">
                        {project.techList.map((tech, index) => (
                           <li key={index}>{tech}</li>
                        ))}
                     </ul>
                     <p className="project-links">
                        <a
                           href={project.github}
                           target="_blank"
                           rel="noreferrer"
                        >
                           <IconGithub />
                        </a>
                        <a href={project.link} target="_blank" rel="noreferrer">
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

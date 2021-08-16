import { useState, useEffect } from "react"
import { Image, CloudinaryContext } from "cloudinary-react"

import IconGithub from "../icons/IconGithub"
import IconLink from "../icons/IconLink"
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
      <section id="projects" className="projects">
         <div className="container">
            <header className="head-pink">
               <h3>Some Things I've built</h3>
            </header>
            <CloudinaryContext cloudName="dg4arvkpw" className="projects-inner">
               {projects.map((project) => (
                  <div key={project.name} className="project">
                     <div className="project-image">
                        <a href={project.link} target="_blank" rel="noreferrer">
                           <Image
                              publicId={project.image.id}
                              loading="lazy"
                              srcSet={`${project.image.sm} 750w, ${project.image.md} 1500w`}
                              sizes="(max-width: 800px) 90vw, 45vw"
                           />
                        </a>
                     </div>
                     <div className="project-content">
                        <h4>{project.name}</h4>
                        <p>{project.description}</p>
                        <ul className="project-tech-list">
                           {project.techList.map((tech, index) => (
                              <li key={index}>{tech}</li>
                           ))}
                        </ul>
                        <div className="project-links">
                           <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                           >
                              <IconGithub />
                           </a>
                           <a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                           >
                              <IconLink />
                           </a>
                        </div>
                     </div>
                  </div>
               ))}
            </CloudinaryContext>
         </div>
      </section>
   )
}

export default Projects

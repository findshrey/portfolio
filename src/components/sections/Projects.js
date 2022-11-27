import { useState, useEffect } from "react"
import { AdvancedImage } from "@cloudinary/react"
import { Cloudinary } from "@cloudinary/url-gen"

import IconGithub from "../../icons/IconGithub"
import IconLink from "../../icons/IconLink"
import firebase from "../../firebase/firebase"

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
   cloud: {
      cloudName: "dg4arvkpw",
   },
})

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
            <div className="projects-inner">
               {projects.map((project) => {
                  // cld.image returns a CloudinaryImage with the configuration set.
                  const myImage = cld.image(project.image.id)

                  return (
                     <div key={project.name} className="project">
                        <div className="project-image">
                           <a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                           >
                              <AdvancedImage
                                 cldImg={myImage}
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
                  )
               })}
            </div>
         </div>
      </section>
   )
}

export default Projects

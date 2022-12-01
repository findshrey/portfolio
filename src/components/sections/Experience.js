import { useState, useEffect } from "react"
import { FaBookmark, FaUserGraduate } from "react-icons/fa"

import firebase from "../../firebase/firebase"

const Experience = () => {
   const [experience, setExperience] = useState({})

   // Get data from firestore and update state
   useEffect(() => {
      let data = {}

      firebase
         .firestore()
         .collection("experience")
         .get()
         .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
               data = { ...data, ...doc.data() }
            })

            setExperience(data)
         })
   }, [])

   return (
      <section id="experience" className="experience">
         <div className="container">
            <header className="head-black">
               <h2>My Experience</h2>
            </header>
            <div className="timeline">
               <header className="timeline-head">
                  <FaBookmark className="icon" />
                  <h3>Work History</h3>
               </header>
               <ul className="timeline-content">
                  {experience?.workHistory
                     ?.sort((a, b) => a.id - b.id)
                     .map((work, index) => (
                        <li key={index}>
                           <span className="timeline-date">{work.date}</span>
                           <div className="timeline-info">
                              <hgroup className="timeline-info-head">
                                 <h4>{work.organizationName}</h4>
                                 <p>{work.jobTitle}</p>
                              </hgroup>
                              {work.achievements.map((el, index) => (
                                 <p key={index}>{el}</p>
                              ))}
                           </div>
                        </li>
                     ))}
               </ul>
            </div>
            <div className="timeline">
               <header className="timeline-head">
                  <FaUserGraduate className="icon" />
                  <h3>Education</h3>
               </header>
               <ul className="timeline-content">
                  {experience?.education?.map((edu, index) => (
                     <li key={index}>
                        <span className="timeline-date">{edu.date}</span>
                        <div className="timeline-info">
                           <hgroup className="timeline-info-head">
                              <h4>{edu.organizationName}</h4>
                              <p>{edu.jobTitle ?? edu.course}</p>
                           </hgroup>
                           {edu.achievements.map((el, index) => (
                              <p key={index}>{el}</p>
                           ))}
                        </div>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>
   )
}

export default Experience

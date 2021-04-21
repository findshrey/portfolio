import { useState, useEffect } from 'react'
import * as FaIcons from 'react-icons/fa'

import firebase from './../../firebase/firebase'

const Experience = () => {
   const [experience, setExperience] = useState({})

   // Get data from firestore and update state
   useEffect(() => {
      let data = {}

      firebase.firestore().collection('experience').get().then((snapshot) => {
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
               <h3>My Experience</h3>
            </header>
            <div className="timeline-wrapper">
               <div className="timeline">
                  <div className="timeline-title">
                     <FaIcons.FaBookmark className="title-icon" />
                     <h4>Work History</h4>
                  </div>
                  <ul className="timeline-content">
                     {
                        experience?.workHistory?.map((work, index) => (
                           <li key={index}>
                              <span className="timeline-date">{work.date}</span>
                              <div className="timeline-info">
                                 <div className="timeline-info-head">
                                    <h5>{work.companyName}</h5>
                                    <p>{work.jobTitle}</p>
                                 </div>
                                 <div className="timeline-info-achievements">
                                    {
                                       work.achievements.map((el, index) => <p key={index}>{el}</p>)
                                    }
                                 </div>
                              </div>
                           </li>
                        ))
                     }
                  </ul>
               </div>
               <div className="timeline">
                  <div className="timeline-title">
                     <FaIcons.FaUserGraduate className="title-icon" />
                     <h4>Education</h4>
                  </div>
                  <ul className="timeline-content">
                     {
                        experience?.education?.map((edu, index) => (
                           <li key={index}>
                              <span className="timeline-date">{edu.date}</span>
                              <div className="timeline-info">
                                 <div className="timeline-info-head">
                                    <h5>{edu.instituteName}</h5>
                                    <p>{edu.jobTitle}</p>
                                 </div>
                                 <div className="timeline-info-achievements">
                                    {
                                       edu.achievements.map((el, index) => <p key={index}>{el}</p>)
                                    }
                                 </div>
                              </div>
                           </li>
                        ))
                     }
                  </ul>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Experience
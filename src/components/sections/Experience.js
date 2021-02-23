import * as FaIcons from 'react-icons/fa'

import experience from './../../data/experience-history'

const Experience = () => {
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
                        experience.workHistory.map((work) => (
                           <li>
                              <span className="timeline-date">{work.date}</span>
                              <div className="timeline-info">
                                 <div className="timeline-info-head">
                                    <h5>{work.companyName}</h5>
                                    <p>{work.jobTitle}</p>
                                 </div>
                                 <p className="timeline-info-details">
                                    {work.description}
                                 </p>
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
                        experience.education.map((edu) => (
                           <li>
                              <span className="timeline-date">{edu.date}</span>
                              <div className="timeline-info">
                                 <div className="timeline-info-head">
                                    <h5>{edu.instituteName}</h5>
                                    <p>{edu.jobTitle}</p>
                                 </div>
                                 <p className="timeline-info-details">{edu.description}</p>
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
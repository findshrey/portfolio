import * as FaIcons from 'react-icons/fa'

const Experience = () => {
   return (
      <section className="experience">
         <div className="container">
            <header className="head-black">
               <h3>Where I've Worked</h3>
            </header>
            <div className="experience-wrapper">
               <div className="work">
                  <div className="timeline-title">
                     <FaIcons.FaBookmark className="title-icon" />
                     <h4>Work History</h4>
                  </div>
                  <ul className="timeline-content">
                     <li>
                        <h5 className="timeline-date">2010-2012</h5>
                        <div className="timeline-info">
                           <p>Company/ School name</p>
                           <p>position</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, delectus.</p>
                        </div>
                     </li>
                     <li>
                        <h5 className="timeline-date">2010-2012</h5>
                        <div className="timeline-info">
                           <p>Company/ School name</p>
                           <p>position</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, delectus.</p>
                        </div>
                     </li>
                     <li>
                        <h5 className="timeline-date">2010-2012</h5>
                        <div className="timeline-info">
                           <p>Company/ School name</p>
                           <p>position</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, delectus.</p>
                        </div>
                     </li>
                  </ul>
               </div>
               <div className="education">
                  <div className="timeline-title">
                     <FaIcons.FaUserGraduate className="title-icon" />
                     <h4>Education</h4>
                  </div>
                  <ul className="timeline-content">
                     <li>
                        <h5 className="timeline-date">2010-2012</h5>
                        <div className="timeline-info">
                           <p>Company/ School name</p>
                           <p>position</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, delectus.</p>
                        </div>
                     </li>
                     <li>
                        <h5 className="timeline-date">2010-2012</h5>
                        <div className="timeline-info">
                           <p>Company/ School name</p>
                           <p>position</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, delectus.</p>
                        </div>
                     </li>
                     <li>
                        <h5 className="timeline-date">2010-2012</h5>
                        <div className="timeline-info">
                           <p>Company/ School name</p>
                           <p>position</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, delectus.</p>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Experience
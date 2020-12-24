import * as FaIcons from 'react-icons/fa'

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
                     <li>
                        <span className="timeline-date">Oct '19 - Mar '20</span>
                        <div className="timeline-info">
                           <div className="timeline-info-head">
                              <h5>Delhi University (IIC)</h5>
                              <p>Full Stack Developer</p>
                           </div>
                           <p className="timeline-info-details">
                              Worked on MHRD's Project-SAMARTH.
                              Developed various modules in a vast Central University system based ERP called UIMS
                              (University Informations Management System) built on PHP (Yii)
                           </p>
                        </div>
                     </li>
                     <li>
                        <span className="timeline-date">Mar '19 - Aug '19</span>
                        <div className="timeline-info">
                           <div className="timeline-info-head">
                              <h5>Sparknet Infotech</h5>
                              <p>Web Developer</p>
                           </div>
                           <p className="timeline-info-details">Developed and maintained code for in-house and client websites primarily using HTML, CSS and JavaScript.</p>
                        </div>
                     </li>
                     {/* <li>
                        <span className="timeline-date">Jun '17 - Aug '17</span>
                        <div className="timeline-info">
                           <p>NIIT</p>
                           <p>Web Developer Intern</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, delectus.</p>
                        </div>
                     </li> */}
                  </ul>
               </div>
               <div className="timeline">
                  <div className="timeline-title">
                     <FaIcons.FaUserGraduate className="title-icon" />
                     <h4>Education</h4>
                  </div>
                  <ul className="timeline-content">
                     <li>
                        <span className="timeline-date">Aug '14 - Jun '18</span>
                        <div className="timeline-info">
                           <div className="timeline-info-head">
                              <h5>Galgotias College of Engineering & Technology</h5>
                              <p>Computer Science and Engineering</p>
                           </div>
                           <p className="timeline-info-details">Computer Science.</p>
                        </div>
                     </li>
                     <li>
                        <span className="timeline-date">Jun '12 - Jun '14</span>
                        <div className="timeline-info">
                           <div className="timeline-info-head">
                              <h5>Delhi Public School, Mathura Road</h5>
                              <p>High School, CBSE</p>
                           </div>
                           <p className="timeline-info-details">Computer Science.</p>
                        </div>
                     </li>
                     {/* <li>
                        <span className="timeline-date">May '10 - Jun '12</span>
                        <div className="timeline-info">
                           <p>Delhi Public School, Mathura Road</p>
                           <p>Middle School, CBSE</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, delectus.</p>
                        </div>
                     </li> */}
                  </ul>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Experience
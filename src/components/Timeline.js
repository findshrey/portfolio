const Timeline = ({ icon, header, timelineData }) => {
   return (
      <div className="timeline">
         <header className="timeline-head">
            {icon}
            <h3>{header}</h3>
         </header>
         <ul className="timeline-content">
            {timelineData
               ?.sort((a, b) => b.id - a.id)
               .map((dataEl, index) => (
                  <li key={index}>
                     <span className="timeline-date">{dataEl.date}</span>
                     <div className="timeline-info">
                        <hgroup className="timeline-info-head">
                           <h4>{dataEl.organizationName}</h4>
                           <p>{dataEl.jobTitle ?? dataEl.course}</p>
                        </hgroup>
                        {dataEl.achievements.map((el, index) => (
                           <p key={index}>{el}</p>
                        ))}
                     </div>
                  </li>
               ))}
         </ul>
      </div>
   )
}

export default Timeline

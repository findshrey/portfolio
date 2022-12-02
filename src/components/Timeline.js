const Timeline = ({ icon, heading, timelineData }) => {
   return (
      <div className="timeline">
         <header className="timeline-head">
            {icon}
            <h3>{heading}</h3>
         </header>
         <ul className="timeline-content">
            {timelineData
               ?.sort((a, b) => b.id - a.id)
               .map((data, index) => (
                  <li key={index}>
                     <span className="timeline-date">{data.date}</span>
                     <div className="timeline-info">
                        <hgroup className="timeline-info-head">
                           <h4>{data.organizationName}</h4>
                           <p>{data.jobTitle ?? data.course}</p>
                        </hgroup>
                        {data.achievements.map((el, index) => (
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

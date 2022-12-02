import { useState, useEffect } from "react"
import { FaBookmark, FaUserGraduate } from "react-icons/fa"

import Timeline from "../Timeline"
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
            <Timeline
               icon={<FaBookmark className="icon" />}
               header="Work History"
               timelineData={experience?.workHistory}
            />
            <Timeline
               icon={<FaUserGraduate className="icon" />}
               header="Education"
               timelineData={experience?.education}
            />
         </div>
      </section>
   )
}

export default Experience

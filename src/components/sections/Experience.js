import { useState, useEffect } from "react"
import { FaBookmark, FaUserGraduate } from "react-icons/fa"
import { collection, getDocs } from "firebase/firestore"

import { db } from "../../firebase/firebase"
import Timeline from "../Timeline"

const Experience = () => {
   const [experience, setExperience] = useState({})

   // Get data from firestore and update state
   useEffect(() => {
      let data = {}

      const getData = async () => {
         const querySnapshot = await getDocs(collection(db, "experience"))

         querySnapshot.forEach((doc) => {
            data = { ...data, ...doc.data() }
         })

         setExperience(data)
      }

      getData()
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

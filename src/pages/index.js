import Head from "next/head"
import { collection, getDocs } from "firebase/firestore"

import { db } from "./../firebase/firebase"
import About from "../components/sections/About"
import Contact from "../components/sections/Contact"
import Wave from "../components/Wave"
import Experience from "../components/sections/Experience"
import Hero from "../components/sections/Hero"
import Projects from "../components/sections/Projects"

const HomePage = (props) => {
   const { projects } = props

   return (
      <>
         <Head>
            <meta charSet="UTF-8" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1.0"
            />
            <meta
               name="description"
               content="Shrey Sharma. A front-end web developer specializing in responsive web apps using React.js"
            />
            <meta name="robots" content="index, follow" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
               href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap"
               rel="stylesheet"
            />
            <link rel="icon" type="image/png" href="/img/favicon.png" />
            <title>Shrey Sharma | Front-End Web Developer</title>
         </Head>
         <Hero />
         <Projects projects={projects} />
         <Wave />
         <About />
         <Experience />
         <Contact />
      </>
   )
}

export async function getStaticProps() {
   let data = []

   const querySnapshot = await getDocs(collection(db, "projects"))

   querySnapshot.forEach((doc) => {
      data = [...data, doc.data()]
   })

   return {
      props: { projects: data },
   }
}

export default HomePage

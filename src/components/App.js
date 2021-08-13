import Header from "./Header"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Divider from "./Divider"
import About from "./sections/About"
import Experience from "./sections/Experience"
import Contact from "./sections/Contact"
import Footer from "./Footer"

const App = () => {
   return (
      <>
         <Header />
         <main>
            <Hero />
            <Projects />
            <Divider />
            <About />
            <Experience />
            <Contact />
         </main>
         <Footer />
      </>
   )
}

export default App

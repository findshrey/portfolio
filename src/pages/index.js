import Header from './../components/Header'
import Hero from './../components/Hero'
import Projects from './../components/Projects'
import Divider from './../components/utilities/divider'
import About from './../components/About'
import Contact from './../components/Contact'
import Footer from './../components/Footer'

const PortfolioApp = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Divider />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default PortfolioApp
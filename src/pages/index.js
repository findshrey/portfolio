import Header from './../components/Header'
import Hero from './../components/Hero'
import Projects from './../components/Projects'
import Divider from './../components/utilities/divider'
import About from './../components/About'

const PortfolioApp = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <Projects /> */}
        <Divider />
        <About />
      </main>
      <footer></footer>
    </>
  )
}

export default PortfolioApp
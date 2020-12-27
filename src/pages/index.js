import Head from 'next/head'
import Header from './../components/Header'
import Hero from '../components/sections/Hero'
import Projects from '../components/sections/Projects'
import Divider from '../components/Divider'
import About from '../components/sections/About'
import Experience from '../components/sections/Experience'
import Contact from '../components/sections/Contact'
import Footer from '../components/Footer'

const PortfolioApp = () => {
  return (
    <>
      <Head>
        {/* <meta name="description"
          content="A taste of real Italy in Brooklyn from Chef Gerard Craft, featuring fresh pastas and wood-fired pizzas in a casual, family-friendly environment." />
        <meta name="robots" content="index, follow" /> */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>Shrey Sharma | Front End Developer</title>
      </Head>
      <Header />
      <main>
        <Hero />
        {/* <Projects /> */}
        <Divider />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default PortfolioApp
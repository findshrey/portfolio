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
        <meta
          name="description"
          content="A front-end Web Developer specialising in Responsive Websites using HTML5, CSS3, and JavaScript"
        />
        <meta name="robots" content="index, follow" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/img/favicon.png" />
        <title>Shrey Sharma | Front-End Web Developer</title>
      </Head>
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

export default PortfolioApp
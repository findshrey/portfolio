import svgProfessional from '../data/svg-professional'

const Hero = () => {
   return (
      <section id="home" className="hero">
         <div className="container">
            <div className="hero-inner">
               <div className="hero-text">
                  <span>Hi, my name is</span>
                  <h1>Shrey Sharma.</h1>
                  <h2>I build things for the web.</h2>
                  <p>
                     I'm a software engineer based in Delhi, specializing in
                     building (and occasionally designing) exceptional websites,
                     applications, and everything in between.
                  </p>
                  <div className="call-to-action">
                     <a href="" className="btn-pink">Projects</a>
                     <a href="" className="btn-pink">Contact</a>
                  </div>
               </div>
               {
                  svgProfessional
               }
            </div>
         </div>
      </section>
   )
}

export default Hero
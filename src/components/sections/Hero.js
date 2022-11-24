import Professional from "../illustrations/Professional"

const Hero = () => (
   <section id="home" className="hero">
      <div className="container">
         <div className="hero-text">
            <p>Hi, my name is</p>
            <h1>Shrey Sharma.</h1>
            <p>I build things for the web.</p>
            <p>
               I'm a software engineer based in Delhi, specializing in Front-end
               development, looking to facilitate the creation of modern and
               aesthetically pleasing websites.
            </p>
            <div className="call-to-action">
               <a href="#projects" className="btn-pink">
                  Projects
               </a>
               <a href="#contact" className="btn-pink">
                  Contact
               </a>
            </div>
         </div>
         <div className="hero-img">
            <Professional />
         </div>
      </div>
   </section>
)

export default Hero

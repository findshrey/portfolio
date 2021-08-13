import Professional from "./../illustrations/Professional"

const Hero = () => (
   <section id="home" className="hero">
      <div className="container">
         <div className="hero-inner">
            <div className="hero-text">
               <span>Hi, my name is</span>
               <h1>Shrey Sharma.</h1>
               <h2>I build things for the web.</h2>
               <p>
                  I'm a software engineer based in Delhi, specializing in
                  Front-end development, looking to facilitate the creation of
                  modern and aesthetically pleasing websites.
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
      </div>
   </section>
)

export default Hero

import DevProductivity from "../illustrations/DevProductivity"

const About = () => (
   <section id="about" className="about">
      <div className="container">
         <header className="head-white">
            <h3>About Me</h3>
         </header>
         <div className="about-inner">
            <div className="about-image">
               <DevProductivity />
            </div>
            <div className="about-content">
               <p>
                  Hello! I'm Shrey, a front-end web developer based in Delhi,
                  India.
               </p>
               <p>
                  I enjoy creating things that live on the internet, whether
                  that be websites, applications, or anything in between. I'm
                  always ready to challenge myself and explore new areas of
                  work.
               </p>
               <p>
                  The main area of my expertise is front-end development. My
                  goal is to always build products that provide pixel-perfect,
                  performant experiences.
               </p>
               <p>
                  Here are a few technologies I've been working with recently:
               </p>
               <ul className="skillset">
                  <li>HTML & (S)CSS</li>
                  <li>JavaScript (ES6+)</li>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Firebase</li>
                  <li>Figma</li>
               </ul>
            </div>
         </div>
      </div>
   </section>
)

export default About

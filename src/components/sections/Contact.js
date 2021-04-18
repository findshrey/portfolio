const Contact = () => (
   <section id="contact" className="contact">
      <div className="container">
         <header className="head-pink">
            <h3>Get In Touch</h3>
         </header>
         <div className="form-wrapper">
            <form
               name="contact"
               className="form"
               data-netlify="true"
               method="POST"
               action="/"
            >
               <input type="hidden" name="form-name" value="contact" />
               <div className="form-input">
                  <label>Name:</label>
                  <input name="name" type="text" placeholder="Enter your name here" required />
               </div>
               <div className="form-input">
                  <label>Email:</label>
                  <input name="email" type="email" placeholder="Enter your email here" required />
               </div>
               <div className="form-input">
                  <label>Message:</label>
                  <textarea name="message" cols="30" rows="10" placeholder="Enter your message here" required />
               </div>
               <button className="btn-pink" type="submit">Send Message</button>
            </form>
         </div>
      </div>
   </section>
)

export default Contact
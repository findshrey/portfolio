const Contact = () => (
   <section id="contact" className="contact container">
      <header className="head-pink">
         <h3>Get In Touch</h3>
      </header>
      <div className="form-wrapper">
         <form
            name="contact"
            className="form"
            data-netlify="true"
            method="POST"
            // action="/"
         >
            {/* Hidden Input required for Netlify Forms */}
            <input
               type="hidden"
               name="form-name"
               value="contact"
               netlify-honeypot="bot-field"
            />
            <p className="form-control">
               <label>Name:</label>
               <input
                  name="name"
                  type="text"
                  placeholder="Enter your name here"
                  required
               />
            </p>
            <p className="form-control">
               <label>Email:</label>
               <input
                  name="email"
                  type="email"
                  placeholder="Enter your email here"
                  required
               />
            </p>
            <p className="form-control">
               <label>Message:</label>
               <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="Enter your message here"
                  required
               />
            </p>
            <button type="submit" className="btn-pink">
               Send Message
            </button>
         </form>
      </div>
   </section>
)

export default Contact

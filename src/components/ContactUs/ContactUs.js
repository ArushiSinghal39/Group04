import React from "react"

const ContactUs = () => (
  <section className="contactus-section">
    <div className="container py-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-7 col-md-12">
          <form name="contact" netlify>
            <p>
              <label>
                Name <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Email <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Message
                <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Query
                <input type="text" name="name" />
              </label>
            </p>
            <p>
              <button type="submit" className="btn btn-outline-success">
                Submit
              </button>
              <button type="submit" className="btn btn-outline-success">
                Clear
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
)

export default ContactUs

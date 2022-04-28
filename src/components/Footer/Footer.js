import React from "react"
import { Facebook, Instagram, Linkedin } from "react-bootstrap-icons"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <section className="bg-dark">
      <footer className="container py-5">
        <div className="row">
          <div className="col-2">
            <h5 className="text-primary">Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Shop
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Contact
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Mart
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="col-2">
            <h5 className="text-primary">Contact info</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  7425095392
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  6299341840
                </a>
              </li>
            </ul>
          </div>

          <div className="col-2">
            <h5 className="text-primary">Email-Address</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  btbtl19023_arushi@banasthali.in
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  btbtl19179_sunidhi@banasthali.in
                </a>
              </li>
            </ul>
          </div>
        </div>
        <section className="contactus-section">
          <div className="container py-5">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-7 col-md-12">
                <form
                  method="POST"
                  role="presentation"
                  netlify-honeypot="bot-field"
                  data-netlify="true"
                  name="contact"
                  className="card p-4 shadow mb-4 border-primary"
                >
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="form-row">
                    <div className="col-lg-12 form-group mb-2">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 form-group mb-4">
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      rows="8"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <div
                      className="btn-group text-decoration-none mb-4"
                      role="group"
                      aria-label="Send"
                    >
                      <button type="submit" className="btn btn-primary shadow">
                        <span className="mx-4">Submit</span>
                      </button>
                      <button type="reset" className="btn btn-light shadow">
                        Clear
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <div className="d-flex text-light justify-content-between py-4 my-4 border-top">
          <p>&copy; 2022 Company, Inc. All rights reserved.</p>
          <span>
            <ul className="list-unstyled justify-content-center d-flex mb-0">
              <Link className="ms-3" to="">
                <Facebook size="30" />
              </Link>
              <Link className="ms-3" to="">
                <Instagram size="30" />
              </Link>
              <Link className="ms-3" to="">
                <Linkedin size="30" />
              </Link>
            </ul>
          </span>
        </div>
      </footer>
    </section>
  )
}

export default Footer

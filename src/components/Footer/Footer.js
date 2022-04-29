import React from "react"
import { Facebook, Instagram, Linkedin } from "react-bootstrap-icons"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <section className="bg-dark">
      <footer className="container py-5">
        <div className="row">
          <div className="col-2">
            <h5 className="text-primary">Little Big Mart</h5>
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
              <div className="col-lg-7 col-md-12"></div>
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

import React from "react"
import Image from "../Images/Images"

const Hero = () => {
  return (
    <div>
      <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Image
              className="d-block mx-lg-auto img-fluid"
              filename={"c1.jpg"}
              alt="1"
            />
            <div class="container">
              <div class="carousel-caption text-start">
                <h1 className="text-warning">
                  Order Online.Schedule Deliveries. Pay Online on Delivery{" "}
                </h1>
                <p>
                  <h5>
                    Conveniently order anything - branded or unbranded -from
                    your nearest store .Pay be cash,card or net banking on
                    delivery
                  </h5>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <Image
              className="d-block mx-lg-auto img-fluid"
              filename={"c2.jpg"}
              alt="1"
            />
            <div class="container">
              <div class="carousel-caption">
                <h1 className="text-warning">
                  "Your Nearby General Store is Now online!"
                </h1>

                <p>
                  <h5>
                    your Local trustworthy stores even closer to you . just a
                    tap away on your smartphone
                  </h5>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <Image
              className="d-block mx-lg-auto img-fluid"
              filename={"c3.jpg"}
              alt="1"
            />
            <div class="container">
              <div class="carousel-caption text-end">
                <h1 className="text-warning">"Shop Locally"</h1>
                <p>
                  <h5>
                    Connect to premium brands and in-stock products at your
                    favourite local shops
                  </h5>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Hero

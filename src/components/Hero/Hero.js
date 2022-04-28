import React from "react"
import Image from "../Images/Images"

const Hero = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <Image
            className="d-block mx-lg-auto img-fluid shadow"
            style={{ borderRadius: "10px" }}
            filename="1.png"
            alt="hero"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="fat-text lh-1 mb-3">
            BuyNearby!! Your Local Online Store
          </h1>
          <p className="lead">
            Many of you continue to shop at your local stores even today and are
            still greeted with that nostalgic, homely smile. We share an idyllic
            bond of trust and convenience with your local
            shopkeepers.Undoubtedly, these Stores form an essential part of our
            Indian fabric.you can now conveniently buy your daily essentials
            online from your local trustworthy store and enjoy more efficient
            ordering, delivery, and payment services that the shopkeeper is
            providing by embracing digital.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary shadow px-4 me-md-2"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

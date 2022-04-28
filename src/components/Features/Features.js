import React from "react"
import { Shop, PiggyBank, Basket2Fill, Cart } from "react-bootstrap-icons"

const Items = [
  {
    icon: <Shop />,
    title: "Order Anything You Want",
    description:
      "Conveniently order essentials, groceries and a whole variety of products – branded or unbranded – from your nearest stores. Find out which store is known for what and order from the best.",
  },
  {
    icon: <Basket2Fill />,
    title: "Order Smartly. Avoid Confusions",
    description:
      "Avoid the order confusions and mismatches that generally happen over a phone call. Now, confirm all order specifications and modifications on the website, and get only the perfect orders delivered.",
  },

  {
    icon: <PiggyBank />,
    title: "Pay Online On Delivery",
    description:
      "Not just cash, you can now conveniently pay online on delivery using credit card, debit card or net banking.",
  },
  {
    icon: <Cart />,
    title: "Get Better Discounts & Offers",
    description:
      "Save more by easily checking which nearby store is offering relevant discounts and offers before you purchase your staples.",
  },
]

const Features = () => {
  return (
    <div className="container px-4 py-5">
      <h2 className="fat-text pb-2 border-bottom text-center">Features</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        {Items.map((item, i) => {
          return (
            <div key={i} className="col text-center ">
              <div className="card hover card-body shadow">
                <div
                  className="bi text-muted flex-shrink-0"
                  style={{ fontSize: "3rem" }}
                >
                  {item.icon}
                </div>

                <div>
                  <h4 className="fw-bold mb-0">{item.title}</h4>
                  <small className="text-muted">{item.description}</small>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Features

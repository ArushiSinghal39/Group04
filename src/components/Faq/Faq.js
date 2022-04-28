import React from "react"
import Accordion from "../Accordion/Accordion"

const Item = [
  {
    title: "What is Local Shop",
    content: `Local Shop is India’s own marketplace that charges 0% commission from sellers. It’s an initiative to empower local shopkeepers & retailers to start their own ecommerce store. We offer you a user-friendly platform to easily manage your products, categories, orders and much more.`,
  },
  {
    title: "What Payment methods does Local Shop Support",
    content: `We offer our sellers multiple payment options based on your plan. You can choose credit card, debit card, net banking, cash on delivery and many more. We have tie-ups with several trusted payment gateways such as Paypal, PayZapp, PayUMoney, RazorPay, etc.`,
  },
  {
    title: "Who will offer the delivery services of ecommerce store",
    content: `we’ll be responsible for delivery of products in our locality & regions.we’ll give you a facility for Local, Regional & National couriers.`,
  },
]

const FAQ = () => {
  return (
    <div className="container py-5">
      <h2 className="fat-text pb-2 border-bottom text-center">FAQ</h2>
      <div className="row justify-content-center py-5">
        {Item.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  )
}

export default FAQ

"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Patel",
      title: "Co-founder",
      content:
        "Had a great experience working with Codetoli Technology! Super responsive, patient with my ideas, and really understood the vision for our brand. They handled everything with professionalism and delivered exactly what I needed, clean, functional, and visually on point. Would definitely recommend to anyone looking for reliable tech support!",
      rating: 5,
    },
    {
      name: "Arun Sharma",
      title: "Business Owner",
      content:
        "Your software helped me a lot to automate my business and reduce efforts significantly. The system is intuitive and has saved us countless hours on manual processes. The support team is always ready to help with any questions.",
      rating: 5,
    },
    {
      name: "Gami Desai",
      title: "Founder",
      content:
        "Your services and products are very professional and good. The implementation was smooth and the team understood our requirements perfectly. We've seen a significant improvement in our operational efficiency since deploying your solutions.",
      rating: 5,
    },
    {
      name: "Priya Verma",
      title: "Managing Director",
      content:
        "Codetoli Technology transformed how we manage our inventory and sales. The real-time analytics have given us insights we never had before. Highly professional team with excellent customer support.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      title: "Executive",
      content:
        "The POS system implementation was seamless. Our staff adapted quickly and we saw immediate improvements in transaction speed and accuracy. Great value for money and outstanding support.",
      rating: 5,
    },
    {
      name: "Neha Singh",
      title: "Operations Manager",
      content:
        "The e-commerce platform with WhatsApp integration has revolutionized our sales channel. Customer engagement has increased dramatically and the checkout process is incredibly smooth.",
      rating: 5,
    },
    {
      name: "Vikram Kumar",
      title: "Business Leader",
      content:
        "The restaurant management system has streamlined our kitchen operations. Order management is now efficient and our staff coordination has improved significantly. Highly recommended!",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      title: "Finance Professional",
      content:
        "The accounting software has made GST compliance effortless. What used to take hours now takes minutes. The automated balance sheet generation is a game-changer for our finance team.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-heading mb-6 text-foreground">What Our Clients Say</h2>
          <p className="text-xl font-light text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses across industries to transform their operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-sm font-light text-muted-foreground mb-6 line-clamp-4">{testimonial.content}</p>

              <div className="border-t border-border pt-4">
                <p className="font-light text-foreground text-sm">{testimonial.name}</p>
                <p className="text-xs font-light text-muted-foreground">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

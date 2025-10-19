"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Users, Target, Zap, Award } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to empowering businesses with intelligent software solutions.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Constantly pushing boundaries to deliver cutting-edge technology.",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Your success is our success. We prioritize your needs above all.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in quality and service delivery.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-display mb-6 text-foreground">About Codetoli</h1>
            <p className="text-xl font-light text-muted-foreground max-w-2xl mx-auto">
              We're building the future of business software with innovation, integrity, and a commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-heading mb-6">Our Story</h2>
              <p className="text-lg font-light text-muted-foreground mb-4">
                Founded in 2020, Codetoli Technology emerged from a simple vision: to create business software that
                actually works for modern enterprises.
              </p>
              <p className="text-lg font-light text-muted-foreground mb-4">
                We started by listening to hundreds of business owners and managers about their pain points. What we
                discovered was a gap in the market for software that was both powerful and intuitive.
              </p>
              <p className="text-lg font-light text-muted-foreground">
                Today, we serve thousands of businesses across India, helping them streamline operations, reduce costs,
                and scale with confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-secondary/50 rounded-lg p-8 border border-border"
            >
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-light text-primary mb-2">5000+</div>
                  <p className="text-sm font-light text-muted-foreground">Active Customers</p>
                </div>
                <div>
                  <div className="text-3xl font-light text-primary mb-2">50+</div>
                  <p className="text-sm font-light text-muted-foreground">Team Members</p>
                </div>
                <div>
                  <div className="text-3xl font-light text-primary mb-2">6</div>
                  <p className="text-sm font-light text-muted-foreground">Core Products</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-heading text-center mb-12"
          >
            Our Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-light text-lg mb-2">{value.title}</h3>
                  <p className="text-sm font-light text-muted-foreground">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

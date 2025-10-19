"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/testimonials"
import Link from "next/link"
import { ArrowRight, Zap, Shield, Users, Brain, Cpu, BarChart3, Lock } from "lucide-react"
import { motion } from "framer-motion"
import { NetworkVisualization3D } from "@/components/3d-network"

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

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
            <h1 className="text-display mb-6 text-foreground">From Code to Brand, We Build It All</h1>
            <p className="text-xl font-light text-muted-foreground max-w-2xl mx-auto mb-8">
              Codetoli powers businesses with intelligent POS, ERP, eCommerce, and AI-driven solutions. Scale faster,
              operate smarter, grow stronger.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#demo"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-light hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
              >
                Get a Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="px-8 py-3 border border-border text-foreground rounded-lg font-light hover:bg-secondary transition-colors inline-flex items-center justify-center gap-2"
              >
                View Products <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Hero Image Placeholder */}
          <NetworkVisualization3D />
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-heading mb-6">About Codetoli</h2>
            <p className="text-lg font-light text-muted-foreground mb-6 leading-relaxed">
              Codetoli Technology is a leading provider of enterprise software solutions designed to empower businesses
              of all sizes. With a focus on innovation, reliability, and customer success, we deliver cutting-edge
              technology that transforms operations and drives growth. Our team of experienced developers and
              consultants work closely with clients to understand their unique challenges and deliver tailored solutions
              that exceed expectations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-4">
                <div className="text-3xl font-light text-primary mb-2">500+</div>
                <p className="text-sm font-light text-muted-foreground">Businesses Served</p>
              </div>
              <div className="p-4">
                <div className="text-3xl font-light text-primary mb-2">10+</div>
                <p className="text-sm font-light text-muted-foreground">Years Experience</p>
              </div>
              <div className="p-4">
                <div className="text-3xl font-light text-primary mb-2">24/7</div>
                <p className="text-sm font-light text-muted-foreground">Customer Support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-heading text-center mb-12"
          >
            Why Choose Codetoli
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Performance First", desc: "Optimized for speed and efficiency" },
              { icon: Shield, title: "Secure & Scalable", desc: "Enterprise-grade security and cloud-ready" },
              { icon: Users, title: "Expert Support", desc: "Dedicated team available 24/7" },
              { icon: Brain, title: "AI Intelligence", desc: "Smart automation and predictions" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors hover:shadow-lg hover:scale-105"
              >
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-light text-lg mb-2">{item.title}</h3>
                <p className="text-sm font-light text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-heading mb-4">Our Services</h2>
            <p className="text-lg font-light text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Cpu,
                title: "Custom Development",
                desc: "Bespoke software solutions designed specifically for your business requirements and workflows",
              },
              {
                icon: BarChart3,
                title: "Business Intelligence",
                desc: "Data-driven insights and analytics to optimize operations and drive strategic decisions",
              },
              {
                icon: Lock,
                title: "Security & Compliance",
                desc: "Enterprise-grade security with full compliance to industry standards and regulations",
              },
              {
                icon: Users,
                title: "Implementation & Training",
                desc: "Seamless deployment with comprehensive training for your entire team",
              },
              {
                icon: Brain,
                title: "AI Integration",
                desc: "Leverage artificial intelligence to automate processes and predict business outcomes",
              },
              {
                icon: Shield,
                title: "24/7 Support",
                desc: "Dedicated support team available round-the-clock for your peace of mind",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 hover:shadow-lg transition-all group hover:scale-105"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-light text-lg mb-2">{service.title}</h3>
                <p className="text-sm font-light text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-heading text-center mb-12"
          >
            Our Products
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Codetoli POS", price: "₹3,999", desc: "Web-based POS with realtime inventory" },
              { name: "EdgeSync ERP", price: "Custom", desc: "Modern ERP with HR, Payroll and CRM" },
              { name: "eCommerce Suite", price: "From ₹999", desc: "WhatsApp checkout and managed stores" },
              { name: "Accounting Suite", price: "Custom", desc: "Automated balance sheets and GST filing" },
              { name: "Restaurant System", price: "Custom", desc: "Kitchen management and inventory" },
              { name: "AI Recommendations", price: "Custom", desc: "Predictive intelligence for your business" },
            ].map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:scale-105"
              >
                <h3 className="font-light text-lg mb-2">{product.name}</h3>
                <p className="text-primary font-light text-sm mb-3">{product.price}</p>
                <p className="text-sm font-light text-muted-foreground">{product.desc}</p>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 mt-4 text-primary font-light text-sm hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-heading mb-6"
          >
            Ready to transform your business?
          </motion.h2>
          <p className="text-lg font-light mb-8 opacity-90">
            Get a personalized demo and see how Codetoli can streamline your operations.
          </p>
          <Link
            href="https://www.linkedin.com/company/codetoli-technology/"
            target="_blank"
            className="inline-block px-8 py-3 bg-primary-foreground text-primary rounded-lg font-light hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

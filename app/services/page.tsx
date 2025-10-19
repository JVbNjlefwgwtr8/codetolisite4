"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Code, Users, TrendingUp, Headphones, Globe, Briefcase, Palette } from "lucide-react"
import { motion } from "framer-motion"

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Custom Software Development",
      description: "Tailored software solutions built specifically for your business needs",
      features: [
        "Requirements analysis and architecture design",
        "Full-stack development with modern tech stack",
        "Quality assurance and testing",
        "Deployment and ongoing support",
        "Scalable solutions for growth",
      ],
      icon: Code,
    },
    {
      id: 2,
      title: "E-commerce Development",
      description: "Complete e-commerce solutions on multiple platforms",
      features: [
        "Zoho Commerce integration",
        "Shopify store development",
        "WordPress e-commerce setup",
        "Odoo e-commerce customization",
        "Payment gateway integration",
      ],
      icon: Globe,
    },
    {
      id: 3,
      title: "EdgeSync ERP Customization",
      description: "Customize and implement our advanced ERP system",
      features: [
        "Employee and salary management",
        "Multi-role dashboard setup",
        "Task and inventory management",
        "Attendance tracking system",
        "Customer management with CRM",
      ],
      icon: TrendingUp,
    },
    {
      id: 4,
      title: "Codetoli eCommerce Store Setup",
      description: "Launch your online store with our managed platform",
      features: [
        "Store design and customization",
        "Product catalog management",
        "Order management system",
        "Coupon and discount setup",
        "SEO optimization",
      ],
      icon: Briefcase,
    },
    {
      id: 5,
      title: "LinkedIn Personal Branding",
      description: "Build your professional presence on LinkedIn",
      features: [
        "Profile optimization and strategy",
        "Content creation and posting",
        "Engagement and networking",
        "Personal brand development",
        "2000+ reach per post",
      ],
      icon: Users,
    },
    {
      id: 6,
      title: "Marketing Services",
      description: "Comprehensive digital marketing solutions",
      features: [
        "Content strategy and creation",
        "Social media management",
        "SEO optimization",
        "Email marketing campaigns",
        "Analytics and reporting",
      ],
      icon: Palette,
    },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Consultation",
      description: "We understand your business goals, challenges, and requirements in detail",
    },
    {
      number: "02",
      title: "Planning & Strategy",
      description: "Create a detailed roadmap, timeline, and technical architecture",
    },
    {
      number: "03",
      title: "Development & Implementation",
      description: "Build your solution using agile methodology with regular updates",
    },
    {
      number: "04",
      title: "Testing & QA",
      description: "Rigorous quality assurance and performance testing",
    },
    {
      number: "05",
      title: "Deployment & Launch",
      description: "Smooth launch with minimal downtime and data migration",
    },
    {
      number: "06",
      title: "Support & Optimization",
      description: "Ongoing maintenance, updates, and continuous optimization",
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
            <h1 className="text-display mb-6 text-foreground">Our Services</h1>
            <p className="text-xl font-light text-muted-foreground max-w-2xl mx-auto">
              End-to-end solutions to implement, customize, and scale your business software
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-light mb-2 text-foreground">{service.title}</h3>
                  <p className="text-sm font-light text-muted-foreground mb-6">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm font-light text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-heading text-center mb-12"
          >
            Our Process
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-light text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-light mb-2">{step.title}</h3>
                    <p className="text-sm font-light text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-6 w-0.5 h-20 bg-border transform translate-y-12" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-heading mb-6">24/7 Support & Maintenance</h2>
              <p className="text-lg font-light text-muted-foreground mb-6">
                Our dedicated support team is always available to help you succeed. We provide proactive monitoring,
                regular updates, and rapid response to any issues.
              </p>
              <ul className="space-y-4">
                {[
                  "Round-the-clock monitoring and alerts",
                  "Rapid incident response and resolution",
                  "Regular system updates and patches",
                  "Performance optimization",
                  "Security updates and compliance",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Headphones className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-secondary/50 rounded-lg p-8 border border-border"
            >
              <h3 className="text-lg font-light mb-4">Support Tiers</h3>
              <div className="space-y-4">
                {[
                  { tier: "Basic", response: "24 hours" },
                  { tier: "Professional", response: "4 hours" },
                  { tier: "Enterprise", response: "1 hour" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center pb-4 border-b border-border last:border-0">
                    <span className="font-light">{item.tier}</span>
                    <span className="text-sm text-muted-foreground">{item.response} response</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-heading mb-6"
          >
            Let's discuss your project
          </motion.h2>
          <p className="text-lg font-light mb-8 opacity-90">
            Contact our team to learn how we can help you achieve your business goals.
          </p>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="inline-block px-8 py-3 bg-primary-foreground text-primary rounded-lg font-light hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

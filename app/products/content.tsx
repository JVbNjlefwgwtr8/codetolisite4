"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Check, Zap, Shield, Users, Brain, TrendingUp, Lock, Smartphone } from "lucide-react"
import { motion } from "framer-motion"

export default function ProductsPageContent() {
  const products = [
    {
      id: 1,
      name: "Codetoli POS",
      price: "₹3,999/month",
      description: "Web-based Point of Sale system with real-time inventory management",
      features: [
        "Real-time inventory tracking",
        "Multi-store management",
        "Barcode scanning",
        "Sales analytics & reports",
        "Customer loyalty programs",
        "Mobile app support",
        "Advanced tech to reduce returns",
      ],
      icon: Smartphone,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "EdgeSync ERP",
      price: "Custom pricing",
      description: "Modern Enterprise Resource Planning with HR, Payroll & CRM",
      features: [
        "Integrated HR management",
        "Automated payroll processing",
        "CRM capabilities",
        "Supply chain management",
        "Financial reporting",
        "Role-based access control",
      ],
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "eCommerce Suite",
      price: "From ₹999/month",
      description: "Complete e-commerce solution with WhatsApp checkout integration",
      features: [
        "WhatsApp checkout integration",
        "Multi-channel selling",
        "Inventory sync",
        "Order management",
        "Payment gateway integration",
        "Shipping integration",
        "Advanced tech to reduce returns",
      ],
      icon: Zap,
      color: "from-orange-500 to-red-500",
    },
    {
      id: 7,
      name: "Codetoli Commerce 2.0",
      price: "From ₹1,499/month",
      description: "Next-generation e-commerce platform with advanced order management",
      features: [
        "User-friendly order placement",
        "Advanced inventory management",
        "Real-time order tracking",
        "Multi-payment gateway support",
        "Customer analytics dashboard",
        "Advanced tech to reduce returns",
      ],
      icon: Zap,
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: 4,
      name: "Accounting Suite",
      price: "Custom pricing",
      description: "Automated accounting with balance sheets and GST filing",
      features: [
        "Automated balance sheets",
        "GST filing automation",
        "Invoice management",
        "Expense tracking",
        "Tax compliance",
        "Financial analytics",
      ],
      icon: Lock,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 5,
      name: "Restaurant System",
      price: "Custom pricing",
      description: "Kitchen management and inventory system for restaurants",
      features: [
        "Kitchen display system",
        "Table management",
        "Order tracking",
        "Inventory management",
        "Staff scheduling",
        "Customer feedback",
      ],
      icon: Users,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 6,
      name: "AI Recommendations",
      price: "Custom pricing",
      description: "Predictive intelligence engine for business insights",
      features: [
        "Predictive analytics",
        "Customer behavior analysis",
        "Sales forecasting",
        "Inventory optimization",
        "Personalized recommendations",
        "Real-time insights",
      ],
      icon: Brain,
      color: "from-indigo-500 to-blue-500",
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
            <h1 className="text-display mb-6 text-foreground">Our Products</h1>
            <p className="text-xl font-light text-muted-foreground max-w-2xl mx-auto">
              Comprehensive business software solutions designed to scale with your operations
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => {
              const Icon = product.icon
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative bg-card rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-lg overflow-hidden card-hover"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                  />

                  <div className="relative p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                      <span className="text-sm font-light text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {product.price}
                      </span>
                    </div>

                    <h3 className="text-lg font-light mb-2 text-foreground">{product.name}</h3>
                    <p className="text-sm font-light text-muted-foreground mb-6">{product.description}</p>

                    <div className="space-y-3 mb-6">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-light text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/products/${product.id}`}
                      className="inline-flex items-center gap-2 text-primary font-light text-sm hover:gap-3 transition-all group/link"
                    >
                      View Details{" "}
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Our Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-heading text-center mb-12"
          >
            Why Choose Our Products
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Optimized performance for seamless operations" },
              { icon: Shield, title: "Enterprise Secure", desc: "Bank-level security and compliance" },
              { icon: Users, title: "Easy to Use", desc: "Intuitive interfaces require minimal training" },
              { icon: Brain, title: "AI-Powered", desc: "Smart automation and predictive insights" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-light text-lg mb-2">{item.title}</h3>
                <p className="text-sm font-light text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
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
            Ready to get started?
          </motion.h2>
          <p className="text-lg font-light mb-8 opacity-90">
            Schedule a demo with our team to see how our products can transform your business.
          </p>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="inline-block px-8 py-3 bg-primary-foreground text-primary rounded-lg font-light hover:opacity-90 transition-opacity button-press"
          >
            Schedule Demo
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

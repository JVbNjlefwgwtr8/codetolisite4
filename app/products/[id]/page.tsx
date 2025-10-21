"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Zap, Users, Brain, TrendingUp, Lock, Smartphone } from "lucide-react"
import { motion } from "framer-motion"
import { useParams } from "next/navigation"

export default function ProductDetailPage() {
  const params = useParams()
  const productId = Number.parseInt(params.id as string)

  const products: Record<number, any> = {
    1: {
      name: "Codetoli POS",
      price: "₹3,999/month",
      description: "Web-based Point of Sale system with real-time inventory management",
      longDescription:
        "Codetoli POS is a comprehensive point-of-sale solution designed for retail businesses of all sizes. With real-time inventory tracking, multi-store management, and advanced analytics, you can manage your entire retail operation from a single platform.",
      features: [
        "Real-time inventory tracking",
        "Multi-store management",
        "Barcode scanning",
        "Sales analytics & reports",
        "Customer loyalty programs",
        "Mobile app support",
        "Offline mode capability",
        "Cloud-based backup",
      ],
      benefits: [
        "Reduce checkout time by 40%",
        "Minimize inventory errors",
        "Increase customer satisfaction",
        "Real-time sales insights",
      ],
      icon: Smartphone,
      color: "from-blue-500 to-cyan-500",
    },
    2: {
      name: "EdgeSync ERP",
      price: "Custom pricing",
      description: "Modern Enterprise Resource Planning with HR, Payroll & CRM",
      longDescription:
        "EdgeSync ERP is a comprehensive enterprise resource planning solution that integrates all aspects of your business operations. From HR management to supply chain, financial reporting to CRM, manage everything in one unified platform.",
      features: [
        "Integrated HR management",
        "Automated payroll processing",
        "CRM capabilities",
        "Supply chain management",
        "Financial reporting",
        "Role-based access control",
        "Custom workflows",
        "API integrations",
      ],
      benefits: [
        "Streamline operations across departments",
        "Reduce manual data entry by 60%",
        "Improve decision-making with real-time data",
        "Scale your business efficiently",
      ],
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
    },
    3: {
      name: "eCommerce Suite",
      price: "From ₹999/month",
      description: "Complete e-commerce solution with WhatsApp checkout integration",
      longDescription:
        "Our eCommerce Suite enables you to sell across multiple channels with a unified inventory and order management system. With WhatsApp checkout integration, you can reach customers where they are.",
      features: [
        "WhatsApp checkout integration",
        "Multi-channel selling",
        "Inventory sync",
        "Order management",
        "Payment gateway integration",
        "Shipping integration",
        "Customer analytics",
        "Marketing automation",
      ],
      benefits: [
        "Reach customers on WhatsApp",
        "Manage inventory across channels",
        "Increase conversion rates",
        "Reduce operational overhead",
      ],
      icon: Zap,
      color: "from-orange-500 to-red-500",
    },
    4: {
      name: "Accounting Suite",
      price: "Custom pricing",
      description: "Automated accounting with balance sheets and GST filing",
      longDescription:
        "Simplify your accounting processes with our comprehensive accounting suite. Automated balance sheet generation, GST filing, and tax compliance make financial management effortless.",
      features: [
        "Automated balance sheets",
        "GST filing automation",
        "Invoice management",
        "Expense tracking",
        "Tax compliance",
        "Financial analytics",
        "Multi-currency support",
        "Audit trails",
      ],
      benefits: [
        "Save 20+ hours per month on accounting",
        "Ensure GST compliance automatically",
        "Real-time financial visibility",
        "Reduce accounting errors",
      ],
      icon: Lock,
      color: "from-green-500 to-emerald-500",
    },
    5: {
      name: "Restaurant System",
      price: "Custom pricing",
      description: "Kitchen management and inventory system for restaurants",
      longDescription:
        "Streamline your restaurant operations with our integrated kitchen management and inventory system. From order taking to kitchen display, manage your entire restaurant efficiently.",
      features: [
        "Kitchen display system",
        "Table management",
        "Order tracking",
        "Inventory management",
        "Staff scheduling",
        "Customer feedback",
        "Menu management",
        "Reservation system",
      ],
      benefits: [
        "Reduce order preparation time",
        "Minimize food waste",
        "Improve customer experience",
        "Optimize staff scheduling",
      ],
      icon: Users,
      color: "from-yellow-500 to-orange-500",
    },
    6: {
      name: "AI Recommendations",
      price: "Custom pricing",
      description: "Predictive intelligence engine for business insights",
      longDescription:
        "Leverage artificial intelligence to gain predictive insights into your business. Our AI engine analyzes patterns and provides actionable recommendations to optimize your operations.",
      features: [
        "Predictive analytics",
        "Customer behavior analysis",
        "Sales forecasting",
        "Inventory optimization",
        "Personalized recommendations",
        "Real-time insights",
        "Anomaly detection",
        "Custom ML models",
      ],
      benefits: [
        "Predict customer behavior",
        "Optimize inventory levels",
        "Increase sales by 25%",
        "Reduce operational costs",
      ],
      icon: Brain,
      color: "from-indigo-500 to-blue-500",
    },
  }

  const product = products[productId]

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-display mb-6">Product Not Found</h1>
            <Link href="/products" className="text-primary hover:underline">
              Back to Products
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const Icon = product.icon

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <section className="pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/products" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-display text-foreground">{product.name}</h1>
                  <p className="text-lg font-light text-primary">{product.price}</p>
                </div>
              </div>

              <p className="text-xl font-light text-muted-foreground mb-8">{product.longDescription}</p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-light hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                >
                  Request Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#features"
                  className="px-8 py-3 border border-border text-foreground rounded-lg font-light hover:bg-secondary transition-colors inline-flex items-center justify-center gap-2"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`rounded-lg h-96 border border-border overflow-hidden`}
            >
              <img src={`/product-${productId}.jpg`} alt={product.name} className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-heading text-center mb-12"
          >
            Key Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.features.map((feature: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border"
              >
                <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="font-light text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-heading text-center mb-12"
          >
            Business Benefits
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.benefits.map((benefit: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-light text-foreground">{benefit}</p>
                </div>
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
            Ready to get started with {product.name}?
          </motion.h2>
          <p className="text-lg font-light mb-8 opacity-90">
            Schedule a personalized demo with our team to see how this solution can transform your business.
          </p>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="inline-block px-8 py-3 bg-primary-foreground text-primary rounded-lg font-light hover:opacity-90 transition-opacity"
          >
            Schedule Demo
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

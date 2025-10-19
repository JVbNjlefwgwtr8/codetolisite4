"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Calendar, User, Tag } from "lucide-react"
import { motion } from "framer-motion"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Right POS System for Your Business",
      excerpt:
        "A comprehensive guide to selecting a POS system that fits your business needs and budget. Learn about key features and implementation strategies.",
      author: "Rajesh Kumar",
      date: "2024-10-15",
      category: "POS Systems",
      slug: "choose-right-pos-system",
      readTime: "8 min read",
      image: "/pos-system-dashboard.jpg",
    },
    {
      id: 2,
      title: "ERP Implementation Best Practices for SMEs",
      excerpt:
        "Discover the best practices for implementing an ERP system in small and medium enterprises. Avoid common pitfalls and ensure smooth adoption.",
      author: "Priya Sharma",
      date: "2024-10-12",
      category: "ERP",
      slug: "erp-implementation-best-practices",
      readTime: "10 min read",
      image: "/erp-system-implementation.jpg",
    },
    {
      id: 3,
      title: "Maximizing E-commerce Sales with WhatsApp Integration",
      excerpt:
        "Learn how to leverage WhatsApp for e-commerce sales. Increase customer engagement and conversion rates with direct messaging.",
      author: "Amit Patel",
      date: "2024-10-10",
      category: "E-commerce",
      slug: "ecommerce-whatsapp-integration",
      readTime: "6 min read",
      image: "/whatsapp-e-commerce-integration.jpg",
    },
    {
      id: 4,
      title: "AI-Powered Inventory Management: The Future of Retail",
      excerpt:
        "Explore how artificial intelligence is revolutionizing inventory management. Reduce waste, optimize stock levels, and improve profitability.",
      author: "Neha Singh",
      date: "2024-10-08",
      category: "AI & Automation",
      slug: "ai-inventory-management",
      readTime: "9 min read",
      image: "/ai-inventory-management.jpg",
    },
    {
      id: 5,
      title: "Restaurant Management System: Streamline Your Operations",
      excerpt:
        "Discover how modern restaurant management systems can streamline kitchen operations, reduce wait times, and improve customer satisfaction.",
      author: "Vikram Desai",
      date: "2024-10-05",
      category: "Restaurant",
      slug: "restaurant-management-system",
      readTime: "7 min read",
      image: "/restaurant-management-system.png",
    },
    {
      id: 6,
      title: "GST Compliance Made Easy: Automated Accounting Solutions",
      excerpt:
        "Simplify GST compliance with automated accounting solutions. Stay compliant, reduce errors, and save time on tax filing.",
      author: "Deepak Verma",
      date: "2024-10-01",
      category: "Accounting",
      slug: "gst-compliance-accounting",
      readTime: "8 min read",
      image: "/gst-accounting-compliance.jpg",
    },
    {
      id: 7,
      title: "Digital Transformation: Why Your Business Needs It Now",
      excerpt:
        "Understand the importance of digital transformation in today's competitive market. Learn how to modernize your business operations.",
      author: "Rajesh Kumar",
      date: "2024-09-28",
      category: "Digital Transformation",
      slug: "digital-transformation-business",
      readTime: "9 min read",
      image: "/digital-transformation-concept.png",
    },
    {
      id: 8,
      title: "Real-Time Inventory Tracking: Benefits and Implementation",
      excerpt:
        "Discover how real-time inventory tracking can reduce stockouts, minimize waste, and improve your bottom line.",
      author: "Priya Sharma",
      date: "2024-09-25",
      category: "Inventory Management",
      slug: "real-time-inventory-tracking",
      readTime: "7 min read",
      image: "/inventory-management-warehouse.png",
    },
    {
      id: 9,
      title: "Customer Relationship Management: Building Loyalty Through Technology",
      excerpt: "Learn how CRM systems help you build stronger customer relationships and increase lifetime value.",
      author: "Amit Patel",
      date: "2024-09-22",
      category: "CRM",
      slug: "crm-customer-loyalty",
      readTime: "8 min read",
      image: "/customer-relationship.jpg",
    },
    {
      id: 10,
      title: "Multi-Channel Sales Strategy: Integrating Online and Offline",
      excerpt: "Explore how to create a seamless shopping experience across multiple channels for your customers.",
      author: "Neha Singh",
      date: "2024-09-19",
      category: "Sales Strategy",
      slug: "multi-channel-sales-strategy",
      readTime: "10 min read",
      image: "/omnichannel-retail-experience.png",
    },
    {
      id: 11,
      title: "Payment Gateway Integration: Secure and Seamless Transactions",
      excerpt: "A complete guide to integrating multiple payment gateways for your e-commerce platform.",
      author: "Vikram Desai",
      date: "2024-09-16",
      category: "E-commerce",
      slug: "payment-gateway-integration",
      readTime: "7 min read",
      image: "/payment-processing.png",
    },
    {
      id: 12,
      title: "Data Analytics for Business Intelligence: Making Informed Decisions",
      excerpt: "Harness the power of data analytics to gain insights and make better business decisions.",
      author: "Deepak Verma",
      date: "2024-09-13",
      category: "Analytics",
      slug: "data-analytics-business-intelligence",
      readTime: "9 min read",
      image: "/data-analytics-dashboard.png",
    },
    {
      id: 13,
      title: "Cloud-Based Solutions: Scalability and Cost Efficiency",
      excerpt: "Understand the benefits of cloud-based business software and how it can transform your operations.",
      author: "Rajesh Kumar",
      date: "2024-09-10",
      category: "Cloud Technology",
      slug: "cloud-based-solutions",
      readTime: "8 min read",
      image: "/cloud-computing-concept.png",
    },
    {
      id: 14,
      title: "Automation in Business: Reducing Manual Work and Errors",
      excerpt: "Discover how business automation can increase efficiency and reduce operational costs.",
      author: "Priya Sharma",
      date: "2024-09-07",
      category: "Automation",
      slug: "business-automation-efficiency",
      readTime: "7 min read",
      image: "/business-automation.png",
    },
    {
      id: 15,
      title: "Mobile-First Strategy: Reaching Customers on Their Devices",
      excerpt: "Learn why a mobile-first approach is essential for modern businesses and how to implement it.",
      author: "Amit Patel",
      date: "2024-09-04",
      category: "Mobile Technology",
      slug: "mobile-first-strategy",
      readTime: "6 min read",
      image: "/mobile-app-development.png",
    },
  ]

  const categories = [
    "All",
    "POS Systems",
    "ERP",
    "E-commerce",
    "AI & Automation",
    "Restaurant",
    "Accounting",
    "Digital Transformation",
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
            <h1 className="text-display mb-6 text-foreground">Blog & Resources</h1>
            <p className="text-xl font-light text-muted-foreground max-w-2xl mx-auto">
              Insights, tips, and best practices for modern business software
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {categories.map((category, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-full font-light text-sm transition-all ${
                  i === 0 ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group relative bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src="/featured-blog-post.png"
                  alt="Featured blog post"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-light text-primary bg-primary/10 px-3 py-1 rounded-full">Featured</span>
                  <span className="text-xs font-light text-muted-foreground">8 min read</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-light mb-4 text-foreground">
                  How to Choose the Right POS System for Your Business
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  A comprehensive guide to selecting a POS system that fits your business needs and budget. Learn about
                  key features and implementation strategies.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-light text-muted-foreground">Rajesh Kumar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-light text-muted-foreground">Oct 15, 2024</span>
                  </div>
                </div>
                <Link
                  href="/blog/choose-right-pos-system"
                  className="inline-flex items-center gap-2 text-primary font-light text-sm hover:gap-3 transition-all w-fit"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-primary" />
                    <span className="text-xs font-light text-primary">{post.category}</span>
                  </div>
                  <h3 className="text-lg font-light mb-3 text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm font-light text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>

                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="text-xs font-light text-muted-foreground">{post.author}</span>
                    </div>
                    <span className="text-xs font-light text-muted-foreground">{post.readTime}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-light text-muted-foreground">{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-light text-sm hover:gap-3 transition-all"
                    >
                      Read <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-heading mb-6"
          >
            Subscribe to Our Newsletter
          </motion.h2>
          <p className="text-lg font-light text-muted-foreground mb-8">
            Get the latest insights and best practices delivered to your inbox
          </p>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-card border border-border rounded-lg font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-light hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  )
}

"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Calendar, User, Share2, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real app, this would fetch from a database or CMS
  const post = {
    title: "How to Choose the Right POS System for Your Business",
    author: "Rajesh Kumar",
    date: "2024-10-15",
    category: "POS Systems",
    readTime: "8 min read",
    image: "/pos-system-dashboard.jpg",
    content: `
      <h2>Introduction</h2>
      <p>Choosing the right Point of Sale (POS) system is crucial for any retail business. With so many options available in the market, it can be overwhelming to make the right decision. This guide will help you understand the key factors to consider when selecting a POS system.</p>

      <h2>Key Features to Look For</h2>
      <p>When evaluating POS systems, consider these essential features:</p>
      <ul>
        <li><strong>Inventory Management:</strong> Real-time tracking of stock levels across multiple locations</li>
        <li><strong>Sales Analytics:</strong> Detailed reports on sales trends, customer behavior, and product performance</li>
        <li><strong>Payment Processing:</strong> Support for multiple payment methods including cards, digital wallets, and cash</li>
        <li><strong>Customer Management:</strong> Loyalty programs and customer data management</li>
        <li><strong>Integration:</strong> Ability to integrate with other business tools and systems</li>
      </ul>

      <h2>Implementation Considerations</h2>
      <p>Before implementing a new POS system, consider these factors:</p>
      <ul>
        <li>Staff training requirements</li>
        <li>Data migration from existing systems</li>
        <li>Hardware requirements and costs</li>
        <li>Ongoing support and maintenance</li>
        <li>Scalability for future growth</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Selecting the right POS system requires careful consideration of your business needs, budget, and growth plans. Take time to evaluate different options and choose a system that aligns with your business goals.</p>
    `,
    relatedPosts: [
      {
        title: "ERP Implementation Best Practices for SMEs",
        slug: "erp-implementation-best-practices",
      },
      {
        title: "AI-Powered Inventory Management: The Future of Retail",
        slug: "ai-inventory-management",
      },
      {
        title: "Restaurant Management System: Streamline Your Operations",
        slug: "restaurant-management-system",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary font-light text-sm mb-6 hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-light text-primary bg-primary/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-xs font-light text-muted-foreground">{post.readTime}</span>
            </div>

            <h1 className="text-display mb-6 text-foreground">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-light text-muted-foreground">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-light text-muted-foreground">{post.date}</span>
              </div>
              <button className="ml-auto flex items-center gap-2 text-primary font-light text-sm hover:gap-3 transition-all">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-4xl mx-auto">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg border border-border"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert max-w-none font-light"
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/<h2>/g, '<h2 class="text-2xl font-light mt-8 mb-4 text-foreground">')
                .replace(/<p>/g, '<p class="text-base font-light text-muted-foreground mb-4 leading-relaxed">')
                .replace(/<ul>/g, '<ul class="list-disc list-inside space-y-2 mb-4">')
                .replace(/<li>/g, '<li class="text-base font-light text-muted-foreground">')
                .replace(/<strong>/g, '<strong class="text-foreground font-light">')
                .replace(/<em>/g, '<em class="italic text-muted-foreground">'),
            }}
          />
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-heading text-center mb-12"
          >
            Related Articles
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {post.relatedPosts.map((relatedPost, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <h3 className="text-lg font-light mb-4 text-foreground">{relatedPost.title}</h3>
                <Link
                  href={`/blog/${relatedPost.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-light text-sm hover:gap-3 transition-all"
                >
                  Read More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

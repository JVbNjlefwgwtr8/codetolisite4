"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export function PrivacyPageContent() {
  const sections = [
    {
      title: "1. Introduction",
      content:
        "Codetoli Technology ('we', 'us', 'our', or 'Company') operates the website and provides software solutions. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.",
    },
    {
      title: "2. Information Collection and Use",
      content:
        "We collect several different types of information for various purposes to provide and improve our Service to you.",
      subsections: [
        {
          subtitle: "Types of Data Collected:",
          items: [
            "Personal Data: Name, email address, phone number, company information",
            "Usage Data: Browser type, IP address, pages visited, time and date of visits",
            "Cookies and Tracking: We use cookies to track activity on our Service",
          ],
        },
      ],
    },
    {
      title: "3. Use of Data",
      content: "Codetoli Technology uses the collected data for various purposes:",
      subsections: [
        {
          items: [
            "To provide and maintain our Service",
            "To notify you about changes to our Service",
            "To allow you to participate in interactive features of our Service",
            "To provide customer support",
            "To gather analysis or valuable information so we can improve our Service",
            "To monitor the usage of our Service",
            "To detect, prevent and address technical issues",
          ],
        },
      ],
    },
    {
      title: "4. Security of Data",
      content:
        "The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.",
    },
    {
      title: "5. Changes to This Privacy Policy",
      content:
        "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'effective date' at the top of this Privacy Policy.",
    },
    {
      title: "6. Contact Us",
      content:
        "If you have any questions about this Privacy Policy, please contact us at privacy@codetoli.com or through our contact form on the website.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-display mb-4 text-foreground">Privacy Policy</h1>
            <p className="text-lg font-light text-muted-foreground">Last updated: October 19, 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="prose prose-invert max-w-none"
              >
                <h2 className="text-2xl font-light text-foreground mb-4">{section.title}</h2>
                <p className="font-light text-muted-foreground mb-4">{section.content}</p>

                {section.subsections &&
                  section.subsections.map((subsection, j) => (
                    <div key={j} className="ml-4">
                      {subsection.subtitle && (
                        <h3 className="text-lg font-light text-foreground mb-3">{subsection.subtitle}</h3>
                      )}
                      {subsection.items && (
                        <ul className="space-y-2 mb-4">
                          {subsection.items.map((item, k) => (
                            <li key={k} className="flex gap-3 font-light text-muted-foreground">
                              <span className="text-primary mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PrivacyPageContent

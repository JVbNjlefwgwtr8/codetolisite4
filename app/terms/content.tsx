"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export function TermsPageContent() {
  const sections = [
    {
      title: "1. Terms",
      content:
        "By accessing and using this website and our software solutions, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
    },
    {
      title: "2. Use License",
      content:
        "Permission is granted to temporarily download one copy of the materials (information or software) on Codetoli Technology's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:",
      subsections: [
        {
          items: [
            "Modify or copy the materials",
            "Use the materials for any commercial purpose or for any public display",
            "Attempt to decompile or reverse engineer any software contained on the website",
            "Remove any copyright or other proprietary notations from the materials",
            "Transfer the materials to another person or 'mirror' the materials on any other server",
          ],
        },
      ],
    },
    {
      title: "3. Disclaimer",
      content:
        "The materials on Codetoli Technology's website are provided on an 'as is' basis. Codetoli Technology makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
    },
    {
      title: "4. Limitations",
      content:
        "In no event shall Codetoli Technology or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Codetoli Technology's website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.",
    },
    {
      title: "5. Accuracy of Materials",
      content:
        "The materials appearing on Codetoli Technology's website could include technical, typographical, or photographic errors. Codetoli Technology does not warrant that any of the materials on its website are accurate, complete, or current. Codetoli Technology may make changes to the materials contained on its website at any time without notice.",
    },
    {
      title: "6. Links",
      content:
        "Codetoli Technology has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Codetoli Technology of the site. Use of any such linked website is at the user's own risk.",
    },
    {
      title: "7. Modifications",
      content:
        "Codetoli Technology may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.",
    },
    {
      title: "8. Governing Law",
      content:
        "These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.",
    },
    {
      title: "9. Contact Information",
      content:
        "If you have any questions about these Terms and Conditions, please contact us at legal@codetoli.com or through our contact form on the website.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-display mb-4 text-foreground">Terms of Service</h1>
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
              >
                <h2 className="text-2xl font-light text-foreground mb-4">{section.title}</h2>
                <p className="font-light text-muted-foreground mb-4">{section.content}</p>

                {section.subsections &&
                  section.subsections.map((subsection, j) => (
                    <div key={j} className="ml-4">
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

export default TermsPageContent

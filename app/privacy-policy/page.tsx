export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 mb-4">We may collect information about you in a variety of ways:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Personal Data:</strong> Name, email address, phone number when you voluntarily submit forms</li>
              <li><strong>Automatic Data:</strong> Browser type, IP address, pages visited, time spent on pages</li>
              <li><strong>Cookies:</strong> Information stored on your device for tracking and preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Use of Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide and maintain our website services</li>
              <li>Improve user experience and website functionality</li>
              <li>Respond to inquiries and support requests</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Analyze website usage and trends</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences. Disabling cookies may affect website functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              Our website may contain links to third-party websites. We are not responsible for their privacy practices. Please review their privacy policies before providing any information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: privacy@example.com<br />
              Address: Your Company Address<br />
              Phone: Your Phone Number
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. Changes will be effective immediately upon posting to the website. Your continued use of the site indicates acceptance of the updated policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

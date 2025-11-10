'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, Database, UserCheck, Globe, FileText, AlertTriangle } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-12 px-6 bg-gradient-to-b from-emerald-50 via-green-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 rounded-full px-5 py-2 mb-5">
            <Shield className="w-4 h-4 text-green-600" />
            <span className="text-green-700 text-sm font-bold">Your Privacy Matters</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
            <span className="text-gray-900">Privacy </span>
            <span className="bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">Policy</span>
          </h1>

          <p className="text-gray-600 text-sm">
            Last Updated: January 1, 2025
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 px-6 bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <a href="#section-1" className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 p-3 rounded-lg transition-all">
              <Database className="w-4 h-4" />
              <span>Data Collection</span>
            </a>
            <a href="#section-3" className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 p-3 rounded-lg transition-all">
              <Eye className="w-4 h-4" />
              <span>Data Sharing</span>
            </a>
            <a href="#section-4" className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 p-3 rounded-lg transition-all">
              <Lock className="w-4 h-4" />
              <span>Security</span>
            </a>
            <a href="#section-6" className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 p-3 rounded-lg transition-all">
              <UserCheck className="w-4 h-4" />
              <span>Your Rights</span>
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-gray max-w-none">
            {/* Introduction */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl mb-8">
              <div className="flex items-start gap-3">
                <Lock className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-green-900 mb-2">Our Commitment to Privacy</h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    StreamVibe is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our IPTV services.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 1 */}
            <div className="mb-8" id="section-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold border-2 border-emerald-200">
                  1
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Information We Collect
                </h2>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">1.1 Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you register for our service, we collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Name and email address</li>
                <li>Phone number (optional)</li>
                <li>Billing address</li>
                <li>Payment information (processed securely through third-party payment processors)</li>
                <li>Account credentials (username and encrypted password)</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">1.2 Usage Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We automatically collect certain information when you use our service:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Device information (type, operating system, unique device identifiers)</li>
                <li>IP address and location data</li>
                <li>Viewing history and preferences</li>
                <li>Connection times and duration</li>
                <li>App usage statistics and performance data</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">1.3 Cookies and Tracking Technologies</h3>
              <p className="text-gray-700 leading-relaxed">
                We use cookies, web beacons, and similar technologies to enhance your experience, analyze usage patterns, and personalize content. You can control cookie settings through your browser.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Service Delivery:</strong> To provide, maintain, and improve our IPTV streaming services</li>
                <li><strong>Account Management:</strong> To create and manage your account, process payments, and handle subscriptions</li>
                <li><strong>Personalization:</strong> To recommend content based on your viewing preferences and history</li>
                <li><strong>Communication:</strong> To send service updates, technical notices, and respond to your inquiries</li>
                <li><strong>Security:</strong> To detect and prevent fraud, abuse, and unauthorized access</li>
                <li><strong>Analytics:</strong> To analyze usage patterns and improve service quality</li>
                <li><strong>Legal Compliance:</strong> To comply with legal obligations and enforce our Terms of Service</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
                3. Information Sharing and Disclosure
              </h2>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">3.1 We Do NOT Sell Your Data</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">3.2 Service Providers</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information with trusted third-party service providers who assist us in:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Payment processing (credit card processors, PayPal, cryptocurrency gateways)</li>
                <li>Cloud hosting and data storage</li>
                <li>Customer support services</li>
                <li>Analytics and performance monitoring</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                These providers are contractually obligated to protect your information and use it only for the purposes we specify.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">3.3 Legal Requirements</h3>
              <p className="text-gray-700 leading-relaxed">
                We may disclose your information if required by law, court order, or government request, or to protect our rights, property, or safety, or that of our users.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
                4. Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>Encryption:</strong> All data transmission is encrypted using SSL/TLS protocols</li>
                <li><strong>Secure Storage:</strong> Personal data is stored on secure servers with restricted access</li>
                <li><strong>Password Protection:</strong> Passwords are hashed and encrypted</li>
                <li><strong>Regular Audits:</strong> We conduct regular security audits and vulnerability assessments</li>
                <li><strong>Access Controls:</strong> Only authorized personnel have access to personal information</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
                5. Data Retention
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Provide our services to you</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce our agreements</li>
                <li>Maintain business records</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                When you cancel your account, we will delete or anonymize your personal information within 90 days, except where we are required to retain it for legal or regulatory purposes.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
                6. Your Privacy Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                To exercise these rights, contact us at privacy@streamvibe.com or through our support channels.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
                7. Children's Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our service is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately, and we will delete such information from our systems.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
                8. International Data Transfers
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We ensure that appropriate safeguards are in place to protect your information in accordance with this Privacy Policy, regardless of where it is processed.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
                9. Third-Party Links
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our service may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We encourage you to read the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Posting the updated policy on our website</li>
                <li>Sending an email notification to your registered email address</li>
                <li>Displaying a prominent notice in our app</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Your continued use of the service after changes are posted constitutes acceptance of the updated Privacy Policy.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
                11. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <p className="text-gray-700 mb-2"><strong>Privacy Team:</strong> privacy@streamvibe.com</p>
                <p className="text-gray-700 mb-2"><strong>General Support:</strong> support@streamvibe.com</p>
                <p className="text-gray-700 mb-2"><strong>WhatsApp:</strong> +212 618 467 167</p>
                <p className="text-gray-700"><strong>Response Time:</strong> Within 48 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

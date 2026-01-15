'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, AlertCircle, CheckCircle, Shield, Users, CreditCard, Lock, Scale } from 'lucide-react';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-12 px-6 bg-gradient-to-b from-slate-50 via-gray-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-5 py-2 mb-5">
            <FileText className="w-4 h-4 text-gray-600" />
            <span className="text-gray-700 text-sm font-bold">Legal Document</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
            <span className="text-gray-900">Terms of </span>
            <span className="bg-gradient-to-r from-slate-600 to-gray-800 bg-clip-text text-transparent">Service</span>
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
            <a href="#section-1" className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all">
              <CheckCircle className="w-4 h-4" />
              <span>Acceptance</span>
            </a>
            <a href="#section-3" className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all">
              <Users className="w-4 h-4" />
              <span>Account</span>
            </a>
            <a href="#section-4" className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all">
              <CreditCard className="w-4 h-4" />
              <span>Payment</span>
            </a>
            <a href="#section-6" className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all">
              <Shield className="w-4 h-4" />
              <span>Content Rights</span>
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-gray max-w-none">
            {/* Introduction */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Important Notice</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    By accessing and using StreamVibe streaming services, you agree to be bound by these Terms of Service. Please read them carefully before using our platform.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 1 */}
            <div className="mb-8" id="section-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold border-2 border-blue-200">
                  1
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Acceptance of Terms
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                By subscribing to, accessing, or using StreamVibe streaming hub ("Service"), you agree to comply with and be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use our platform.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the Service after changes are posted constitutes acceptance of the modified Terms.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-8" id="section-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center font-bold border-2 border-green-200">
                  2
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Service Description
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                StreamVibe provides premium streaming services that allow subscribers to access official live television channels, authorized video-on-demand content, and other multimedia content ("Content") over the internet.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Access to thousands of official live TV channels from around the world</li>
                <li>96,000+ movies and TV series on demand</li>
                <li>HD and 4K quality streaming where available</li>
                <li>Electronic Program Guide (EPG)</li>
                <li>Multi-device support</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-8" id="section-3">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center font-bold border-2 border-purple-200">
                  3
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Account Registration and Security
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>3.1 Account Creation:</strong> You must provide accurate, current, and complete information during registration. You are responsible for maintaining the confidentiality of your account credentials.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>3.2 Account Security:</strong> You are solely responsible for all activities that occur under your account. Notify us immediately of any unauthorized use of your account.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>3.3 Account Sharing:</strong> Your subscription is for personal use only. Sharing your account credentials with others is strictly prohibited and may result in immediate account termination without refund.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-8" id="section-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold border-2 border-orange-200">
                  4
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Subscription and Payment
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>4.1 Subscription Plans:</strong> We offer various subscription plans with different features and pricing. All prices are displayed in USD unless otherwise stated.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>4.2 Payment:</strong> Payment must be made in advance for the selected subscription period. We accept credit cards, PayPal, cryptocurrency, and other payment methods as indicated on our website.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>4.3 No Auto-Renewal:</strong> Subscriptions do not automatically renew. You must manually renew your subscription before it expires to continue using the Service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>4.4 Refunds:</strong> Refund requests are subject to our Refund Policy. Generally, refunds are available within 30 days of purchase if you are not satisfied with the service.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-8" id="section-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold border-2 border-red-200">
                  5
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Acceptable Use Policy
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree NOT to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Use the Service for any illegal or unauthorized purpose</li>
                <li>Share, sell, or distribute your account credentials</li>
                <li>Attempt to reverse engineer, decompile, or hack the Service</li>
                <li>Use automated systems or software to extract data from the Service</li>
                <li>Circumvent any content protection or access control mechanisms</li>
                <li>Resell or redistribute the Service without authorization</li>
                <li>Use the Service in a way that could damage, disable, or impair our servers</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Violation of this policy may result in immediate termination of your account without refund and potential legal action.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-8" id="section-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold border-2 border-indigo-200">
                  6
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Content and Intellectual Property
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>6.1 Content Rights:</strong> All Content available through the Service is protected by copyright, trademark, and other intellectual property laws. We provide Content under license from content providers.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>6.2 Limited License:</strong> We grant you a limited, non-exclusive, non-transferable license to access and view Content for personal, non-commercial use only.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>6.3 Restrictions:</strong> You may not download, record, reproduce, distribute, modify, or create derivative works from any Content without explicit permission.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
                7. Service Availability and Quality
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>7.1 Uptime:</strong> We strive to maintain 99.9% service uptime but do not guarantee uninterrupted access. The Service may be temporarily unavailable due to maintenance, updates, or technical issues.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>7.2 Content Availability:</strong> Channel and content availability may vary by region and can change without notice. We do not guarantee the availability of specific channels or content.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>7.3 Quality:</strong> Streaming quality depends on your internet connection speed and device capabilities. We recommend minimum speeds: SD (5 Mbps), HD (10 Mbps), 4K (25 Mbps).
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
                8. Termination
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>8.1 By You:</strong> You may cancel your subscription at any time by contacting our support team. Cancellation will be effective at the end of your current billing period.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>8.2 By Us:</strong> We reserve the right to suspend or terminate your account immediately, without notice, for violation of these Terms, fraudulent activity, or any illegal use of the Service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>8.3 Effect of Termination:</strong> Upon termination, your right to access the Service will immediately cease. No refunds will be provided for terminations due to Terms violations.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
                9. Disclaimer of Warranties
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We do not warrant that the Service will be uninterrupted, error-free, or completely secure. You use the Service at your own risk.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
                10. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, STREAMVIBE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our total liability to you for any claims arising from your use of the Service shall not exceed the amount you paid us in the twelve (12) months preceding the claim.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
                11. Governing Law and Disputes
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is registered, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration, except where prohibited by law.
              </p>
            </div>

            {/* Section 12 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
                12. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> infos@streamvibe.shop</p>
                <p className="text-gray-700 mb-2"><strong>WhatsApp:</strong> +1 (526) 638-0287</p>
                <p className="text-gray-700"><strong>Support Hours:</strong> 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

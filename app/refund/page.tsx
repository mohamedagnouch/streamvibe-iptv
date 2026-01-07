'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { DollarSign, CheckCircle, XCircle, Clock, AlertTriangle, FileCheck, MessageSquare, CreditCard } from 'lucide-react';

export default function RefundPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-12 px-6 bg-gradient-to-b from-emerald-50 via-green-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 rounded-full px-5 py-2 mb-5">
            <DollarSign className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-700 text-sm font-bold">Money-Back Guarantee</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
            <span className="text-gray-900">Refund </span>
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
            <a href="#section-1" className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 p-3 rounded-lg transition-all">
              <CheckCircle className="w-4 h-4" />
              <span>Eligibility</span>
            </a>
            <a href="#section-2" className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 p-3 rounded-lg transition-all">
              <XCircle className="w-4 h-4" />
              <span>Non-Refundable</span>
            </a>
            <a href="#section-3" className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 p-3 rounded-lg transition-all">
              <MessageSquare className="w-4 h-4" />
              <span>How to Request</span>
            </a>
            <a href="#section-4" className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 p-3 rounded-lg transition-all">
              <Clock className="w-4 h-4" />
              <span>Processing Time</span>
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-gray max-w-none">
            {/* Introduction */}
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-emerald-900 mb-2">30-Day Money-Back Guarantee</h3>
                  <p className="text-emerald-800 text-sm leading-relaxed">
                    We stand behind the quality of our service. If you're not completely satisfied with StreamVibe within the first 30 days, we'll refund your money—no questions asked.
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
                  Eligibility for Refunds
                </h2>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">1.1 30-Day Money-Back Guarantee</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are eligible for a full refund if:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>You request a refund within <strong>30 days</strong> of your initial purchase</li>
                <li>This is your first subscription with StreamVibe (not applicable to renewals)</li>
                <li>You have not violated our Terms of Service</li>
                <li>Your account has not been suspended or terminated for policy violations</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">1.2 Valid Reasons for Refund</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Common valid reasons include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Technical issues that prevent you from using the service</li>
                <li>Service not meeting your expectations</li>
                <li>Incompatibility with your devices</li>
                <li>Poor streaming quality despite adequate internet speed</li>
                <li>Missing channels or content you expected</li>
                <li>Changed your mind about the service</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="mb-8" id="section-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold border-2 border-red-200">
                  2
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Non-Refundable Situations
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Refunds will NOT be issued in the following cases:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-red-900 mb-1">After 30 Days</p>
                    <p className="text-red-800 text-sm">Refund requests made more than 30 days after purchase</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-red-900 mb-1">Subscription Renewals</p>
                    <p className="text-red-800 text-sm">Renewals of existing subscriptions are not eligible for refunds</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-red-900 mb-1">Terms Violations</p>
                    <p className="text-red-800 text-sm">Accounts terminated for violating Terms of Service</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-red-900 mb-1">Account Sharing</p>
                    <p className="text-red-800 text-sm">Accounts found sharing credentials with unauthorized users</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-red-900 mb-1">Partial Usage</p>
                    <p className="text-red-800 text-sm">Significant service usage (e.g., streaming for 25+ days) before requesting refund</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-red-900 mb-1">Reseller Credits</p>
                    <p className="text-red-800 text-sm">Reseller packages and credits are non-refundable</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-8" id="section-3">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold border-2 border-blue-200">
                  3
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  How to Request a Refund
                </h2>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Step-by-Step Process:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Contact Support</p>
                      <p className="text-gray-700 text-sm">Reach out to our support team via WhatsApp (+212 618 467 167) or email (support@streamvibe.com)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Provide Information</p>
                      <p className="text-gray-700 text-sm">Include your account email, order number, and reason for refund request</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Verification</p>
                      <p className="text-gray-700 text-sm">Our team will verify your eligibility (usually within 24 hours)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-bold">4</div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Processing</p>
                      <p className="text-gray-700 text-sm">Once approved, refund will be processed to your original payment method</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-bold">5</div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Confirmation</p>
                      <p className="text-gray-700 text-sm">You'll receive a confirmation email once the refund is completed</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Required Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To process your refund request quickly, please provide:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Your registered email address</li>
                <li>Order/Transaction ID</li>
                <li>Purchase date</li>
                <li>Brief reason for refund request</li>
                <li>Payment method used (for verification)</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-8" id="section-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center font-bold border-2 border-purple-200">
                  4
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Refund Processing Time
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-6 h-6 text-blue-600" />
                    <h3 className="font-bold text-blue-900">Approval Time</h3>
                  </div>
                  <p className="text-blue-800 text-sm">24-48 hours for verification and approval</p>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <DollarSign className="w-6 h-6 text-emerald-600" />
                    <h3 className="font-bold text-emerald-900">Refund Time</h3>
                  </div>
                  <p className="text-emerald-800 text-sm">3-10 business days to reach your account</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Processing Times by Payment Method</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Credit/Debit Cards:</strong> 5-10 business days</li>
                <li><strong>PayPal:</strong> 3-5 business days</li>
                <li><strong>Cryptocurrency:</strong> 1-3 business days</li>
                <li><strong>Bank Transfer:</strong> 7-10 business days</li>
              </ul>
              <p className="text-gray-600 text-sm mt-4 italic">
                Note: Processing times may vary depending on your bank or payment provider.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
                5. Partial Refunds
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In certain circumstances, we may offer partial refunds:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>If you've used a significant portion of your subscription period</li>
                <li>For technical issues that were partially resolved</li>
                <li>When downgrading from a higher-tier plan</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Partial refunds are calculated on a pro-rata basis for the unused portion of your subscription.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
                6. Chargebacks and Disputes
              </h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl mb-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-yellow-900 mb-2">Important Notice</h3>
                    <p className="text-yellow-800 text-sm leading-relaxed">
                      Please contact us directly before initiating a chargeback with your bank. Chargebacks without prior contact may result in account suspension and additional fees.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                If you have a dispute:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>Contact our support team first to resolve the issue</li>
                <li>We will work with you to find a satisfactory solution</li>
                <li>Most issues can be resolved within 24-48 hours</li>
                <li>Only initiate a chargeback as a last resort</li>
              </ol>
            </div>

            {/* Section 7 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
                7. Exceptions and Special Cases
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may make exceptions to this policy in special circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Extended service outages beyond our control</li>
                <li>Significant changes to service features or content</li>
                <li>Medical or personal emergencies (documentation required)</li>
                <li>Technical issues that cannot be resolved</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Each case is reviewed individually by our management team.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
                8. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For refund requests or questions about this policy, contact us:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> support@streamvibe.com</p>
                <p className="text-gray-700 mb-2"><strong>WhatsApp:</strong> +212 618 467 167</p>
                <p className="text-gray-700 mb-2"><strong>Subject Line:</strong> "Refund Request - [Your Email]"</p>
                <p className="text-gray-700"><strong>Response Time:</strong> Within 24 hours</p>
              </div>
            </div>

            {/* Final Note */}
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-300 rounded-xl p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Our Commitment</h3>
              <p className="text-emerald-800 leading-relaxed">
                We're confident you'll love StreamVibe, but if for any reason you're not satisfied, we'll make it right. Our 30-day money-back guarantee ensures you can try our service risk-free. Your satisfaction is our priority!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

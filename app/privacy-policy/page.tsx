// app/(auth)/privacy-policy/page.tsx
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 h-screen">
      {/* Header */}
      <div className="mb-8 text-center">
        <Link
          href="https://sales.addpipeline.ai/signup"
          className="inline-flex items-center my-2 text-white/80 hover:text-white transition-colors"
        >
          <ChevronLeft className="mr-2 size-4" />
          Back to Sign Up
        </Link>
        <h1 className="mb-2 font-bold text-white text-4xl">Privacy Policy</h1>
        <Link
          href="https://addpipeline.ai/"
          target="_blank"
          className="text-blue-200 underline"
        >
          Pipeline AI
        </Link>
      </div>

      {/* Scrollable Content Container */}
      <div className="mb-4 overflow-hidden">
        <div className="bg-white/10 backdrop-blur-lg mx-auto p-4 max-w-4xl h-[calc(100vh-166px)] overflow-y-auto text-white">
          <div className="prose-invert max-w-none prose">
            <section className="mb-8">
              <h2 className="mb-4 font-semibold text-blue-200 text-2xl">
                1. Introduction
              </h2>
              <p className="mb-4 leading-relaxed">
                At Pipeline AI, we respect your privacy and are committed to
                protecting your personal information. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you use our AI-driven outbound sales automation
                platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 font-semibold text-blue-200 text-2xl">
                2. Information We Collect
              </h2>
              <div className="space-y-4">
                <h3 className="font-medium text-blue-300 text-xl">
                  2.1 Information You Provide
                </h3>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li>
                    <strong>Account Information:</strong> Name, email, company
                    details, payment information
                  </li>
                  <li>
                    <strong>Profile Data:</strong> Job title, industry,
                    preferences, settings
                  </li>
                  <li>
                    <strong>Content Data:</strong> Leads, contacts, email
                    templates, campaign data
                  </li>
                  <li>
                    <strong>Communication Data:</strong> Messages, support
                    requests, feedback
                  </li>
                </ul>

                <h3 className="font-medium text-blue-300 text-xl">
                  2.2 Information We Collect Automatically
                </h3>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li>
                    <strong>Usage Data:</strong> How you interact with our
                    Service, features used, time spent
                  </li>
                  <li>
                    <strong>Device Information:</strong> IP address, browser
                    type, device identifiers
                  </li>
                  <li>
                    <strong>Log Data:</strong> Access times, error logs,
                    performance data
                  </li>
                  <li>
                    <strong>Cookies and Tracking:</strong> See our Cookie Policy
                    below
                  </li>
                </ul>

                <h3 className="font-medium text-blue-300 text-xl">
                  2.3 Information from Third Parties
                </h3>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li>
                    <strong>Integrations:</strong> Data from connected services
                    (CRM, email platforms)
                  </li>
                  <li>
                    <strong>Public Sources:</strong> Publicly available business
                    information for lead research
                  </li>
                  <li>
                    <strong>Partners:</strong> Information from business
                    partners and data providers
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 font-semibold text-blue-200 text-2xl">
                3. How We Use Your Information
              </h2>
              <div className="space-y-4">
                <h3 className="font-medium text-blue-300 text-xl">
                  3.1 Service Provision
                </h3>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li>Provide and maintain our platform</li>
                  <li>Process transactions and manage accounts</li>
                  <li>Customize user experience</li>
                  <li>Generate AI-powered insights and recommendations</li>
                </ul>

                <h3 className="font-medium text-blue-300 text-xl">
                  3.2 Communication
                </h3>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li>Send service-related notifications</li>
                  <li>Provide customer support</li>
                  <li>Send marketing communications (with consent)</li>
                  <li>Conduct surveys and gather feedback</li>
                </ul>

                <h3 className="font-medium text-blue-300 text-xl">
                  3.3 Improvement and Analytics
                </h3>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li>Analyze usage patterns and trends</li>
                  <li>Improve our AI algorithms and features</li>
                  <li>Develop new products and services</li>
                  <li>Ensure security and fraud prevention</li>
                </ul>

                <h3 className="font-medium text-blue-300 text-xl">
                  3.4 Legal and Business
                </h3>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li>Comply with legal obligations</li>
                  <li>Protect our rights and interests</li>
                  <li>Facilitate business transfers</li>
                  <li>Enforce our Terms of Service</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 font-semibold text-blue-200 text-2xl">
                4. Legal Basis for Processing (GDPR)
              </h2>
              <p className="mb-4 leading-relaxed">
                We process personal data based on:
              </p>
              <ul className="space-y-2 ml-4 list-disc list-inside">
                <li>
                  <strong>Contract:</strong> Necessary for service provision
                </li>
                <li>
                  <strong>Legitimate Interest:</strong> Business operations,
                  improvements, security
                </li>
                <li>
                  <strong>Consent:</strong> Marketing communications, cookies
                </li>
                <li>
                  <strong>Legal Obligation:</strong> Compliance with laws
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 font-semibold text-blue-200 text-2xl">
                5. Information Sharing and Disclosure
              </h2>
              <div className="space-y-4">
                <h3 className="font-medium text-blue-300 text-xl">
                  5.1 We Do Not Sell Your Data
                </h3>
                <p className="leading-relaxed">
                  We do not sell, trade, or rent your personal information to
                  third parties.
                </p>

                <h3 className="font-medium text-blue-300 text-xl">
                  5.2 Service Providers
                </h3>
                <p className="leading-relaxed">
                  We share data with trusted service providers who help us
                  operate our platform:
                </p>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li>Cloud hosting and infrastructure</li>
                  <li>Payment processing</li>
                  <li>Email delivery services</li>
                  <li>Analytics and monitoring</li>
                  <li>Customer support tools</li>
                </ul>

                <h3 className="font-medium text-blue-300 text-xl">
                  5.3 Business Transfers
                </h3>
                <p className="leading-relaxed">
                  Information may be transferred in connection with mergers,
                  acquisitions, or business sales.
                </p>

                <h3 className="font-medium text-blue-300 text-xl">
                  5.4 Legal Requirements
                </h3>
                <p className="leading-relaxed">
                  We may disclose information when required by law or to protect
                  our rights and safety.
                </p>

                <h3 className="font-medium text-blue-300 text-xl">
                  5.5 With Your Consent
                </h3>
                <p className="leading-relaxed">
                  We may share information for other purposes with your explicit
                  consent.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 font-semibold text-blue-200 text-2xl">
                6. Data Security
              </h2>
              <div className="space-y-4">
                <h3 className="font-medium text-blue-300 text-xl">
                  6.1 Security Measures
                </h3>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li>Encryption in transit and at rest</li>
                  <li>Access controls and authentication</li>
                  <li>Regular security assessments</li>
                  <li>Incident response procedures</li>
                </ul>

                <h3 className="font-medium text-blue-300 text-xl">
                  6.2 Data Retention
                </h3>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li>
                    We retain data as long as necessary for service provision
                  </li>
                  <li>
                    Account data is deleted within 30 days of account closure
                  </li>
                  <li>Some data may be retained longer for legal compliance</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 font-semibold text-blue-200 text-2xl">
                7. Your Rights and Controls
              </h2>
              <div className="space-y-4">
                <h3 className="font-medium text-blue-300 text-xl">
                  7.1 Access and Portability
                </h3>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li>Request access to your personal data</li>
                  <li>Receive data in a portable format</li>
                </ul>

                <h3 className="font-medium text-blue-300 text-xl">
                  7.2 Correction and Deletion
                </h3>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                </ul>

                <h3 className="font-medium text-blue-300 text-xl">
                  7.3 Processing Controls
                </h3>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li>Object to processing for direct marketing</li>
                  <li>Restrict processing in certain circumstances</li>
                  <li>Withdraw consent where applicable</li>
                </ul>

                <h3 className="font-medium text-blue-300 text-xl">
                  7.4 Account Settings
                </h3>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li>Update preferences and settings</li>
                  <li>Control communication preferences</li>
                  <li>Manage connected integrations</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 font-semibold text-blue-200 text-2xl">
                8. Cookies and Tracking
              </h2>
              <div className="space-y-4">
                <h3 className="font-medium text-blue-300 text-xl">
                  8.1 Cookie Types
                </h3>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li>
                    <strong>Essential:</strong> Required for service
                    functionality
                  </li>
                  <li>
                    <strong>Analytics:</strong> Help us understand usage
                    patterns
                  </li>
                  <li>
                    <strong>Functional:</strong> Remember your preferences
                  </li>
                  <li>
                    <strong>Marketing:</strong> Deliver relevant advertisements
                  </li>
                </ul>

                <h3 className="font-medium text-blue-300 text-xl">
                  8.2 Cookie Controls
                </h3>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li>Manage cookie preferences in your browser</li>
                  <li>Opt out of non-essential cookies</li>
                  <li>
                    Third-party cookie policies apply for integrated services
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 font-semibold text-blue-200 text-2xl">
                9. International Data Transfers
              </h2>
              <div className="space-y-4">
                <h3 className="font-medium text-blue-300 text-xl">
                  9.1 Global Operations
                </h3>
                <p className="leading-relaxed">
                  We may transfer data internationally to provide our global
                  service.
                </p>

                <h3 className="font-medium text-blue-300 text-xl">
                  9.2 Safeguards
                </h3>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li>Standard contractual clauses</li>
                  <li>Adequacy decisions</li>
                  <li>Appropriate safeguards as required by law</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 font-semibold text-blue-200 text-2xl">
                10. Children&apos;s Privacy
              </h2>
              <p className="mb-4 leading-relaxed">
                Our Service is not intended for children under 18. We do not
                knowingly collect information from children.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 font-semibold text-blue-200 text-2xl">
                11. California Privacy Rights (CCPA)
              </h2>
              <p className="mb-4 leading-relaxed">
                California residents have additional rights:
              </p>
              <ul className="space-y-2 ml-4 list-disc list-inside">
                <li>Right to know about data collection and use</li>
                <li>Right to delete personal information</li>
                <li>
                  Right to opt out of data sales (we don&apos;t sell data)
                </li>
                <li>Right to non-discrimination</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 font-semibold text-blue-200 text-2xl">
                12. Changes to This Policy
              </h2>
              <p className="mb-4 leading-relaxed">
                We may update this Privacy Policy periodically. We will notify
                you of significant changes and post the effective date.
              </p>
              <p className="mb-4 leading-relaxed">
                You have the right to contact your local data protection
                authority with concerns.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

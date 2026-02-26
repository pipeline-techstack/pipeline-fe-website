"use client";

import React from "react";
import { Mail } from "lucide-react";
import SectionContainer from "@/components/common/section-wrapper2";
import Link from "next/link";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Content Section */}
      <section className="py-16 sm:py-20 lg:py-10">
        <SectionContainer>
          <div className="flex justify-between">
            <h2 className="text-4xl font-bold text-text-dark mb-8">
              Privacy Policy
            </h2>
            <div>
              <Link
                href="/"
                className="bg-[#6F5EF7] hover:bg-[#5d4fe6] px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-medium text-white text-xs sm:text-sm transition-colors"
              >
                Website →
              </Link>
            </div>
          </div>
          {/* <div className="max-w-4xl mx-auto"> */}
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-text-dark mb-4">
              1. Introduction
            </h2>
            <p className="text-text-light leading-relaxed mb-4">
              Techstack Management (&quot;Techstack&quot;, &quot;we&quot;,
              &quot;us&quot;, &quot;our&quot;) is committed to protecting the
              privacy and security of personal data entrusted to us. This
              Privacy Policy explains how we collect, use, process, disclose,
              and safeguard information when customers and users access or use
              our software platform, website, and related services
              (collectively, the &quot;Services&quot;).
            </p>
            <p className="text-text-light leading-relaxed mb-4">
              Techstack Management operates a security-first architecture
              aligned with SOC 2 and ISO/IEC 27001:2022 principles.
            </p>
            <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r-lg">
              <p className="text-text-dark text-sm">
                <strong>Questions?</strong> Contact us at{" "}
                <a
                  href="mailto:privacy@addpipeline.ai"
                  className="text-purple-600 hover:text-purple-700 underline"
                >
                  privacy@addpipeline.ai
                </a>
              </p>
            </div>
          </div>

          {/* Scope */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-text-dark mb-4">2. Scope</h2>
            <p className="text-text-light leading-relaxed mb-4">
              This Privacy Policy applies to:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "Visitors to our website",
                "Customers and authorized users of our platform",
                "Individuals whose data is processed by our customers through the Services",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-purple-600" />
                  </div>
                  <span className="text-text-light">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-text-light leading-relaxed text-sm italic">
              This policy does not apply to third-party platforms or services
              integrated into our Services. Such services are governed by their
              own privacy policies.
            </p>
          </div>

          {/* Roles and Responsibilities */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-text-dark mb-4">
              3. Roles and Responsibilities
            </h2>
            <p className="text-text-light leading-relaxed mb-6">
              Depending on context, Techstack Management acts as:
            </p>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-text-dark mb-3">
                  3.1 Data Processor
                </h3>
                <p className="text-text-light leading-relaxed">
                  For customer-uploaded data, including leads, contacts,
                  campaign data, and other business information, Techstack
                  Management acts as a data processor. The customer remains the
                  data controller and determines the purposes and means of
                  processing.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-text-dark mb-3">
                  3.2 Data Controller
                </h3>
                <p className="text-text-light leading-relaxed">
                  For account registration, billing, support, and usage
                  analytics, Techstack Management acts as a data controller.
                </p>
              </div>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-text-dark mb-6">
              4. Information We Collect
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-text-dark mb-3">
                  4.1 Information Provided by Customers and Users
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Account information",
                    "User credentials",
                    "Leads and contact lists",
                    "Communication data",
                    "Integration data",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-text-light"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-dark mb-3">
                  4.2 Automatically Collected Information
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "IP address and device identifiers",
                    "Browser type and OS",
                    "Usage activity",
                    "Log data and timestamps",
                    "Performance data",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-text-light"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-dark mb-3">
                  4.3 Information from Third Parties
                </h3>
                <ul className="space-y-2">
                  {[
                    "Data received via authorized integrations",
                    "Publicly available business information where permitted by law",
                    "Data from service providers supporting our infrastructure",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-text-light"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-text-dark mb-6">
              5. How We Use Information
            </h2>
            <p className="text-text-light leading-relaxed mb-6">
              We process personal data for the following purposes:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "5.1 Service Delivery",
                  items: [
                    "Provide and maintain Services",
                    "Authenticate users",
                    "Generate AI-powered insights",
                  ],
                },
                {
                  title: "5.2 Security and Monitoring",
                  items: [
                    "Detect unauthorized access",
                    "Maintain audit trails",
                    "Enforce Terms of Service",
                  ],
                },
                {
                  title: "5.3 Platform Improvement",
                  items: [
                    "Analyze usage trends",
                    "Improve performance",
                    "Develop new services",
                  ],
                },
                {
                  title: "5.4 Legal Compliance",
                  items: ["Comply with laws", "Respond to lawful requests"],
                },
              ].map((section, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border border-purple-100"
                >
                  <h3 className="text-lg font-semibold text-text-dark mb-3">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-text-light text-sm"
                      >
                        <span className="text-purple-600 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* AI and Automated Processing */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-text-dark mb-4">
              6. AI and Automated Processing
            </h2>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
              <p className="text-text-light leading-relaxed mb-3">
                Techstack Management utilizes artificial intelligence to
                generate recommendations and insights within the platform.
              </p>
              <ul className="space-y-2">
                {[
                  "AI-generated outputs are advisory in nature",
                  "No automated decision-making produces legal effects without human oversight",
                  "Customer data is not used to train publicly shared AI models",
                  "Data processing is limited to scope necessary to deliver services",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-text-dark text-sm"
                  >
                    <span className="text-purple-600 font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Legal Basis */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-text-dark mb-4">
              7. Legal Basis for Processing (GDPR)
            </h2>
            <p className="text-text-light leading-relaxed mb-4">
              Where applicable, we process personal data under the following
              legal bases:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Performance of a contract",
                "Legitimate business interests",
                "Consent (where required)",
                "Compliance with legal obligations",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-purple" />
                  <span className="text-text-dark text-sm font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Data Sharing */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-text-dark mb-6">
              8. Data Sharing and Disclosure
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-text-dark mb-3">
                  8.1 No Sale of Personal Data
                </h3>
                <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
                  <p className="text-text-dark font-medium">
                    We do not sell or rent personal information.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-dark mb-3">
                  8.2 Sub-Processors
                </h3>
                <p className="text-text-light leading-relaxed mb-4">
                  We engage trusted infrastructure providers to deliver our
                  Services, including:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Render",
                    "AWS S3",
                    "MongoDB Atlas",
                    "Netlify",
                    "SuperTokens",
                    "PostHog",
                  ].map((provider, index) => (
                    <div
                      key={index}
                      className="px-4 py-3 bg-white border border-gray-200 rounded-lg text-center text-sm font-medium text-text-dark hover:border-purple-300 transition-colors"
                    >
                      {provider}
                    </div>
                  ))}
                </div>
                <p className="text-text-light text-sm mt-4 italic">
                  Each provider maintains its own security certifications,
                  including SOC 2 Type II and/or ISO 27001 where applicable.
                </p>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-text-dark mb-6">
              11. Data Security
            </h2>
            <p className="text-text-light leading-relaxed mb-6">
              Techstack Management implements technical and organizational
              measures aligned with SOC 2 and ISO 27001 principles:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "🔒", text: "Encryption in transit (TLS 1.2+)" },
                { icon: "🛡️", text: "Encryption at rest (AES-256)" },
                { icon: "👥", text: "Role-based access controls" },
                { icon: "🔑", text: "Least Privilege enforcement" },
                { icon: "🔐", text: "Secure session management" },
                { icon: "📊", text: "Centralized logging & monitoring" },
                { icon: "🏗️", text: "Environment separation" },
                { icon: "☁️", text: "Managed cloud infrastructure" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-transparent rounded-lg border border-purple-100"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-text-dark text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            <p className="text-text-light text-sm mt-4 italic">
              Despite these safeguards, no system can guarantee absolute
              security.
            </p>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-text-dark mb-4">
              13. Your Rights
            </h2>
            <p className="text-text-light leading-relaxed mb-6">
              Depending on jurisdiction, individuals may have the right to:
            </p>
            <div className="bg-white rounded-xl border-2 border-purple-200 p-6">
              <ul className="space-y-3">
                {[
                  "Access personal data",
                  "Request correction of inaccurate data",
                  "Request deletion of personal data",
                  "Restrict or object to processing",
                  "Withdraw consent where applicable",
                  "Receive data in portable format",
                ].map((right, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-purple flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-text-dark">{right}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-gradient-purple rounded-2xl p-8 sm:p-10 text-center text-white">
            <Mail className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Questions About Your Privacy?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              For privacy inquiries, data subject requests, or security
              concerns, please contact us:
            </p>
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <span className="font-semibold">Techstack Management</span>
              <span className="hidden sm:block">•</span>
              <a
                href="mailto:privacy@addpipeline.ai"
                className="text-white hover:text-white/80 underline transition-colors"
              >
                privacy@addpipeline.ai
              </a>
            </div>
          </div>
          {/* </div> */}
        </SectionContainer>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;

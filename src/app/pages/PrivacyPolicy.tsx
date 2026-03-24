import { COMPANY_INFO } from "../../constants";

export function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen">
      <header
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #000d1a 0%, #001428 40%, #002E6E 100%)" }}
      >
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-white/60 text-lg">Last updated: January 2025</p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-gray max-w-none">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            When you contact us or use our services, we collect information you provide directly, including your name, email address, phone number, and company name.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We also collect usage data such as pages visited, time spent on the site, and browser type to improve our services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
          <ul className="text-gray-600 leading-relaxed space-y-2 list-disc pl-5">
            <li>To respond to your inquiries and provide requested services</li>
            <li>To send service updates and relevant communications</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Sharing</h2>
          <p className="text-gray-600 leading-relaxed">
            We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers who assist in operating our website, subject to confidentiality agreements.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
          <p className="text-gray-600 leading-relaxed">
            We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
          <p className="text-gray-600 leading-relaxed">
            You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at{" "}
            <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#002E6E] font-medium hover:underline">
              {COMPANY_INFO.email}
            </a>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            For privacy-related questions, reach us at{" "}
            <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#002E6E] font-medium hover:underline">
              {COMPANY_INFO.email}
            </a>{" "}
            or call {COMPANY_INFO.phoneFormatted}.
          </p>
        </section>
      </div>
    </div>
  );
}

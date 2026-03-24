import { COMPANY_INFO } from "../../constants";

export function TermsOfService() {
  return (
    <div className="bg-white min-h-screen">
      <header
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #000d1a 0%, #001428 40%, #002E6E 100%)" }}
      >
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Terms of Service</h1>
          <p className="text-white/60 text-lg">Last updated: January 2025</p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            By accessing or using OPENDRAP's services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            OPENDRAP provides AI-powered WhatsApp automation, voice calling bots, website development, and business automation services. Service details, scope, and deliverables are defined in individual service agreements.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Free Trial</h2>
          <p className="text-gray-600 leading-relaxed">
            The 7-day free trial is available for existing websites. No credit card is required. At the end of the trial, you may choose to continue at ₹8,999/month or cancel with no charges.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment & Cancellation</h2>
          <p className="text-gray-600 leading-relaxed">
            Monthly subscriptions are billed in advance. You may cancel at any time with 7 days notice. No refunds are issued for partial months. We reserve the right to suspend services for non-payment.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
          <p className="text-gray-600 leading-relaxed">
            All work delivered to you becomes your property upon full payment. OPENDRAP retains the right to showcase work in our portfolio unless you request otherwise in writing.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed">
            OPENDRAP's liability is limited to the amount paid for services in the preceding month. We are not liable for indirect, incidental, or consequential damages.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact</h2>
          <p className="text-gray-600 leading-relaxed">
            Questions about these terms? Email us at{" "}
            <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#002E6E] font-medium hover:underline">
              {COMPANY_INFO.email}
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}

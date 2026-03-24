import { COMPANY_INFO } from "../../constants";

export function CookiePolicy() {
  return (
    <div className="bg-white min-h-screen">
      <header
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #000d1a 0%, #001428 40%, #002E6E 100%)" }}
      >
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Cookie Policy</h1>
          <p className="text-white/60 text-lg">Last updated: January 2025</p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies</h2>
          <p className="text-gray-600 leading-relaxed">
            Cookies are small text files stored on your device when you visit a website. They help us provide a better experience by remembering your preferences and understanding how you use our site.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Cookies We Use</h2>
          <ul className="text-gray-600 leading-relaxed space-y-3 list-disc pl-5">
            <li><strong>Essential cookies:</strong> Required for the website to function. Cannot be disabled.</li>
            <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our site (e.g., pages visited, time on site).</li>
            <li><strong>Preference cookies:</strong> Remember your settings and preferences for a better experience.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Managing Cookies</h2>
          <p className="text-gray-600 leading-relaxed">
            You can control cookies through your browser settings. Disabling cookies may affect the functionality of our website. Most browsers allow you to refuse cookies or delete existing ones.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
          <p className="text-gray-600 leading-relaxed">
            We may use third-party services (such as analytics providers) that set their own cookies. We do not control these cookies and recommend reviewing the privacy policies of those services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contact</h2>
          <p className="text-gray-600 leading-relaxed">
            Questions about our cookie use? Email{" "}
            <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#002E6E] font-medium hover:underline">
              {COMPANY_INFO.email}
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}

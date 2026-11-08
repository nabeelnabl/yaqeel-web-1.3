import React from 'react';
import { SEO } from '../components/SEO';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SEO
        title="Terms of Service | Yaqeel"
        description="Terms and conditions for utilizing the Yaqeel institute management software and mobile apps."
        canonical="https://www.yaqeel.com/terms"
      />
      <Navbar />

      <section className="pt-36 pb-16 md:pt-44 md:pb-20 border-b border-line text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="eyebrow mb-4">Service Terms</p>

          <h1 className="h-display text-4xl sm:text-5xl md:text-6xl text-ink">
            Terms of Use
          </h1>

          <p className="mt-4 text-base sm:text-lg text-mute max-w-xl mx-auto leading-relaxed">
            Guidelines and legal responsibilities governing your use of the Yaqeel platform and mobile applications.
          </p>

          <span className="inline-block mt-4 text-xs font-mono text-mute">
            Last updated: May 2026
          </span>
        </div>
      </section>

      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-line shadow-xs space-y-8 text-ink/80 leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using Yaqeel (including mobile applications, web portals, and associated software), you agree to be bound by these Terms of Use and our Privacy Policy. If you represent an educational institution or tuition centre, you confirm having the authority to bind such institution to these terms.
            </p>
          </div>

          <hr className="border-neutral-200/70" />

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display mb-3">
              2. Use of Platform &amp; Account Responsibilities
            </h2>
            <p>
              Institutions are responsible for maintaining the confidentiality of their administrator and staff credentials. All activities occurring under your institutional account remain the responsibility of the designated institute administrators.
            </p>
          </div>

          <hr className="border-neutral-200/70" />

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display mb-3">
              3. Student Data &amp; Privacy Compliance
            </h2>
            <p>
              Yaqeel operates as a software service provider. Institutes retain all rights and ownership of their uploaded student records, grades, and attendance data. Yaqeel will never sell or exploit institutional records for commercial marketing purposes.
            </p>
          </div>

          <hr className="border-neutral-200/70" />

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display mb-3">
              4. Subscription &amp; Billing
            </h2>
            <p>
              Subscription fees are billed on an annual basis according to the number of active enrolled students. Failure to remit subscription renewals may result in temporary suspension of administrative access until balances are settled.
            </p>
          </div>

          <hr className="border-neutral-200/70" />

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display mb-3">
              5. Contact &amp; Legal Notices
            </h2>
            <p>
              For formal legal inquiries or notices regarding these terms, contact <a href="mailto:support@yaqeel.com" className="text-blue-600 underline">support@yaqeel.com</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const RefundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />

      <section className="pt-36 pb-16 md:pt-44 md:pb-20 border-b border-line text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="eyebrow mb-4">Billing Policies</p>

          <h1 className="h-display text-4xl sm:text-5xl md:text-6xl text-ink">
            Refund Policy
          </h1>

          <p className="mt-4 text-base sm:text-lg text-mute max-w-xl mx-auto leading-relaxed">
            Transparent subscription terms and refund procedures for Yaqeel institution plans.
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
              1. Subscription Cancellation
            </h2>
            <p>
              Institutions may cancel their active subscription at any time by contacting our support team at <a href="mailto:support@yaqeel.com" className="text-blue-600 font-semibold underline">support@yaqeel.com</a>. Upon cancellation, your institute will maintain full access until the conclusion of the currently active paid billing cycle.
            </p>
          </div>

          <hr className="border-neutral-200/70" />

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display mb-3">
              2. Refund Eligibility
            </h2>
            <p>
              We provide a 14-day satisfaction window for first-time annual subscriptions. If you determine within 14 calendar days of your initial payment that Yaqeel does not satisfy your institute's operational requirements, you may request a pro-rated refund minus any one-off manual setup charges.
            </p>
          </div>

          <hr className="border-neutral-200/70" />

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display mb-3">
              3. Processing Timeframe
            </h2>
            <p>
              Approved refund disbursements are initiated within 5 to 7 business days back to the original source payment method (bank account / UPI).
            </p>
          </div>

          <hr className="border-neutral-200/70" />

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display mb-3">
              4. Contact Us
            </h2>
            <p>
              For refund inquiries, write to <a href="mailto:support@yaqeel.com" className="text-blue-600 underline">support@yaqeel.com</a> or message our official WhatsApp desk at +91 85900 28549.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

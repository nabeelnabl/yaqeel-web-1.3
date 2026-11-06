import React from 'react';
import { Check } from 'lucide-react';

const WA = 'https://wa.me/918590028549?text=Hi%20Yaqeel%2C%20I%20would%20like%20to%20know%20more%20about%20the%20Rs%2045-50%20per%20student%20pricing%20for%20my%20institute.';
const ITEMS = [
  'All core modules: attendance, fees, exams, payroll',
  'Automated WhatsApp absence & performance alerts',
  'Student & parent mobile app access',
  'Free dedicated WhatsApp onboarding & support',
];

export const SimplePricing: React.FC<{ onOpenDemo?: () => void }> = ({ onOpenDemo }) => (
  <section id="pricing" className="scroll-mt-16 px-6 py-28 sm:py-36">
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">Pricing</p>
      <h2 className="h-display mt-5 text-4xl sm:text-5xl">One simple price.</h2>
      <div className="mt-14 rounded-3xl border border-line bg-white px-6 py-12 sm:px-12">
        <div className="h-display text-6xl sm:text-7xl">₹45 – ₹50</div>
        <p className="mt-3 text-sm text-mute">per student, per year</p>
        <ul className="mx-auto mt-10 max-w-sm space-y-3.5 text-left">
          {ITEMS.map((t) => (
            <li key={t} className="flex gap-3 text-[15px]"><Check size={17} className="mt-0.5 shrink-0 text-accent" />{t}</li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <button onClick={onOpenDemo} className="rounded-full bg-ink px-7 py-3 text-sm font-medium text-paper transition hover:bg-black">Book a free demo</button>
          <a href={WA} target="_blank" rel="noreferrer" className="rounded-full border border-line px-7 py-3 text-sm font-medium transition hover:border-ink">Ask about pricing</a>
        </div>
        <p className="mt-6 text-xs text-mute">Custom quotes for 1,000+ students · GST-compliant invoices</p>
      </div>
    </div>
  </section>
);

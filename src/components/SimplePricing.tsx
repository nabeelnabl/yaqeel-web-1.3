import React, { useState } from 'react';
import { Check, MessageSquare, ArrowRight, Calculator } from 'lucide-react';

const WA_BASE = 'https://wa.me/918590028549';
const FIXED_PRICE_PER_STUDENT = 59;
const DISCOUNT_THRESHOLD = 2500;

const ITEMS = [
  'All core modules: attendance, fees, exams, payroll',
  'Automated WhatsApp absence & fee reminder alerts',
  'Student & parent mobile app access',
  'Free dedicated onboarding, data import & staff training',
];

const PRESETS = [50, 100, 250, 500, 1000, 1500, 2000, 2500, 2501];

export const SimplePricing: React.FC<{ onOpenDemo?: () => void }> = ({ onOpenDemo }) => {
  const [studentCount, setStudentCount] = useState<number>(50);

  const isDiscounted = studentCount > DISCOUNT_THRESHOLD;
  const totalPrice = studentCount * FIXED_PRICE_PER_STUDENT;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val)) {
      setStudentCount(Math.max(50, Math.min(val, 2600)));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, '');
    const val = parseInt(raw, 10);
    if (isNaN(val)) {
      setStudentCount(0);
    } else {
      setStudentCount(Math.max(0, Math.min(val, 50000)));
    }
  };

  const getWaLink = () => {
    if (isDiscounted) {
      const displayCount = studentCount === 2501 ? '2,500+' : `${studentCount.toLocaleString('en-IN')}+`;
      const text = encodeURIComponent(
        `Hi Yaqeel, our institute has ${displayCount} students. We would like to get a discounted volume price quote.`
      );
      return `${WA_BASE}?text=${text}`;
    }
    const text = encodeURIComponent(
      `Hi Yaqeel, our institute has ${studentCount.toLocaleString('en-IN')} students. I would like to get started with the ₹59 per student plan.`
    );
    return `${WA_BASE}?text=${text}`;
  };

  return (
    <section id="pricing" className="scroll-mt-16 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">Transparent Pricing</p>
        <h2 className="h-display mt-5 text-4xl sm:text-5xl text-ink">
          Fixed ₹59 per student.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
          One fixed annual rate covers all four modules, unlimited teacher accounts, automated WhatsApp parent alerts, and the student mobile app.
        </p>

        {/* Pricing & Calculator Card */}
        <div className="mt-14 rounded-3xl border border-line bg-white p-6 sm:p-12 text-center shadow-xs">
          
          {/* Base Rate Hero */}
          <div className="pb-8 border-b border-line">
            <span className="eyebrow">Standard Rate</span>
            <div className="h-display mt-3 text-6xl sm:text-7xl text-ink">
              ₹59
            </div>
            <p className="mt-2 text-sm text-mute">
              per student, per year &bull; billed annually
            </p>
            <p className="mt-1 text-xs text-mute font-medium">
              Fixed ₹59 per student. That&apos;s just under ₹5 per student per month.
            </p>
          </div>

          {/* Interactive Calculator */}
          <div className="pt-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Calculator size={18} className="text-mute" />
              <h3 className="h-display text-xl sm:text-2xl text-ink">
                Calculate your institute plan
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-mute">
              Slide or enter your total active student count:
            </p>

            {/* Student Count Input Field & Stepper */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="text-sm font-medium text-mute">Students:</span>
              <div className="relative inline-flex items-center">
                <input
                  type="text"
                  inputMode="numeric"
                  value={studentCount === 0 ? '' : studentCount === 2501 ? '2,500+' : studentCount.toString()}
                  onChange={handleInputChange}
                  placeholder="50"
                  className="w-36 rounded-2xl border border-line bg-paper px-4 py-2.5 text-center text-xl font-bold text-ink focus:border-ink focus:outline-none transition"
                  aria-label="Student count"
                />
              </div>
            </div>

            {/* Range Slider */}
            <div className="mt-6 max-w-md mx-auto px-2">
              <input
                type="range"
                min="50"
                max="2600"
                step="50"
                value={Math.min(studentCount, 2600)}
                onChange={handleSliderChange}
                className="w-full h-2 bg-paper rounded-lg appearance-none cursor-pointer accent-ink"
                aria-label="Student count range slider"
              />
              <div className="mt-2.5 flex justify-between text-xs sm:text-[13px] text-mute font-mono">
                <span>50</span>
                <span>500</span>
                <span>1,000</span>
                <span>1,500</span>
                <span>2,000</span>
                <span>2,500+</span>
              </div>
            </div>

            {/* Quick Preset Chips */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
              {PRESETS.map((count) => {
                const label = count === 2501 ? '2,500+' : count.toLocaleString('en-IN');
                const isSelected = count === 2501 ? studentCount > 2500 : studentCount === count;
                return (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setStudentCount(count)}
                    className={`rounded-full px-4 py-2 min-h-[44px] inline-flex items-center justify-center text-xs sm:text-sm font-medium transition cursor-pointer ${
                      isSelected
                        ? 'bg-ink text-paper'
                        : 'border border-line bg-paper text-ink hover:border-ink hover:bg-white'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Calculation Output Box */}
            <div className="mt-8 rounded-2xl border border-line bg-paper p-6 sm:p-8 text-center transition-all">
              {isDiscounted ? (
                /* 2,500+ Students Discount Option */
                <div>
                  <div className="inline-block eyebrow text-accent mb-2">
                    Enterprise Volume Tier &bull; 2,500+ Students
                  </div>
                  <div className="h-display text-3xl sm:text-4xl text-ink">
                    Special Discounted Pricing
                  </div>
                  <p className="mt-2 text-sm text-mute max-w-md mx-auto leading-relaxed">
                    Institutes with {studentCount === 2501 ? '2,500+' : `${studentCount.toLocaleString('en-IN')}+`} students qualify for our custom discounted volume slabs.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWaLink()}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-paper transition hover:bg-black shadow-xs"
                    >
                      <MessageSquare size={16} className="text-emerald-400" />
                      <span>Get Discounted Price &mdash; Chat Now</span>
                    </a>
                    {onOpenDemo && (
                      <button
                        onClick={onOpenDemo}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-full border border-line bg-white px-7 py-3.5 text-sm font-medium text-ink transition hover:border-ink"
                      >
                        <span>Book an institute demo</span>
                        <ArrowRight size={14} />
                      </button>
                    )}
                  </div>
                  <p className="mt-3 text-xs text-mute">
                    Direct reply from our founders on WhatsApp within minutes
                  </p>
                </div>
              ) : (
                /* Standard <= 2500 Calculation */
                <div>
                  <span className="eyebrow">Estimated Total Cost</span>
                  <div className="h-display mt-2 text-4xl sm:text-5xl text-ink">
                    ₹{totalPrice.toLocaleString('en-IN')}
                    <span className="text-lg sm:text-xl font-normal text-mute"> / year</span>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-mute">
                    ₹59 &times; {studentCount.toLocaleString('en-IN')} active students &bull; approx. ₹{Math.round(totalPrice / 12).toLocaleString('en-IN')}/mo &bull; no extra charges
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={onOpenDemo}
                      className="w-full sm:w-auto rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-paper transition hover:bg-black"
                    >
                      Book a free demo
                    </button>
                    <a
                      href={getWaLink()}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-7 py-3.5 text-sm font-medium text-ink transition hover:border-ink"
                    >
                      <MessageSquare size={15} />
                      <span>Ask about this plan</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Feature Checklist */}
          <ul className="mx-auto mt-10 max-w-md space-y-3.5 text-left pt-6 border-t border-line">
            {ITEMS.map((t) => (
              <li key={t} className="flex gap-3 text-[15px] text-ink">
                <Check size={17} className="mt-0.5 shrink-0 text-accent" />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-xs text-mute">
            No setup fee &bull; No per-SMS charges &bull; Official GST-compliant invoices provided
          </p>
        </div>
      </div>
    </section>
  );
};

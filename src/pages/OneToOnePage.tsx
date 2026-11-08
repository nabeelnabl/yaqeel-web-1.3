import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AppBadgesGroup } from '../components/AppBadges';
import { 
  MessageSquare, 
  Check, 
  Calculator,
  ArrowRight
} from 'lucide-react';

const WA_BASE = 'https://wa.me/918590028549';
const RATE_PER_STUDENT = 150;
const MIN_STUDENTS = 20;
const DISCOUNT_THRESHOLD = 100;

const HIGHLIGHTS = [
  {
    n: '01',
    title: 'Per-Student Session Logs',
    desc: 'Log hours, lesson topics, and dates for each individual student with a single tap after every private session.',
  },
  {
    n: '02',
    title: 'Automated UPI Invoicing',
    desc: 'Generate clean digital fee summaries and dispatch payment links directly to parents via WhatsApp.',
  },
  {
    n: '03',
    title: 'Individual Progress Tracking',
    desc: 'Record customized test scores, assignments, and personalized teacher remarks for every learner.',
  },
  {
    n: '04',
    title: 'Zero Setup & 100% Mobile',
    desc: 'Run your private tuition schedule entirely from your phone. No spreadsheets or laptop required.',
  },
];

const PRESETS = [20, 30, 50, 75, 100, 150];

export const OneToOnePage: React.FC = () => {
  const [studentCount, setStudentCount] = useState<number>(20);

  const openDemo = () => {
    const text = encodeURIComponent('Hi Yaqeel, I would like to know more about Yaqeel for 1-to-1 private tuitions.');
    window.open(`${WA_BASE}?text=${text}`, '_blank');
  };

  const isDiscounted = studentCount > DISCOUNT_THRESHOLD;
  const effectiveCount = Math.max(MIN_STUDENTS, studentCount);
  const totalAmount = effectiveCount * RATE_PER_STUDENT;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val)) {
      setStudentCount(Math.max(MIN_STUDENTS, Math.min(val, 300)));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (isNaN(val)) {
      setStudentCount(0);
    } else {
      setStudentCount(Math.max(0, Math.min(val, 2000)));
    }
  };

  const getWaLink = () => {
    if (isDiscounted) {
      const text = encodeURIComponent(
        `Hi Yaqeel, I teach ${studentCount.toLocaleString('en-IN')} students in 1-to-1 private tuitions. I would like to get a discounted volume price quote.`
      );
      return `${WA_BASE}?text=${text}`;
    }
    const text = encodeURIComponent(
      `Hi Yaqeel, I teach ${effectiveCount.toLocaleString('en-IN')} students in 1-to-1 private tuitions. I want to get started with the ₹150/student plan (Total: ₹${totalAmount.toLocaleString('en-IN')}).`
    );
    return `${WA_BASE}?text=${text}`;
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-paper text-ink">
      <SEO
        title="1-to-1 & Home Tutoring Management Platform | Yaqeel"
        description="Streamlined management built for independent educators and 1-to-1 private tutors. Hourly logs, turnout, and billing."
        canonical="https://www.yaqeel.com/1-to-1"
      />
      <Navbar onOpenDemo={openDemo} />

      <main>
        {/* ======================================================
            HERO SECTION
           ====================================================== */}
        <section className="px-6 pt-36 sm:pt-44">
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">Private &amp; Home Tutoring</p>
            <h1 className="h-display mt-6 text-[2.75rem] sm:text-6xl md:text-7xl">
              Built for 1-to-1<br className="hidden sm:inline" /> private tuitions.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mute sm:text-lg">
              Designed specifically for individual tutors, home mentors, and private coaching sessions. Track student hours, attendance, lesson topics, and fee collections effortlessly from your phone.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <button
                onClick={openDemo}
                className="w-full sm:w-auto rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-paper transition hover:bg-black"
              >
                Get started for 1-to-1
              </button>
              <a
                href={getWaLink()}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-7 py-3.5 text-sm font-medium text-ink transition hover:border-ink hover:bg-paper"
              >
                <MessageSquare size={16} className="text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <p className="mt-6 text-[13px] text-mute">
              Works seamlessly on iOS &amp; Android &middot; Setup in under 2 minutes
            </p>
          </div>

          {/* Quick 4 Pillars Grid */}
          <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 border-y border-line sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((h, i) => (
              <div
                key={h.n}
                className={`p-6 transition hover:bg-white sm:p-8 ${
                  i % 2 !== 0 ? 'sm:border-l sm:border-line' : ''
                } ${i > 0 ? 'lg:border-l lg:border-line' : ''} ${
                  i > 1 ? 'border-t border-line sm:border-t lg:border-t-0' : ''
                }`}
              >
                <span className="text-xs font-mono text-mute">{h.n}</span>
                <h3 className="h-display mt-8 text-xl text-ink">{h.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-mute">{h.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================
            WHY 1-TO-1 TUTORS LOVE YAQEEL
           ====================================================== */}
        <section className="px-6 py-24 sm:py-32 border-b border-line bg-white">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-2xl">
              <p className="eyebrow">Simplicity First</p>
              <h2 className="h-display mt-5 text-4xl sm:text-5xl">
                Ditch the notebook.<br />Look professional to parents.
              </h2>
              <p className="mt-4 text-base text-mute">
                Private tutoring requires trust and accountability. Yaqeel makes it easy to maintain an impeccable record of every session and payment.
              </p>
            </div>

            <div className="mt-14 space-y-4 max-w-3xl">
              {[
                {
                  title: 'Exact session counters',
                  desc: 'Never dispute whether 8 or 10 sessions were completed this month. Both tutor and parent see the exact verified dates.',
                },
                {
                  title: 'WhatsApp-native receipts',
                  desc: 'Send professional PDF receipts with your name and UPI QR code directly on WhatsApp with zero friction.',
                },
                {
                  title: 'Individual syllabus tracking',
                  desc: 'Keep track of what topics were completed in each session so you always know where to pick up.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-6 rounded-2xl border border-line bg-paper">
                  <div className="h-6 w-6 rounded-full bg-accent text-paper flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink text-base">{item.title}</h4>
                    <p className="text-sm text-mute mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================
            1-TO-1 PRICING & SMALL CALCULATOR SECTION
           ====================================================== */}
        <section id="pricing" className="scroll-mt-16 px-6 py-24 sm:py-32 border-b border-line">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">1-to-1 Pricing</p>
            <h2 className="h-display mt-5 text-4xl sm:text-5xl text-ink">
              ₹150 per student.
            </h2>
            <p className="mt-4 text-base text-mute">
              Billed annually &bull; Minimum 20 students (₹3,000 / year) &bull; Includes all 1-to-1 features &amp; parent app
            </p>

            {/* Small Calculator Card */}
            <div className="mt-12 rounded-3xl border border-line bg-white p-6 sm:p-12 text-center shadow-xs">
              <div className="pb-8 border-b border-line">
                <span className="eyebrow">1-to-1 Plan</span>
                <div className="h-display mt-3 text-6xl sm:text-7xl text-ink">₹150</div>
                <p className="mt-2 text-sm text-mute">
                  per student count, per year &bull; Min. 20 students
                </p>
              </div>

              {/* Calculator Section */}
              <div className="pt-8">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Calculator size={18} className="text-mute" />
                  <h3 className="h-display text-xl sm:text-2xl text-ink">Calculate your plan</h3>
                </div>
                <p className="text-xs sm:text-sm text-mute">
                  Slide or enter your total 1-to-1 student count:
                </p>

                {/* Number Input */}
                <div className="mt-6 flex items-center justify-center gap-3">
                  <span className="text-sm font-medium text-mute">Students:</span>
                  <input
                    type="number"
                    min="20"
                    max="2000"
                    value={studentCount === 0 ? '' : studentCount}
                    onChange={handleInputChange}
                    placeholder="20"
                    className="w-32 rounded-2xl border border-line bg-paper px-4 py-2.5 text-center text-xl font-bold text-ink focus:border-ink focus:outline-none transition"
                    aria-label="1-to-1 student count"
                  />
                </div>

                {/* Range Slider */}
                <div className="mt-6 max-w-md mx-auto px-2">
                  <input
                    type="range"
                    min="20"
                    max="200"
                    step="5"
                    value={effectiveCount}
                    onChange={handleSliderChange}
                    className="w-full h-2 bg-paper rounded-lg appearance-none cursor-pointer accent-ink"
                    aria-label="1-to-1 student count range slider"
                  />
                  <div className="mt-2 flex justify-between text-[11px] text-mute font-mono">
                    <span>20 min</span>
                    <span>50</span>
                    <span>100</span>
                    <span>200+</span>
                  </div>
                </div>

                {/* Quick Presets */}
                <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                  {PRESETS.map((count) => {
                    const label = count === 150 ? '100+' : count.toString();
                    const isSelected = count === 150 ? studentCount > DISCOUNT_THRESHOLD : studentCount === count;
                    return (
                      <button
                        key={count}
                        type="button"
                        onClick={() => setStudentCount(count)}
                        className={`rounded-full px-3.5 py-1 text-xs font-medium transition ${
                          isSelected
                            ? 'bg-ink text-paper'
                            : 'border border-line bg-paper text-ink hover:border-ink'
                        }`}
                      >
                        {label} students
                      </button>
                    );
                  })}
                </div>

                {/* Output Box */}
                <div className="mt-8 rounded-2xl border border-line bg-paper p-6 sm:p-8 text-center transition-all">
                  {isDiscounted ? (
                    <div>
                      <div className="inline-block eyebrow text-accent mb-2">
                        100+ Students Tutor Tier
                      </div>
                      <div className="h-display text-3xl sm:text-4xl text-ink">
                        Special Discounted Price
                      </div>
                      <p className="mt-2 text-sm text-mute max-w-md mx-auto leading-relaxed">
                        Tutors and mentors teaching {studentCount} students qualify for our custom discounted 1-to-1 rate.
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
                        <button
                          onClick={openDemo}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-full border border-line bg-white px-7 py-3.5 text-sm font-medium text-ink transition hover:border-ink"
                        >
                          <span>Ask a question</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>
                      <p className="mt-3 text-xs text-mute">
                        Instant response from our team on WhatsApp
                      </p>
                    </div>
                  ) : (
                    <div>
                      <span className="eyebrow">Calculated Amount</span>
                      <div className="h-display mt-2 text-4xl sm:text-5xl text-ink">
                        ₹{totalAmount.toLocaleString('en-IN')}
                        <span className="text-lg sm:text-xl font-normal text-mute"> / year</span>
                      </div>
                      <p className="mt-1 text-xs sm:text-sm text-mute">
                        ₹150 &times; {effectiveCount} students &bull; {studentCount < MIN_STUDENTS ? 'Minimum 20 students base plan' : 'No extra charges'}
                      </p>

                      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <button
                          onClick={openDemo}
                          className="w-full sm:w-auto rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-paper transition hover:bg-black"
                        >
                          Get started for 1-to-1
                        </button>
                        <a
                          href={getWaLink()}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-7 py-3.5 text-sm font-medium text-ink transition hover:border-ink"
                        >
                          <MessageSquare size={15} />
                          <span>Chat on WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="mx-auto mt-10 max-w-md grid grid-cols-1 sm:grid-cols-2 gap-3 text-left pt-6 border-t border-line">
                <div className="flex items-center gap-2 text-sm text-ink/80">
                  <Check size={16} className="text-accent shrink-0" />
                  <span>Individual session logs</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-ink/80">
                  <Check size={16} className="text-accent shrink-0" />
                  <span>WhatsApp UPI payment receipts</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-ink/80">
                  <Check size={16} className="text-accent shrink-0" />
                  <span>Student &amp; parent app access</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-ink/80">
                  <Check size={16} className="text-accent shrink-0" />
                  <span>Instant 2-minute mobile setup</span>
                </div>
              </div>

              <p className="mt-8 text-xs text-mute">
                Minimum 20 students plan (₹3,000/yr) &bull; Cancel or upgrade anytime &bull; GST invoice provided
              </p>
            </div>
          </div>
        </section>

        {/* ======================================================
            CLOSING BANNER
           ====================================================== */}
        <section className="px-6 py-28">
          <div className="mx-auto max-w-6xl rounded-[2rem] bg-ink px-6 py-20 text-center text-paper sm:py-28">
            <p className="text-xs uppercase tracking-widest text-paper/60 font-medium">Download Yaqeel</p>
            <h2 className="h-display mt-4 text-4xl sm:text-6xl text-paper">
              Start your 1-to-1<br />coaching today.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-paper/70">
              Download the free mobile app and add your first student in seconds.
            </p>

            <div className="mt-10 flex justify-center">
              <AppBadgesGroup theme="glass" size="md" className="gap-3" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

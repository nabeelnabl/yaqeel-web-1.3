import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Institutions } from '../components/Institutions';
import { 
  ArrowUpRight, 
  Check, 
  MessageSquare 
} from 'lucide-react';

const WA_BASE = 'https://wa.me/918590028549';
const WA_DEMO = `${WA_BASE}?text=${encodeURIComponent('Hi Yaqeel, I would like to book a free demo for my institute.')}`;
const WA_PRICING = `${WA_BASE}?text=${encodeURIComponent('Hi Yaqeel, I would like to know more about institution pricing and plans.')}`;

const QUAD_PILLARS = [
  { n: '01', t: 'Operations', d: 'One-tap attendance & instant WhatsApp absence alerts in under 10 seconds.' },
  { n: '02', t: 'Academics', d: 'Batch-wise marks entry, ranks, and automated digital report cards.' },
  { n: '03', t: 'Finances', d: 'Live fee collection ledgers, automated receipts, and UPI due reminders.' },
  { n: '04', t: 'Payroll', d: 'Teacher workload logs and automated salary calculation from logged hours.' },
];

const CORE_SOLUTIONS = [
  {
    n: '01',
    category: 'Manage your institute',
    title: 'Everything in one calm place',
    description: 'Replace fragmented registers, Excel sheets, and paper receipts with a single unified mobile management system.',
    points: [
      'Multi-batch & student profile management',
      'One-tap attendance with 10-second class turnouts',
      'Fee records, instant receipts & payment histories',
      'Exam creation, marks entry & printable report cards',
    ],
    cta: 'Explore management tools',
    href: `${WA_BASE}?text=${encodeURIComponent('Hi Yaqeel, I would like to explore institute management features.')}`,
    featured: false,
  },
  {
    n: '02',
    category: 'Keep everyone connected',
    title: 'Built for students, teachers & parents',
    description: 'Ensure parents are always informed and teachers can record daily marks and turnout directly from their smartphones.',
    points: [
      'Role-based access for teachers and administrators',
      'Automated WhatsApp notifications for absent students',
      'Dedicated Student & Parent mobile app',
      'Timetable changes, test schedules & announcements',
    ],
    cta: 'Explore communication platform',
    href: `${WA_BASE}?text=${encodeURIComponent('Hi Yaqeel, I would like to explore communication features for teachers & parents.')}`,
    featured: true,
  },
  {
    n: '03',
    category: 'Grow with confidence',
    title: 'Insights that help you improve',
    description: 'Actionable real-time intelligence on student attendance drop-offs, fee defaulters, and teacher hours.',
    points: [
      'Class & subject-wise academic performance analytics',
      'Real-time fee collection & pending balance tracking',
      'Teacher hourly payroll and workload calculations',
      'Clean exportable CSV & PDF reports for audits',
    ],
    cta: 'Discover business analytics',
    href: `${WA_BASE}?text=${encodeURIComponent('Hi Yaqeel, I would like to discover analytics & reporting for my academy.')}`,
    featured: false,
  },
];

const COMPARISON = [
  {
    feature: 'Device requirement',
    traditional: 'Requires desktop PC, server setup & biometric hardware',
    yaqeel: '100% smartphone native — zero hardware or cables needed',
  },
  {
    feature: 'Parent communication',
    traditional: 'Manual SMS gateways or costly phone calls',
    yaqeel: 'Automated instant WhatsApp alerts for attendance & marks',
  },
  {
    feature: 'Teacher adoption',
    traditional: 'Complex desktop software requiring weeks of staff training',
    yaqeel: 'Intuitive iOS & Android app — mastered in under 5 minutes',
  },
  {
    feature: 'Fee collection & receipts',
    traditional: 'Paper receipt books & manual ledger reconciliation',
    yaqeel: 'Automated digital PDF receipts with UPI reminder links',
  },
  {
    feature: 'Pricing & contracts',
    traditional: 'Steep setup fees, annual server maintenance & hidden costs',
    yaqeel: 'Simple transparent pricing: ₹45 – ₹50 per student / year',
  },
];

const STATS = [
  { value: '8,000+', label: 'Students & teachers in just 6 months' },
  { value: '< 10s', label: 'Average time to take attendance for a class of 60' },
  { value: '99.4%', label: 'WhatsApp parent delivery & read rate' },
  { value: '0', label: 'Biometric or desktop hardware needed' },
];

export const BusinessPage: React.FC = () => {
  const openDemo = () => {
    window.open(WA_DEMO, '_blank');
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-paper text-ink">
      <Navbar onOpenDemo={openDemo} />

      <main>
        {/* ======================================================
            HERO SECTION
           ====================================================== */}
        <section className="px-6 pt-36 sm:pt-44">
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">Enterprise &amp; Academies</p>
            <h1 className="h-display mt-6 text-[2.75rem] sm:text-6xl md:text-7xl">
              The complete platform<br className="hidden sm:inline" /> for modern institutes.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mute sm:text-lg">
              From 50-student coaching batches to multi-campus academies with 8,000+ enrolments in just 6 months &mdash; Yaqeel simplifies attendance, fees, exams, and parent communications from one calm mobile app.
            </p>

            {/* Hero Actions */}
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <button
                onClick={openDemo}
                className="w-full sm:w-auto rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-paper transition hover:bg-black"
              >
                Book an institution demo
              </button>
              <a
                href={WA_DEMO}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-7 py-3.5 text-sm font-medium text-ink transition hover:border-ink hover:bg-paper"
              >
                <MessageSquare size={16} className="text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <p className="mt-6 text-[13px] text-mute">
              Trusted by 8,000+ students &amp; teachers in just 6 months &middot; Free onboarding &amp; teacher training included
            </p>
          </div>

          {/* Quick Pillars Grid */}
          <div className="mx-auto mt-20 grid max-w-6xl grid-cols-2 border-y border-line md:grid-cols-4">
            {QUAD_PILLARS.map((q, i) => (
              <div
                key={q.n}
                className={`p-6 transition hover:bg-white sm:p-8 ${i % 2 ? 'border-l border-line' : ''} ${i > 0 ? 'md:border-l' : ''} ${i > 1 ? 'border-t border-line md:border-t-0' : ''}`}
              >
                <span className="text-xs text-mute">{q.n}</span>
                <h3 className="h-display mt-8 text-xl sm:text-2xl">{q.t}</h3>
                <p className="mt-1.5 text-[13px] text-mute">{q.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================
            PARTNER INSTITUTIONS MARQUEE
           ====================================================== */}
        <Institutions />

        {/* ======================================================
            CORE PILLARS / SOLUTIONS
           ====================================================== */}
        <section className="px-6 py-28 sm:py-36 border-t border-line">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="eyebrow">Platform Capabilities</p>
              <h2 className="h-display mt-5 text-4xl sm:text-5xl">
                Everything you need to run &amp; grow your academy.
              </h2>
              <p className="mt-4 text-base text-mute">
                Designed to eliminate administrative chaos, keep parents connected, and give directors full visibility into every branch.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {CORE_SOLUTIONS.map((s) => (
                <div
                  key={s.n}
                  className={`flex flex-col justify-between rounded-3xl p-8 sm:p-10 transition border ${
                    s.featured
                      ? 'bg-ink text-paper border-ink shadow-sm'
                      : 'bg-white text-ink border-line hover:border-ink/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-mono font-medium ${s.featured ? 'text-paper/60' : 'text-mute'}`}>
                        {s.n}
                      </span>
                      <span className={`text-[11px] uppercase tracking-widest px-2.5 py-0.5 rounded-full ${
                        s.featured ? 'bg-paper/10 text-paper' : 'bg-paper text-mute border border-line'
                      }`}>
                        {s.category}
                      </span>
                    </div>

                    <h3 className={`h-display mt-8 text-2xl sm:text-3xl ${s.featured ? 'text-paper' : 'text-ink'}`}>
                      {s.title}
                    </h3>
                    <p className={`mt-3 text-sm leading-relaxed ${s.featured ? 'text-paper/70' : 'text-mute'}`}>
                      {s.description}
                    </p>

                    <ul className="mt-8 space-y-3">
                      {s.points.map((pt) => (
                        <li key={pt} className="flex gap-2.5 text-[14px] leading-snug">
                          <Check
                            size={16}
                            className={`mt-0.5 shrink-0 ${s.featured ? 'text-accent' : 'text-accent'}`}
                          />
                          <span className={s.featured ? 'text-paper/90' : 'text-ink/80'}>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`group mt-10 inline-flex w-fit items-center gap-1.5 border-b pb-0.5 text-sm font-medium transition ${
                      s.featured
                        ? 'border-paper text-paper hover:text-paper/80'
                        : 'border-ink text-ink hover:text-accent hover:border-accent'
                    }`}
                  >
                    <span>{s.cta}</span>
                    <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================
            WHY ACADEMIES SWITCH (COMPARISON TABLE)
           ====================================================== */}
        <section className="px-6 py-24 sm:py-32 border-t border-line bg-white">
          <div className="mx-auto max-w-5xl">
            <div className="text-center max-w-2xl mx-auto">
              <p className="eyebrow">The Modern Alternative</p>
              <h2 className="h-display mt-5 text-4xl sm:text-5xl">
                Why tuition centres choose Yaqeel.
              </h2>
              <p className="mt-4 text-base text-mute">
                Compare traditional legacy management software with Yaqeel's mobile-first platform.
              </p>
            </div>

            <div className="mt-16 overflow-hidden rounded-3xl border border-line bg-paper">
              <div className="grid grid-cols-1 divide-y divide-line">
                {/* Table Header */}
                <div className="grid grid-cols-12 bg-white/60 p-5 text-xs font-medium uppercase tracking-wider text-mute sm:p-6">
                  <div className="col-span-4 sm:col-span-3">Feature</div>
                  <div className="col-span-4 sm:col-span-4 text-mute">Legacy software</div>
                  <div className="col-span-4 sm:col-span-5 font-semibold text-accent">Yaqeel</div>
                </div>

                {/* Table Rows */}
                {COMPARISON.map((row) => (
                  <div key={row.feature} className="grid grid-cols-12 p-5 text-sm sm:p-6 transition hover:bg-white">
                    <div className="col-span-4 sm:col-span-3 font-medium text-ink pr-3">
                      {row.feature}
                    </div>
                    <div className="col-span-4 sm:col-span-4 text-mute text-xs sm:text-sm pr-3 leading-relaxed">
                      {row.traditional}
                    </div>
                    <div className="col-span-4 sm:col-span-5 font-medium text-ink text-xs sm:text-sm flex items-start gap-2 leading-relaxed">
                      <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                      <span>{row.yaqeel}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================
            KEY IMPACT STATS STRIP
           ====================================================== */}
        <section className="px-6 py-20 border-t border-line bg-paper">
          <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.value} className="text-center sm:text-left">
                <div className="h-display text-4xl sm:text-5xl text-ink">{s.value}</div>
                <p className="mt-2 text-xs sm:text-sm text-mute leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================
            TRANSPARENT ENTERPRISE PRICING
           ====================================================== */}
        <section className="px-6 py-24 sm:py-32 border-t border-line">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Enterprise Pricing</p>
            <h2 className="h-display mt-5 text-4xl sm:text-5xl">One simple, honest price.</h2>
            <p className="mt-4 text-base text-mute">
              No hidden setup fees, no charges per SMS, and no long-term lock-in.
            </p>

            <div className="mt-12 rounded-3xl border border-line bg-white p-8 sm:p-14 text-center">
              <div className="h-display text-6xl sm:text-7xl text-ink">₹45 – ₹50</div>
              <p className="mt-3 text-sm text-mute">per student, per year</p>

              <div className="mx-auto mt-10 max-w-md grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                <div className="flex items-center gap-2 text-sm text-ink/80">
                  <Check size={16} className="text-accent shrink-0" />
                  <span>All core modules included</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-ink/80">
                  <Check size={16} className="text-accent shrink-0" />
                  <span>Instant WhatsApp alerts</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-ink/80">
                  <Check size={16} className="text-accent shrink-0" />
                  <span>Student &amp; parent app access</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-ink/80">
                  <Check size={16} className="text-accent shrink-0" />
                  <span>Free teacher training &amp; setup</span>
                </div>
              </div>

              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  onClick={openDemo}
                  className="rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-paper transition hover:bg-black"
                >
                  Book an institution demo
                </button>
                <a
                  href={WA_PRICING}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-line bg-paper px-8 py-3.5 text-sm font-medium transition hover:border-ink hover:bg-white"
                >
                  Request custom volume quote
                </a>
              </div>

              <p className="mt-6 text-xs text-mute">
                Volume pricing available for institutions with 1,000+ students · GST invoices provided
              </p>
            </div>
          </div>
        </section>

        {/* ======================================================
            CLOSING CALLOUT BANNER (Matching AppDownload styling)
           ====================================================== */}
        <section className="px-6 pb-28">
          <div className="mx-auto max-w-6xl rounded-[2rem] bg-ink px-6 py-20 text-center text-paper sm:py-28">
            <p className="text-xs uppercase tracking-widest text-paper/60 font-medium">Get started today</p>
            <h2 className="h-display mt-4 text-4xl sm:text-6xl">
              Ready to modernize<br />your institute?
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-paper/70">
              Schedule a 15-minute walkthrough. We will import your batches, configure your subjects, and have your teachers ready in 24 hours.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                onClick={openDemo}
                className="w-full sm:w-auto rounded-full bg-paper px-8 py-3.5 text-sm font-semibold text-ink transition hover:bg-white"
              >
                Book a free demo
              </button>
              <a
                href={WA_DEMO}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-paper/20 px-8 py-3.5 text-sm font-medium text-paper transition hover:border-paper/60 hover:bg-white/5"
              >
                <MessageSquare size={16} className="text-emerald-400" />
                <span>Talk to our team on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

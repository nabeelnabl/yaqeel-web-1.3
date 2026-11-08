import React from 'react';
import { SEO } from '../components/SEO';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AppBadgesGroup } from '../components/AppBadges';
import { 
  CheckCircle2, 
  Bell, 
  Award, 
  CreditCard, 
  MessageSquare 
} from 'lucide-react';

const PARENT_FEATURES = [
  {
    icon: CheckCircle2,
    title: 'Attendance Updates',
    desc: 'Get notified as soon as attendance is marked, with monthly attendance percentages.',
  },
  {
    icon: Award,
    title: 'Instant Marks & Report Cards',
    desc: 'Review test scores, batch rankings, and subject-wise progress reports as soon as papers are corrected.',
  },
  {
    icon: CreditCard,
    title: 'Digital Fee Receipts & Ledgers',
    desc: 'Instant payment confirmations, itemized tuition receipts, and clear visibility into pending dues.',
  },
  {
    icon: Bell,
    title: 'Class Timetables & Circulars',
    desc: 'Stay informed about rescheduled sessions, exam dates, holiday announcements, and faculty updates.',
  },
];

export const ParentAppPage: React.FC = () => {
  const openDemo = () => {
    const text = encodeURIComponent('Hi Yaqeel, I would like to know more about the Yaqeel Parent App.');
    window.open(`https://wa.me/918590028549?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-paper text-ink">
      <SEO
        title="Parent App for Attendance, Marks and Fees | Yaqeel"
        description="Parents can see attendance, exam marks, fee receipts and timetables from their child's institute."
        canonical="https://www.yaqeel.com/parent-app"
      />
      <Navbar onOpenDemo={openDemo} />

      <main>
        {/* ======================================================
            HERO SECTION
           ====================================================== */}
        <section className="px-6 pt-36 sm:pt-44">
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">Parent &amp; Student Experience</p>
            <h1 className="h-display mt-6 text-[2.75rem] sm:text-6xl md:text-7xl">
              Stay connected with your<br className="hidden sm:inline" /> child's academic journey.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mute sm:text-lg">
              Live attendance check-ins, instant exam marks, digital fee receipts, and automated WhatsApp notifications &mdash; delivered directly to parents' smartphones.
            </p>

            {/* App Badges */}
            <div className="mt-10 flex justify-center">
              <AppBadgesGroup size="md" className="gap-3" />
            </div>

            <p className="mt-6 text-[13px] text-mute">
              Available for iOS and Android &middot; Free for all enrolled students &amp; parents
            </p>
          </div>

          {/* Quick 4-Grid Highlights */}
          <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 border-y border-line sm:grid-cols-2 lg:grid-cols-4">
            {PARENT_FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className={`p-6 transition hover:bg-white sm:p-8 ${
                    i % 2 !== 0 ? 'sm:border-l sm:border-line' : ''
                  } ${i > 0 ? 'lg:border-l lg:border-line' : ''} ${
                    i > 1 ? 'border-t border-line sm:border-t lg:border-t-0' : ''
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-paper border border-line text-accent">
                    <Icon size={18} />
                  </div>
                  <h3 className="h-display mt-8 text-xl text-ink">{f.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-mute">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ======================================================
            HOW IT WORKS FOR PARENTS
           ====================================================== */}
        <section className="px-6 py-24 sm:py-32 border-b border-line bg-white">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-2xl">
              <p className="eyebrow">Zero Hassle</p>
              <h2 className="h-display mt-5 text-4xl sm:text-5xl">
                No complex passwords.<br />No confusion.
              </h2>
              <p className="mt-4 text-base text-mute">
                Parents don't need to navigate complicated portals. Important updates are sent straight to your WhatsApp, while the app gives you a comprehensive lifelong academic record.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="rounded-3xl border border-line bg-paper p-8">
                <span className="text-xs font-mono text-mute">01</span>
                <h3 className="h-display mt-6 text-xl text-ink">Registered by Institute</h3>
                <p className="mt-2 text-xs sm:text-sm text-mute leading-relaxed">
                  Your tuition centre or academy registers your phone number during batch enrolment.
                </p>
              </div>

              <div className="rounded-3xl border border-line bg-paper p-8">
                <span className="text-xs font-mono text-mute">02</span>
                <h3 className="h-display mt-6 text-xl text-ink">Instant WhatsApp Alerts</h3>
                <p className="mt-2 text-xs sm:text-sm text-mute leading-relaxed">
                  Receive daily absence alerts, marks updates, and digital receipts directly on WhatsApp.
                </p>
              </div>

              <div className="rounded-3xl border border-line bg-paper p-8">
                <span className="text-xs font-mono text-mute">03</span>
                <h3 className="h-display mt-6 text-xl text-ink">One-Tap Mobile App</h3>
                <p className="mt-2 text-xs sm:text-sm text-mute leading-relaxed">
                  Download the Yaqeel app for full attendance history, marks analytics, and batch timetables.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================
            CLOSING CALLOUT BANNER
           ====================================================== */}
        <section className="px-6 py-28">
          <div className="mx-auto max-w-6xl rounded-[2rem] bg-ink px-6 py-20 text-center text-paper sm:py-28">
            <p className="text-xs uppercase tracking-widest text-paper/60 font-medium">For institutes &amp; tutors</p>
            <h2 className="h-display mt-4 text-4xl sm:text-6xl text-paper">
              Provide this experience<br />to your parents.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-paper/70">
              Build parent trust with automated notifications. Free with every Yaqeel subscription.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                onClick={openDemo}
                className="w-full sm:w-auto rounded-full bg-paper px-8 py-3.5 text-sm font-semibold text-ink transition hover:bg-white"
              >
                Book a free demo
              </button>
              <a
                href="https://wa.me/918590028549?text=Hi%20Yaqeel%2C%20I%20want%20to%20learn%20more%20about%20the%20Parent%20App%20features."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-paper/20 px-8 py-3.5 text-sm font-medium text-paper transition hover:border-paper/60 hover:bg-white/5"
              >
                <MessageSquare size={16} className="text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

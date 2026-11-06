import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AppBadgesGroup } from '../components/AppBadges';
import { 
  MessageSquare, 
  Check 
} from 'lucide-react';

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

export const OneToOnePage: React.FC = () => {
  const openDemo = () => {
    const text = encodeURIComponent('Hi Yaqeel, I would like to know more about Yaqeel for 1-to-1 private tuitions.');
    window.open(`https://wa.me/918590028549?text=${text}`, '_blank');
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
                href="https://wa.me/918590028549?text=Hi%20Yaqeel%2C%20I%20teach%201-to-1%20tuitions%20and%20want%20to%20get%20started."
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
            CLOSING BANNER
           ====================================================== */}
        <section className="px-6 py-28">
          <div className="mx-auto max-w-6xl rounded-[2rem] bg-ink px-6 py-20 text-center text-paper sm:py-28">
            <p className="text-xs uppercase tracking-widest text-paper/60 font-medium">Download Yaqeel</p>
            <h2 className="h-display mt-4 text-4xl sm:text-6xl">
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

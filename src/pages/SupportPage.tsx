import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FAQ } from '../components/FAQ';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  ArrowUpRight,
  PhoneCall
} from 'lucide-react';

const CONTACT_CHANNELS = [
  {
    n: '01',
    type: 'Phone Support',
    title: '+91 85900 28549',
    description: 'Speak directly with our technical support and institute onboarding desk.',
    actionLabel: 'Call support desk',
    href: 'tel:+918590028549',
    icon: Phone,
    badge: 'Mon – Sat, 9 AM – 7 PM IST',
  },
  {
    n: '02',
    type: 'WhatsApp Chat',
    title: '+91 85900 28549',
    description: 'Quick answers, screen recordings, batch setup help and teacher guidance.',
    actionLabel: 'Chat on WhatsApp',
    href: 'https://wa.me/918590028549?text=Hi%20Yaqeel%20Support%2C%20I%20need%20assistance%20with%20my%20institute.',
    icon: MessageSquare,
    badge: 'Average reply < 15 mins',
  },
  {
    n: '03',
    type: 'Email Inquiries',
    title: 'support@yaqeel.com',
    description: 'Formal institution queries, enterprise data audits, and GST billing questions.',
    actionLabel: 'Send an email',
    href: 'mailto:support@yaqeel.com',
    icon: Mail,
    badge: 'Response within 24 hours',
  },
  {
    n: '04',
    type: 'Location',
    title: 'Calicut, Kerala, India',
    description: 'Serving coaching centres & academies nationwide.',
    actionLabel: 'View location',
    href: 'https://maps.google.com/?q=Calicut,+Kerala,+India',
    icon: MapPin,
    badge: 'We are from',
  },
];

const CALLING_LINES = [
  {
    number: '+91 85900 28549',
    tel: 'tel:+918590028549',
    desc: 'Institution onboarding, setup & account queries',
  },
  {
    number: '+91 94006 39420',
    tel: 'tel:+919400639420',
    desc: 'Technical troubleshooting, sync issues & teacher logins',
  },
  {
    number: '+91 70120 99097',
    tel: 'tel:+917012099097',
    desc: 'Exam report cards, mark sheets & fee ledger support',
  },
  {
    number: '+91 86068 98549',
    tel: 'tel:+918606898549',
    desc: 'Parent notifications, WhatsApp alerts & general assistance',
  },
];

const TOPICS = [
  {
    title: 'Institution Onboarding',
    desc: 'Assistance with importing student spreadsheets, creating classes, and setting up course batches.',
  },
  {
    title: 'Teacher Access & Attendance',
    desc: 'Setting up faculty phone logins, managing subject permissions, and resolving turnout sync issues.',
  },
  {
    title: 'Fees & WhatsApp Receipts',
    desc: 'Configuring fee installments, generating digital receipts, and verifying parent notification delivery.',
  },
  {
    title: 'Exam Marks & Gradebooks',
    desc: 'Entering test scores, generating batch rank lists, and exporting customized student report cards.',
  },
];

export const SupportPage: React.FC = () => {
  const openDemo = () => {
    const text = encodeURIComponent('Hi Yaqeel, I would like to book a free demo for my institute.');
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
            <p className="eyebrow">Customer Support</p>
            <h1 className="h-display mt-6 text-[2.75rem] sm:text-6xl md:text-7xl">
              How can we help<br className="hidden sm:inline" /> your institute?
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mute sm:text-lg">
              Whether you need onboarding assistance, student data migration, teacher guidance, or billing support &mdash; our team is directly reachable by phone, WhatsApp, and email.
            </p>
          </div>

          {/* 4 Contact Channels Grid */}
          <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 border-y border-line sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_CHANNELS.map((c, i) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.n}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                  className={`group flex flex-col justify-between p-6 transition hover:bg-white sm:p-8 ${
                    i % 2 !== 0 ? 'sm:border-l sm:border-line' : ''
                  } ${i > 0 ? 'lg:border-l lg:border-line' : ''} ${
                    i > 1 ? 'border-t border-line sm:border-t lg:border-t-0' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-mute">
                      <span className="font-mono">{c.n}</span>
                      <Icon size={16} className="text-accent" />
                    </div>

                    <p className="mt-6 text-xs uppercase tracking-wider text-mute">{c.type}</p>
                    <h3 className="h-display mt-2 text-lg sm:text-xl text-ink break-words">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-mute">{c.description}</p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-line/60">
                    <span className="text-[11px] font-medium text-mute block mb-3">
                      {c.badge}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink group-hover:text-accent transition">
                      {c.actionLabel}
                      <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* ======================================================
            ALL CALLING SUPPORT LINES (Support Page Exclusive)
           ====================================================== */}
        <section className="px-6 py-20 border-b border-line bg-white/50">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-xl mx-auto mb-12">
              <p className="eyebrow">Direct Phone Lines</p>
              <h2 className="h-display mt-4 text-3xl sm:text-4xl text-ink">
                All customer support numbers
              </h2>
              <p className="mt-2 text-sm text-mute">
                Call any of our official support lines for instant assistance:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {CALLING_LINES.map((line, idx) => (
                <div
                  key={line.number}
                  className="rounded-3xl p-6 sm:p-7 border border-line bg-white hover:border-ink/30 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 text-xs font-mono text-mute">
                      <span>0{idx + 1}</span>
                      <PhoneCall size={14} className="text-accent" />
                    </div>
                    <a
                      href={line.tel}
                      className="h-display block text-xl font-bold text-ink hover:text-accent transition"
                    >
                      {line.number}
                    </a>
                    <p className="mt-2 text-xs leading-relaxed text-mute">
                      {line.desc}
                    </p>
                  </div>

                  <a
                    href={line.tel}
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-xs font-semibold text-ink transition hover:border-ink hover:bg-white"
                  >
                    <span>Call Now</span>
                    <ArrowUpRight size={13} className="text-accent" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================
            HOW OUR SUPPORT WORKS / COMMON TOPICS
           ====================================================== */}
        <section className="px-6 py-24 sm:py-32 border-b border-line">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="eyebrow">Dedicated Assistance</p>
              <h2 className="h-display mt-5 text-4xl sm:text-5xl">
                What we help institutes with every day.
              </h2>
              <p className="mt-4 text-base text-mute">
                Every institute receives a dedicated WhatsApp support channel with our engineering and operations team.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TOPICS.map((t, idx) => (
                <div
                  key={t.title}
                  className="rounded-3xl border border-line bg-white p-7 transition hover:border-ink/30"
                >
                  <span className="text-xs font-mono text-mute">0{idx + 1}</span>
                  <h3 className="h-display mt-6 text-lg sm:text-xl text-ink">{t.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-mute">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================
            EMBEDDED FAQ
           ====================================================== */}
        <FAQ />

        {/* ======================================================
            CLOSING CALLOUT BANNER
           ====================================================== */}
        <section className="px-6 pb-28">
          <div className="mx-auto max-w-6xl rounded-[2rem] bg-ink px-6 py-20 text-center text-paper sm:py-28">
            <p className="text-xs uppercase tracking-widest text-paper/60 font-medium">Still have questions?</p>
            <h2 className="h-display mt-4 text-4xl sm:text-6xl text-paper">
              Talk directly with<br />our founding team.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-paper/70">
              We provide free one-on-one video walkthroughs and teacher training sessions for academies across India.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="tel:+918590028549"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-paper px-8 py-3.5 text-sm font-semibold text-ink transition hover:bg-white"
              >
                <Phone size={15} />
                <span>Call +91 85900 28549</span>
              </a>
              <a
                href="https://wa.me/918590028549?text=Hi%20Yaqeel%2C%20I%20have%20an%20enquiry%20regarding%20support%20and%20onboarding."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-paper/20 px-8 py-3.5 text-sm font-medium text-paper transition hover:border-paper/60 hover:bg-white/5"
              >
                <MessageSquare size={16} className="text-emerald-400" />
                <span>WhatsApp +91 85900 28549</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

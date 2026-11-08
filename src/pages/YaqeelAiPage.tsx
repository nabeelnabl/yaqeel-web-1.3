import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AppBadgesGroup } from '../components/AppBadges';
import { 
  ArrowLeft, 
  Mic, 
  MessageSquare, 
  Search, 
  ShieldCheck, 
  UserCheck,
  CheckCircle2
} from 'lucide-react';

const AI_CAPABILITIES = [
  {
    icon: Mic,
    title: 'Voice & Text Search',
    desc: 'Ask questions naturally by voice or text. Speak in Malayalam or English without navigating complex tables or manual filters.',
  },
  {
    icon: Search,
    title: 'Instant Student Lookup',
    desc: 'Retrieve attendance turnout, test mark trends, fee ledger balances, and parent contact details across your institute in seconds.',
  },
  {
    icon: ShieldCheck,
    title: 'Strict Role-Based Privacy',
    desc: 'Staff members only access data for batches and students they are officially authorized to view. Institute records remain fully protected.',
  },
];

const SAMPLE_QUERIES = [
  {
    query: 'Show Mohammed Shan\'s attendance and pending fees this month',
    result: 'Present 22/24 sessions (92%). Pending fee: ₹0 (Receipt #1042).',
  },
  {
    query: 'Who was absent in Batch 10A yesterday?',
    result: '3 students absent. WhatsApp parent alerts sent automatically at 09:15 AM.',
  },
  {
    query: 'List students with fee balance above ₹2,000 in Plus Two',
    result: '4 students identified. One-tap WhatsApp payment reminder available.',
  },
];

export const YaqeelAiPage: React.FC = () => {
  const openDemo = () => {
    const text = encodeURIComponent('Hi Yaqeel, I would like to book a free demo for my institute.');
    window.open(`https://wa.me/918590028549?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-paper text-ink flex flex-col justify-between">
      <Navbar onOpenDemo={openDemo} />

      <main className="flex-1 px-6 pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Yaqeel AI &bull; In Development</p>

          <h1 className="h-display mt-6 text-4xl sm:text-6xl md:text-7xl text-ink">
            Institute intelligence,<br className="hidden sm:inline" /> powered by voice.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mute sm:text-lg">
            Search any student record, attendance report, or fee ledger using simple voice or text commands &mdash; strictly secured to your institute&apos;s authorized access.
          </p>

          {/* Clean Editorial Preview Card */}
          <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-line bg-white p-6 sm:p-10 text-left shadow-xs">
            <div className="flex items-center justify-between pb-6 border-b border-line">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-mute">
                  Upcoming Module
                </span>
                <h3 className="h-display text-xl text-ink mt-1">Natural Query Interface</h3>
              </div>
              <span className="text-xs font-mono text-mute">
                Coming Soon
              </span>
            </div>

            {/* Query Preview List */}
            <div className="my-6 space-y-4">
              <p className="text-xs font-mono uppercase tracking-wider text-mute">
                Example queries you can speak or type:
              </p>

              {SAMPLE_QUERIES.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-line bg-paper p-4 text-left transition hover:border-ink/20"
                >
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-lg bg-white border border-line flex items-center justify-center text-ink shrink-0 mt-0.5">
                      <Mic size={13} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-ink">
                        &ldquo;{item.query}&rdquo;
                      </p>
                      <p className="mt-1 text-xs text-mute flex items-center gap-1.5">
                        <CheckCircle2 size={12} className="text-mute shrink-0" />
                        <span>{item.result}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Access & Scope Note */}
            <div className="rounded-2xl border border-line/60 bg-paper/50 p-4 flex items-start gap-3 text-xs text-mute leading-relaxed">
              <UserCheck size={16} className="text-ink shrink-0 mt-0.5" />
              <span>
                Authorized staff can only query students in their assigned batches and branches. Student privacy and parent contact records remain strictly confidential.
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3">
              <Link
                to="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-2.5 text-xs font-medium text-ink transition hover:border-ink hover:bg-paper"
              >
                <ArrowLeft size={14} />
                <span>Return to Homepage</span>
              </Link>
              <a
                href="https://wa.me/918590028549?text=Hi%20Yaqeel%2C%20please%20notify%20me%20when%20Yaqeel%20AI%20is%20ready%20for%20testing."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-2.5 text-xs font-medium text-paper transition hover:bg-black"
              >
                <MessageSquare size={14} className="text-paper/80" />
                <span>Get Notified on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="mt-20 text-left">
            <p className="eyebrow text-center mb-8">What makes Yaqeel AI different</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {AI_CAPABILITIES.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.title}
                    className="rounded-3xl border border-line bg-white p-7 transition hover:border-ink/30"
                  >
                    <div className="h-10 w-10 rounded-2xl bg-paper border border-line flex items-center justify-center text-ink mb-6">
                      <Icon size={20} />
                    </div>
                    <h3 className="h-display text-xl text-ink">{c.title}</h3>
                    <p className="mt-2.5 text-sm text-mute leading-relaxed">{c.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Manage from phone today */}
          <div className="mt-20 border-t border-line pt-16">
            <p className="eyebrow">Available Today</p>
            <h2 className="h-display mt-4 text-3xl sm:text-4xl text-ink">
              Run your institute from your phone today.
            </h2>
            <p className="mt-3 text-sm text-mute max-w-md mx-auto">
              Attendance, WhatsApp parent alerts, fees, marks, and payroll are 100% active on the Yaqeel app.
            </p>
            <div className="mt-8 flex justify-center">
              <AppBadgesGroup size="md" className="gap-3" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default YaqeelAiPage;

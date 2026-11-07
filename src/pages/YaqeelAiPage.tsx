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
  Sparkles, 
  UserCheck 
} from 'lucide-react';

const AI_CAPABILITIES = [
  {
    icon: Mic,
    title: 'Voice & Text Search',
    desc: 'Ask questions naturally by voice or text. Just tap the mic and speak, or type a quick prompt &mdash; no complicated menus or manual filtering required.',
  },
  {
    icon: Search,
    title: 'Instant Student Lookup',
    desc: 'Search any student across your institute in seconds. Retrieve attendance turnout, exam score history, fee ledger balances, and parent contact information instantly.',
  },
  {
    icon: ShieldCheck,
    title: 'Role-Based Privacy',
    desc: 'Strict access controls guarantee that teachers and administrators can only query and view data for students and classes they are officially authorized to access.',
  },
];

const SAMPLE_QUERIES = [
  'Who was absent in Batch 10A yesterday?',
  'What is Rahul\'s total pending fee balance?',
  'Show top 5 scorers in Physics Unit Test 2',
  'WhatsApp absentee alert to Ananya\'s father',
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
          <p className="eyebrow">Yaqeel AI &bull; Coming Soon</p>

          <h1 className="h-display mt-6 text-4xl sm:text-6xl md:text-7xl text-ink">
            Yaqeel AI is<br className="hidden sm:inline" /> coming soon.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mute sm:text-lg">
            Instant institute intelligence powered by a conversational chatbot. Search any student and retrieve authorized institute records in seconds &mdash; with voice or text.
          </p>

          {/* Interactive AI Preview Card */}
          <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-line bg-white p-6 sm:p-10 text-left shadow-xs">
            <div className="flex items-center justify-between pb-6 border-b border-line">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-paper border border-line flex items-center justify-center text-accent">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="h-display text-lg text-ink">Yaqeel AI Assistant</h3>
                  <p className="text-xs text-mute">Search with voice or text</p>
                </div>
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20">
                In Development
              </span>
            </div>

            {/* Conversational Simulation */}
            <div className="my-6 space-y-4">
              {/* User Voice Query */}
              <div className="flex items-start justify-end gap-3">
                <div className="rounded-2xl rounded-tr-sm bg-ink px-4 py-3 text-sm text-paper max-w-sm">
                  <div className="flex items-center gap-2 text-paper/70 text-xs mb-1">
                    <Mic size={12} className="text-accent" />
                    <span>Voice Input</span>
                  </div>
                  <p>&ldquo;Show Mohammed Shan&apos;s attendance and fee status for this month.&rdquo;</p>
                </div>
              </div>

              {/* Bot Response */}
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-paper border border-line flex items-center justify-center text-accent shrink-0 mt-1">
                  <Sparkles size={14} />
                </div>
                <div className="rounded-2xl rounded-tl-sm bg-paper border border-line p-4 text-xs sm:text-sm text-ink max-w-md space-y-2">
                  <div className="flex items-center justify-between font-semibold">
                    <span className="flex items-center gap-1.5 text-ink">
                      <UserCheck size={14} className="text-accent" />
                      Mohammed Shan &bull; Roll #24
                    </span>
                    <span className="text-emerald-700 font-mono text-[11px]">94% Turnout</span>
                  </div>
                  <p className="text-mute text-xs">
                    Present: 22 / 24 sessions &bull; Last absent: Oct 28 (Forenoon)
                  </p>
                  <div className="pt-2 border-t border-line/60 flex items-center justify-between text-xs">
                    <span className="text-mute">Pending Fee: ₹0 (Fully Paid)</span>
                    <span className="text-accent font-medium">Receipt #1042</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Example Queries */}
            <div className="pt-4 border-t border-line">
              <p className="text-[11px] font-mono uppercase tracking-wider text-mute mb-2.5">
                Try asking questions like:
              </p>
              <div className="flex flex-wrap gap-2">
                {SAMPLE_QUERIES.map((q) => (
                  <span
                    key={q}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper px-3 py-1 text-xs text-mute"
                  >
                    <Search size={11} className="text-accent" />
                    <span>{q}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Input Mock Bar */}
            <div className="mt-6 flex items-center gap-2 rounded-2xl border border-line bg-paper px-4 py-2.5">
              <Search size={16} className="text-mute shrink-0" />
              <input
                type="text"
                disabled
                placeholder="Ask Yaqeel AI with voice or text..."
                className="w-full bg-transparent text-xs sm:text-sm text-ink placeholder:text-mute focus:outline-none cursor-not-allowed"
              />
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  disabled
                  className="p-1.5 rounded-full bg-accent text-paper hover:bg-accent/90 transition"
                  aria-label="Voice input preview"
                >
                  <Mic size={14} />
                </button>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3">
              <Link
                to="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-2.5 text-xs font-medium text-ink transition hover:border-ink hover:bg-paper"
              >
                <ArrowLeft size={14} />
                <span>Return to Homepage</span>
              </Link>
              <a
                href="https://wa.me/918590028549?text=Hi%20Yaqeel%2C%20I%20am%20interested%20in%20early%20access%20to%20Yaqeel%20AI."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-2.5 text-xs font-medium text-paper transition hover:bg-black"
              >
                <MessageSquare size={14} className="text-emerald-400" />
                <span>Request Early Access on WhatsApp</span>
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
                    <div className="h-10 w-10 rounded-2xl bg-paper border border-line flex items-center justify-center text-accent mb-6">
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

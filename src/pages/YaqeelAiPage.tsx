import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AppBadgesGroup } from '../components/AppBadges';
import { 
  ArrowLeft, 
  Mic, 
  Send,
  MessageSquare, 
  Search, 
  ShieldCheck, 
  CheckCircle2,
  Lock,
  ArrowUpRight
} from 'lucide-react';

interface StudentSummary {
  name: string;
  meta: string;
  attendance: string;
  attendanceDetail: string;
  feeStatus: string;
  feeDetail: string;
}

interface Absentee {
  name: string;
  roll: string;
  session: string;
  status: string;
}

interface Defaulter {
  name: string;
  roll: string;
  amount: string;
  days: string;
}

interface ChatScenario {
  id: string;
  chipLabel: string;
  userQuery: string;
  isVoice: boolean;
  voiceDuration: string | null;
  timestamp: string;
  lead: string;
  student?: StudentSummary;
  absentees?: Absentee[];
  defaulters?: Defaulter[];
  note?: string;
  actionText: string;
}

const CHAT_SCENARIOS: ChatScenario[] = [
  {
    id: 'student-summary',
    chipLabel: '“Mohammed Shan attendance & fees”',
    userQuery: 'Show Mohammed Shan\'s attendance and pending fees this month',
    isVoice: true,
    voiceDuration: '0:04',
    timestamp: '09:14 AM',
    lead: 'Here is the authorised record for Mohammed Shan (Roll #24 • Class 10-A):',
    student: {
      name: 'Mohammed Shan',
      meta: 'Class 10-A • Roll #24 • Guardian: Abdul Rahman',
      attendance: '92% Attendance',
      attendanceDetail: 'Present 22 / 24 sessions • Last absent: Oct 28',
      feeStatus: '₹0 Pending',
      feeDetail: 'Term 2 fully settled (Receipt #1042)',
    },
    actionText: 'Send WhatsApp summary to Guardian',
  },
  {
    id: 'absentees',
    chipLabel: '“Yesterday\'s absentees in 10A”',
    userQuery: 'Who was absent in Batch 10A yesterday?',
    isVoice: true,
    voiceDuration: '0:03',
    timestamp: '09:15 AM',
    lead: '3 students were marked absent in Batch 10A yesterday (Nov 07):',
    absentees: [
      { name: 'Adil K.', roll: 'Roll #04', session: 'Morning & Afternoon', status: 'WhatsApp sent' },
      { name: 'Fathima N.', roll: 'Roll #12', session: 'Morning session', status: 'WhatsApp sent' },
      { name: 'Rohit Menon', roll: 'Roll #19', session: 'Full Day', status: 'WhatsApp sent' },
    ],
    note: 'Automated WhatsApp parent alerts were dispatched at 09:15 AM.',
    actionText: 'Re-send WhatsApp absentee alert',
  },
  {
    id: 'fee-defaulters',
    chipLabel: '“Dues > ₹2,000 in Plus Two”',
    userQuery: 'List students with fee balance above ₹2,000 in Plus Two',
    isVoice: false,
    voiceDuration: null,
    timestamp: '09:16 AM',
    lead: 'Found 4 students with pending balance above ₹2,000 in Plus Two (Total: ₹11,500):',
    defaulters: [
      { name: 'Ananya S.', roll: 'Plus Two Science', amount: '₹3,500', days: '12 days overdue' },
      { name: 'Vishnu P.', roll: 'Plus Two Commerce', amount: '₹3,000', days: '8 days overdue' },
      { name: 'Farhan M.', roll: 'Plus Two Science', amount: '₹2,500', days: '5 days overdue' },
      { name: 'Devika R.', roll: 'Plus Two Commerce', amount: '₹2,500', days: '3 days overdue' },
    ],
    note: 'One-tap WhatsApp fee reminder notices prepared for all 4 student guardians.',
    actionText: 'Send WhatsApp payment reminders',
  },
];

const AI_CAPABILITIES = [
  {
    icon: Mic,
    title: 'Voice & Text Search',
    desc: 'Ask questions naturally by voice or text. Speak in Malayalam or English without navigating complex tables or manual filters.',
  },
  {
    icon: Search,
    title: 'Instant Student Lookup',
    desc: 'Retrieve attendance records, test mark trends, fee ledger balances, and parent contact details across your institute in seconds.',
  },
  {
    icon: ShieldCheck,
    title: 'Strict Role-Based Privacy',
    desc: 'Staff members only access data for batches and students they are officially authorised to view. Institute records remain fully protected.',
  },
];

export const YaqeelAiPage: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [inputVal, setInputVal] = useState('');
  const activeScenario = CHAT_SCENARIOS[activeIdx];

  const openDemo = () => {
    const text = encodeURIComponent('Hi Yaqeel, I would like to book a free demo for my institute.');
    window.open(`https://wa.me/918590028549?text=${text}`, '_blank');
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    // Switch to best matching scenario or cycle to give instant feedback
    const lower = inputVal.toLowerCase();
    if (lower.includes('fee') || lower.includes('due') || lower.includes('balance') || lower.includes('2000')) {
      setActiveIdx(2);
    } else if (lower.includes('absent') || lower.includes('batch') || lower.includes('yesterday')) {
      setActiveIdx(1);
    } else {
      setActiveIdx(0);
    }
    setInputVal('');
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-paper text-ink flex flex-col justify-between">
      <SEO
        title="Yaqeel AI: Voice and Text Search for Institutes"
        description="An upcoming AI assistant for finding attendance, marks and fee records by voice or text."
        canonical="https://www.yaqeel.com/yaqeel-ai"
      />
      <Navbar onOpenDemo={openDemo} />

      <main className="flex-1 px-6 pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Yaqeel AI &bull; In Development</p>

          <h1 className="h-display mt-6 text-4xl sm:text-6xl md:text-7xl text-ink">
            Institute intelligence,<br className="hidden sm:inline" /> powered by voice.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mute sm:text-lg">
            Search any student record, attendance rate, or fee balance using a natural AI conversational chatbot &mdash; with voice or text, secured strictly to your institute.
          </p>

          {/* Handcrafted AI Chatbot Frame */}
          <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-line bg-white shadow-xl overflow-hidden text-left">
            {/* Window Top Bar */}
            <div className="border-b border-line bg-paper/60 px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-line" />
                  <span className="h-2.5 w-2.5 rounded-full bg-line" />
                  <span className="h-2.5 w-2.5 rounded-full bg-line" />
                </div>
                <div className="h-4 w-px bg-line/80 mx-1" />
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-ink">Yaqeel AI Chatbot</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-mute hidden sm:inline">
                  Private to your institute
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-ink border border-line bg-white px-2 py-0.5 rounded-md">
                  Coming Soon
                </span>
              </div>
            </div>

            {/* Interactive Scenario Chips */}
            <div className="border-b border-line/80 bg-paper/30 px-5 py-2.5 flex items-center gap-2 overflow-x-auto text-xs">
              <span className="text-mute font-mono text-[11px] uppercase tracking-wider shrink-0 mr-1">
                Sample Queries:
              </span>
              {CHAT_SCENARIOS.map((sc, i) => (
                <button
                  key={sc.id}
                  type="button"
                  onClick={() => setActiveIdx(i)}
                  className={`shrink-0 px-3 py-1 rounded-full text-xs transition cursor-pointer ${
                    activeIdx === i
                      ? 'bg-ink text-paper font-medium'
                      : 'bg-white border border-line text-mute hover:text-ink hover:border-ink/30'
                  }`}
                >
                  {sc.chipLabel}
                </button>
              ))}
            </div>

            {/* Chat Body */}
            <div className="p-5 sm:p-7 space-y-6 bg-paper/20 min-h-[360px] flex flex-col justify-end">
              {/* User Message Bubble */}
              <div className="flex justify-end items-end gap-2.5">
                <div className="max-w-md rounded-2xl rounded-br-xs bg-ink text-paper p-4 text-left shadow-sm">
                  {activeScenario.isVoice && (
                    <div className="flex items-center gap-2 text-paper/70 text-xs mb-1.5 pb-1.5 border-b border-paper/10">
                      <Mic size={12} className="text-paper shrink-0" />
                      <span className="font-mono text-[11px]">Voice Query &bull; {activeScenario.voiceDuration}</span>
                      <span className="ml-auto flex items-center gap-0.5 opacity-60">
                        <span className="h-2 w-0.5 bg-paper rounded-full" />
                        <span className="h-3 w-0.5 bg-paper rounded-full" />
                        <span className="h-4 w-0.5 bg-paper rounded-full" />
                        <span className="h-2 w-0.5 bg-paper rounded-full" />
                      </span>
                    </div>
                  )}
                  <p className="text-sm text-paper font-normal leading-relaxed">
                    &ldquo;{activeScenario.userQuery}&rdquo;
                  </p>
                  <p className="mt-1 text-right text-[10px] text-paper/50 font-mono">
                    {activeScenario.timestamp}
                  </p>
                </div>
              </div>

              {/* Bot Response Message */}
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-xl bg-ink text-paper flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  Y
                </div>

                <div className="flex-1 max-w-lg rounded-2xl rounded-tl-xs bg-white border border-line p-4 sm:p-5 shadow-xs space-y-3.5">
                  <p className="text-xs text-mute font-medium">
                    {activeScenario.lead}
                  </p>

                  {/* 1. Student Summary Scenario */}
                  {activeScenario.student && (
                    <div className="rounded-xl border border-line bg-paper p-3.5 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-ink">
                          {activeScenario.student.name}
                        </span>
                        <span className="text-xs font-mono font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                          {activeScenario.student.attendance}
                        </span>
                      </div>
                      <p className="text-xs text-mute">
                        {activeScenario.student.attendanceDetail}
                      </p>
                      <div className="pt-2 border-t border-line/60 flex items-center justify-between text-xs">
                        <span className="text-mute">
                          Fee Status: <strong className="text-ink font-semibold">{activeScenario.student.feeStatus}</strong>
                        </span>
                        <span className="text-mute font-mono text-[11px]">
                          Receipt #1042
                        </span>
                      </div>
                    </div>
                  )}

                  {/* 2. Absentees List Scenario */}
                  {activeScenario.absentees && (
                    <div className="rounded-xl border border-line bg-paper divide-y divide-line/60 overflow-hidden text-xs">
                      {activeScenario.absentees.map((st) => (
                        <div key={st.name} className="p-2.5 flex items-center justify-between">
                          <div>
                            <span className="font-semibold text-ink">{st.name}</span>
                            <span className="text-mute ml-2 text-[11px] font-mono">{st.roll}</span>
                            <p className="text-mute text-[11px]">{st.session}</p>
                          </div>
                          <span className="text-[11px] font-mono text-emerald-700 bg-white border border-line px-2 py-0.5 rounded">
                            {st.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 3. Fee Defaulters Scenario */}
                  {activeScenario.defaulters && (
                    <div className="rounded-xl border border-line bg-paper divide-y divide-line/60 overflow-hidden text-xs">
                      {activeScenario.defaulters.map((st) => (
                        <div key={st.name} className="p-2.5 flex items-center justify-between">
                          <div>
                            <span className="font-semibold text-ink">{st.name}</span>
                            <span className="text-mute ml-2 text-[11px]">{st.roll}</span>
                            <p className="text-mute text-[11px]">{st.days}</p>
                          </div>
                          <span className="font-mono font-semibold text-rose-700">
                            {st.amount}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Optional System Note */}
                  {activeScenario.note && (
                    <p className="text-[11px] text-mute flex items-center gap-1.5 leading-snug">
                      <CheckCircle2 size={12} className="text-emerald-700 shrink-0" />
                      <span>{activeScenario.note}</span>
                    </p>
                  )}

                  {/* Action Link / WhatsApp Hook */}
                  <div className="pt-2 border-t border-line/60 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-mute">
                      Action Available
                    </span>
                    <button
                      type="button"
                      onClick={openDemo}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-ink hover:text-accent transition cursor-pointer"
                    >
                      <span>{activeScenario.actionText}</span>
                      <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sleek Chat Input Bar */}
            <div className="border-t border-line bg-white p-4">
              <form onSubmit={handleCustomSubmit} className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-xl border border-line bg-paper flex items-center justify-center text-ink shrink-0">
                  <Mic size={15} />
                </div>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Ask Yaqeel AI with voice or text..."
                  className="flex-1 bg-paper border border-line rounded-xl px-3.5 py-2 text-xs sm:text-sm text-ink placeholder:text-mute focus:outline-none focus:border-ink transition"
                />
                <button
                  type="submit"
                  aria-label="Send query"
                  className="h-9 w-9 rounded-xl bg-ink text-paper hover:bg-black flex items-center justify-center shrink-0 transition cursor-pointer"
                >
                  <Send size={14} />
                </button>
              </form>

              {/* Privacy Sandbox Assurance */}
              <div className="mt-3 flex items-center gap-2 text-[11px] text-mute">
                <Lock size={12} className="shrink-0 text-ink" />
                <span>
                  Authorized staff can only query students in their assigned batches and branches. Student privacy and parent contact records remain strictly confidential.
                </span>
              </div>
            </div>

            {/* Bottom Actions Card */}
            <div className="border-t border-line bg-paper/50 px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <Link
                to="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-line px-5 py-2 text-xs font-medium text-ink transition hover:border-ink hover:bg-paper"
              >
                <ArrowLeft size={14} />
                <span>Return to Homepage</span>
              </Link>
              <a
                href="https://wa.me/918590028549?text=Hi%20Yaqeel%2C%20please%20notify%20me%20when%20Yaqeel%20AI%20chatbot%20is%20ready%20for%20testing."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-2 text-xs font-medium text-paper transition hover:bg-black"
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

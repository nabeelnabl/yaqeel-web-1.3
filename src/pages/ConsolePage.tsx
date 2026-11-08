import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AppBadgesGroup } from '../components/AppBadges';
import { 
  ArrowLeft, 
  Smartphone, 
  MessageSquare, 
  Building2, 
  BarChart3, 
  ShieldCheck 
} from 'lucide-react';

const COMING_FEATURES = [
  {
    icon: Building2,
    title: 'Multi-Branch Command Center',
    desc: 'Seamlessly switch across multiple tuition centres, academies, and satellite campuses under one organization login.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Financial Audits',
    desc: 'Comprehensive fee collection ledgers, automated defaulter cohorts, and one-click GST tax-compliant accounting exports.',
  },
  {
    icon: ShieldCheck,
    title: 'Role-Based Staff Permissions',
    desc: 'Granular administrative controls for headmasters, accountants, and subject coordinators with strict privacy sandboxes.',
  },
];

export const ConsolePage: React.FC = () => {
  const openDemo = () => {
    const text = encodeURIComponent('Hi Yaqeel, I would like to book a free demo for my institute.');
    window.open(`https://wa.me/918590028549?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-paper text-ink flex flex-col justify-between">
      <Navbar onOpenDemo={openDemo} />

      <main className="flex-1 px-6 pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Web Platform &bull; Coming Soon</p>

          <h1 className="h-display mt-6 text-4xl sm:text-6xl md:text-7xl text-ink">
            Yaqeel Console is<br className="hidden sm:inline" /> coming soon.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
            We are designing a dedicated desktop dashboard tailored for academy directors, accountants, and multi-campus management.
          </p>

          {/* Quick Notice Card */}
          <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-line bg-white p-8 sm:p-10 text-center shadow-xs">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-paper border border-line text-accent mb-4">
              <Smartphone size={22} />
            </div>
            <h3 className="h-display text-2xl text-ink">
              Manage everything from your phone today.
            </h3>
            <p className="mt-2 text-sm text-mute max-w-md mx-auto leading-relaxed">
              All daily administrative tasks &mdash; attendance, WhatsApp absentee alerts, fees, marks, and payroll &mdash; are 100% operational on the Yaqeel Mobile App.
            </p>

            <div className="mt-8 flex justify-center">
              <AppBadgesGroup size="md" className="gap-3" />
            </div>

            <div className="mt-8 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-2.5 text-xs font-medium text-ink transition hover:border-ink hover:bg-paper"
              >
                <ArrowLeft size={14} />
                <span>Return to Homepage</span>
              </Link>
              <a
                href="https://wa.me/918590028549?text=Hi%20Yaqeel%2C%20I%20am%20interested%20in%20early%20access%20to%20the%20Yaqeel%20Web%20Console."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-2.5 text-xs font-medium text-paper transition hover:bg-black"
              >
                <MessageSquare size={14} className="text-paper/80" />
                <span>Request Early Console Access</span>
              </a>
            </div>
          </div>

          {/* Upcoming Features Preview */}
          <div className="mt-20 text-left">
            <p className="eyebrow text-center mb-8">What is coming in the web console</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {COMING_FEATURES.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="rounded-3xl border border-line bg-white p-6 sm:p-8">
                    <div className="h-10 w-10 rounded-xl bg-paper border border-line flex items-center justify-center text-accent mb-5">
                      <Icon size={18} />
                    </div>
                    <h4 className="h-display text-lg text-ink">{f.title}</h4>
                    <p className="mt-2 text-xs sm:text-sm text-mute leading-relaxed">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

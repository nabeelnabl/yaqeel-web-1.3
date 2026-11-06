import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PhoneMockup, type FeatureKey } from './PhoneMockup';

const FEATURES: { id: FeatureKey; n: string; title: string; tag: string; points: string[] }[] = [
  { id: 'attendance', n: '01', title: 'Attendance', tag: 'Mark attendance in seconds.',
    points: ['One-tap roll call for the whole class', 'Absentee alerts to parents on WhatsApp & SMS', 'Forenoon and afternoon sessions', 'Monthly turnout analytics and reports'] },
  { id: 'exams', n: '02', title: 'Exams', tag: 'Gradebooks, analysis and report cards.',
    points: ['Enter marks on mobile as papers are corrected', 'Class averages, top scores and batch ranks', 'Flags students who need attention', 'Full history across unit tests, terms and finals'] },
  { id: 'fees', n: '03', title: 'Fees', tag: 'Clear ledgers and instant receipts.',
    points: ['Paid, pending and overdue at a glance', 'Polite reminders with UPI payment links', 'Course, division and batch-wise reconciliation', 'Daily, monthly and annual collection reports'] },
  { id: 'payroll', n: '04', title: 'Payroll', tag: 'Salaries from logged lecture hours.',
    points: ['Track teaching hours and assigned divisions', 'Monthly salary calculated automatically', 'Role-based access to sensitive ledgers', 'One-click salary slips and payout records'] },
];

export const Features: React.FC<{ onMore: (id: FeatureKey) => void }> = ({ onMore }) => {
  const [active, setActive] = useState<FeatureKey>('attendance');
  const refs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id as FeatureKey)),
      { rootMargin: '-45% 0px -45% 0px' },
    );
    Object.values(refs.current).forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="features" className="mx-auto max-w-6xl px-6 pt-28">
      <div className="lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          {FEATURES.map((f) => (
            <article key={f.id} id={f.id} ref={(el) => { refs.current[f.id] = el; }}
              className="scroll-mt-20 border-t border-line py-16 lg:flex lg:min-h-[90vh] lg:flex-col lg:justify-center">
              <span className="eyebrow">{f.n} — {f.title}</span>
              <h2 className="h-display mt-5 max-w-md text-4xl sm:text-5xl">{f.tag}</h2>
              <ul className="mt-8 max-w-md space-y-3.5">
                {f.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] leading-snug text-ink/80">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />{p}
                  </li>
                ))}
              </ul>
              <button onClick={() => onMore(f.id)}
                className="group mt-9 inline-flex w-fit items-center gap-1.5 border-b border-ink pb-0.5 text-sm font-medium">
                Learn more <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <div className="mt-12 flex justify-center lg:hidden"><PhoneMockup activeFeature={f.id} /></div>
            </article>
          ))}
        </div>
        <div className="hidden lg:block">
          <div className="sticky top-0 flex h-screen items-center justify-end pt-12">
            <PhoneMockup mode="fixed" activeFeature={active} />
          </div>
        </div>
      </div>
    </section>
  );
};

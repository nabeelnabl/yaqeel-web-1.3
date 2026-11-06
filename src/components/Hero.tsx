import React from 'react';
import { AppBadgesGroup } from './AppBadges';

const QUAD = [
  { id: 'attendance', n: '01', t: 'Attendance', d: 'One tap, parents alerted.' },
  { id: 'exams', n: '02', t: 'Exams', d: 'Marks, ranks, report cards.' },
  { id: 'fees', n: '03', t: 'Fees', d: 'Ledgers and UPI reminders.' },
  { id: 'payroll', n: '04', t: 'Payroll', d: 'Salaries from logged hours.' },
];

export const Hero: React.FC = () => (
  <section className="px-6 pt-36 sm:pt-44">
    <div className="mx-auto max-w-4xl text-center">
      <p className="eyebrow">Institute management</p>
      <h1 className="h-display mt-6 text-[2.75rem] sm:text-6xl md:text-7xl">
        Run your institute<br />from your phone.
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
        Attendance, exams, fees and payroll in one calm, mobile-first app.
      </p>
      <div className="mt-10 flex justify-center"><AppBadgesGroup size="md" className="gap-3" /></div>
      <p className="mt-6 text-[13px] text-mute">Trusted by 8,000+ students &amp; teachers across India</p>
    </div>

    <div className="mx-auto mt-20 grid max-w-6xl grid-cols-2 border-y border-line md:grid-cols-4">
      {QUAD.map((q, i) => (
        <a key={q.id} href={`#${q.id}`}
          className={`group p-6 transition hover:bg-white sm:p-8 ${i % 2 ? 'border-l border-line' : ''} ${i > 0 ? 'md:border-l' : ''} ${i > 1 ? 'border-t border-line md:border-t-0' : ''}`}>
          <span className="text-xs text-mute">{q.n}</span>
          <h3 className="h-display mt-8 text-xl sm:text-2xl">{q.t}</h3>
          <p className="mt-1.5 text-[13px] text-mute">{q.d}</p>
        </a>
      ))}
    </div>
  </section>
);

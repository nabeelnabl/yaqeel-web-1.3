import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const ITEMS = [
  { q: 'What does the ₹45 – ₹50 / year pricing include?', a: 'Everything: daily attendance, fee ledgers, exam gradebooks, teacher payroll, parent WhatsApp alerts and the student mobile app. No setup fees, server charges or extra fees for new batches.' },
  { q: 'How do students and parents receive real-time updates?', a: 'Attendance, exam marks and fee receipts sync instantly to the Yaqeel student app and are sent to parents through automated WhatsApp notifications.' },
  { q: 'Can teachers take attendance and enter marks on mobile?', a: 'Yes. Yaqeel is mobile-first. Teachers can mark a class of 60 in under 10 seconds or log scores from a smartphone, with no laptop needed.' },
  { q: 'How quickly can our institute get started?', a: 'Setup takes under 10 minutes. Our team helps over WhatsApp to import student lists, classes, batches and fee structures.' },
  { q: 'Is our student and financial data secure?', a: 'Yes. Data is encrypted in transit and at rest, and only authorised administrators and verified faculty can access your institute portal.' },
];

export const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-16 border-t border-line px-6 py-28 sm:py-36">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="h-display mt-5 text-4xl sm:text-5xl">Questions, answered.</h2>
        </div>
        <div className="border-t border-line">
          {ITEMS.map((it, i) => (
            <div key={it.q} className="border-b border-line">
              <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg">
                {it.q}
                <Plus size={18} className={`shrink-0 text-mute transition-transform ${open === i ? 'rotate-45' : ''}`} />
              </button>
              <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'}`}>
                <p className="overflow-hidden text-[15px] leading-relaxed text-mute">{it.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

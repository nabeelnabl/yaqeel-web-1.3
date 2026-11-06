import React from 'react';

const QUOTES = [
  { q: 'Managing high-strength batches moved from physical registers to effortless mobile tracking within days.', who: 'SNM Higher Secondary School', role: 'Administration & Directorate' },
  { q: 'Keeping parents informed with automated alerts created immediate trust. Teachers adopted the app with no technical training.', who: 'Infinity Academy', role: 'Academic Coordination Desk' },
  { q: 'The right balance between powerful management features and an extremely clean, intuitive mobile experience.', who: 'Wings Academy', role: 'Institute Management' },
];

export const Testimonials: React.FC = () => (
  <section id="reviews" className="scroll-mt-16 border-t border-line px-6 py-28 sm:py-36">
    <div className="mx-auto max-w-6xl">
      <p className="eyebrow">Reviews</p>
      <h2 className="h-display mt-5 max-w-xl text-4xl sm:text-5xl">Loved by the people who run institutes.</h2>
      <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
        {QUOTES.map((t) => (
          <figure key={t.who} className="flex flex-col justify-between bg-paper p-8 sm:p-10">
            <blockquote className="text-lg leading-relaxed">“{t.q}”</blockquote>
            <figcaption className="mt-10 text-[13px]"><span className="font-medium">{t.who}</span><br /><span className="text-mute">{t.role}</span></figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

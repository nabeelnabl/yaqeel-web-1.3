import React from 'react';

const LIST = [
  { name: 'SNM Higher Secondary School', logo: '/assets/snmhss.webp' },
  { name: 'Edu Win Academy', logo: '/assets/edu_win.webp' },
  { name: 'Excel Group Tuition', logo: '/assets/excel.webp' },
  { name: 'Infinity Academy', logo: '/assets/infinity.webp' },
  { name: 'Wings Academy', logo: '/assets/wings.webp' },
  { name: 'Tensor Institute of Science', logo: '/assets/tensor.webp' },
  { name: 'Talent Academy', logo: '/assets/talent_academy.webp' },
  { name: 'Learnora Online Tuition', logo: '/assets/learnora.webp' },
  { name: 'Guidance Tuition Centre', logo: '/assets/guidance.webp' },
];

export const Institutions: React.FC = () => (
  <section className="border-y border-line px-4 sm:px-6 py-12 sm:py-16 overflow-hidden">
    <p className="eyebrow text-center">Trusted by leading institutions</p>

    {/* Mobile view: smooth auto-scrolling marquee with fade edge masks */}
    <div className="relative mt-8 sm:hidden w-full overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 z-10 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 z-10 bg-gradient-to-l from-paper to-transparent" />

      <div className="flex w-max animate-marquee items-center gap-10">
        {[...LIST, ...LIST].map((i, index) => (
          <img
            key={`${i.name}-${index}`}
            src={i.logo}
            alt={i.name}
            title={i.name}
            className="h-8 w-auto shrink-0 object-contain opacity-70 grayscale transition active:grayscale-0"
            loading="lazy"
          />
        ))}
      </div>
    </div>

    {/* Desktop view: clean centered wrapped layout */}
    <div className="hidden sm:flex mx-auto mt-10 max-w-5xl flex-wrap items-center justify-center gap-x-12 sm:gap-x-14 gap-y-8">
      {LIST.map((i) => (
        <img
          key={i.name}
          src={i.logo}
          alt={i.name}
          title={i.name}
          className="h-9 sm:h-10 w-auto object-contain opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
          loading="lazy"
        />
      ))}
    </div>
  </section>
);

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

// Quadruple the list so the -50% marquee loop is 100% gapless on all screens up to 4K displays
const MARQUEE_ITEMS = [...LIST, ...LIST, ...LIST, ...LIST];

export const Institutions: React.FC = () => (
  <section className="border-y border-line py-12 sm:py-16 overflow-hidden">
    <p className="eyebrow text-center px-4">Trusted by leading institutions</p>

    {/* Continuous smooth auto-scrolling marquee on mobile & desktop */}
    <div className="relative mt-8 sm:mt-10 w-full overflow-hidden">
      {/* Edge gradient fade masks for smooth entrance & exit */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 md:w-40 z-10 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 md:w-40 z-10 bg-gradient-to-l from-paper to-transparent" />

      <div className="flex w-max animate-marquee items-center gap-10 sm:gap-14 md:gap-16">
        {MARQUEE_ITEMS.map((i, index) => (
          <img
            key={`${i.name}-${index}`}
            src={i.logo}
            alt={i.name}
            title={i.name}
            className="h-8 sm:h-10 w-auto shrink-0 object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 active:grayscale-0 cursor-pointer"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  </section>
);

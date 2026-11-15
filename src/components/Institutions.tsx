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

// Duplicate LIST once for the seamless -50% CSS marquee loop without premature visual repetition
const MARQUEE_ITEMS = [...LIST, ...LIST];

export const Institutions: React.FC = () => (
  <section className="border-y border-line py-14 sm:py-20 overflow-hidden">
    <p className="eyebrow text-center px-4">Trusted by leading institutions</p>

    {/* Continuous smooth auto-scrolling marquee on mobile & desktop */}
    <div className="relative mt-8 sm:mt-12 w-full overflow-hidden">
      {/* Edge gradient fade masks for smooth entrance & exit */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-14 sm:w-32 md:w-44 lg:w-56 z-10 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-14 sm:w-32 md:w-44 lg:w-56 z-10 bg-gradient-to-l from-paper to-transparent" />

      <div className="flex w-max animate-marquee items-center gap-14 sm:gap-20 md:gap-28 lg:gap-36">
        {MARQUEE_ITEMS.map((i, index) => (
          <div
            key={`${i.name}-${index}`}
            className="flex shrink-0 items-center justify-center px-2"
          >
            <img
              src={i.logo}
              alt={i.name}
              title={i.name}
              className="h-11 sm:h-13 md:h-14 lg:h-16 w-auto max-w-[160px] sm:max-w-[200px] lg:max-w-[240px] shrink-0 object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 active:grayscale-0 cursor-pointer"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

import React from 'react';

const LIST = [
  { name: 'SNM Higher Secondary School', logo: '/assets/snmhss.webp' },
  { name: 'Edu Win Academy', logo: '/assets/edu_win.webp' },
  { name: 'Excel Group Tuition', logo: '/assets/excel.webp' },
  { name: 'Infinity Academy', logo: '/assets/infinity.webp' },
  { name: 'Wings Academy', logo: '/assets/wings.webp' },
];

export const Institutions: React.FC = () => (
  <section className="border-y border-line px-6 py-16">
    <p className="eyebrow text-center">Trusted by leading institutions</p>
    <div className="mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-x-14 gap-y-8">
      {LIST.map((i) => (
        <img key={i.name} src={i.logo} alt={i.name} title={i.name} className="h-10 w-auto object-contain opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0" />
      ))}
    </div>
  </section>
);

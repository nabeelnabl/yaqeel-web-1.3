import React from 'react';
import { AppBadgesGroup } from './AppBadges';

export const AppDownload: React.FC = () => (
  <section className="px-6 pb-28">
    <div className="mx-auto max-w-6xl rounded-[2rem] bg-ink px-6 py-20 text-center text-paper sm:py-28">
      <h2 className="h-display text-4xl sm:text-6xl text-paper">Take your institute<br />with you.</h2>
      <p className="mx-auto mt-6 max-w-md text-[15px] text-paper/60">Download the Yaqeel app for iOS and Android.</p>
      <div className="mt-10 flex justify-center"><AppBadgesGroup theme="glass" size="md" className="gap-3" /></div>
    </div>
  </section>
);

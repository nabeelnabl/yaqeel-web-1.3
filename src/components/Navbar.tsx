import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { YaqeelLogo } from './YaqeelLogo';

const WA = 'https://wa.me/918590028549?text=Hi%20Yaqeel%2C%20I%20would%20like%20to%20book%20a%20free%20demo.';

export const Navbar: React.FC<{ onOpenDemo?: () => void }> = ({ onOpenDemo }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  const p = isHome ? '' : '/';
  const links = [
    { label: 'Features', href: `${p}#features` },
    { label: 'Pricing', href: `${p}#pricing` },
    { label: 'Reviews', href: `${p}#reviews` },
    { label: 'FAQ', href: `${p}#faq` },
  ];
  const demo = () => (onOpenDemo ? onOpenDemo() : window.open(WA, '_blank'));
  const cta = 'rounded-full bg-ink px-5 py-2 text-[13px] font-medium text-paper transition hover:bg-black';

  const handleNav = (href: string) => {
    setOpen(false);
    if (href.startsWith('/#') || href.startsWith('#')) {
      const hash = href.replace('/', '');
      if (isHome) {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      navigate(`/${hash}`);
      return;
    }
    navigate(href);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'bg-paper/80 backdrop-blur-xl border-b border-line' : 'border-b border-transparent'}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" onClick={() => setOpen(false)} aria-label="Yaqeel Home">
          <YaqeelLogo variant="horizontal" theme="dark" size="md" />
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-[13px] text-mute transition hover:text-ink">{l.label}</a>
          ))}
          <Link to="/business" className="text-[13px] text-mute transition hover:text-ink">For Business</Link>
          <Link to="/support" className="text-[13px] text-mute transition hover:text-ink">Support</Link>
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={demo} className={`${cta} hidden sm:block`}>Book a demo</button>
          <button className="p-2 md:hidden text-ink" aria-label="Menu" onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-line px-6 pb-6 pt-2 md:hidden bg-paper/95 backdrop-blur-xl">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNav(l.href)}
              className="block w-full text-left border-b border-line py-4 text-lg font-medium text-ink transition hover:text-accent"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('/business')}
            className="block w-full text-left border-b border-line py-4 text-lg font-medium text-ink transition hover:text-accent"
          >
            For Business
          </button>
          <button
            onClick={() => handleNav('/support')}
            className="block w-full text-left border-b border-line py-4 text-lg font-medium text-ink transition hover:text-accent"
          >
            Support
          </button>
          <button
            onClick={() => {
              setOpen(false);
              demo();
            }}
            className={`${cta} mt-6 w-full py-3.5 text-sm font-semibold`}
          >
            Book a demo
          </button>
        </div>
      )}
    </header>
  );
};

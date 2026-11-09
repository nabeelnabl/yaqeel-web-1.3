import React, { useEffect, useState, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { YaqeelLogo } from './YaqeelLogo';

const WA = 'https://wa.me/918590028549?text=Hi%20Yaqeel%2C%20I%20would%20like%20to%20book%20a%20free%20demo.';

export const PRODUCTS = [
  {
    title: 'For Business',
    desc: 'Complete academy, coaching & batch management',
    href: '/business',
    badge: null,
  },
  {
    title: '1 to 1',
    desc: 'Private tuitions, session counters & hourly billing',
    href: '/1-to-1',
    badge: null,
  },
  {
    title: 'Parent App',
    desc: 'Live attendance, marks, receipts & alerts for parents',
    href: '/parent-app',
    badge: null,
  },
  {
    title: 'Console',
    desc: 'Desktop multi-branch administrative headquarters',
    href: '/console',
    badge: null,
  },
  {
    title: 'Yaqeel AI',
    desc: 'Chatbot with voice or text search for any student',
    href: '/yaqeel-ai',
    badge: 'Coming Soon',
  },
];

export const PRICING_OPTIONS = [
  {
    title: 'Normal Tuition Rate',
    rate: '₹60 / student',
    desc: 'For batches, coaching centres & academies',
    href: '/#pricing',
  },
  {
    title: '1 to 1 Rate',
    rate: '₹150 / student',
    desc: 'For individual private tutors (min. 20 students)',
    href: '/1-to-1#pricing',
  },
];

export const Navbar: React.FC<{ onOpenDemo?: () => void }> = ({ onOpenDemo }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobilePricingOpen, setMobilePricingOpen] = useState(false);

  const productsRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (productsRef.current && !productsRef.current.contains(target)) {
        setProductsOpen(false);
      }
      if (pricingRef.current && !pricingRef.current.contains(target)) {
        setPricingOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Collapse mobile accordions when drawer closes
  useEffect(() => {
    if (!open) {
      setMobileProductsOpen(false);
      setMobilePricingOpen(false);
    }
  }, [open]);

  const p = isHome ? '' : '/';
  const demo = () => (onOpenDemo ? onOpenDemo() : window.open(WA, '_blank'));
  const cta = 'rounded-full bg-ink px-5 py-2 text-[13px] font-medium text-paper transition hover:bg-black';

  const handleNav = (href: string) => {
    setOpen(false);
    setProductsOpen(false);
    setPricingOpen(false);
    setMobileProductsOpen(false);
    setMobilePricingOpen(false);

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

    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      if (location.pathname === path) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      navigate(href);
      return;
    }

    navigate(href);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'bg-paper/90 backdrop-blur-xl border-b border-line' : 'border-b border-transparent'}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" onClick={() => setOpen(false)} aria-label="Yaqeel Home">
          <YaqeelLogo variant="horizontal" theme="dark" size="md" />
        </Link>

        {/* Desktop Navigation: Features, Products, Pricing, Reviews, FAQ, Support */}
        <nav className="hidden items-center gap-8 md:flex">
          {/* 1. Features */}
          <button
            type="button"
            onClick={() => handleNav(`${p}#features`)}
            className="text-[13px] text-mute transition hover:text-ink cursor-pointer"
          >
            Features
          </button>

          {/* 2. Products Dropdown */}
          <div
            ref={productsRef}
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setProductsOpen(!productsOpen)}
              className="inline-flex items-center gap-1 text-[13px] text-mute transition hover:text-ink cursor-pointer py-2"
              aria-expanded={productsOpen}
            >
              <span>Products</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${productsOpen ? 'rotate-180 text-ink' : ''}`}
              />
            </button>

            {productsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 w-72">
                <div className="rounded-2xl border border-line bg-white/95 p-2 backdrop-blur-xl shadow-xl space-y-1">
                  {PRODUCTS.map((prod) => (
                    <Link
                      key={prod.href}
                      to={prod.href}
                      onClick={() => setProductsOpen(false)}
                      className="group flex flex-col rounded-xl p-2.5 transition hover:bg-paper"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-semibold text-ink group-hover:text-accent transition">
                          {prod.title}
                        </span>
                        {prod.badge && (
                          <span className="text-[11px] font-mono text-mute">
                            {prod.badge}
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-[11px] text-mute leading-snug">
                        {prod.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 3. Pricing Dropdown */}
          <div
            ref={pricingRef}
            className="relative"
            onMouseEnter={() => setPricingOpen(true)}
            onMouseLeave={() => setPricingOpen(false)}
          >
            <button
              type="button"
              onClick={() => setPricingOpen(!pricingOpen)}
              className="inline-flex items-center gap-1 text-[13px] text-mute transition hover:text-ink cursor-pointer py-2"
              aria-expanded={pricingOpen}
            >
              <span>Pricing</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${pricingOpen ? 'rotate-180 text-ink' : ''}`}
              />
            </button>

            {pricingOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 w-72">
                <div className="rounded-2xl border border-line bg-white/95 p-2 backdrop-blur-xl shadow-xl space-y-1">
                  {PRICING_OPTIONS.map((item) => (
                    <button
                      key={item.href}
                      type="button"
                      onClick={() => handleNav(item.href)}
                      className="group flex flex-col w-full text-left rounded-xl p-2.5 transition hover:bg-paper cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-semibold text-ink group-hover:text-accent transition">
                          {item.title}
                        </span>
                      </div>
                      <p className="mt-0.5 text-[11px] text-mute leading-snug">
                        {item.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 4. Reviews */}
          <button
            type="button"
            onClick={() => handleNav(`${p}#reviews`)}
            className="text-[13px] text-mute transition hover:text-ink cursor-pointer"
          >
            Reviews
          </button>

          {/* 5. FAQ */}
          <button
            type="button"
            onClick={() => handleNav(`${p}#faq`)}
            className="text-[13px] text-mute transition hover:text-ink cursor-pointer"
          >
            FAQ
          </button>

          {/* 6. Support */}
          <Link
            to="/support"
            className="text-[13px] text-mute transition hover:text-ink"
          >
            Support
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <button onClick={demo} className={`${cta} hidden sm:block`}>Book a demo</button>
          <button
            className="p-2 md:hidden text-ink"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-t border-line px-6 pb-6 pt-2 md:hidden bg-paper/95 backdrop-blur-xl max-h-[85vh] overflow-y-auto">
          {/* 1. Features */}
          <button
            type="button"
            onClick={() => handleNav(`${p}#features`)}
            className="block w-full text-left border-b border-line py-3.5 text-base font-medium text-ink transition hover:text-accent"
          >
            Features
          </button>

          {/* 2. Products Accordion */}
          <div className="border-b border-line py-3">
            <button
              type="button"
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="flex items-center justify-between w-full text-left text-base font-medium text-ink py-1"
            >
              <span>Products</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 text-mute ${mobileProductsOpen ? 'rotate-180 text-ink' : ''}`}
              />
            </button>

            {mobileProductsOpen && (
              <div className="mt-2 pl-3 space-y-2 border-l border-line/80 my-2">
                {PRODUCTS.map((prod) => (
                  <Link
                    key={prod.href}
                    to={prod.href}
                    onClick={() => setOpen(false)}
                    className="block py-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-ink hover:text-accent">
                        {prod.title}
                      </span>
                      {prod.badge && (
                        <span className="text-xs font-mono text-mute">
                          {prod.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-mute leading-snug mt-0.5">
                      {prod.desc}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 3. Pricing Accordion */}
          <div className="border-b border-line py-3">
            <button
              type="button"
              onClick={() => setMobilePricingOpen(!mobilePricingOpen)}
              className="flex items-center justify-between w-full text-left text-base font-medium text-ink py-1"
            >
              <span>Pricing</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 text-mute ${mobilePricingOpen ? 'rotate-180 text-ink' : ''}`}
              />
            </button>

            {mobilePricingOpen && (
              <div className="mt-2 pl-3 space-y-2 border-l border-line/80 my-2">
                {PRICING_OPTIONS.map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => handleNav(item.href)}
                    className="block w-full text-left py-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-ink hover:text-accent">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-xs text-mute leading-snug mt-0.5">
                      {item.desc}
                    </p>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 4. Reviews */}
          <button
            type="button"
            onClick={() => handleNav(`${p}#reviews`)}
            className="block w-full text-left border-b border-line py-3.5 text-base font-medium text-ink transition hover:text-accent"
          >
            Reviews
          </button>

          {/* 5. FAQ */}
          <button
            type="button"
            onClick={() => handleNav(`${p}#faq`)}
            className="block w-full text-left border-b border-line py-3.5 text-base font-medium text-ink transition hover:text-accent"
          >
            FAQ
          </button>

          {/* 6. Support */}
          <button
            type="button"
            onClick={() => handleNav('/support')}
            className="block w-full text-left border-b border-line py-3.5 text-base font-medium text-ink transition hover:text-accent"
          >
            Support
          </button>

          <button
            type="button"
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

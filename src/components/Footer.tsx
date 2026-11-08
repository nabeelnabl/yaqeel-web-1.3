import React from 'react';
import { Link } from 'react-router-dom';
import { YaqeelLogo } from './YaqeelLogo';

const col = 'space-y-3 text-sm text-mute [&_a:hover]:text-ink [&_a]:transition';
const h = 'mb-5 text-[13px] font-bold uppercase tracking-[0.16em] text-ink';

export const Footer: React.FC = () => (
  <footer className="border-t border-line px-6 pb-10 pt-20">
    <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
      <div>
        <Link to="/" aria-label="Yaqeel Home"><YaqeelLogo variant="horizontal" theme="dark" size="md" /></Link>
        <p className="mt-5 max-w-xs text-sm leading-relaxed text-mute">Institute management, made simple.</p>
      </div>
      <div><h4 className={h}>Product</h4><ul className={col}>
        <li><Link to="/business">For business</Link></li>
        <li><Link to="/1-to-1">1 to 1</Link></li>
        <li><Link to="/parent-app">Parent app</Link></li>
        <li><Link to="/console">Console</Link></li>
        <li><Link to="/yaqeel-ai">Yaqeel AI</Link></li></ul></div>
      <div><h4 className={h}>Legal</h4><ul className={col}>
        <li><Link to="/privacy">Privacy</Link></li><li><Link to="/terms">Terms</Link></li>
        <li><Link to="/refund">Refunds</Link></li><li><Link to="/delete-account">Delete account</Link></li></ul></div>
      <div><h4 className={h}>Contact</h4><ul className={col}>
        <li><Link to="/support">Support</Link></li>
        <li><a href="tel:+918590028549">+91 85900 28549</a></li>
        <li><a href="tel:+917012099097">+91 70120 99097</a></li>
        <li><a href="https://wa.me/918590028549?text=Hi%20Yaqeel%2C%20I%20have%20an%20enquiry%20regarding%20the%20platform." target="_blank" rel="noreferrer">WhatsApp</a></li>
        <li><a href="mailto:support@yaqeel.com">support@yaqeel.com</a></li>
        <li className="text-xs text-mute/80 pt-0.5">Calicut, Kerala, India</li>
        <li className="flex gap-4 pt-1">
          <a href="https://www.instagram.com/yaqeel.app/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://linkedin.com/company/yaqeel" target="_blank" rel="noreferrer">LinkedIn</a></li></ul></div>
    </div>
    <p className="mx-auto mt-16 max-w-6xl border-t border-line pt-6 text-xs text-mute">© {new Date().getFullYear()} Yaqeel. All rights reserved.</p>
  </footer>
);

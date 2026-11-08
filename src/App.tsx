import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { BusinessPage } from './pages/BusinessPage';
import { SupportPage } from './pages/SupportPage';
import { ConsolePage } from './pages/ConsolePage';
import { ParentAppPage } from './pages/ParentAppPage';
import { OneToOnePage } from './pages/OneToOnePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { DeleteAccountPage } from './pages/DeleteAccountPage';
import { TermsPage } from './pages/TermsPage';
import { RefundPage } from './pages/RefundPage';
import { YaqeelAiPage } from './pages/YaqeelAiPage';

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
      return;
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior
    });
  }, [pathname, hash]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/console" element={<ConsolePage />} />
        <Route path="/parent-app" element={<ParentAppPage />} />
        <Route path="/1-to-1" element={<OneToOnePage />} />
        <Route path="/one-to-one" element={<OneToOnePage />} />
        <Route path="/yaqeel-ai" element={<YaqeelAiPage />} />
        <Route path="/ai" element={<YaqeelAiPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/delete-account" element={<DeleteAccountPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/refund" element={<RefundPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

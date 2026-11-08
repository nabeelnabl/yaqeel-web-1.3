import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import { NotFoundPage } from './pages/NotFoundPage';

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
        {/* Canonical 301 redirects for legacy aliases */}
        <Route path="/one-to-one" element={<Navigate to="/1-to-1" replace />} />
        <Route path="/yaqeel-ai" element={<YaqeelAiPage />} />
        <Route path="/ai" element={<Navigate to="/yaqeel-ai" replace />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/delete-account" element={<DeleteAccountPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/refund" element={<RefundPage />} />
        {/* Dedicated 404 handler prevents soft 404 indexing */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Home, MessageSquare } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = '404 — Page Not Found | Yaqeel';
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'noindex, follow');

    return () => {
      if (robots) robots.setAttribute('content', 'index, follow');
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-paper text-ink flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 px-6 pt-36 pb-24 sm:pt-48 sm:pb-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Error 404 &bull; Page Not Found</p>

          <h1 className="h-display mt-6 text-4xl sm:text-6xl text-ink">
            This page could<br /> not be found.
          </h1>

          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-mute">
            The page you are looking for doesn&apos;t exist, was renamed, or has moved to a new address.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-2.5 text-xs font-semibold text-paper transition hover:bg-black"
            >
              <Home size={14} />
              <span>Back to Homepage</span>
            </Link>

            <Link
              to="/support"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-2.5 text-xs font-semibold text-ink transition hover:border-ink hover:bg-paper"
            >
              <MessageSquare size={14} />
              <span>Contact Support</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFoundPage;

import React, { Suspense, lazy, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './styles/global/navigation-fix.css';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LoadingFallback from './components/LoadingFallback';
import NotificationSystem from './components/NotificationSystem';
import BackToTop from './components/BackToTop';

// Context and State Management
import AppProviders from './context/AppProviders';
import useAppStore from './store/appStore';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const PayloadsPage = lazy(() => import('./pages/PayloadsPage'));
const MissionsPage = lazy(() => import('./pages/MissionsPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PartnershipsPage = lazy(() => import('./pages/PartnershipsPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const NewsArticlePage = lazy(() => import('./pages/NewsArticlePage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsConditionsPage = lazy(() => import('./pages/TermsConditionsPage'));
const EmailSignPage = lazy(() => import('./pages/EmailSignPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Route tracker component to track page views
const AppRoutes = () => {
  const location = useLocation();
  const trackPageView = useAppStore((state) => state.trackPageView);

  useEffect(() => {
    // Track page view in store
    trackPageView(location.pathname);
  }, [location.pathname, trackPageView]);

  return (
    <>
      {/* Navigation */}
      <Navigation />

      {/* Routes with Suspense for lazy loading */}
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/payloads" element={<PayloadsPage />} />
          <Route path="/missions" element={<MissionsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/partnerships" element={<PartnershipsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/article/:id" element={<NewsArticlePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-conditions" element={<TermsConditionsPage />} />
          <Route path="/emailSign" element={<EmailSignPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTop />
    </>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <AppProviders>
        <Router>
          {/* Preloader is now handled inline in index.html */}

          {/* App Routes */}
          <AppRoutes />

          {/* Notification System */}
          <NotificationSystem />
        </Router>
      </AppProviders>
    </HelmetProvider>
  );
};

export default App;

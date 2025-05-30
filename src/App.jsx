import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
const FeaturesPage = lazy(() => import('./pages/FeaturesPage'));
const PayloadsPage = lazy(() => import('./pages/PayloadsPage'));
const MissionsPage = lazy(() => import('./pages/MissionsPage'));
const PastMissionsPage = lazy(() => import('./pages/PastMissionsPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PartnershipsPage = lazy(() => import('./pages/PartnershipsPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const NewsArticlePage = lazy(() => import('./pages/NewsArticlePage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsConditionsPage = lazy(() => import('./pages/TermsConditionsPage'));
const EmailSignPage = lazy(() => import('./pages/EmailSignPage'));
const TestPage = lazy(() => import('./pages/TestPage'));
const BookMissionPage = lazy(() => import('./pages/BookMissionPage'));
const SpaceXperimentPage = lazy(() => import('./pages/SpaceXperimentPage'));
const OfferingsPage = lazy(() => import('./pages/OfferingsPage'));
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
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/payloads" element={<PayloadsPage />} />
          <Route path="/missions" element={<MissionsPage />} />
          <Route path="/past-missions" element={<PastMissionsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/partnerships" element={<PartnershipsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/article/:id" element={<NewsArticlePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-conditions" element={<TermsConditionsPage />} />
          <Route path="/emailSign" element={<EmailSignPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/book-mission" element={<BookMissionPage />} />
          <Route path="/spacexperiment" element={<SpaceXperimentPage />} />
          <Route path="/offerings" element={<OfferingsPage />} />
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

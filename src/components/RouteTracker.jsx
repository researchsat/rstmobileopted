import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useAppStore from '../store/appStore';
import { useUserPreferences } from '../context/UserPreferencesContext';

/**
 * Component that tracks route changes and updates user preferences
 */
const RouteTracker = () => {
  const location = useLocation();
  const trackPageView = useAppStore((state) => state.trackPageView);
  const { updateLastVisitedPage } = useUserPreferences();
  
  useEffect(() => {
    // Track page view in store
    trackPageView(location.pathname);
    
    // Update last visited page in user preferences
    updateLastVisitedPage(location.pathname);
    
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname, trackPageView, updateLastVisitedPage]);
  
  // This component doesn't render anything
  return null;
};

export default RouteTracker;

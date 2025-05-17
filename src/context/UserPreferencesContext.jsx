import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the user preferences context
const UserPreferencesContext = createContext();

// Default preferences
const DEFAULT_PREFERENCES = {
  notifications: true,
  fontSize: 'medium', // small, medium, large
  animationsEnabled: true,
  lastVisitedPage: '/',
  consentGiven: false,
};

// User preferences provider component
export const UserPreferencesProvider = ({ children }) => {
  // Get initial preferences from localStorage or use defaults
  const [preferences, setPreferences] = useState(() => {
    const savedPreferences = localStorage.getItem('userPreferences');
    return savedPreferences ? JSON.parse(savedPreferences) : DEFAULT_PREFERENCES;
  });

  // Update localStorage when preferences change
  useEffect(() => {
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
  }, [preferences]);

  // Update a single preference
  const updatePreference = (key, value) => {
    if (key in DEFAULT_PREFERENCES) {
      setPreferences(prev => ({
        ...prev,
        [key]: value,
      }));
    }
  };

  // Reset preferences to defaults
  const resetPreferences = () => {
    setPreferences(DEFAULT_PREFERENCES);
  };

  // Update last visited page
  const updateLastVisitedPage = (path) => {
    updatePreference('lastVisitedPage', path);
  };

  // Toggle notifications
  const toggleNotifications = () => {
    updatePreference('notifications', !preferences.notifications);
  };

  // Set font size
  const setFontSize = (size) => {
    if (['small', 'medium', 'large'].includes(size)) {
      updatePreference('fontSize', size);
    }
  };

  // Toggle animations
  const toggleAnimations = () => {
    updatePreference('animationsEnabled', !preferences.animationsEnabled);
  };

  // Set consent
  const setConsent = (value) => {
    updatePreference('consentGiven', value);
  };

  // Context value
  const value = {
    preferences,
    updatePreference,
    resetPreferences,
    updateLastVisitedPage,
    toggleNotifications,
    setFontSize,
    toggleAnimations,
    setConsent,
  };

  return (
    <UserPreferencesContext.Provider value={value}>
      {children}
    </UserPreferencesContext.Provider>
  );
};

// Custom hook for using the user preferences context
export const useUserPreferences = () => {
  const context = useContext(UserPreferencesContext);
  if (context === undefined) {
    throw new Error('useUserPreferences must be used within a UserPreferencesProvider');
  }
  return context;
};

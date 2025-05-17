import React from 'react';
import { UserPreferencesProvider } from './UserPreferencesContext';

/**
 * Combined provider component for all application contexts
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 */
const AppProviders = ({ children }) => {
  return (
    <UserPreferencesProvider>
      {children}
    </UserPreferencesProvider>
  );
};

export default AppProviders;

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the main.js file for non-React functionality first
// This ensures that the preloader and other critical functionality is loaded early
import './main';

// Create a root element for React
const rootElement = document.getElementById('app');

// Use a function to defer React initialization until after the page has loaded
const initReact = () => {
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
};

// Initialize React after the page has loaded
if (document.readyState === 'complete') {
  initReact();
} else {
  window.addEventListener('load', initReact);
}

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Create the app store with persistence
const useAppStore = create(
  persist(
    (set, get) => ({
      // UI State
      isLoading: false,
      setIsLoading: (isLoading) => set({ isLoading }),
      
      // Modal State
      activeModal: null,
      setActiveModal: (modalId) => set({ activeModal: modalId }),
      closeModal: () => set({ activeModal: null }),
      
      // Notification State
      notifications: [],
      addNotification: (notification) => set((state) => ({
        notifications: [...state.notifications, {
          id: Date.now(),
          type: 'info',
          duration: 3000,
          ...notification,
        }],
      })),
      removeNotification: (id) => set((state) => ({
        notifications: state.notifications.filter((notification) => notification.id !== id),
      })),
      clearNotifications: () => set({ notifications: [] }),
      
      // Form Submission Tracking
      formSubmissions: {},
      trackFormSubmission: (formId) => set((state) => ({
        formSubmissions: {
          ...state.formSubmissions,
          [formId]: {
            lastSubmitted: new Date().toISOString(),
            count: (state.formSubmissions[formId]?.count || 0) + 1,
          },
        },
      })),
      
      // User Interaction Tracking
      pageViews: {},
      trackPageView: (path) => set((state) => ({
        pageViews: {
          ...state.pageViews,
          [path]: (state.pageViews[path] || 0) + 1,
        },
      })),
      
      // Feature Flags
      featureFlags: {
        enableNewHeader: false,
        enableNewFooter: false,
        enableNewContactForm: false,
      },
      setFeatureFlag: (flag, value) => set((state) => ({
        featureFlags: {
          ...state.featureFlags,
          [flag]: value,
        },
      })),
    }),
    {
      name: 'researchsat-app-store',
      partialize: (state) => ({
        // Only persist these fields
        featureFlags: state.featureFlags,
        pageViews: state.pageViews,
        formSubmissions: state.formSubmissions,
      }),
    }
  )
);

export default useAppStore;

# Project Restructuring Plan

## New Folder Structure

```
src/
├── assets/                  # Static assets
│   ├── fonts/               # Font files
│   ├── images/              # Organized by category
│   └── icons/               # SVG icons
├── components/              # Reusable components
│   ├── common/              # Shared components (Button, Card, etc.)
│   │   ├── BackgroundImage.jsx
│   │   ├── ImageGallery.jsx
│   │   ├── LazyImage.jsx
│   │   ├── ResponsiveImage.jsx
│   │   ├── SEO.jsx
│   │   ├── TeamMember.jsx
│   │   └── NotificationSystem.jsx
│   ├── layout/              # Layout components (Header, Footer, etc.)
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Navigation.jsx
│   │   ├── SectionDivider.jsx
│   │   └── LoadingFallback.jsx
│   ├── forms/               # Form components
│   │   ├── ContactForm.jsx
│   │   └── BookMission.jsx
│   ├── ui/                  # UI components (modals, notifications, etc.)
│   │   ├── DetailLightbox.jsx
│   │   ├── MissionLightbox.jsx
│   │   └── PayloadLightbox.jsx
│   └── sections/            # Page sections organized by page
│       ├── home/            # Home page sections
│       │   ├── FeaturesSection.jsx
│       │   ├── BenefitsSection.jsx
│       │   ├── ServicesSection.jsx
│       │   ├── PartnershipsSection.jsx
│       │   ├── NewsSection.jsx
│       │   └── SpaceSection.jsx
│       ├── about/           # About page sections
│       │   ├── AboutSecondSection.jsx
│       │   ├── AboutThirdSection.jsx
│       │   ├── AboutTeamSection.jsx
│       │   └── AboutContactSection.jsx
│       ├── missions/        # Missions page sections
│       │   ├── MissionsHeroSection.jsx
│       │   ├── MissionsSecondSection.jsx
│       │   ├── MissionTypeSection.jsx
│       │   ├── MissionTypesContainer.jsx
│       │   ├── MissionTypesSection.jsx
│       │   ├── MissionSectionImageLeft.jsx
│       │   └── MissionSectionImageRight.jsx
│       ├── payloads/        # Payloads page sections
│       │   ├── PayloadsHeroSection.jsx
│       │   ├── PayloadsSecondSection.jsx
│       │   ├── PayloadsQuoteSection.jsx
│       │   ├── PayloadMidSection.jsx
│       │   ├── PayloadLastSection.jsx
│       │   ├── PayloadSectionImageLeft.jsx
│       │   └── PayloadSectionImageRight.jsx
│       ├── careers/         # Careers page sections
│       │   ├── CareersHeroSection.jsx
│       │   ├── CareersSecondSection.jsx
│       │   ├── CareersThirdSection.jsx
│       │   └── CareersFourthSection.jsx
│       └── contact/         # Contact page sections
│           ├── ContactHeroSection.jsx
│           ├── ContactSecondSection.jsx
│           ├── ContactFormSection.jsx
│           ├── ContactPartnershipsSection.jsx
│           ├── ContactLastSection.jsx
│           └── Contact.jsx
├── hooks/                   # Custom React hooks
│   ├── useApi.js
│   ├── useForm.js
│   └── useFormValidation.js
├── context/                 # React Context providers
│   ├── AppProviders.jsx
│   └── UserPreferencesContext.jsx
├── store/                   # State management (Zustand)
│   └── appStore.js
├── pages/                   # Page components
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── MissionsPage.jsx
│   ├── PayloadsPage.jsx
│   ├── CareersPage.jsx
│   ├── ContactPage.jsx
│   ├── PrivacyPolicyPage.jsx
│   ├── TermsConditionsPage.jsx
│   ├── EmailSignPage.jsx
│   └── NotFoundPage.jsx
├── services/                # API services
│   └── api/                 # API related code
│       └── send-email.js
├── styles/                  # Global styles and theme
│   ├── theme/               # Theme configuration
│   │   └── theme.css
│   ├── global/              # Global CSS
│   │   └── app.css
│   └── components/          # Component-specific styles
├── utils/                   # Utility functions
│   ├── emailService.js
│   └── imageUtils.js
├── config/                  # Configuration files
└── App.jsx                  # Main App component
```

## Implementation Steps

1. Create the new folder structure
2. Move files to their appropriate locations
3. Update import paths in all files
4. Test the application to ensure functionality is preserved
5. Clean up any unused files or folders

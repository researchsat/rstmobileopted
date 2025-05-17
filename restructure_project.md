# Project Restructuring Plan

## Current Issues
- Flat component structure makes it hard to find specific components
- No clear organization for different types of components
- No separation between UI components, layout components, and page sections
- No clear organization for hooks, context, and store

## New Folder Structure
```
src/
├── assets/                  # Static assets
│   ├── fonts/               # Font files
│   ├── images/              # Organized by category
│   └── icons/               # SVG icons
├── components/              # Reusable components
│   ├── common/              # Shared components (Button, Card, etc.)
│   ├── layout/              # Layout components (Header, Footer, etc.)
│   ├── forms/               # Form components
│   ├── ui/                  # UI components (modals, notifications, etc.)
│   └── sections/            # Page sections organized by page
│       ├── home/            # Home page sections
│       ├── about/           # About page sections
│       ├── missions/        # Missions page sections
│       └── ...
├── hooks/                   # Custom React hooks
├── context/                 # React Context providers
├── store/                   # State management (Zustand)
├── pages/                   # Page components
├── utils/                   # Utility functions
├── services/                # API services
│   └── api/                 # API related code
├── styles/                  # Global styles and theme
│   ├── theme/               # Theme configuration
│   └── global/              # Global CSS
├── config/                  # Configuration files
└── types/                   # TypeScript type definitions (if using TS)
```

## Implementation Steps

### 1. Create the new folder structure
```bash
mkdir -p src/components/{common,layout,forms,ui,sections/{home,about,missions,payloads,careers,contact}}
mkdir -p src/hooks src/context src/store src/services/api src/styles/{theme,global} src/config src/types
```

### 2. Move files to their new locations

#### Layout Components
- Move src/components/Header.jsx to src/components/layout/
- Move src/components/Footer.jsx to src/components/layout/
- Move src/components/Navigation.jsx to src/components/layout/
- Move src/components/SectionDivider.jsx to src/components/layout/
- Move src/components/LoadingFallback.jsx to src/components/layout/

#### Common Components
- Move src/components/BackgroundImage.jsx to src/components/common/
- Move src/components/ImageGallery.jsx to src/components/common/
- Move src/components/LazyImage.jsx to src/components/common/
- Move src/components/ResponsiveImage.jsx to src/components/common/
- Move src/components/SEO.jsx to src/components/common/
- Move src/components/TeamMember.jsx to src/components/common/

#### UI Components
- Move src/components/NotificationSystem.jsx to src/components/ui/
- Move src/components/DetailLightbox.jsx to src/components/ui/
- Move src/components/MissionLightbox.jsx to src/components/ui/
- Move src/components/PayloadLightbox.jsx to src/components/ui/

#### Form Components
- Move src/components/ContactForm.jsx to src/components/forms/
- Move src/components/BookMission.jsx to src/components/forms/

#### Home Page Sections
- Move src/components/FeaturesSection.jsx to src/components/sections/home/
- Move src/components/BenefitsSection.jsx to src/components/sections/home/
- Move src/components/ServicesSection.jsx to src/components/sections/home/
- Move src/components/NewsSection.jsx to src/components/sections/home/
- Move src/components/SpaceSection.jsx to src/components/sections/home/

#### About Page Sections
- Move src/components/AboutSecondSection.jsx to src/components/sections/about/
- Move src/components/AboutThirdSection.jsx to src/components/sections/about/
- Move src/components/AboutTeamSection.jsx to src/components/sections/about/
- Move src/components/AboutContactSection.jsx to src/components/sections/about/

#### Missions Page Sections
- Move src/components/MissionsHeroSection.jsx to src/components/sections/missions/
- Move src/components/MissionsSecondSection.jsx to src/components/sections/missions/
- Move src/components/MissionTypeSection.jsx to src/components/sections/missions/
- Move src/components/MissionTypesContainer.jsx to src/components/sections/missions/
- Move src/components/MissionTypesSection.jsx to src/components/sections/missions/
- Move src/components/MissionSectionImageLeft.jsx to src/components/sections/missions/
- Move src/components/MissionSectionImageRight.jsx to src/components/sections/missions/

#### Payloads Page Sections
- Move src/components/PayloadsHeroSection.jsx to src/components/sections/payloads/
- Move src/components/PayloadsSecondSection.jsx to src/components/sections/payloads/
- Move src/components/PayloadsQuoteSection.jsx to src/components/sections/payloads/
- Move src/components/PayloadMidSection.jsx to src/components/sections/payloads/
- Move src/components/PayloadLastSection.jsx to src/components/sections/payloads/
- Move src/components/PayloadSectionImageLeft.jsx to src/components/sections/payloads/
- Move src/components/PayloadSectionImageRight.jsx to src/components/sections/payloads/

#### Careers Page Sections
- Move src/components/CareersHeroSection.jsx to src/components/sections/careers/
- Move src/components/CareersSecondSection.jsx to src/components/sections/careers/
- Move src/components/CareersThirdSection.jsx to src/components/sections/careers/
- Move src/components/CareersFourthSection.jsx to src/components/sections/careers/

#### Contact Page Sections
- Move src/components/ContactHeroSection.jsx to src/components/sections/contact/
- Move src/components/ContactSecondSection.jsx to src/components/sections/contact/
- Move src/components/ContactFormSection.jsx to src/components/sections/contact/
- Move src/components/ContactPartnershipsSection.jsx to src/components/sections/contact/
- Move src/components/ContactLastSection.jsx to src/components/sections/contact/
- Move src/components/Contact.jsx to src/components/sections/contact/

### 3. Update import paths in all files
After moving files, we need to update all import paths to reflect the new structure.

### 4. Test the application
Run the application to ensure that all functionality is preserved.

### 5. Commit the changes
Once everything is working, commit the changes to the restructure branch.

### 6. Merge the restructure branch into main
After testing and ensuring everything works, merge the restructure branch into main.

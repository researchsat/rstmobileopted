#!/bin/bash

# Create the new folder structure
mkdir -p src/assets/{fonts,icons}
mkdir -p src/components/{common,layout,forms,ui,sections/{home,about,missions,payloads,careers,contact}}
mkdir -p src/hooks
mkdir -p src/context
mkdir -p src/store
mkdir -p src/services/api
mkdir -p src/styles/{theme,global}
mkdir -p src/config
mkdir -p src/types

# Move layout components
cp src/components/Header.jsx src/components/layout/
cp src/components/Footer.jsx src/components/layout/
cp src/components/Navigation.jsx src/components/layout/
cp src/components/SectionDivider.jsx src/components/layout/
cp src/components/LoadingFallback.jsx src/components/layout/

# Move common components
cp src/components/BackgroundImage.jsx src/components/common/
cp src/components/ImageGallery.jsx src/components/common/
cp src/components/LazyImage.jsx src/components/common/
cp src/components/ResponsiveImage.jsx src/components/common/
cp src/components/SEO.jsx src/components/common/
cp src/components/TeamMember.jsx src/components/common/

# Move form components
cp src/components/ContactForm.jsx src/components/forms/
cp src/components/BookMission.jsx src/components/forms/

# Move UI components
cp src/components/DetailLightbox.jsx src/components/ui/
cp src/components/MissionLightbox.jsx src/components/ui/
cp src/components/PayloadLightbox.jsx src/components/ui/

# Move home page sections
cp src/components/FeaturesSection.jsx src/components/sections/home/
cp src/components/BenefitsSection.jsx src/components/sections/home/
cp src/components/ServicesSection.jsx src/components/sections/home/
cp src/components/PartnershipsSection.jsx src/components/sections/home/
cp src/components/NewsSection.jsx src/components/sections/home/
cp src/components/SpaceSection.jsx src/components/sections/home/

# Move about page sections
cp src/components/AboutSecondSection.jsx src/components/sections/about/
cp src/components/AboutThirdSection.jsx src/components/sections/about/
cp src/components/AboutTeamSection.jsx src/components/sections/about/
cp src/components/AboutContactSection.jsx src/components/sections/about/

# Move missions page sections
cp src/components/MissionsHeroSection.jsx src/components/sections/missions/
cp src/components/MissionsSecondSection.jsx src/components/sections/missions/
cp src/components/MissionTypeSection.jsx src/components/sections/missions/
cp src/components/MissionTypesContainer.jsx src/components/sections/missions/
cp src/components/MissionTypesSection.jsx src/components/sections/missions/
cp src/components/MissionSectionImageLeft.jsx src/components/sections/missions/
cp src/components/MissionSectionImageRight.jsx src/components/sections/missions/

# Move payloads page sections
cp src/components/PayloadsHeroSection.jsx src/components/sections/payloads/
cp src/components/PayloadsSecondSection.jsx src/components/sections/payloads/
cp src/components/PayloadsQuoteSection.jsx src/components/sections/payloads/
cp src/components/PayloadMidSection.jsx src/components/sections/payloads/
cp src/components/PayloadLastSection.jsx src/components/sections/payloads/
cp src/components/PayloadSectionImageLeft.jsx src/components/sections/payloads/
cp src/components/PayloadSectionImageRight.jsx src/components/sections/payloads/

# Move careers page sections
cp src/components/CareersHeroSection.jsx src/components/sections/careers/
cp src/components/CareersSecondSection.jsx src/components/sections/careers/
cp src/components/CareersThirdSection.jsx src/components/sections/careers/
cp src/components/CareersFourthSection.jsx src/components/sections/careers/

# Move contact page sections
cp src/components/ContactHeroSection.jsx src/components/sections/contact/
cp src/components/ContactSecondSection.jsx src/components/sections/contact/
cp src/components/ContactFormSection.jsx src/components/sections/contact/
cp src/components/ContactPartnershipsSection.jsx src/components/sections/contact/
cp src/components/ContactLastSection.jsx src/components/sections/contact/
cp src/components/Contact.jsx src/components/sections/contact/

# Move hooks
cp src/hooks/useApi.js src/hooks/
cp src/hooks/useForm.js src/hooks/
cp src/hooks/useFormValidation.js src/hooks/

# Move context
cp src/context/AppProviders.jsx src/context/
cp src/context/UserPreferencesContext.jsx src/context/

# Move store
cp src/store/appStore.js src/store/

# Move utils
cp src/utils/emailService.js src/utils/
cp src/utils/imageUtils.js src/utils/

# Move services
cp src/services/api/send-email.js src/services/api/

echo "Restructuring complete!"

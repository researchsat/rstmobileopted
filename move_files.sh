#!/bin/bash

# Move layout components
echo "Moving layout components..."
cp src/components/Header.jsx src/components/layout/
cp src/components/Footer.jsx src/components/layout/
cp src/components/Navigation.jsx src/components/layout/
cp src/components/SectionDivider.jsx src/components/layout/

# Move common components
echo "Moving common components..."
cp src/components/BackgroundImage.jsx src/components/common/
cp src/components/LazyImage.jsx src/components/common/
cp src/components/ResponsiveImage.jsx src/components/common/
cp src/components/SEO.jsx src/components/common/

# Move form components
echo "Moving form components..."
cp src/components/ContactForm.jsx src/components/forms/

# Move home page sections
echo "Moving home page sections..."
cp src/components/FeaturesSection.jsx src/components/sections/home/
cp src/components/BenefitsSection.jsx src/components/sections/home/
cp src/components/ServicesSection.jsx src/components/sections/home/
cp src/components/NewsSection.jsx src/components/sections/home/
cp src/components/SpaceSection.jsx src/components/sections/home/

# Move about page sections
echo "Moving about page sections..."
cp src/components/AboutSecondSection.jsx src/components/sections/about/
cp src/components/AboutThirdSection.jsx src/components/sections/about/
cp src/components/AboutTeamSection.jsx src/components/sections/about/

# Move missions page sections
echo "Moving missions page sections..."
cp src/components/MissionsHeroSection.jsx src/components/sections/missions/
cp src/components/MissionsSecondSection.jsx src/components/sections/missions/
cp src/components/MissionTypeSection.jsx src/components/sections/missions/
cp src/components/MissionTypesContainer.jsx src/components/sections/missions/
cp src/components/MissionTypesSection.jsx src/components/sections/missions/

# Move payloads page sections
echo "Moving payloads page sections..."
cp src/components/PayloadsHeroSection.jsx src/components/sections/payloads/
cp src/components/PayloadsSecondSection.jsx src/components/sections/payloads/
cp src/components/PayloadsQuoteSection.jsx src/components/sections/payloads/

# Move utils
echo "Moving utils..."
cp src/utils/imageUtils.js src/utils/

echo "File copying complete!"

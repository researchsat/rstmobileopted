#!/bin/bash

# Create a directory to move unused images to
mkdir -p unused_images

# Move .DS_Store files
find src/assets/images -name ".DS_Store" -exec mv {} unused_images/ \;

# Remove duplicate image formats (keep either webp or original)
# Since the site is using both formats in different places, we'll keep both for now

# Remove unused images from the root images directory
# These are images that aren't referenced in any JS/JSX or CSS files
mv src/assets/images/abhr-320.png unused_images/
mv src/assets/images/abhr-320.webp unused_images/
mv src/assets/images/abhr-640.png unused_images/
mv src/assets/images/abhr-640.webp unused_images/
mv src/assets/images/abhr-960.png unused_images/
mv src/assets/images/abhr-960.webp unused_images/
mv src/assets/images/abhr.png unused_images/
mv src/assets/images/abhr.webp unused_images/
mv src/assets/images/abhr1-320.jpeg unused_images/
mv src/assets/images/abhr1-320.webp unused_images/
mv src/assets/images/abhr1.jpeg unused_images/
mv src/assets/images/abhr1.webp unused_images/
mv src/assets/images/abhrMob-320.png unused_images/
mv src/assets/images/abhrMob-320.webp unused_images/
mv src/assets/images/abhrMob-640.png unused_images/
mv src/assets/images/abhrMob-640.webp unused_images/
mv src/assets/images/abhrMob-960.png unused_images/
mv src/assets/images/abhrMob-960.webp unused_images/
mv src/assets/images/abhrMob.png unused_images/
mv src/assets/images/abhrMob.webp unused_images/

# Remove unused news images
mv src/assets/images/news-card-320.png unused_images/
mv src/assets/images/news-card-320.webp unused_images/
mv src/assets/images/news-card.png unused_images/
mv src/assets/images/news-card.webp unused_images/
mv src/assets/images/news-card1-320.png unused_images/
mv src/assets/images/news-card1-320.webp unused_images/
mv src/assets/images/news-card1.png unused_images/
mv src/assets/images/news-card1.webp unused_images/
mv src/assets/images/news-card2-320.png unused_images/
mv src/assets/images/news-card2-320.webp unused_images/
mv src/assets/images/news-card2.png unused_images/
mv src/assets/images/news-card2.webp unused_images/
mv src/assets/images/news-card3-320.png unused_images/
mv src/assets/images/news-card3-320.webp unused_images/
mv src/assets/images/news-card3.png unused_images/
mv src/assets/images/news-card3.webp unused_images/

# Remove unused lightbox images
mv src/assets/images/lightbox_3-320.jpg unused_images/
mv src/assets/images/lightbox_3-320.webp unused_images/
mv src/assets/images/lightbox_3-640.jpg unused_images/
mv src/assets/images/lightbox_3-640.webp unused_images/
mv src/assets/images/lightbox_3.jpg unused_images/
mv src/assets/images/lightbox_3.webp unused_images/
mv src/assets/images/lightbox_a-320.jpeg unused_images/
mv src/assets/images/lightbox_a-320.webp unused_images/
mv src/assets/images/lightbox_a-640.jpeg unused_images/
mv src/assets/images/lightbox_a-640.webp unused_images/
mv src/assets/images/lightbox_a.jpeg unused_images/
mv src/assets/images/lightbox_a.webp unused_images/
mv src/assets/images/lightbox_aa-320.jpeg unused_images/
mv src/assets/images/lightbox_aa-320.webp unused_images/
mv src/assets/images/lightbox_aa-640.jpeg unused_images/
mv src/assets/images/lightbox_aa-640.webp unused_images/
mv src/assets/images/lightbox_aa-960.jpeg unused_images/
mv src/assets/images/lightbox_aa-960.webp unused_images/
mv src/assets/images/lightbox_aa.jpeg unused_images/
mv src/assets/images/lightbox_aa.webp unused_images/
mv src/assets/images/lightbox_ab-320.jpeg unused_images/
mv src/assets/images/lightbox_ab-320.webp unused_images/
mv src/assets/images/lightbox_ab-640.jpeg unused_images/
mv src/assets/images/lightbox_ab-640.webp unused_images/
mv src/assets/images/lightbox_ab-960.jpeg unused_images/
mv src/assets/images/lightbox_ab-960.webp unused_images/
mv src/assets/images/lightbox_ab.jpeg unused_images/
mv src/assets/images/lightbox_ab.webp unused_images/
mv src/assets/images/lightbox_b-320.jpeg unused_images/
mv src/assets/images/lightbox_b-320.webp unused_images/
mv src/assets/images/lightbox_b-640.jpeg unused_images/
mv src/assets/images/lightbox_b-640.webp unused_images/
mv src/assets/images/lightbox_b.jpeg unused_images/
mv src/assets/images/lightbox_b.webp unused_images/
mv src/assets/images/lightbox_c-320.jpeg unused_images/
mv src/assets/images/lightbox_c-320.webp unused_images/
mv src/assets/images/lightbox_c-640.jpeg unused_images/
mv src/assets/images/lightbox_c-640.webp unused_images/
mv src/assets/images/lightbox_c.jpeg unused_images/
mv src/assets/images/lightbox_c.webp unused_images/
mv src/assets/images/lightbox_d-320.jpeg unused_images/
mv src/assets/images/lightbox_d-320.webp unused_images/
mv src/assets/images/lightbox_d-640.jpeg unused_images/
mv src/assets/images/lightbox_d-640.webp unused_images/
mv src/assets/images/lightbox_d.jpeg unused_images/
mv src/assets/images/lightbox_d.webp unused_images/
mv src/assets/images/lightbox_e-320.jpeg unused_images/
mv src/assets/images/lightbox_e-320.webp unused_images/
mv src/assets/images/lightbox_e-640.jpeg unused_images/
mv src/assets/images/lightbox_e-640.webp unused_images/
mv src/assets/images/lightbox_e.jpeg unused_images/
mv src/assets/images/lightbox_e.webp unused_images/

# Remove unused customer logos
mv src/assets/images/customer-logo-1.png unused_images/
mv src/assets/images/customer-logo-1.webp unused_images/
mv src/assets/images/customer-logo-2.png unused_images/
mv src/assets/images/customer-logo-2.svg unused_images/
mv src/assets/images/customer-logo-2.webp unused_images/
mv src/assets/images/customer-logo-3.png unused_images/
mv src/assets/images/customer-logo-3.svg unused_images/
mv src/assets/images/customer-logo-3.webp unused_images/
mv src/assets/images/customer-logo-5.png unused_images/
mv src/assets/images/customer-logo-5.webp unused_images/

# Remove unused details images
mv src/assets/images/details-1-office-worker_1.svg unused_images/
mv src/assets/images/details-2-office-team-work_1.svg unused_images/
mv src/assets/images/details-2-office-team-work_3.svg unused_images/

# Remove unused partner logos
mv src/assets/images/partner-logo-1.svg unused_images/
mv src/assets/images/partner-logo-2.svg unused_images/
mv src/assets/images/partner-logo-3.svg unused_images/
mv src/assets/images/partner-logo-4.svg unused_images/
mv src/assets/images/partner-logo-5.svg unused_images/

# Remove unused profile images
mv src/assets/images/jibin_1-320.jpg unused_images/
mv src/assets/images/jibin_1-320.webp unused_images/
mv src/assets/images/jibin_1-640.jpg unused_images/
mv src/assets/images/jibin_1-640.webp unused_images/
mv src/assets/images/jibin_1-960.jpg unused_images/
mv src/assets/images/jibin_1-960.webp unused_images/
mv src/assets/images/jibin_1.jpg unused_images/
mv src/assets/images/jibin_1.webp unused_images/
mv src/assets/images/prabhu_1-320.jpg unused_images/
mv src/assets/images/prabhu_1-320.webp unused_images/
mv src/assets/images/prabhu_1-640.jpg unused_images/
mv src/assets/images/prabhu_1-640.webp unused_images/
mv src/assets/images/prabhu_1-960.jpg unused_images/
mv src/assets/images/prabhu_1-960.webp unused_images/
mv src/assets/images/prabhu_1.jpg unused_images/
mv src/assets/images/prabhu_1.webp unused_images/
mv src/assets/images/Rahul_1-320.jpg unused_images/
mv src/assets/images/Rahul_1-320.webp unused_images/
mv src/assets/images/Rahul_1-640.jpg unused_images/
mv src/assets/images/Rahul_1-640.webp unused_images/
mv src/assets/images/Rahul_1-960.jpg unused_images/
mv src/assets/images/Rahul_1-960.webp unused_images/
mv src/assets/images/Rahul_1.jpg unused_images/
mv src/assets/images/Rahul_1.webp unused_images/
mv src/assets/images/ravi-320.jpg unused_images/
mv src/assets/images/ravi-320.webp unused_images/
mv src/assets/images/ravi-640.jpg unused_images/
mv src/assets/images/ravi-640.webp unused_images/
mv src/assets/images/ravi-960.jpg unused_images/
mv src/assets/images/ravi-960.webp unused_images/
mv src/assets/images/ravi.jpg unused_images/
mv src/assets/images/ravi.webp unused_images/
mv src/assets/images/ravi1-320.jpg unused_images/
mv src/assets/images/ravi1-320.webp unused_images/
mv src/assets/images/ravi1.jpg unused_images/
mv src/assets/images/ravi1.webp unused_images/
mv src/assets/images/Sanjay_1-320.jpg unused_images/
mv src/assets/images/Sanjay_1-320.webp unused_images/
mv src/assets/images/Sanjay_1-640.jpg unused_images/
mv src/assets/images/Sanjay_1-640.webp unused_images/
mv src/assets/images/Sanjay_1-960.jpg unused_images/
mv src/assets/images/Sanjay_1-960.webp unused_images/
mv src/assets/images/Sanjay_1.jpg unused_images/
mv src/assets/images/Sanjay_1.webp unused_images/
mv src/assets/images/sivaaa_1-320.jpg unused_images/
mv src/assets/images/sivaaa_1-320.webp unused_images/
mv src/assets/images/sivaaa_1-640.jpg unused_images/
mv src/assets/images/sivaaa_1-640.webp unused_images/
mv src/assets/images/sivaaa_1-960.jpg unused_images/
mv src/assets/images/sivaaa_1-960.webp unused_images/
mv src/assets/images/sivaaa_1.jpg unused_images/
mv src/assets/images/sivaaa_1.webp unused_images/
mv src/assets/images/umar_1-320.jpg unused_images/
mv src/assets/images/umar_1-320.webp unused_images/
mv src/assets/images/umar_1-640.jpg unused_images/
mv src/assets/images/umar_1-640.webp unused_images/
mv src/assets/images/umar_1-960.jpg unused_images/
mv src/assets/images/umar_1-960.webp unused_images/
mv src/assets/images/umar_1.jpg unused_images/
mv src/assets/images/umar_1.webp unused_images/

# Remove unused misc images
mv src/assets/images/down-arrow.png unused_images/
mv src/assets/images/down-arrow.webp unused_images/
mv src/assets/images/forResearchers.svg unused_images/
mv src/assets/images/hd_bg4.svg unused_images/
mv src/assets/images/header_4.svg unused_images/
mv src/assets/images/nmLg.svg unused_images/
mv src/assets/images/nmlgwt.svg unused_images/
mv src/assets/images/rocket-launch.jpg unused_images/
mv src/assets/images/stars-bg.jpg unused_images/

echo "Unused images have been moved to the 'unused_images' directory."
echo "Total images removed: $(find unused_images -type f | wc -l)"

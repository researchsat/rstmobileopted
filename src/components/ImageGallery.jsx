import React, { useState } from 'react';
import LazyImage from './LazyImage';
import styles from '../styles/components/ImageGallery.module.css';

/**
 * Image Gallery component to replace jQuery-dependent galleries
 * @param {Object} props - Component props
 * @param {Array} props.images - Array of image objects with src, alt, and caption properties
 * @param {string} props.className - Additional CSS class for the gallery
 */
const ImageGallery = ({ images, className = '' }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Open lightbox with specific image
  const openLightbox = (index) => {
    setActiveIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  // Close lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = ''; // Restore scrolling
  };

  // Navigate to previous image
  const prevImage = (e) => {
    e.stopPropagation();
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Navigate to next image
  const nextImage = (e) => {
    e.stopPropagation();
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!isLightboxOpen) return;

    switch (e.key) {
      case 'ArrowLeft':
        prevImage(e);
        break;
      case 'ArrowRight':
        nextImage(e);
        break;
      case 'Escape':
        closeLightbox();
        break;
      default:
        break;
    }
  };

  // Add keyboard event listener when component mounts
  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen]);

  return (
    <div className={`${styles.gallery} ${className}`}>
      {/* Gallery Grid */}
      <div className={styles.galleryGrid}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.galleryItem}
            onClick={() => openLightbox(index)}
            role="button"
            tabIndex={0}
            aria-label={`Open ${image.alt || 'gallery image'} in lightbox`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(index);
              }
            }}
          >
            <LazyImage
              src={image.src}
              alt={image.alt || `Gallery image ${index + 1}`}
              className={styles.galleryImage}
              width={image.width}
              height={image.height}
              blur={true}
              responsive={true}
            />
            {image.caption && <div className={styles.caption}>{image.caption}</div>}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div
          className={styles.lightbox}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <i className="fas fa-times"></i>
            </button>

            <button
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={prevImage}
              aria-label="Previous image"
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <div className={styles.lightboxImageContainer}>
              <LazyImage
                src={images[activeIndex].src}
                alt={images[activeIndex].alt || `Gallery image ${activeIndex + 1}`}
                className={styles.lightboxImage}
                objectFit="contain"
                responsive={true}
              />
              {images[activeIndex].caption && (
                <div className={styles.lightboxCaption}>
                  {images[activeIndex].caption}
                </div>
              )}
            </div>

            <button
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={nextImage}
              aria-label="Next image"
            >
              <i className="fas fa-chevron-right"></i>
            </button>

            <div className={styles.counter}>
              {activeIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;

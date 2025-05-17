import React, { useState, useEffect, useRef } from 'react';
import { getResponsiveImageUrls, generatePlaceholderColor } from '../../utils/imageUtils';
import styles from '../../styles/components/BackgroundImage.module.css';

/**
 * BackgroundImage component for responsive background images with lazy loading
 * @param {Object} props - Component props
 * @param {string} props.src - Image source
 * @param {React.ReactNode} props.children - Child components
 * @param {string} props.className - Additional CSS class
 * @param {string} props.placeholderColor - Color to use as placeholder
 * @param {string} props.position - Background position
 * @param {string} props.size - Background size
 * @param {boolean} props.fixed - Whether to use fixed background
 * @param {boolean} props.overlay - Whether to add a dark overlay
 * @param {number} props.overlayOpacity - Opacity of the overlay (0-1)
 * @param {string} props.minHeight - Minimum height of the container
 */
const BackgroundImage = ({
  src,
  children,
  className = '',
  placeholderColor,
  position = 'center',
  size = 'cover',
  fixed = false,
  overlay = false,
  overlayOpacity = 0.5,
  minHeight = '300px',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);

  // Generate responsive image URLs
  const imageUrls = getResponsiveImageUrls(src);

  // Use provided placeholder color or generate one based on the image URL
  const bgColor = placeholderColor || generatePlaceholderColor(src);

  // Set up Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px',
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      observer.disconnect();
    };
  }, []);

  // Preload the image
  useEffect(() => {
    if (!isInView) return;

    const img = new Image();
    img.src = imageUrls.webp;
    img.onload = () => {
      setIsLoaded(true);
    };
    img.onerror = () => {
      // If WebP fails, try the fallback
      const fallbackImg = new Image();
      fallbackImg.src = imageUrls.fallback;
      fallbackImg.onload = () => {
        setIsLoaded(true);
      };
    };
  }, [isInView, imageUrls.webp, imageUrls.fallback]);

  // Calculate container classes
  const containerClasses = [
    styles.container,
    isLoaded ? styles.loaded : '',
    fixed ? styles.fixed : '',
    overlay ? styles.overlay : '',
    className,
  ].filter(Boolean).join(' ');

  // Calculate container style
  const containerStyle = {
    backgroundColor: bgColor,
    minHeight,
    ...(isInView && {
      backgroundImage: `url(${imageUrls.webp}), url(${imageUrls.fallback})`,
      backgroundPosition: position,
      backgroundSize: size,
      backgroundRepeat: 'no-repeat',
    }),
    ...(overlay && {
      '--overlay-opacity': overlayOpacity,
    }),
    ...props.style,
  };

  return (
    <div
      ref={containerRef}
      className={containerClasses}
      style={containerStyle}
      {...props}
    >
      {children}
    </div>
  );
};

export default BackgroundImage;

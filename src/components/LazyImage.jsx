import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/components/LazyImage.module.css';
import { getResponsiveImageUrls, generatePlaceholderColor } from '../utils/imageUtils';

const LazyImage = ({
  src,
  alt,
  className,
  placeholderColor,
  sizes,
  width,
  height,
  objectFit = 'cover',
  blur = false,
  responsive = true,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [webpSupported, setWebpSupported] = useState(true); // Assume WebP is supported initially
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  // Generate responsive image URLs
  const imageUrls = getResponsiveImageUrls(src, {
    sizes: [320, 640, 960, 1280, 1920],
  });

  // Use provided placeholder color or generate one based on the image URL
  const bgColor = placeholderColor || generatePlaceholderColor(src);

  // Check for WebP support
  useEffect(() => {
    const checkWebpSupport = async () => {
      try {
        // Create a WebP image
        const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
        const blob = await fetch(webpData).then(r => r.blob());

        // Try to decode the WebP image
        await createImageBitmap(blob);
        setWebpSupported(true);
      } catch (e) {
        setWebpSupported(false);
      }
    };

    checkWebpSupport();
  }, []);

  // Set up Intersection Observer for lazy loading
  useEffect(() => {
    // Create an Intersection Observer to detect when the image is in the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        // When the image is in view, set isInView to true
        if (entries[0].isIntersecting) {
          setIsInView(true);
          // Once we've started loading the image, we can disconnect the observer
          observer.disconnect();
        }
      },
      {
        // Start loading the image when it's 200px before it comes into view
        rootMargin: '200px',
        threshold: 0.01,
      }
    );

    // Start observing the container element
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      observer.disconnect();
    };
  }, []);

  // Handle image load event
  const handleImageLoaded = () => {
    setIsLoaded(true);
  };

  // Calculate aspect ratio styles if width and height are provided
  const aspectRatioStyle = width && height ? {
    aspectRatio: `${width} / ${height}`,
  } : {};

  return (
    <div
      ref={containerRef}
      className={`${styles.lazyImageContainer} ${className || ''} ${blur && !isLoaded ? styles.blur : ''}`}
      style={{
        backgroundColor: bgColor,
        ...aspectRatioStyle,
        ...props.style,
      }}
      data-loaded={isLoaded}
    >
      {isInView && (
        <picture>
          {/* WebP source for browsers that support it */}
          {webpSupported && responsive && (
            <source
              srcSet={imageUrls.webpSrcSet}
              sizes={sizes || imageUrls.sizes}
              type="image/webp"
            />
          )}

          {/* Fallback source for browsers that don't support WebP */}
          {responsive && (
            <source
              srcSet={imageUrls.fallbackSrcSet}
              sizes={sizes || imageUrls.sizes}
            />
          )}

          {/* Fallback img element for all browsers */}
          <img
            ref={imgRef}
            src={typeof src === 'string' ? (webpSupported ? imageUrls.webp : imageUrls.fallback) : src}
            alt={alt}
            className={`${styles.lazyImage} ${isLoaded ? styles.loaded : ''}`}
            onLoad={handleImageLoaded}
            width={width}
            height={height}
            style={{ objectFit }}
            loading="lazy"
            {...props}
          />
        </picture>
      )}

      {/* Placeholder shown while image is loading */}
      {!isLoaded && (
        <div className={styles.placeholder}>
          <div className={styles.spinner}></div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;

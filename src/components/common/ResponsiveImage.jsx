import React from 'react';
import LazyImage from './LazyImage';
import styles from '../styles/components/ResponsiveImage.module.css';

/**
 * ResponsiveImage component that uses LazyImage with responsive sizing
 * @param {Object} props - Component props
 * @param {string} props.src - Image source
 * @param {string} props.alt - Image alt text
 * @param {string} props.className - Additional CSS class
 * @param {string} props.sizes - Sizes attribute for responsive images
 * @param {number} props.width - Image width
 * @param {number} props.height - Image height
 * @param {string} props.objectFit - Object-fit property
 * @param {boolean} props.blur - Whether to apply blur effect while loading
 * @param {string} props.placeholderColor - Color to use as placeholder
 * @param {string} props.aspectRatio - Aspect ratio (e.g., '16/9', '4/3', '1/1')
 * @param {string} props.borderRadius - Border radius
 * @param {boolean} props.shadow - Whether to apply shadow
 * @param {string} props.align - Alignment (left, center, right)
 * @param {boolean} props.fullWidth - Whether the image should be full width
 */
const ResponsiveImage = ({
  src,
  alt,
  className = '',
  sizes,
  width,
  height,
  objectFit = 'cover',
  blur = true,
  placeholderColor,
  aspectRatio,
  borderRadius,
  shadow = false,
  align = 'center',
  fullWidth = false,
  ...props
}) => {
  // Calculate container classes
  const containerClasses = [
    styles.container,
    styles[`align-${align}`],
    shadow ? styles.shadow : '',
    fullWidth ? styles.fullWidth : '',
    className,
  ].filter(Boolean).join(' ');
  
  // Calculate container style
  const containerStyle = {
    ...(aspectRatio && { aspectRatio }),
    ...(borderRadius && { borderRadius }),
    ...(width && !fullWidth && { maxWidth: `${width}px` }),
  };
  
  return (
    <div className={containerClasses} style={containerStyle}>
      <LazyImage
        src={src}
        alt={alt}
        className={styles.image}
        sizes={sizes}
        width={width}
        height={height}
        objectFit={objectFit}
        blur={blur}
        placeholderColor={placeholderColor}
        responsive={true}
        {...props}
      />
    </div>
  );
};

export default ResponsiveImage;

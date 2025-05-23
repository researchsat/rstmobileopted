/**
 * Utility functions for image optimization
 */

/**
 * Generates responsive image URLs for different sizes and formats
 * @param {string} src - Original image source
 * @param {Object} options - Options for responsive images
 * @returns {Object} - Object containing responsive image URLs
 */
export const getResponsiveImageUrls = (src, options = {}) => {
  const {
    sizes = [320, 640, 960, 1280, 1920], // Default sizes
    formats = ['webp', 'jpg', 'png'], // Default formats
    quality = 80, // Default quality
    baseUrl = '', // Base URL for CDN or image service
  } = options;

  // If src is a remote URL or an imported image (object with a default property), handle it appropriately
  if (typeof src === 'object' && src.default) {
    // Handle imported images (Vite/Webpack imports)
    return {
      original: src.default || src,
      webp: src.default || src,
      fallback: src.default || src,
      srcSet: '',
      sizes: '',
    };
  } else if (typeof src === 'string' && (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:') || src.startsWith('blob:'))) {
    // Handle remote URLs
    return {
      original: src,
      webp: src,
      fallback: src,
      srcSet: '',
      sizes: '',
    };
  } else if (typeof src !== 'string') {
    // Handle direct imports (Vite/Webpack imports)
    return {
      original: src,
      webp: src,
      fallback: src,
      srcSet: '',
      sizes: '',
    };
  }

  // Extract file name and extension
  const lastDotIndex = src.lastIndexOf('.');
  const lastSlashIndex = src.lastIndexOf('/');

  // If no extension is found, assume it's a jpg
  const extension = lastDotIndex > lastSlashIndex ? src.slice(lastDotIndex + 1) : 'jpg';
  let basePath = lastDotIndex > lastSlashIndex ? src.slice(0, lastDotIndex) : src;

  // Check if the filename already contains size indicators (e.g., "-320", "-640")
  // If it does, strip them to get the base filename
  const sizePattern = /\-\d+$/;
  if (sizePattern.test(basePath)) {
    // Remove the size indicator from the base path
    basePath = basePath.replace(sizePattern, '');
  }

  // Determine the fallback format (use original if it's jpg or png, otherwise use jpg)
  const fallbackFormat = ['jpg', 'jpeg', 'png'].includes(extension.toLowerCase()) ? extension : 'jpg';

  // Generate WebP URL
  const webpUrl = `${basePath}.webp`;

  // Generate fallback URL
  const fallbackUrl = `${basePath}.${fallbackFormat}`;

  // Generate srcSet for WebP
  const webpSrcSet = sizes
    .map(size => `${basePath}-${size}.webp ${size}w`)
    .join(', ');

  // Generate srcSet for fallback
  const fallbackSrcSet = sizes
    .map(size => `${basePath}-${size}.${fallbackFormat} ${size}w`)
    .join(', ');

  // Generate sizes attribute
  const sizesAttr = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

  return {
    original: src,
    webp: webpUrl,
    fallback: fallbackUrl,
    webpSrcSet,
    fallbackSrcSet,
    sizes: sizesAttr,
  };
};

/**
 * Checks if WebP format is supported by the browser
 * @returns {Promise<boolean>} - Promise that resolves to true if WebP is supported
 */
export const isWebPSupported = async () => {
  // If we're in a server environment or the document is not available, return false
  if (typeof document === 'undefined') return false;

  // Check for createImageBitmap support
  if (!('createImageBitmap' in window)) return false;

  // Create a WebP image
  const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';

  try {
    // Try to decode the WebP image
    const blob = await fetch(webpData).then(r => r.blob());
    return createImageBitmap(blob).then(() => true, () => false);
  } catch (e) {
    return false;
  }
};

/**
 * Generates a placeholder color from an image URL
 * This is a simple hash function to generate a consistent color for a given image
 * In a real app, you might want to use a more sophisticated approach
 * @param {string} src - Image source
 * @returns {string} - Hex color code
 */
export const generatePlaceholderColor = (src) => {
  // Simple hash function
  let hash = 0;
  for (let i = 0; i < src.length; i++) {
    hash = ((hash << 5) - hash) + src.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
  }

  // Generate a pastel color from the hash
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 70%, 80%)`;
};

/**
 * Calculates the aspect ratio of an image
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @returns {number} - Aspect ratio (width / height)
 */
export const calculateAspectRatio = (width, height) => {
  return width / height;
};

/**
 * Formats file size in a human-readable format
 * @param {number} bytes - File size in bytes
 * @returns {string} - Formatted file size
 */
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

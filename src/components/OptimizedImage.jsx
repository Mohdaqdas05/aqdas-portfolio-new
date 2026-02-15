import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  mobileSrc = null,
  tabletSrc = null,
  loading = 'lazy',
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Determine which image to load based on screen size
    const updateImageSource = () => {
      const width = window.innerWidth;
      
      if (width <= 576 && mobileSrc) {
        setImageSrc(mobileSrc);
      } else if (width <= 968 && tabletSrc) {
        setImageSrc(tabletSrc);
      } else {
        setImageSrc(src);
      }
    };

    updateImageSource();

    // Update on window resize
    window.addEventListener('resize', updateImageSource);
    return () => window.removeEventListener('resize', updateImageSource);
  }, [src, mobileSrc, tabletSrc]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setIsError(true);
    setIsLoaded(true);
    // Fallback to original source
    setImageSrc(src);
  };

  return (
    <div className={`optimized-image-wrapper ${className}`}>
      {!isLoaded && (
        <div className="image-skeleton">
          <div className="skeleton-shimmer"></div>
        </div>
      )}
      
      <img
        src={imageSrc}
        alt={alt}
        className={`optimized-image ${isLoaded ? 'loaded' : 'loading'} ${isError ? 'error' : ''}`}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
      
      <style>{`
        .optimized-image-wrapper {
          position: relative;
          overflow: hidden;
        }

        .image-skeleton {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: inherit;
        }

        .dark-mode .image-skeleton {
          background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
          background-size: 200% 100%;
        }

        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        .optimized-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.3s ease;
        }

        .optimized-image.loading {
          opacity: 0;
        }

        .optimized-image.loaded {
          opacity: 1;
        }

        .optimized-image.error {
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  mobileSrc: PropTypes.string,
  tabletSrc: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager'])
};

export default OptimizedImage;

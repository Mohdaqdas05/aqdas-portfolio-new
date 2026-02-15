// Mobile-Specific Analytics Tracking

class MobileAnalytics {
  constructor() {
    this.isMobile = this.detectMobile();
    this.deviceInfo = this.getDeviceInfo();
    this.trackingEnabled = true;
  }

  detectMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  getDeviceInfo() {
    return {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      pixelRatio: window.devicePixelRatio || 1,
      touchPoints: navigator.maxTouchPoints || 0,
      connection: this.getConnectionInfo(),
      orientation: this.getOrientation(),
      standalone: window.matchMedia('(display-mode: standalone)').matches,
      timestamp: new Date().toISOString()
    };
  }

  getConnectionInfo() {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection) {
      return {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
        saveData: connection.saveData
      };
    }
    return null;
  }

  getOrientation() {
    return window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
  }

  // Track page views
  trackPageView(pageName) {
    if (!this.trackingEnabled) return;

    const event = {
      type: 'pageview',
      page: pageName,
      isMobile: this.isMobile,
      device: this.deviceInfo,
      timestamp: new Date().toISOString()
    };

    this.sendEvent(event);
    console.log('📊 Page View:', pageName, this.isMobile ? '(Mobile)' : '(Desktop)');
  }

  // Track user interactions
  trackInteraction(action, category, label, value) {
    if (!this.trackingEnabled) return;

    const event = {
      type: 'interaction',
      action,
      category,
      label,
      value,
      isMobile: this.isMobile,
      timestamp: new Date().toISOString()
    };

    this.sendEvent(event);
    console.log('👆 Interaction:', action, category, label);
  }

  // Track touch events (mobile-specific)
  trackTouchEvent(element, eventType) {
    if (!this.isMobile || !this.trackingEnabled) return;

    const event = {
      type: 'touch',
      element,
      eventType,
      device: this.deviceInfo,
      timestamp: new Date().toISOString()
    };

    this.sendEvent(event);
  }

  // Track form submissions
  trackFormSubmit(formName, success = true) {
    if (!this.trackingEnabled) return;

    const event = {
      type: 'form_submit',
      formName,
      success,
      isMobile: this.isMobile,
      timestamp: new Date().toISOString()
    };

    this.sendEvent(event);
    console.log('📝 Form Submit:', formName, success ? '✓' : '✗');
  }

  // Track scroll depth
  trackScrollDepth(depth) {
    if (!this.trackingEnabled) return;

    const event = {
      type: 'scroll',
      depth,
      isMobile: this.isMobile,
      timestamp: new Date().toISOString()
    };

    this.sendEvent(event);
  }

  // Track session duration
  trackSessionDuration() {
    const sessionStart = sessionStorage.getItem('sessionStart') || Date.now();
    sessionStorage.setItem('sessionStart', sessionStart);

    const duration = Date.now() - sessionStart;
    
    const event = {
      type: 'session_duration',
      duration: Math.floor(duration / 1000), // in seconds
      isMobile: this.isMobile,
      timestamp: new Date().toISOString()
    };

    this.sendEvent(event);
  }

  // Track PWA installation
  trackPWAInstall(accepted) {
    if (!this.trackingEnabled) return;

    const event = {
      type: 'pwa_install',
      accepted,
      device: this.deviceInfo,
      timestamp: new Date().toISOString()
    };

    this.sendEvent(event);
    console.log('📱 PWA Install:', accepted ? 'Accepted' : 'Dismissed');
  }

  // Track orientation changes (mobile)
  trackOrientationChange(orientation) {
    if (!this.isMobile || !this.trackingEnabled) return;

    const event = {
      type: 'orientation_change',
      orientation,
      device: this.deviceInfo,
      timestamp: new Date().toISOString()
    };

    this.sendEvent(event);
    console.log('🔄 Orientation:', orientation);
  }

  // Track network quality (mobile)
  trackNetworkQuality() {
    const connection = this.getConnectionInfo();
    if (!connection || !this.trackingEnabled) return;

    const event = {
      type: 'network_quality',
      connection,
      timestamp: new Date().toISOString()
    };

    this.sendEvent(event);
  }

  // Track performance metrics
  trackPerformance() {
    if (!this.trackingEnabled) return;

    const navigation = performance.getEntriesByType('navigation')[0];
    if (!navigation) return;

    const event = {
      type: 'performance',
      metrics: {
        loadTime: navigation.loadEventEnd - navigation.fetchStart,
        domReady: navigation.domContentLoadedEventEnd - navigation.fetchStart,
        firstPaint: this.getFirstPaint(),
        largestContentfulPaint: this.getLCP()
      },
      isMobile: this.isMobile,
      timestamp: new Date().toISOString()
    };

    this.sendEvent(event);
  }

  getFirstPaint() {
    const paint = performance.getEntriesByType('paint').find(entry => entry.name === 'first-contentful-paint');
    return paint ? paint.startTime : null;
  }

  getLCP() {
    // This is a simplified version - in production use PerformanceObserver
    const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
    return lcpEntries.length > 0 ? lcpEntries[lcpEntries.length - 1].startTime : null;
  }

  // Send event to analytics endpoint or Google Analytics
  sendEvent(event) {
    // Send to Google Analytics if configured
    if (window.gtag) {
      window.gtag('event', event.type, {
        event_category: event.category || event.type,
        event_label: event.label || event.action,
        value: event.value,
        is_mobile: this.isMobile,
        device_info: JSON.stringify(this.deviceInfo)
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Analytics Event:', event);
    }

    // Could also send to custom analytics endpoint
    // this.sendToCustomEndpoint(event);
  }

  // Initialize event listeners
  init() {
    // Track initial page load
    this.trackPageView(window.location.pathname);
    this.trackPerformance();

    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollPercentage = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercentage > maxScroll && scrollPercentage % 25 === 0) {
        maxScroll = scrollPercentage;
        this.trackScrollDepth(scrollPercentage);
      }
    });

    // Track orientation changes (mobile)
    if (this.isMobile) {
      window.addEventListener('orientationchange', () => {
        setTimeout(() => {
          this.trackOrientationChange(this.getOrientation());
        }, 100);
      });

      // Track network changes
      if (navigator.connection) {
        navigator.connection.addEventListener('change', () => {
          this.trackNetworkQuality();
        });
      }
    }

    // Track session duration on page unload
    window.addEventListener('beforeunload', () => {
      this.trackSessionDuration();
    });

    // Track visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        this.trackSessionDuration();
      }
    });

    console.log('📊 Mobile Analytics Initialized', this.isMobile ? '(Mobile Device)' : '(Desktop)');
  }
}

// Create singleton instance
const mobileAnalytics = new MobileAnalytics();

export default mobileAnalytics;

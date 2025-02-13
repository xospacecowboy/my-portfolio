'use client';

import { useCallback, useEffect, useState } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (
      command: 'event' | 'config' | 'js',
      action: string,
      params?: {
        event_category?: string;
        event_label?: string;
        value?: number;
        [key: string]: any;
      }
    ) => void;
  }
}

export const useAnalytics = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Check if GA is initialized
    const checkGA = () => {
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        setIsInitialized(true);
      }
    };

    checkGA();
    // Retry after a short delay if not initialized
    const timer = setTimeout(checkGA, 2000);

    return () => clearTimeout(timer);
  }, []);

  const trackEvent = useCallback((
    action: string,
    category?: string,
    label?: string,
    value?: number
  ) => {
    if (!isInitialized || typeof window.gtag !== 'function') {
      console.warn('Google Analytics not yet initialized');
      return;
    }

    try {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    } catch (error) {
      console.error('Error tracking event:', error);
    }
  }, [isInitialized]);

  const trackPageView = useCallback((url: string, title: string) => {
    if (!isInitialized || typeof window.gtag !== 'function') {
      console.warn('Google Analytics not yet initialized');
      return;
    }

    try {
      window.gtag('event', 'page_view', {
        page_path: url,
        page_title: title,
        page_location: window.location.href,
      });
    } catch (error) {
      console.error('Error tracking page view:', error);
    }
  }, [isInitialized]);

  const trackProjectView = useCallback((projectName: string) => {
    trackEvent('view_project', 'Portfolio', projectName);
  }, [trackEvent]);

  const trackExternalLink = useCallback((url: string, label: string) => {
    trackEvent('click_external_link', 'Navigation', label);
  }, [trackEvent]);

  const trackTimeOnPage = useCallback((duration: number, pagePath: string) => {
    trackEvent('time_on_page', 'Engagement', pagePath, Math.floor(duration));
  }, [trackEvent]);

  return {
    isInitialized,
    trackEvent,
    trackPageView,
    trackProjectView,
    trackExternalLink,
    trackTimeOnPage,
  };
};

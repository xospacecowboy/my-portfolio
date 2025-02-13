import { useCallback } from 'react';

declare global {
  interface Window {
    gtag: (
      command: 'event',
      action: string,
      params: {
        event_category?: string;
        event_label?: string;
        value?: number;
        [key: string]: any;
      }
    ) => void;
  }
}

export const useAnalytics = () => {
  const trackEvent = useCallback((
    action: string,
    category?: string,
    label?: string,
    value?: number
  ) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  }, []);

  const trackPageView = useCallback((url: string, title: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: url,
        page_title: title,
      });
    }
  }, []);

  const trackProjectView = useCallback((projectName: string) => {
    trackEvent('view_project', 'Portfolio', projectName);
  }, [trackEvent]);

  const trackExternalLink = useCallback((url: string, label: string) => {
    trackEvent('click_external_link', 'Navigation', label, undefined);
  }, [trackEvent]);

  const trackTimeOnPage = useCallback((duration: number, pagePath: string) => {
    trackEvent('time_on_page', 'Engagement', pagePath, Math.floor(duration));
  }, [trackEvent]);

  return {
    trackEvent,
    trackPageView,
    trackProjectView,
    trackExternalLink,
    trackTimeOnPage,
  };
};

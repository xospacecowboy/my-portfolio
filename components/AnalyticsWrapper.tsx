import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useAnalytics } from '../hooks/useAnalytics';

export function AnalyticsWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { trackPageView, trackTimeOnPage } = useAnalytics();

  useEffect(() => {
    // Track page view
    trackPageView(pathname, document.title);

    // Track time on page
    const startTime = Date.now();
    return () => {
      const duration = (Date.now() - startTime) / 1000; // Convert to seconds
      trackTimeOnPage(duration, pathname);
    };
  }, [pathname, trackPageView, trackTimeOnPage]);

  return <>{children}</>;
}

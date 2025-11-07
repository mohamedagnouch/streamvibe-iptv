'use client';

import { useEffect } from 'react';

/**
 * Component to handle automatic scrolling to pricing section
 * when page loads with #pricing in the URL
 */
export default function PricingScrollHandler() {
  useEffect(() => {
    // Check if URL has #pricing hash
    if (window.location.hash === '#pricing') {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
          pricingSection.scrollIntoView({ behavior: 'smooth' });
          // Clean up the hash from URL without triggering navigation
          window.history.replaceState(null, '', window.location.pathname);
        }
      }, 100);
    }
  }, []);

  return null;
}

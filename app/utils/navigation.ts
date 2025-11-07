/**
 * Navigate to the pricing section on the home page
 * If already on home page, scroll to pricing
 * If on another page, redirect to home page with pricing hash (which will be handled by PricingScrollHandler)
 */
export const navigateToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  
  // Check if we're on the home page
  if (window.location.pathname === '/') {
    // Already on home page, just scroll to pricing
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    // On another page, redirect to home page with hash
    // The PricingScrollHandler component will handle the scroll and clean up the hash
    window.location.href = '/#pricing';
  }
};

import { useEffect } from 'react';
import useMobileState from './useMobileState';

const MD_SCROLL_DISTANCE = 72; // 4.5rem
const SM_SCROLL_DISTANCE = 32; // 2rem

// ==========================================================================
// Custom Hook - usePageScrolled
//
// Adds functionality to check if page has been scrolled from top by amount
// ==========================================================================
function usePageScrolled(): boolean {
  // Mobile state
  const [isPageScrolled, setIsPageScrolled, isMobileScreen] = useMobileState(
    false,
    undefined,
    false,
  );

  //updates the threshold of scroll distance based on if mobile and updates state
  const updatePageScrolledStatus = () => {
    let scrollThreshold = isMobileScreen
      ? SM_SCROLL_DISTANCE
      : MD_SCROLL_DISTANCE;

    setIsPageScrolled(() => window.scrollY >= scrollThreshold);
  };

  // Sets initial scrolled state and adds event listener for window scroll
  useEffect(() => {
    updatePageScrolledStatus();

    window.addEventListener('scroll', updatePageScrolledStatus);
    return () => window.removeEventListener('scroll', updatePageScrolledStatus);
  }, []);

  return isPageScrolled;
}

export default usePageScrolled;

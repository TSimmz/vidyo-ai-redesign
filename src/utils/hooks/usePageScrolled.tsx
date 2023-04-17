import { useEffect } from 'react';
import useMobileState from './useMobileState';

const MD_SCROLL_DISTANCE = 72; // 4.5rem
const SM_SCROLL_DISTANCE = 32; // 2rem

function usePageScrolled(): boolean {
  const [isPageScrolled, setIsPageScrolled, isMobileScreen] = useMobileState(
    false,
    undefined,
    false,
  );

  const updatePageScrolledStatus = () => {
    let scrollThreshold = isMobileScreen
      ? SM_SCROLL_DISTANCE
      : MD_SCROLL_DISTANCE;

    setIsPageScrolled(() => window.scrollY >= scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener('scroll', updatePageScrolledStatus);
    return () => window.removeEventListener('scroll', updatePageScrolledStatus);
  }, []);

  return isPageScrolled;
}

export default usePageScrolled;

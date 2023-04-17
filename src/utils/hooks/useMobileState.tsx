import React, { useState, useEffect } from 'react';

const MEDIUM_SCREEN_WIDTH = 768; // Floor pixel width of medium screens

// ==========================================================================
// Custom Hook - useMobileState
//
// Functions essentially the same as the regular useState.
// Adds functionality to check for mobile screen size.
// Adds functionality to reset state after switching from mobile to desktop
// ==========================================================================
function useMobileState<T>(
  initialState: T, // Initial state
  resetState?: T, // Reset state (defaults to initial state)
  resetOnChange: boolean = true, // Option to disable reset on screenChange (defaults to true)
  maxScreenSize: number = MEDIUM_SCREEN_WIDTH, // Screen size (defaults to Tailwind medium screen width)
): [T, React.Dispatch<React.SetStateAction<T>>, boolean] {
  // Generic state
  const [componentState, setComponentState] = useState<T>(initialState);

  // State of mobile/desktop
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);

  // Sets state of mobile by checking window innerwidth
  const checkForMobile = () => {
    setIsMobileScreen(() => window.innerWidth < maxScreenSize);
  };

  // Resets the state based on resetState or initialState, if reset not provided
  const resetComponentState = () => {
    setComponentState(() => resetState || initialState);
  };

  // Sets up event listener for window resizes
  useEffect(() => {
    checkForMobile();

    window.addEventListener('resize', checkForMobile);
    return () => window.removeEventListener('resize', checkForMobile);
  }, []);

  // Checks if not mobile and resets the state
  useEffect(() => {
    if (resetOnChange && !isMobileScreen) resetComponentState();
  }, [isMobileScreen]);

  return [componentState, setComponentState, isMobileScreen];
}

export default useMobileState;

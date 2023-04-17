import React, { useState, useEffect } from 'react';

const MEDIUM_SCREEN_WIDTH = 768; // Floor pixel width of medium screens

interface IUseMobileState<T> {
  initialState: T; // Initial state
  closedState?: T; // Closed state (if different than initial state)
  maxScreenSize?: number; // Screen size (if different than default medium)
}

// ==========================================================================
// Custom Hook - useMobileState
//
// Functions essentially the same as the regular useState.
// Adds functionality to check for mobile screen size.
// Adds functionality to reset state after switching from mobile to desktop
// ==========================================================================
function useMobileState<T>({
  initialState,
  closedState,
  maxScreenSize = MEDIUM_SCREEN_WIDTH,
}: IUseMobileState<T>): [T, React.Dispatch<React.SetStateAction<T>>, boolean] {
  // Generic state for element to control
  const [openElement, setOpenElement] = useState<T>(initialState);

  // State of mobile/desktop
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);

  // Sets state of mobile by checking window innerwidth
  const checkForMobile = () => {
    setIsMobileScreen(() => window.innerWidth < maxScreenSize);
  };

  // Closes the element based on closed state or initial state, if closed not provided
  const closeElement = () => {
    setOpenElement(() => closedState || initialState);
  };

  // Sets up event listener for window resizes
  useEffect(() => {
    window.addEventListener('resize', checkForMobile);
    return () => window.removeEventListener('resize', checkForMobile);
  }, []);

  // Checks if no longer mobile and closes mobile element
  useEffect(() => {
    if (!isMobileScreen) closeElement();
  }, [isMobileScreen]);

  return [openElement, setOpenElement, isMobileScreen];
}

export default useMobileState;

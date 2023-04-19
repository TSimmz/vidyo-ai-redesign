import Image from 'next/image';
import { useEffect } from 'react';
import { navLinks } from '~/utils/constants';
import { DesktopNavItem, MobileNavMenu } from '~/components';
import { useMobileState, usePageScrolled } from '~/utils/hooks';
import { motion } from 'framer-motion';

interface IHeader extends React.PropsWithChildren<any> {}

const Header: React.FC<IHeader> = () => {
  const isPageScrolled = usePageScrolled();
  const [isMobileMenuOpen, setIsMobileMenuOpen, isMobileScreen] =
    useMobileState(false);

  useEffect(() => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    if (mobileMenuButton) {
      if (isMobileMenuOpen) {
        mobileMenuButton.classList.add('open');
        document.body.style.overflow = 'hidden';
      } else {
        mobileMenuButton.classList.remove('open');
        document.body.style.overflow = 'unset';
      }
    }
  }, [isMobileMenuOpen]);

  const handleMobileButtonPress = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setIsMobileMenuOpen((previousState) => !previousState);
  };

  return (
    <header
      className={`fixed z-10 w-full ${
        isPageScrolled ? 'h-12 bg-white' : 'h-16 bg-transparent'
      } drop-shadow-md transition-all duration-300 ease-in-out`}
    >
      <nav className="mx-auto flex h-full w-full max-w-[1600px] items-center justify-between px-5 md:px-5 lg:px-12">
        {/* ===================== Header Logo and Text ===================== */}
        <div className="flex h-full grow items-center gap-4">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="flex h-full items-center gap-3 text-[26px] font-semibold"
          >
            <a className="shrink-0" href="/">
              <Image
                className="rounded-3xl"
                src="/logo.png"
                alt="company logo"
                width="30"
                height="30"
              />
            </a>
            <a href="/">vidyo.ai</a>
          </motion.h1>

          {/* ===================== Desktop Nav Links ===================== */}
          <ul
            id="desktop-navlinks"
            className="hidden h-full items-end whitespace-nowrap font-semibold md:flex"
          >
            {navLinks.map((link) => (
              <DesktopNavItem link={link} isPageScrolled={isPageScrolled} />
            ))}
          </ul>
        </div>

        {/* ===================== Mobile Nav Menu ===================== */}
        <div className="relative block h-full md:hidden">
          {/* Hamburger button */}
          <button
            id="mobile-menu-button"
            className="group h-full cursor-pointer"
            onClick={handleMobileButtonPress}
          >
            <div className="relative top-0 h-1 w-8 rounded-full bg-black transition-all group-open:top-2 group-open:rotate-45"></div>
            <div className="mt-1 h-1 w-8 rounded-full bg-black opacity-100 transition-all group-open:opacity-0"></div>
            <div className="relative top-0 mt-1 h-1 w-8 rounded-full bg-black transition-all group-open:-top-2 group-open:-rotate-45"></div>
          </button>

          {/* Aside menu */}
          {isMobileMenuOpen === true ? (
            <MobileNavMenu isPageScrolled={isPageScrolled} />
          ) : null}
        </div>

        {/* ===================== Desktop Login/Sign up buttons ===================== */}
        <div
          id="header-cta"
          className="hidden basis-[220px] items-center justify-end gap-2 font-semibold md:flex"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className={`rounded-lg bg-white px-5 py-1 ${
              isPageScrolled ? 'drop-shadow-md' : ''
            } hover:bg-zinc-50`}
          >
            Sign in
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className={`rounded-lg bg-black px-5 py-1 text-white hover:bg-zinc-800 ${
              isPageScrolled ? 'drop-shadow-md' : ''
            }`}
          >
            Sign up
          </motion.button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

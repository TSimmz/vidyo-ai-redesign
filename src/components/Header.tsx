import Image from 'next/image';
import { useEffect } from 'react';
import { navLinks } from '~/utils/constants';
import { DesktopNavItem, MobileNavLink } from '~/components';
import { useMobileState, usePageScrolled } from '~/utils/hooks';

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
            <aside
              className={`absolute left-[-20px] top-[calc(100%-1px)] z-10 ${
                isPageScrolled
                  ? 'h-[calc(100vh-3rem+1px)]'
                  : 'h-[calc(100vh-4rem+1px)]'
              } w-screen overflow-hidden bg-zinc-600/50`}
            >
              <div
                className={`relative h-full w-[80vw] overflow-hidden bg-white sm:w-[60vw]`}
              >
                <ul
                  id="mobile-navlinks"
                  className="flex w-full flex-col items-center font-semibold"
                >
                  {navLinks.map((link) => (
                    <MobileNavLink link={link} />
                  ))}
                </ul>
                <div className="absolute bottom-0 flex w-full justify-between border-t-2 border-zinc-200 font-semibold">
                  <div className="p-4">
                    <Image
                      className="rounded-3xl"
                      src="/logo.png"
                      alt="company logo"
                      width="30"
                      height="30"
                    />
                  </div>
                  <div className="flex items-center gap-4 p-4">
                    <button
                      className={`rounded-lg bg-white px-6 py-1 drop-shadow-lg transition-all duration-[250ms] ease-in-out hover:bg-zinc-50`}
                    >
                      Sign in
                    </button>
                    <button
                      className={`rounded-lg bg-black px-6 py-1 text-white transition-all duration-[250ms] ease-in-out hover:bg-zinc-800 ${
                        isPageScrolled ? 'drop-shadow-md' : ''
                      }`}
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          ) : null}
        </div>

        {/* ===================== Header Logo and Text ===================== */}
        <div className="flex h-full grow items-center gap-4 md-max:justify-center">
          <div className="flex h-full items-center gap-3 text-[26px] font-semibold transition-all ease-in-out hover:scale-[1.02]">
            <a href="/">
              <Image
                className="rounded-3xl"
                src="/logo.png"
                alt="company logo"
                width="30"
                height="30"
              />
            </a>
            <a href="/">vidyo.ai</a>
          </div>

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

        {/* ===================== Mobile Spacer to center Logo ===================== */}
        <div className="relative block h-full w-8 md:hidden"></div>

        {/* ===================== Desktop Login/Sign up buttons ===================== */}
        <div
          id="header-cta"
          className="hidden basis-[220px] items-center justify-end gap-1 font-semibold md:flex"
        >
          <button
            className={`rounded-lg bg-white px-6 py-1 transition-all duration-[250ms] ease-in-out ${
              isPageScrolled ? 'drop-shadow-md' : ''
            } hover:bg-zinc-50`}
          >
            Sign in
          </button>
          <button
            className={`rounded-lg bg-black px-6 py-1 text-white transition-all duration-[250ms] ease-in-out hover:bg-zinc-800 ${
              isPageScrolled ? 'drop-shadow-md' : ''
            }`}
          >
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

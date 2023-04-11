import Image from 'next/image';
import { useEffect, useState } from 'react';
import { navLinks } from '~/utils/constants';

const MEDIUM_SCREEN_WIDTH = 1024;
const MD_SCROLL_DISTANCE = 72; // 4.5rem
const SM_SCROLL_DISTANCE = 32; // 2rem

interface IHeader extends React.PropsWithChildren<any> {}

const Header: React.FC<IHeader> = () => {
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  const [mobileMenuState, setMobileMenuState] = useState(false);

  const updatePageScrolledStatus = () => {
    let scrollThreshold =
      window.innerWidth >= MEDIUM_SCREEN_WIDTH
        ? MD_SCROLL_DISTANCE
        : SM_SCROLL_DISTANCE;
    setIsPageScrolled(window.scrollY >= scrollThreshold);
  };

  const updatedMobileMenuState = () => {
    if (window.innerWidth >= MEDIUM_SCREEN_WIDTH) setMobileMenuState(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', updatePageScrolledStatus);
    window.addEventListener('resize', updatedMobileMenuState);
  }, []);

  useEffect(() => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    if (mobileMenuButton) {
      if (mobileMenuState) mobileMenuButton.classList.add('open');
      else mobileMenuButton.classList.remove('open');
    }
  }, [mobileMenuState]);

  const handleMobileButtonPress = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setMobileMenuState((previousState) => !previousState);
  };

  return (
    <header
      className={`fixed z-10 flex w-full items-center ${
        isPageScrolled ? 'h-16 bg-white drop-shadow-md' : 'h-20 bg-transparent'
      } transition-all duration-500 ease-in-out`}
    >
      <nav className="sticky flex h-full w-full items-center justify-between px-5 md:px-12 lg:px-20 ">
        {/* ===================== Header Logo and Text ===================== */}
        <div
          id="header-logo"
          className="flex items-center gap-3 text-[26px] font-semibold transition-all ease-in-out hover:scale-[1.05]"
        >
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

        {/* ===================== Mobile Nav Menu ===================== */}
        <div className="relative block h-full cursor-pointer lg:hidden">
          {/* Hamburger button */}
          <button
            id="mobile-menu-button"
            className="group h-full"
            onClick={handleMobileButtonPress}
          >
            <div className="relative top-0 h-1 w-8 rounded-full bg-black transition-all group-open:top-2 group-open:rotate-45"></div>
            <div className="mt-1 h-1 w-8 rounded-full bg-black opacity-100 transition-all group-open:opacity-0"></div>
            <div className="relative top-0 mt-1 h-1 w-8 rounded-full bg-black transition-all group-open:-top-2 group-open:-rotate-45"></div>
          </button>

          {/* Aside menu */}
          {mobileMenuState === true ? (
            <aside className="absolute right-[-20px] top-[calc(100%-1px)] z-10 h-screen w-screen overflow-hidden bg-white text-lg drop-shadow-lg md:right-[-3rem] md:w-[60vw] ">
              <ul
                id="mobile-navlinks"
                className="flex w-full flex-col items-center font-semibold"
              >
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className="group relative flex h-full w-full flex-col items-center py-3 transition-colors duration-[250ms] ease-in-out marker:text-lg hover:bg-zinc-400/10 "
                  >
                    <span className="cursor-pointer">{link.text}</span>
                    {link.subLinks ? (
                      <ul className="mt-3 hidden w-full whitespace-nowrap text-center font-normal group-hover:block">
                        {link.subLinks.map((subLink) => (
                          <li
                            key={subLink.id}
                            className="cursor-pointer px-4 py-3 hover:bg-zinc-400/20"
                          >
                            <span>{subLink.text}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </aside>
          ) : null}
        </div>

        {/* ===================== Desktop Nav Links ===================== */}
        <ul
          id="desktop-navlinks"
          className="hidden h-full items-center font-semibold lg:flex"
        >
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="group relative flex h-full items-center px-3 text-lg hover:bg-gradient-to-b hover:from-zinc-400/20 hover:to-transparent hover:underline lg:px-4"
            >
              <span className="cursor-pointer">{link.text}</span>
              {link.subLinks ? (
                <ul className="absolute left-1/2 top-full hidden -translate-x-1/2 overflow-hidden whitespace-nowrap rounded-b-lg bg-white font-normal drop-shadow-md group-hover:block">
                  {link.subLinks.map((subLink) => (
                    <li
                      key={subLink.id}
                      className="cursor-pointer px-4 py-3 hover:bg-zinc-400/20"
                    >
                      <span>{subLink.text}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>

        {/* ===================== Desktop Login/Sign up buttons ===================== */}
        <div
          id="header-cta"
          className="hidden items-center gap-3 font-semibold lg:flex"
        >
          <button
            className={`box-border rounded-3xl bg-white px-6 py-2 transition-all duration-[250ms] ease-in-out ${
              isPageScrolled ? 'drop-shadow-lg' : ''
            } hover:bg-zinc-200/70`}
          >
            LOGIN
          </button>
          <button className="rounded-3xl bg-black px-6 py-2 text-white transition-all duration-[250ms] ease-in-out hover:bg-zinc-700">
            SIGN UP
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

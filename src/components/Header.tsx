import Image from 'next/image';
import { useEffect, useState } from 'react';
import { navLinks } from '~/utils/constants';

interface IHeader extends React.PropsWithChildren<any> {}

const Header: React.FC<IHeader> = () => {
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  const [mobileMenuState, setMobileMenuState] = useState(false);

  const updatePageScrolledStatus = () => {
    setIsPageScrolled(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', updatePageScrolledStatus);
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
        isPageScrolled
          ? 'h-16 bg-white/95 drop-shadow-md'
          : 'h-20 bg-transparent'
      } transition-all duration-500 ease-in-out`}
    >
      <nav className="flex h-full w-full items-center justify-between px-12 lg:px-20 ">
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
          <button
            id="mobile-menu-button"
            className="group peer h-full"
            onClick={handleMobileButtonPress}
          >
            <div className="relative top-0 h-1 w-8 rounded-full bg-black transition-all group-open:top-2 group-open:rotate-45"></div>
            <div className="mt-1 h-1 w-8 rounded-full bg-black opacity-100 transition-all group-open:opacity-0"></div>
            <div className="relative top-0 mt-1 h-1 w-8 rounded-full bg-black transition-all group-open:-top-2 group-open:-rotate-45"></div>
          </button>
        </div>

        {/* ===================== Desktop Nav Links ===================== */}
        <ul
          id="desktop-navlinks"
          className="hidden h-full items-center font-semibold lg:flex"
        >
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="group relative flex h-full items-center px-3 text-lg hover:bg-gradient-to-b hover:from-zinc-500/20 hover:to-transparent hover:underline lg:px-4"
            >
              <span className="cursor-pointer">{link.text}</span>
              {link.subLinks ? (
                <ul className="absolute left-0 top-full hidden overflow-hidden whitespace-nowrap rounded-b-lg bg-white  drop-shadow-md group-hover:block">
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

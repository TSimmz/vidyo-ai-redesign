import Image from 'next/image';
import { useEffect, useState } from 'react';
import { navLinks } from '~/utils/constants';

interface IHeader extends React.PropsWithChildren<any> {}

const Header: React.FC<IHeader> = () => {
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  const updatePageScrolledStatus = () => {
    setIsPageScrolled(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', updatePageScrolledStatus);
  }, []);

  return (
    <header
      className={`fixed z-10 flex w-full items-center ${
        isPageScrolled
          ? 'h-16 bg-white/95 drop-shadow-md'
          : 'h-20 bg-transparent'
      } transition-all duration-500 ease-in-out`}
    >
        <div
          id="header-logo"
          className="flex items-center gap-3 text-[26px] font-semibold"
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
        <ul id="desktop-navlinks" className="flex gap-8 font-semibold">
          {navLinks.map((link) => (
            <li>{link.text}</li>
          ))}
        </ul>
        <div id="header-cta" className="flex items-center gap-3 font-semibold">
          <button
            className={`box-border w-28 rounded-3xl bg-white px-4 py-[6px] transition-all duration-[250ms] ease-in-out ${
              isPageScrolled ? 'border-2 border-zinc-500' : ''
            }`}
          >
            LOGIN
          </button>
          <button className="w-28 rounded-3xl bg-black px-5 py-[6px] text-white">
            SIGN UP
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

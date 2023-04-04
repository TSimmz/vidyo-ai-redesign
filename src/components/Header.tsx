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
      <nav className="flex h-full w-full items-center justify-between px-20 ">
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
        <ul
          id="desktop-navlinks"
          className="flex h-full items-center font-semibold"
        >
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="group relative flex h-full items-center px-4 text-lg hover:bg-gradient-to-b hover:from-zinc-500/20 hover:to-transparent hover:underline"
            >
              <span className="cursor-pointer">{link.text}</span>
              {link.subLinks ? (
                <ul className="absolute left-0 top-full hidden overflow-hidden whitespace-nowrap rounded-b-lg bg-white  group-hover:block">
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
        <div id="header-cta" className="flex items-center gap-3 font-semibold">
          <button
            className={`box-border rounded-3xl bg-white px-6 py-2 transition-all duration-[250ms] ease-in-out ${
              isPageScrolled ? 'drop-shadow-lg' : ''
            } hover:bg-zinc-200`}
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

import Image from 'next/image';
import { navLinks } from '~/utils/constants';

interface IHeader extends React.PropsWithChildren<any> {}

const Header: React.FC<IHeader> = () => {
  return (
    <header className="h-20 bg-slate-300 px-20 py-4">
      <nav className="flex items-center justify-between">
        <div
          id="header-logo"
          className="flex items-center gap-3 text-[26px] font-semibold"
        >
          <a href="/">
            <Image src="/logo.png" alt="company logo" width="25" height="25" />
          </a>
          <a href="/">vidyo.ai</a>
        </div>
        <ul id="desktop-navlinks" className="flex gap-8 font-semibold">
          {navLinks.map((link) => (
            <li>{link.text}</li>
          ))}
        </ul>
        <div id="header-cta" className="flex items-center gap-3 font-semibold">
          <button className="w-28 rounded-3xl bg-white px-4 py-[6px]">
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

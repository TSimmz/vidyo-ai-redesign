import Image from 'next/image';
import { useEffect, useState } from 'react';
import { footerLinks } from '~/utils/constants';
import {
  IconBrandTiktok,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandLinkedin,
  IconBrandFacebook,
} from '@tabler/icons-react';

interface IHeader extends React.PropsWithChildren<any> {}

const Footer: React.FC<IHeader> = () => {
  const [currentOpenSubMenuItem, setCurrentOpenSubMenuItem] = useState('');

  const handleMobileSubMenuClick = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    const clickedSubMenuItem = (event.target as HTMLLIElement).id;

    if (clickedSubMenuItem) {
      if (clickedSubMenuItem === currentOpenSubMenuItem)
        setCurrentOpenSubMenuItem(() => '');
      else setCurrentOpenSubMenuItem(() => clickedSubMenuItem);
    }
  };

  return (
    <footer className="mx-auto flex max-w-7xl flex-col items-center justify-center px-8 py-12 text-xs lg:text-sm sm-max:py-4">
      <div className="flex w-full flex-row justify-between">
        {/* ===================== Footer Logo, Text, and Socials ===================== */}
        <div
          id="footer-logo"
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
        <div id="footer-social-icons" className="flex items-center gap-3">
          <IconBrandInstagram
            size="20"
            className="text-zinc-800 drop-shadow-md"
          />
          <IconBrandLinkedin
            size="20"
            className="text-zinc-800 drop-shadow-md"
          />
          <IconBrandYoutube
            size="20"
            className="text-zinc-800 drop-shadow-md"
          />
          <IconBrandFacebook
            size="20"
            className="text-zinc-800 drop-shadow-md"
          />
          <IconBrandTiktok size="16" className="text-zinc-800 drop-shadow-md" />
        </div>
      </div>

      {/* ===================== Desktop Footer Links ===================== */}
      <div className="mt-8 flex w-full justify-evenly gap-4 border-b-2 border-zinc-300 pb-12 lg:gap-8 footer-mobile:hidden">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.id} className="flex-1">
            <p className="py-2 font-semibold">{footerLink.title}</p>
            <ul>
              {footerLink.links.map((link) => (
                <li key={link.id} className="py-1 text-zinc-600">
                  <a href={link.link}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ===================== Mobile Footer Links ===================== */}
      <ul className="mt-8 hidden w-full flex-col border-b-2 border-zinc-300 pb-8 text-center text-sm footer-mobile:flex">
        {footerLinks.map((footerLink) => {
          const isOpen = currentOpenSubMenuItem === footerLink.id;
          return (
            <li
              id={footerLink.id}
              className={`flex cursor-pointer flex-col items-center rounded-xl px-3 py-2 ${
                isOpen ? 'bg-zinc-50' : ''
              }`}
              onClick={handleMobileSubMenuClick}
            >
              <h3 className="pointer-events-none flex w-full items-center justify-between text-left font-semibold">
                <span>{footerLink.title}</span>
                <span
                  className={`pointer-events-none ml-2 text-center text-xl leading-[100%] transition-all duration-200 ease-in-out ${
                    isOpen ? 'translate-x-[1px] rotate-[135deg]' : ''
                  } `}
                >
                  +
                </span>
              </h3>
              <ul
                className={`${
                  isOpen ? 'block' : 'hidden'
                } ml-1 mt-1 w-full text-left`}
              >
                {footerLink.links.map((link) => (
                  <li
                    key={link.id}
                    className="py-1 text-zinc-600 hover:text-black"
                  >
                    <a href={link.link}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>

      {/* ===================== Copyright ===================== */}
      <p className="mt-8 text-zinc-400  sm-max:mt-4">
        &copy; 2022 vidyoAI Ventures Pvt. Ltd.
      </p>
    </footer>
  );
};

export default Footer;

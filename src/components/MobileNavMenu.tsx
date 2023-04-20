import Image from 'next/image';
import { MobileNavLink } from '~/components';
import { motion } from 'framer-motion';
import { navLinks } from '~/utils/constants';

interface IMobileNavMenu {
  isPageScrolled: boolean;
}

const MobileNavMenu: React.FC<IMobileNavMenu> = ({ isPageScrolled }) => {
  return (
    <motion.aside
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.2, delay: 0.1 } }}
      className={`absolute right-[-20px] top-[calc(100%-1px)] z-10 flex justify-end ${
        isPageScrolled ? 'h-[calc(100vh-3rem+1px)]' : 'h-[calc(100vh-4rem+1px)]'
      } w-screen overflow-hidden bg-zinc-600/50`}
    >
      <motion.div
        initial={{ clipPath: 'inset(0% 0% 0% 100%)' }}
        animate={{
          clipPath: 'inset(0% 0% 0% 0%)',
          transition: {
            type: 'spring',
            bounce: 0,
            duration: 0.3,
            delay: 0.1,
          },
        }}
        exit={{
          clipPath: 'inset(0% 0% 0% 100%)',
          transition: {
            type: 'spring',
            bounce: 0,
            duration: 0.3,
          },
        }}
        className={`relative h-full w-[80vw] overflow-hidden bg-white sm:w-[60vw]`}
      >
        <ul
          id="mobile-navlinks"
          className="flex w-full flex-col items-center font-semibold"
        >
          {navLinks.map((link) => (
            <MobileNavLink key={link.id} link={link} />
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
      </motion.div>
    </motion.aside>
  );
};

export default MobileNavMenu;

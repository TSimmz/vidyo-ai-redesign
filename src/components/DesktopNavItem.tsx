import { useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { motion, Variants } from 'framer-motion';
import { type NavLink } from '~/utils/types';

const listVariants: Variants = {
  open: {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.5,
      delayChildren: 0.1,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: 'inset(0% 0% 100% 0% round 10px)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.3,
    },
  },
};

const listItemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

interface IDesktopNavItem {
  link: NavLink;
  isPageScrolled: boolean;
}

const DesktopNavItem: React.FC<IDesktopNavItem> = ({
  link,
  isPageScrolled,
}) => {
  const [isItemHovered, setIsItemHovered] = useState(false);

  return (
    <motion.li
      initial={false}
      animate={isItemHovered ? 'open' : 'closed'}
      onMouseEnter={() => setIsItemHovered(true)}
      onMouseLeave={() => setIsItemHovered(false)}
      key={link.id}
      className={`group relative flex h-full cursor-pointer items-center pl-3 pr-2 hover:bg-gradient-to-b ${
        isPageScrolled
          ? 'hover:from-zinc-400/10 hover:to-transparent'
          : 'hover:from-transparent hover:to-white'
      } hover:text-zinc-700 lg:px-4`}
    >
      <span>{link.text}</span>
      {link.subLinks ? (
        <IconChevronDown
          size="16"
          className="ml-1 transition-transform duration-300 ease-in-out group-hover:translate-y-1"
        />
      ) : null}
      {link.subLinks ? (
        <motion.ul
          variants={listVariants}
          className={`absolute left-1/2 top-full hidden -translate-x-1/2 overflow-hidden whitespace-nowrap rounded-b-lg ${
            isPageScrolled ? '' : 'rounded-t-lg'
          } bg-white font-normal transition-all duration-300 ease-in-out group-hover:block`}
        >
          {link.subLinks.map((subLink) => (
            <motion.li
              variants={listItemVariants}
              key={subLink.id}
              className="cursor-pointer px-4 py-3 hover:bg-zinc-400/20 hover:text-black"
            >
              <span>{subLink.text}</span>
            </motion.li>
          ))}
        </motion.ul>
      ) : null}
    </motion.li>
  );
};

export default DesktopNavItem;

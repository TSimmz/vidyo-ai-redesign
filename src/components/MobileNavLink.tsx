import { useState } from 'react';
import { IconChevronRight } from '@tabler/icons-react';
import { type NavLink } from '~/utils/types';

interface IMobileNavLink extends React.PropsWithChildren<any> {
  link: NavLink;
}

const MobileNavLink: React.FC<IMobileNavLink> = ({ link }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setIsSubMenuOpen((previousState) => !previousState);
  };

  return (
    <li
      key={link.id}
      className="group relative flex h-full w-full flex-col items-start border-b-2 border-zinc-200 px-3 py-3 transition-colors duration-[250ms] ease-in-out marker:text-lg"
      onClick={handleListItemClick}
    >
      <div className="flex w-full cursor-pointer justify-between">
        <span className="group-hover:text-zinc-600">{link.text}</span>
        {link.subLinks ? (
          <IconChevronRight
            size="18"
            className={`relative top-[6px] ml-2 transition-transform duration-300 ease-in-out ${
              isSubMenuOpen
                ? 'rotate-90 group-hover:translate-y-1'
                : 'group-hover:translate-x-1'
            }`}
          />
        ) : null}
      </div>
      {link.subLinks ? (
        <ul
          className={`mt-2 w-full whitespace-nowrap font-normal ${
            isSubMenuOpen ? 'block' : 'hidden'
          }`}
        >
          {link.subLinks.map((subLink) => (
            <li
              key={subLink.id}
              className="cursor-pointer rounded-xl px-4 py-3 hover:bg-zinc-400/20"
            >
              <span>{subLink.text}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default MobileNavLink;

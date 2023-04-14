import { useState } from 'react';
import { type FAQ } from '~/utils/types';

interface IFAQItem extends React.PropsWithChildren<any> {
  data: FAQ;
}

const FAQItem: React.FC<IFAQItem> = ({ data }) => {
  const [isFAQOpen, setIsFAQOpen] = useState(false);

  const handleFAQClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setIsFAQOpen((previousState) => !previousState);
  };

  return (
    <li
      className={`cursor-pointer rounded-xl px-3 py-2 transition-all duration-500 ease-in-out ${
        isFAQOpen ? 'scale-[1.05] bg-white drop-shadow-md' : ''
      }`}
      onClick={handleFAQClick}
    >
      <h3
        className={`flex justify-between align-middle font-semibold sm:text-lg`}
      >
        <span>{data.question}</span>
        <span
          className={`ml-2 text-center text-xl leading-[100%] transition-all duration-200 ease-in-out  ${
            isFAQOpen
              ? 'rotate-[135deg] sm:translate-x-[-1px] sm:translate-y-[-3px]'
              : ''
          } `}
        >
          +
        </span>
      </h3>
      <p
        className={`${isFAQOpen ? 'block' : 'hidden'} ml-1 mt-1 sm-max:text-sm`}
      >
        {data.answer}
      </p>
    </li>
  );
};

export default FAQItem;

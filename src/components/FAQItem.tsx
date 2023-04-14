import { useEffect, useState } from 'react';
import { type FAQ } from '~/utils/types';

interface IFAQItem extends React.PropsWithChildren<any> {
  data: FAQ;
  isOpen: boolean;
  onClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

const FAQItem: React.FC<IFAQItem> = ({ data, isOpen, onClick }) => {
  return (
    <li
      id={data.id}
      className={`cursor-pointer rounded-xl px-3 py-2 transition-all duration-500 ease-in-out ${
        isOpen ? 'scale-[1.05] bg-white drop-shadow-md' : ''
      }`}
      onClick={onClick}
    >
      {/* pointer-events-none prevents the children from being clicked and send through the onClick */}
      <h3
        className={`pointer-events-none flex justify-between align-middle font-semibold sm:text-lg`}
      >
        <span>{data.question}</span>
        <span
          className={`ml-2 text-center text-xl leading-[100%] transition-all duration-200 ease-in-out  ${
            isOpen
              ? 'rotate-[135deg] sm:translate-x-[-1px] sm:translate-y-[-3px]'
              : ''
          } `}
        >
          +
        </span>
      </h3>
      <p
        className={`${
          isOpen ? 'block' : 'hidden'
        } pointer-events-none ml-1 mt-1 sm-max:text-sm`}
      >
        {data.answer}
      </p>
    </li>
  );
};

export default FAQItem;

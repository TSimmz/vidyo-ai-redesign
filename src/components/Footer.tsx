import Image from 'next/image';
import { useEffect, useState } from 'react';
import { footerLinks } from '~/utils/constants';

interface IHeader extends React.PropsWithChildren<any> {}

const Footer: React.FC<IHeader> = () => {
  return <footer></footer>;
};

export default Footer;

import { useState } from 'react';
import FAQ from './FAQItem';
import { faqs } from '~/utils/constants';

interface IFAQSection extends React.PropsWithChildren<any> {}

const FAQSection: React.FC<IFAQSection> = () => {
  const [currentOpenFaq, setCurrentOpenFaq] = useState('');

  const handleFaqClick = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    const clickedFaq = (event.target as HTMLLIElement).id;

    if (clickedFaq === currentOpenFaq) setCurrentOpenFaq(() => '');
    else setCurrentOpenFaq(() => clickedFaq);
  };

  return (
    <section className="relative w-full p-8 lg:p-16">
      <div className="mx-auto mt-8 max-w-screen-xl lg:mt-20">
        <article className="text-center">
          <h2 className="text-4xl font-medium tracking-tight transition-all duration-[250ms] ease-linear sm:text-5xl md:text-6xl lg:text-7xl ">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base transition-all duration-[250ms] ease-linear md:mt-8 lg:text-lg">
            Here we have compiled a list of common questions and their answers
            to help you better understand our product and services
          </p>
        </article>
        <div id="faq-list" className="mx-auto mt-8 max-w-[800px]">
          <ul className="flex flex-col gap-2">
            {faqs.map((faq) => (
              <FAQ
                key={faq.id}
                data={faq}
                isOpen={currentOpenFaq === faq.id}
                onClick={handleFaqClick}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

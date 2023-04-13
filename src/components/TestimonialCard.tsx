import { useMemo } from 'react';
import { type Testimonial } from '~/utils/types';
import { IconUser, IconStarFilled } from '@tabler/icons-react';

const TOTAL_STARS = 5;

interface ITestimonialCard extends React.PropsWithChildren<any> {
  data: Testimonial;
}

const TestimonialCard: React.FC<ITestimonialCard> = ({ data }) => {
  const renderRating = useMemo(() => {
    return new Array(TOTAL_STARS)
      .fill(null)
      .map((_, index) =>
        data.rating < index + 1 ? (
          <IconStarFilled
            key={`${Math.floor(Math.random() * 100)}-${index}`}
            size="20"
            className="text-zinc-300"
          />
        ) : (
          <IconStarFilled
            key={`${Math.floor(Math.random() * 100)}-${index}`}
            size="20"
            className="text-yellow-500"
          />
        ),
      );
  }, [data]);

  return (
    <div
      id="testimonial-card"
      className="max-w-[350px] shrink-0 rounded-2xl bg-white px-4 py-2 pr-6 drop-shadow-lg sm-max:max-w-[250px] sm-max:text-sm"
    >
      <div className="mb-2 flex items-center">
        <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-600 drop-shadow-lg">
          <IconUser size="16" className="text-white" />
        </div>
        <div className="flex flex-wrap">
          <h3 className="mr-1 font-medium text-black">{data.name}</h3>
          <h4>{` - ${data.profession}`}</h4>
        </div>
      </div>
      <p className="mb-6">{data.text}</p>
      <div className="flex items-center gap-1">{renderRating}</div>
    </div>
  );
};

export default TestimonialCard;

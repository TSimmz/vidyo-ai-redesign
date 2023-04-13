export type NavLink = {
  id: string;
  text: string;
  subLinks?: {
    id: string;
    text: string;
  }[];
};

export type FooterLink = {
  id: string;
  title: string;
  links: {
    id: string;
    text: string;
    link: string;
  }[];
};

export type Testimonial = {
  id: string;
  name: string;
  profession: string;
  text: string;
  rating: number;
};

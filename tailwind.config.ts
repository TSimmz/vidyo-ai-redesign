import { type Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/hero.jpg')",
      },
      screens: {
        ...defaultTheme.screens,
        'sm-max': { max: '639px' },
        'md-max': { max: '767px' },
        'lg-max': { max: '1023px' },
        'xl-max': { max: '1279px' },
        '2xl-max': { max: '1535px' },
      },
    },
  },
  plugins: [
    require('./src/plugins/openVariant'),
    require('./src/plugins/scrollbarHide'),
  ],
} satisfies Config;

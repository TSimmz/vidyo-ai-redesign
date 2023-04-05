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
        'sm-md': { min: '640px', max: '767px' },
        'md-lg': { min: '768px', max: '1023px' },
        'lg-xl': { min: '1024px', max: '1279px' },
        'xl-2xl': { min: '1280px', max: '1535px' },
      },
    },
  },
  plugins: [
    require('./src/plugins/openVariant'),
    require('./src/plugins/scrollbarHide'),
  ],
} satisfies Config;

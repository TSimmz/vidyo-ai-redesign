import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/hero.jpg')",
      },
    },
  },
  plugins: [
    require('./src/plugins/openVariant'),
    require('./src/plugins/scrollbarHide'),
  ],
} satisfies Config;

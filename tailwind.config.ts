import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        // sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // main colors
        primary: {
          DEFAULT: '#2b3083', // * dark blue
          dark: '#1e40af', // blue-800 #TODO
          light: '#3b82f6', // blue-500 #TODO
        },
        accent: {
          DEFAULT: '#ffe9bc', // * light gold
          dark: '#b91c1c', // red-800 #TODO
        },
        link: {
          DEFAULT: '#2b3083', // * dark blue
          hover: '#ffe9bc', // * light gold
          active: '#fff6ec', // * light apricot
          contrast: '#2b3083', // * dark blue
        },
        button: {
          DEFAULT: '#ffe9bc', // * light gold
          hover: '#2b3083', // * dark blue
          active: '#2b3083', // * dark blue
        },
        text: {
          DEFAULT: '#2b3083', // * dark blue
          contrast: '#a2dcd7', // * light mint
          muted: '#918a71', // dusty gray #TODO
        },
        background: {
          DEFAULT: '#a2dcd7', // * light mint (use with 80% opacity)
          alt: '#fff6ec', // * light apricot
          nav: '#ffe9bc', // * light gold (use with 80% opacity)
        },

        // logo/design colors
        'dark-blue': '#2b3083', // * dark blue
        'light-mint': '#a2dcd7', // * light mint
        'light-gold': '#ffe9bc', // * light gold
        'light-apricot': '#fff6ec', // * light apricot

        // additional colors
        softwhite: '#f4f4f2', // Soft White
        'dark-blue-green': '#1a2a28', // dark blue-green
        'light-beige': '#eddeca', // light apricot beige
        'warm-sand': '#d28c3c', // warm sand gold
        'light-sand': '#f2e0b8', // light sand gold
        'clear-sky': '#2e6da4', // clear sky blue
        'forest-green': '#1b3319', // dark forest green
      },
    },
  },

  plugins: [
    typography,
    forms,
    containerQueries,
    function ({ addVariant }) {
      // Prevents hover sticking on touch devices
      // NOTE: the following media queries work fine to detect hover properly on iPhones but not on Android devices:
      // (any-hover: none) / (hover: none) / (hover: hover)
      // only the following works on iPhones & Android:
      addVariant('hoverable', '@media (any-hover: hover) and (pointer: fine)');
      addVariant('not-hoverable', '@media (hover: none), (pointer: coarse)');
    },
  ],
} satisfies Config;

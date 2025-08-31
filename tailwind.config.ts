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
          DEFAULT: '#2e6da4', // clear sky blue
          dark: '#1e40af', // blue-800 #TODO
          light: '#3b82f6', // blue-500 #TODO
        },
        accent: {
          DEFAULT: '#d28c3c', // warm sand gold
          dark: '#b91c1c', // red-800 #TODO
        },
        link: {
          DEFAULT: '#1b3319', // dark forest green
          hover: '#d28c3c', // warm sand gold
          active: '#f4f4f2', // Soft White
          contrast: '#f4f4f2', // Soft White / text on buttons
        },
        button: {
          DEFAULT: '#2e6da4', // clear sky blue
          hover: '#d28c3c', // warm sand gold
          active: '#d28c3c', // warm sand gold
        },
        text: {
          DEFAULT: '#1a2a28', // dark blue-green
          base: '#a7cdbc', // light green
          contrast: '#a7cdbc', // light green
          muted: '#918a71', // dusty gray
        },
        background: {
          DEFAULT: '#dff4efcc', // light mint with 80% opacity
          muted: '#f9fafb', // gray-50
          nav: '#f2e0b8cc', // warm sand with 80% opacity
        },

        // custom colors
        softwhite: '#f4f4f2', // Soft White
        'dark blue-green': '#1a2a28', // dark blue-green
        'light-green-85:': '#c4e4d6d9', // light green with 85% opacity
        'light-mint-80': '#dff4efcc', // light mint with 80% opacity
        'light-beige': '#eddeca', // light apricot beige
        'warm-sand': '#d28c3c', // warm sand gold
        'warm-sand-80': '#f2e0b8cc', // warm sand gold with 50% opacity
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

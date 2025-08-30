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
          DEFAULT: '#2563eb', // blue-600
          dark: '#1e40af', // blue-800
          light: '#3b82f6', // blue-500
        },
        accent: {
          DEFAULT: '#ef4444', // red-600
          dark: '#b91c1c', // red-800
        },
        link: {
          DEFAULT: '#0b3754', // dark blue
          hover: '#376b8c', // medium blue
          active: '#0b3754', // dark blue
          contrast: '#f4f4f2', // Soft White / text on buttons
        },
        button: {
          DEFAULT: '#f4f4f2', // Soft White
          hover: '#376b8c', // medium blue
          active: '#a7cdbc', // light green
        },
        text: {
          DEFAULT: '#0b3754', // dark blue
          base: '#a7cdbc', // light green
          contrast: '#a7cdbc', // light green
          muted: '#918a71', // dusty gray
        },
        background: {
          DEFAULT: '#c4e4d6d9', // transparent light green
          muted: '#f9fafb', // gray-50
          nav: '#eddeca', // light beige
        },

        // custom colors
        softwhite: '#fefcfb', // Soft White
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

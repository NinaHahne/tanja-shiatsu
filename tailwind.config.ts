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
          DEFAULT: '#1e3a8a', // blue-600
          hover: '#1d4ed8', // blue-700
          active: '#1e3a8a', // blue-900
          contrast: '#fefcfb', // Soft White / text on buttons
        },
        button: {
          DEFAULT: '#fefcfb', // Soft White
          hover: '#1d4ed8', // blue-700
          active: '#1e3a8a', // blue-900
        },
        text: {
          base: '#1f2937', // gray-800
          muted: '#6b7280', // gray-500
        },
        background: {
          DEFAULT: '#fefcfb', // Soft White
          muted: '#f9fafb', // gray-50
          nav: '#eaf1f9', // blue-50
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

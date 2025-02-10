// tailwind.config.js
const {heroui} = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    "./node_modules/@heroui/theme/dist/components/(accordion|autocomplete|avatar|badge|breadcrumbs|button|card|modal|divider|ripple|spinner|form|input|listbox|popover|scroll-shadow).js",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      textColor: {
        brand: {
          primary: 'var(--color-brand-primary)',
          secondary: 'var(--color-brand-secondary)',
          accent: 'var(--color-brand-accent)',
          'text-primary': 'var(--color-brand-text-primary)',
          'text-secondary': 'var(--color-brand-text-secondary)',
          'text-muted': 'var(--color-brand-text-muted)',
        }
      },
      backgroundColor: {
        brand: {
          primary: 'var(--color-brand-primary)',
          secondary: 'var(--color-brand-secondary)',
          accent: 'var(--color-brand-accent)',
          'bg-primary': 'var(--color-brand-bg-primary)',
          'bg-secondary': 'var(--color-brand-bg-secondary)',
          'bg-dark': 'var(--color-brand-bg-dark)',
        }
      },
      boxShadow: {
        'cta': 'var(--shadow-cta)',
        'card': 'var(--shadow-card)',
        'hover': 'var(--shadow-hover)',
      },
      animation: {
        'wave': 'wave 8s ease-in-out infinite',
        'wave-slow': 'wave 12s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-gentle': 'bounce 2s ease-in-out infinite',
        'ripple': 'ripple 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
}

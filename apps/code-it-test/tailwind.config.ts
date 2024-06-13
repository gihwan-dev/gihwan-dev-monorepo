import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      base: '16px',
      large: '20px',
    },
    fontWeight: {
      bold: '700',
      normal: '400',
      'extra-bold': '800',
    },
    fontFamily: {
      sans: ['NanumSquare', 'sans-serif'],
      serif: ['NanumSquare', 'serif'],
    },
    extend: {
      colors: {
        'slate/900': '#0F172A',
        'slate/800': '#1E293B',
        'slate/500': '#64748B',
        'slate/400': '#94A3B8',
        'slate/300': '#CBD5E1',
        'slate/200': '#E2E8F0',
        'slate/100': '#F1F5F9',
        'violet/600': '#7C3AED',
        'violet/100': '#EDE9FE',
        'rose/500': '#F43F5E',
        'lime/300': '#BEF264',
        'amber/800': '#92400E',
      },
    },
  },
  plugins: [require('@repo/tailwind-plugin/base')],
};
export default config;
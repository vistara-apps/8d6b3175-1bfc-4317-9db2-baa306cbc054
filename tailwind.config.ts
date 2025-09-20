import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(220, 20%, 10%)',
        surface: 'hsl(220, 20%, 15%)',
        accent: 'hsl(320, 100%, 60%)',
        primary: 'hsl(220, 80%, 50%)',
        'text-primary': 'hsl(220, 20%, 95%)',
        'text-secondary': 'hsl(220, 20%, 70%)',
      },
      borderRadius: {
        'xs': '4px',
        'sm': '6px',
        'md': '10px',
        'lg': '16px',
        'xl': '24px',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        'xxl': '32px',
      },
      boxShadow: {
        'card': '0 4px 12px hsla(0, 0%, 0%, 0.1)',
        'deep': '0 12px 32px hsla(0, 0%, 0%, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
export default config

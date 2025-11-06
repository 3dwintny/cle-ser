/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#1294D4',
          600: '#0F7BB8',
        },
        ink: {
          900: '#0D171C',
        },
        bg: {
          50: '#F7FAFC',
        },
        muted: {
          200: '#CFDEE8',
        },
        accent: {
          200: '#ACD4FD',
        },
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-mukta)', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        noto: ['var(--font-noto-sans-thai)', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

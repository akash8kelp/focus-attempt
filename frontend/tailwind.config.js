/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#192C28',
          lime: '#C4E538'
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#E6E6E6'
        },
        background: {
          dark: '#192C28',
          light: '#F0F0F0',
          glass: 'rgba(25, 44, 40, 0.2)',
          stats: '#F8FCF7',
          content: '#E1F0DF'
        },
        section: {
          pill: '#21413C'
        },
        gray: {
          900: '#141414',
          600: '#333333'
        }
      },
      fontFamily: {
        'space-grotesk': ['var(--font-space-grotesk)', 'sans-serif'],
        'instrument-serif': ['var(--font-instrument-serif)', 'serif']
      },
      fontSize: {
        'hero': '96px',
        'stats': '64px',
        'section-title': '24px',
        'body': '18px',
        'nav': '16px',
        'button': '14px'
      },
      lineHeight: {
        'hero': '1.2',
        'stats': '1.2',
        'section-title': '1.2',
        'body': '1.2',
        'nav': '1.2',
        'button': '1.276'
      },
      backdropBlur: {
        '20': '20px'
      },
      spacing: {
        '120': '120px',
        '160': '160px'
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.pause': {
          'animation-play-state': 'paused',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} 
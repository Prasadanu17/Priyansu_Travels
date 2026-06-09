/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pt: {
          deep:         '#0D1B2A',
          navy:         '#1B2E3F',
          slate:        '#2D4356',
          gold:         '#C9A84C',
          'gold-light': '#EDD68A',
          'gold-dark':  '#A07830',
          cream:        '#F9F5ED',
          muted:        '#7A8A96',
          accent:       '#E8580C',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(160deg, #0D1B2A 0%, #1B2E3F 50%, #1A3040 100%)',
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #B8860B 100%)',
        'card-overlay':  'linear-gradient(180deg, transparent 30%, rgba(13,27,42,0.88) 100%)',
      },
      animation: {
        'fade-up':     'fadeUp 0.6s ease forwards',
        'fade-in':     'fadeIn 0.5s ease forwards',
        'slide-right': 'slideRight 0.5s ease forwards',
      },
      keyframes: {
        fadeUp:     { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:     { from: { opacity: '0' }, to: { opacity: '1' } },
        slideRight: { from: { opacity: '0', transform: 'translateX(-24px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
      },
      boxShadow: {
        'gold-sm':    '0 4px 14px rgba(201,168,76,0.18)',
        'gold-md':    '0 8px 28px rgba(201,168,76,0.22)',
        'card':       '0 2px 16px rgba(13,27,42,0.08)',
        'card-hover': '0 8px 32px rgba(13,27,42,0.12)',
      },
    },
  },
  plugins: [],
};

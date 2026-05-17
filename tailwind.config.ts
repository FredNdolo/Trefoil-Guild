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
        // ── Trefoil Guild Kenya brand palette (from logo) ──
        'deep-blue':   '#1B3380',   // outer ring / primary dark
        'sky-blue':    '#29ABE2',   // logo inner background / accent
        'sky-light':   '#EBF5FC',   // light sky-tinted white backgrounds
        'gold':        '#F5A623',   // trefoil & ribbon banner
        'gold-dark':   '#D4891A',   // hover / darker gold
        'gold-pale':   '#FEF3DC',   // gold-tinted light bg
        'dark-navy':   '#0D1B4B',   // darkest sections
        'mid-blue':    '#2650C0',   // mid tone between deep & sky
        'text-dark':   '#0D1B4B',
        'text-muted':  '#4E6080',
        'border-soft': 'rgba(27,51,128,0.12)',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      backgroundImage: {
        'hero-mesh': `
          radial-gradient(ellipse 80% 60% at 70% 30%, rgba(41,171,226,0.18) 0%, transparent 55%),
          radial-gradient(ellipse 50% 80% at 10% 90%, rgba(245,166,35,0.08) 0%, transparent 60%)
        `,
        'section-diagonal': `
          repeating-linear-gradient(
            -45deg,
            rgba(41,171,226,0.03) 0px, rgba(41,171,226,0.03) 1px,
            transparent 1px, transparent 32px
          )
        `,
      },
      boxShadow: {
        'card': '0 4px 24px rgba(13,27,75,0.08)',
        'card-hover': '0 12px 40px rgba(13,27,75,0.14)',
        'gold-glow': '0 0 32px rgba(245,166,35,0.25)',
      },
      animation: {
        'fade-up':     'fadeUp 0.7s ease forwards',
        'fade-in':     'fadeIn 0.5s ease forwards',
        'count-up':    'countUp 0.4s ease forwards',
        'scroll-line': 'scrollLine 2s ease-in-out infinite',
        'pulse-dot':   'pulseDot 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        scrollLine: {
          '0%, 100%': { opacity: '0.3' },
          '50%':       { opacity: '1' },
        },
        pulseDot: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%':       { transform: 'scale(1.5)', opacity: '0.6' },
        },
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}

export default config
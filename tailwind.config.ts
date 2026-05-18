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
        // ── Trefoil Guild Kenya brand palette ──
        'deep-blue':   '#06B6D4',   // cyan — hero backgrounds, accents
        'sky-blue':    '#29ABE2',   // lighter blue accent
        'sky-light':   '#ECFEFF',   // very light cyan tinted background
        'gold':        '#F5A623',   // trefoil & ribbon banner
        'gold-dark':   '#D4891A',   // gold hover
        'gold-pale':   '#FEF3DC',   // gold-tinted light bg
        'dark-navy':   '#0D1B4B',   // navbar, footer, dark card sections
        'mid-blue':    '#0891B2',   // darker cyan for hover states
        'text-dark':   '#0D1B4B',   // primary text on light backgrounds
        'text-muted':  '#374151',   // secondary text — darkened for readability
        'border-soft': 'rgba(6,182,212,0.15)',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      backgroundImage: {
        'hero-mesh': `
          radial-gradient(ellipse 80% 60% at 70% 30%, rgba(6,182,212,0.25) 0%, transparent 55%),
          radial-gradient(ellipse 50% 80% at 10% 90%, rgba(245,166,35,0.10) 0%, transparent 60%)
        `,
        'section-diagonal': `
          repeating-linear-gradient(
            -45deg,
            rgba(6,182,212,0.04) 0px, rgba(6,182,212,0.04) 1px,
            transparent 1px, transparent 32px
          )
        `,
      },
      boxShadow: {
        'card':       '0 4px 24px rgba(13,27,75,0.08)',
        'card-hover': '0 12px 40px rgba(13,27,75,0.14)',
        'gold-glow':  '0 0 32px rgba(245,166,35,0.25)',
        'cyan-glow':  '0 0 32px rgba(6,182,212,0.30)',
      },
      animation: {
        'fade-up':     'fadeUp 0.7s ease forwards',
        'fade-in':     'fadeIn 0.5s ease forwards',
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
          '50%':      { opacity: '1' },
        },
        pulseDot: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%':      { transform: 'scale(1.5)', opacity: '0.6' },
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
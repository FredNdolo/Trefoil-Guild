import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import SectionLabel from '@/components/SectionLabel'
import RevealWrapper from '@/components/RevealWrapper'

export const metadata: Metadata = {
  title: 'Get Involved',
  description:
    "Join the Grannies Project — donate, volunteer, partner, or sponsor. Every contribution empowers grandmothers in Kibra, Nairobi.",
}

const WAYS = [
  {
    id: 'donate',
    icon: '🎁',
    color: 'bg-gold',
    iconBg: 'bg-gold/10 border-gold/25',
    title: 'Donate',
    tagline: 'Fund the essentials that keep the project running.',
    body: "Your donation directly covers craft materials, training session costs, and feeding programmes. Even a small contribution provides a grandmother with materials for a month of production — and a month of income for her family.",
    actions: [
      { label: 'Monthly giving — sustain the programme',  icon: '🔄' },
      { label: 'One-off donation — immediate impact',     icon: '💳' },
      { label: 'Sponsor a Christmas gift basket',         icon: '🎄' },
      { label: 'Fund a table banking contribution',       icon: '🏦' },
    ],
    cta: 'Donate Now',
    ctaHref: '/contact?subject=Donation+Enquiry',
    ctaStyle: 'bg-gold hover:bg-gold-dark text-deep-blue',
  },
  {
    id: 'volunteer',
    icon: '🤝',
    color: 'bg-sky-blue',
    iconBg: 'bg-sky-blue/10 border-sky-blue/25',
    title: 'Volunteer',
    tagline: 'Offer your time, skills, and presence.',
    body: "Volunteer support is deeply valued — from mentoring and skills training to administration and logistics. Even a few hours of your time can transform a pathway for a grandmother. Both in-person and remote volunteering options are available.",
    actions: [
      { label: 'Craft skills trainer or coach',      icon: '🎨' },
      { label: 'Financial literacy facilitator',     icon: '📊' },
      { label: 'Photography & media support',        icon: '📸' },
      { label: 'Administrative and online support',  icon: '💻' },
    ],
    cta: 'Volunteer With Us',
    ctaHref: '/contact?subject=Volunteer+Enquiry',
    ctaStyle: 'bg-sky-blue hover:bg-deep-blue text-white',
  },
  {
    id: 'partner',
    icon: '🌐',
    color: 'bg-deep-blue',
    iconBg: 'bg-deep-blue/10 border-deep-blue/20',
    title: 'Partner',
    tagline: 'Collaborate on capacity building and sustainable growth.',
    body: "We welcome partnerships with NGOs, corporates, government bodies, and community institutions. Whether through co-funding, joint programming, or technical support — collaborative partnerships amplify the reach and sustainability of our work.",
    actions: [
      { label: 'Corporate Social Responsibility (CSR)',  icon: '🏢' },
      { label: 'Co-funded programme development',       icon: '🤝' },
      { label: 'Technical assistance and mentoring',    icon: '🔧' },
      { label: 'Research and documentation support',    icon: '📋' },
    ],
    cta: 'Become a Partner',
    ctaHref: '/contact?subject=Partnership+Enquiry',
    ctaStyle: 'bg-deep-blue hover:bg-dark-navy text-white',
  },
  {
    id: 'sponsor',
    icon: '⭐',
    color: 'bg-mid-blue',
    iconBg: 'bg-mid-blue/10 border-mid-blue/20',
    title: 'Sponsor',
    tagline: "Back events, products, and the grannies' shop.",
    body: "Sponsorship opportunities include backing community events, buying the grannies' handcraft products for corporate gifting, setting up a dedicated grannies shop or sales channel, or funding a full skills programme. Every form of sponsorship creates direct, traceable impact.",
    actions: [
      { label: "Buy grannies' craft products (corporate gifting)",   icon: '🛍️' },
      { label: "Set up or sponsor a grannies' shop",                 icon: '🏪' },
      { label: 'Sponsor a community event or exhibition',            icon: '🎪' },
      { label: 'Fund a full skill programme cycle',                  icon: '🎓' },
    ],
    cta: 'Sponsor Us',
    ctaHref: '/contact?subject=Sponsorship+Enquiry',
    ctaStyle: 'bg-mid-blue hover:bg-deep-blue text-white',
  },
]

const IMPACT_NUMBERS = [
  { val: 'KES 50',  label: 'weekly table banking contribution changes\na grandmother\'s financial trajectory' },
  { val: '1 Month', label: 'of materials funded by a small donation\nenables a month of craft production' },
  { val: '6+',      label: 'key achievements recorded in the\n2025–26 Annual Report' },
]

export default function GetInvolvedPage() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────── */}
      <section className="bg-dark-navy relative overflow-hidden pt-[68px]">
        <div className="absolute inset-0 bg-hero-mesh" />
        <div className="absolute inset-0 bg-section-diagonal" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl animate-fade-up">
            <div className="inline-flex items-center gap-2.5 bg-gold/15 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-dot" />
              <span className="text-gold/90 text-[11px] font-600 tracking-[2px] uppercase">
                Join Us
              </span>
            </div>
            <h1 className="font-800 text-[clamp(40px,6vw,72px)] text-white leading-tight mb-5 tracking-tight">
              Get <span className="text-gold">Involved</span>
            </h1>
            <p className="text-white/60 text-[17px] font-300 leading-relaxed max-w-xl">
              There are many ways to walk alongside the grandmothers of Kibra.
              Pick the one that fits your capacity and passion — every contribution matters.
            </p>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-5 lg:px-8 py-3 flex items-center gap-2 text-[12px] text-white/35">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">Get Involved</span>
          </div>
        </div>
      </section>

      {/* ── IMPACT NUMBERS STRIP ──────────────────── */}
      <div className="bg-gold">
        <div className="max-w-5xl mx-auto px-5 py-8 grid sm:grid-cols-3 gap-5">
          {IMPACT_NUMBERS.map((n, i) => (
            <div key={i} className="text-center">
              <div className="font-800 text-[36px] text-deep-blue leading-none mb-1">{n.val}</div>
              <div className="text-deep-blue/65 text-[11px] font-600 leading-snug tracking-wide whitespace-pre-line">
                {n.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 4 WAYS ────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <RevealWrapper className="text-center max-w-xl mx-auto mb-14">
            <SectionLabel>How You Can Help</SectionLabel>
            <h2 className="font-800 text-[clamp(28px,3.5vw,44px)] text-deep-blue mt-3 mb-4 leading-tight">
              Four Ways to Make a Difference
            </h2>
            <p className="text-text-muted leading-relaxed">
              Whether you have money, time, networks, or purchasing power —
              there is a meaningful role for you in this project.
            </p>
          </RevealWrapper>

          <div className="space-y-10">
            {WAYS.map((way, i) => (
              <RevealWrapper key={way.id} delay={80} id={way.id}>
                <div
                  id={way.id}
                  className={`grid lg:grid-cols-[1fr_1.8fr] gap-0 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 border border-border-soft ${i % 2 !== 0 ? 'lg:grid-cols-[1.8fr_1fr]' : ''}`}
                >
                  {/* Left panel — colour block */}
                  <div className={`${way.color === 'bg-gold' ? 'bg-gold' : way.color === 'bg-sky-blue' ? 'bg-sky-blue' : way.color === 'bg-deep-blue' ? 'bg-deep-blue' : 'bg-mid-blue'} p-8 flex flex-col justify-between relative overflow-hidden ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <div className="absolute inset-0 bg-section-diagonal opacity-50" />
                    <div className="relative z-10">
                      <div className="text-5xl mb-5">{way.icon}</div>
                      <h3 className={`font-800 text-[32px] leading-none mb-2 ${way.color === 'bg-gold' ? 'text-deep-blue' : 'text-white'}`}>
                        {way.title}
                      </h3>
                      <p className={`text-[14px] font-500 leading-relaxed ${way.color === 'bg-gold' ? 'text-deep-blue/70' : 'text-white/65'}`}>
                        {way.tagline}
                      </p>
                    </div>
                    <div className="relative z-10 mt-8">
                      <Link
                        href={way.ctaHref}
                        className={`inline-flex items-center gap-2 ${way.ctaStyle} font-700 text-[13px] px-6 py-3 rounded-md transition-all duration-200 hover:-translate-y-px`}
                      >
                        {way.cta}
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Right panel — details */}
                  <div className={`bg-white p-8 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <p className="text-text-muted text-[15px] leading-relaxed mb-6">{way.body}</p>

                    <p className="text-deep-blue font-700 text-[12px] tracking-[1.5px] uppercase mb-4">
                      How You Can Help
                    </p>
                    <ul className="space-y-3">
                      {way.actions.map(action => (
                        <li key={action.label} className="flex items-center gap-3">
                          <span className="text-xl w-7 text-center flex-shrink-0">{action.icon}</span>
                          <span className="text-text-dark text-[14px] font-500">{action.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY IT MATTERS ────────────────────────── */}
      <section className="section-pad bg-sky-light relative overflow-hidden pattern-diagonal">
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <RevealWrapper>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-white shadow-card">
                <Image
                  src="/grannies-craft.jpg"
                  alt="Grannies at work"
                  fill
                  className="object-cover"
                />
              </div>
            </RevealWrapper>

            <RevealWrapper delay={150}>
              <SectionLabel>Why It Matters</SectionLabel>
              <h2 className="font-800 text-[clamp(26px,3.5vw,42px)] text-deep-blue mt-3 mb-5 leading-tight">
                Your Support Has
                <br />
                <span className="text-sky-blue">Real Consequences</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-5">
                Every grandmother supported is a family stabilised — grandchildren fed,
                school fees met, dignity maintained. The project has proven that small,
                consistent interventions create compounding positive impact.
              </p>
              <p className="text-text-muted leading-relaxed mb-6">
                The 2025–26 Annual Report confirms: beneficiaries are earning more,
                producing better quality goods, managing their own finances, and building
                social support systems that go far beyond the craft table.
              </p>
              <Link
                href="/impact"
                className="inline-flex items-center gap-2 text-sky-blue hover:text-deep-blue font-600 text-[13px] border border-sky-blue/30 hover:border-deep-blue/30 px-5 py-2.5 rounded-md transition-colors"
              >
                Read the Impact Report
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </Link>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ───────────────────────────── */}
      <section className="section-pad bg-deep-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-section-diagonal" />
        <div className="container-tight relative z-10 text-center">
          <RevealWrapper>
            <SectionLabel variant="sky" className="justify-center mb-4" />
            <h2 className="font-800 text-[clamp(26px,4vw,42px)] text-white mb-4 leading-tight">
              Ready to Take the First Step?
            </h2>
            <p className="text-white/60 text-[16px] leading-relaxed max-w-lg mx-auto mb-8">
              Reach out to the Trefoil Guild Kenya team — we will respond within
              2–3 business days and guide you through the next steps.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-deep-blue font-700 text-[14px] px-9 py-4 rounded-md transition-colors shadow-gold-glow"
              >
                Contact Us Today
              </Link>
              <a
                href="mailto:trefoil.guildkgga@gmail.com"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-600 text-[14px] px-9 py-4 rounded-md border border-white/15 transition-colors"
              >
                trefoil.guildkgga@gmail.com
              </a>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  )
}
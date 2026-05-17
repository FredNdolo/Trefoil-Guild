import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import StatsCounter from '@/components/StatsCounter'
import RevealWrapper from '@/components/RevealWrapper'

export const metadata: Metadata = {
  title: 'Home',
  description:
    "The Grannies Project by Trefoil Guild Kenya — empowering vulnerable grandmothers in Kibra, Nairobi through craft skills, economic independence, and community.",
}

const HOME_STATS = [
  { value: 1998, label: 'Year Founded' },
  { value: 25, label: 'Years of Service', suffix: '+' },
  { value: 6, label: 'Key Achievements', suffix: '+' },
  { value: 6, label: 'Core Activities' },
]

const CHALLENGE_CARDS = [
  {
    icon: '👵',
    title: 'Skipped-Generation Caregiving',
    body: 'These grandmothers have been left to raise grandchildren alone — due to bereavement, abandonment, or social disruption — often with no warning and no resources.',
  },
  {
    icon: '🏘️',
    title: 'Vulnerability & Isolation',
    body: 'Aged women living in informal settlements like Kibra in Nairobi, facing poverty, social isolation, and severely limited access to public services.',
  },
  {
    icon: '📉',
    title: 'No Income or Support',
    body: 'Without craft skills, market access, or financial literacy, they lack the means to provide for their grandchildren or sustain their own dignity.',
  },
]

const ACTIVITY_PREVIEWS = [
  {
    num: '01',
    title: 'Skill Development',
    body: 'Individualized coaching and specialization in craftsmanship — beadwork, basketry, patchwork, and eco-friendly techniques.',
    href: '/programme#skill-development',
  },
  {
    num: '02',
    title: 'Table Banking',
    body: 'Grannies contribute KES 50 weekly to a communal fund — providing accessible credit and fostering a savings culture.',
    href: '/programme#table-banking',
  },
  {
    num: '03',
    title: 'Market Linkages',
    body: 'Sales facilitated through local markets, online platforms, Guild members, and the Kenya Girl Guides HQ shop in Nairobi.',
    href: '/programme#market-linkages',
  },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen bg-dark-navy relative overflow-hidden flex items-center pt-[68px]">
        <div className="absolute inset-0 bg-hero-mesh" />
        <div className="absolute inset-0 bg-section-diagonal opacity-100" />
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-sky-blue/10 opacity-50" />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold/10 opacity-50" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8 py-20 grid lg:grid-cols-[1fr_auto] gap-16 items-center w-full">

          {/* Text */}
          <div className="animate-fade-up max-w-2xl">
            <div className="inline-flex items-center gap-2.5 bg-sky-blue/10 border border-sky-blue/25 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-blue animate-pulse-dot" />
              <span className="text-sky-blue/90 text-[11px] font-600 tracking-[2px] uppercase">
                Trefoil Guild Kenya · Est. 1998
              </span>
            </div>

            <h1 className="font-800 text-[clamp(48px,7vw,82px)] leading-[1.0] text-white mb-6 tracking-tight">
              Inspiring
              <br />
              <span className="text-sky-blue">Generations,</span>
              <br />
              Building{' '}
              <span className="relative inline-block">
                Communities
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6C60 2 240 2 298 6" stroke="#F5A623" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-white/60 text-[17px] font-300 leading-relaxed max-w-lg mb-10">
              Empowering vulnerable grandmothers in Kibra, Nairobi — through craft
              skills, economic independence, and the unbreakable bonds of community.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-deep-blue font-700 text-[14px] px-8 py-4 rounded-md transition-all duration-200 hover:-translate-y-px shadow-gold-glow"
              >
                Make a Difference
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-transparent text-white/80 hover:text-white border border-white/20 hover:border-sky-blue/60 font-500 text-[14px] px-8 py-4 rounded-md transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Logo badge */}
          <div className="hidden lg:flex flex-col items-center gap-6 animate-fade-in">
            <div className="relative">
              {/* Main logo */}
              <div className="w-[220px] h-[220px] rounded-full overflow-hidden ring-4 ring-gold/30 shadow-[0_0_80px_rgba(245,166,35,0.2)]">
                <Image
                  src="/logo.jpeg"           // ← Make sure this file exists in public/logo.jpeg
                  alt="Trefoil Guild Kenya"
                  width={250}
                  height={250}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Orbiting mini-logo */}
              <div className="absolute -top-2 -right-2 w-14 h-14 rounded-full overflow-hidden ring-2 ring-gold shadow-[0_0_16px_rgba(245,166,35,0.55)]">
                <Image
                  src="/blank.jpg"
                  alt="Trefoil Guild Kenya badge"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="text-center">
              <p className="text-white/40 text-[11px] tracking-widest uppercase font-500">Kenya Girl Guides</p>
              <p className="text-white/40 text-[11px] tracking-widest uppercase font-500">Association · WAGGGS</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-scroll-line" />
          <span className="text-[10px] tracking-[2px] uppercase font-500">Scroll</span>
        </div>
      </section>

      {/* STATS */}
      <StatsCounter stats={HOME_STATS} variant="sky" />

      {/* ... rest of your page remains the same ... */}

      {/* IMPACT SNAPSHOT */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <RevealWrapper>
              <SectionLabel>Our Impact</SectionLabel>
              <h2 className="font-800 text-[clamp(28px,3.5vw,44px)] text-deep-blue mt-3 mb-5 leading-tight">
                Measurable Change,<br /><span className="text-sky-blue">Real Lives</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-5">
                The Annual Report (2025–2026) shows the Grannies Project has moved beyond
                its initial empowerment stage into a phase of{' '}
                <strong className="text-deep-blue">growth and improvement</strong> — combining
                economic support with social cohesion to deliver transformative outcomes.
              </p>
              <ul className="space-y-3 mb-7">
                {[
                  'Noticeable improvement in financial stability and living standards',
                  'Increased confidence and self-esteem; more grannies in leadership roles',
                  'Stronger social networks evolving into broader support groups',
                  "Greater visibility of grannies' work in community events",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-text-muted leading-relaxed">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                      <span className="text-gold text-[10px] font-700">✓</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/impact"
                className="inline-flex items-center gap-2 bg-sky-blue hover:bg-deep-blue text-white font-600 text-[13px] px-7 py-3.5 rounded-md transition-colors duration-200"
              >
                View Full Impact Report
              </Link>
            </RevealWrapper>

            <RevealWrapper delay={150}>
              <div className="relative rounded-2xl overflow-hidden bg-sky-light aspect-[4/3]">
                <Image
                  src="/grannies-group.jpg"
                  alt="Grannies project group"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* CTA BANNER - unchanged */}
      <section className="relative overflow-hidden bg-sky-blue">
        <div className="absolute inset-0 bg-section-diagonal opacity-50" />
        <div className="container-tight relative z-10 py-16 md:py-20 px-5 text-center">
          <RevealWrapper>
            <p className="text-deep-blue/70 text-[11px] font-700 tracking-[2.5px] uppercase mb-4">
              Join Us in Making a Difference
            </p>
            <h2 className="font-800 text-[clamp(28px,4vw,46px)] text-deep-blue leading-tight mb-5">
              Every Contribution<br />Changes a Life
            </h2>
            <p className="text-deep-blue/70 text-[16px] leading-relaxed max-w-lg mx-auto mb-8">
              Donate, volunteer, partner, or sponsor. There are many ways to walk
              alongside the grandmothers of Kibra.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 bg-deep-blue hover:bg-dark-navy text-white font-700 text-[14px] px-9 py-4 rounded-md transition-colors shadow-lg"
              >
                Get Involved
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-deep-blue font-600 text-[14px] px-9 py-4 rounded-md border border-deep-blue/20 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  )
}
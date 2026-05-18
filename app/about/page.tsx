import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import RevealWrapper from '@/components/RevealWrapper'
import StatsCounter from '@/components/StatsCounter'

export const metadata: Metadata = {
  title: 'About',
  description:
    "Learn about Trefoil Guild Kenya — a vibrant branch of the Kenya Girl Guides Association formed in 1998, and the story behind the Grannies Community Project in Kibra, Nairobi.",
}

const ABOUT_STATS = [
  { value: 1998, label: 'Year Founded' },
  { value: 25, label: 'Years Active', suffix: '+' },
  { value: 18, label: 'Minimum Member Age' },
  { value: 6, label: 'SDGs Supported', suffix: '+' },
]

const VALUES = [
  {
    icon: '🤝',
    title: 'Service',
    body: "Active community involvement guided by the Girl Guide Promise — leaving the world better than we found it.",
  },
  {
    icon: '🌱',
    title: 'Empowerment',
    body: "Building the skills, confidence, and networks that allow individuals to shape their own futures.",
  },
  {
    icon: '🔗',
    title: 'Mentorship',
    body: "Intergenerational connection — experienced members lifting up those who follow, creating lasting bonds.",
  },
  {
    icon: '🌍',
    title: 'Sustainability',
    body: "Programmes that create self-sustaining livelihoods rather than dependency — aligned to the UN SDGs.",
  },
  {
    icon: '❤️',
    title: 'Dignity',
    body: "Honouring the humanity of every grandmother — recognising her worth, her wisdom, and her contribution.",
  },
  {
    icon: '🤲',
    title: 'Inclusion',
    body: "Open to all women committed to the Guide Promise, regardless of background, age, or circumstance.",
  },
]

const SDGS = [
  { num: '1', label: 'No Poverty' },
  { num: '3', label: 'Good Health' },
  { num: '4', label: 'Quality Education' },
  { num: '5', label: 'Gender Equality' },
  { num: '8', label: 'Decent Work' },
  { num: '17', label: 'Partnerships' },
]

const TIMELINE = [
  {
    year: '1998',
    title: 'Trefoil Guild Kenya Founded',
    body: 'A branch of the Kenya Girl Guides Association is established, uniting Guide leaders and associates aged 18 and above under the Guide Promise.',
  },
  {
    year: 'Early 2000s',
    title: 'Community Projects Begin',
    body: 'Guild members begin structured community outreach in Nairobi, identifying vulnerable groups in informal settlements including Kibra.',
  },
  {
    year: '2010s',
    title: 'Grannies Project Launched',
    body: "The Grannies Community Project takes shape — focused on grandmothers in skipped-generation caregiving roles who lacked income and support.",
  },
  {
    year: '2020s',
    title: 'Growth & Formalisation',
    body: 'Introduction of table banking, eco-friendly craft techniques, and deeper partnerships with local groups and the Kenya Girl Guides HQ shop.',
  },
  {
    year: '2025–26',
    title: 'Annual Report Milestone',
    body: 'The 2025–26 Annual Report documents measurable income growth, improved product quality, and expanded market linkages — a phase of growth and improvement.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────── */}
      <section className="bg-deep-blue relative overflow-hidden pt-[68px]">
        <div className="absolute inset-0 bg-hero-mesh" />
        <div className="absolute inset-0 bg-section-diagonal" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl animate-fade-up">
            <div className="inline-flex items-center gap-2.5 bg-dark-navy/10 border border-dark-navy/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-blue animate-pulse-dot" />
              <span className="text-dark-navy/80 text-[11px] font-600 tracking-[2px] uppercase">
                Our Story
              </span>
            </div>
            <h1 className="font-800 text-[clamp(40px,6vw,72px)] text-dark-navy leading-tight mb-5 tracking-tight">
              About <span className="text-gold">Us</span>
              
            </h1>
            <p className="text-dark-navy/70 text-[17px] font-300 leading-relaxed max-w-lg">
              Trefoil Guild Kenya is a vibrant branch of the Kenya Girl Guides Association —
              united by the Guide Promise and a commitment to leaving the world better than we found it.
            </p>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-5 lg:px-8 py-3 flex items-center gap-2 text-[12px] text-dark-navy/40">
            <Link href="/" className="hover:text-dark-navy/60 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-dark-navy/60">About</span>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────── */}
      <StatsCounter stats={ABOUT_STATS} variant="sky" />

      {/* ── WHO WE ARE ────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            <RevealWrapper>
              <SectionLabel>The Trefoil Guild of Kenya</SectionLabel>
              <h2 className="font-800 text-[clamp(28px,3.5vw,44px)] text-dark-navy leading-tight mt-3 mb-6">
                Who We Are
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                Trefoil Guild Kenya is a vibrant branch of the Kenya Girl Guides Association,
                formed in 1998. We foster lifelong commitment to the Guide Promise and Law,
                encouraging community service, mentorship, and continued engagement in Girl Guiding.
              </p>
              <p className="text-text-muted leading-relaxed mb-4">
                Members include Guide leaders who are not running Guide Units and are either
                pursuing studies or have changed jobs, alongside new associates aged 18 and above.
              </p>
              <p className="text-text-muted leading-relaxed mb-6">
                The Guild works actively to support intergenerational mentorship, community
                development, and national initiatives aligned to WAGGGS values and the
                Sustainable Development Goals. The <strong className="text-dark-navy font-600">Grannies Community Project</strong> is
                one of the Guild&apos;s flagship community programmes.
              </p>
              <p className="text-text-muted leading-relaxed mb-6">
                Kenya Girl Guides is a member of the World Association of Girl Guides and Girl Scouts (WAGGGS)
                </p> 

              <div className="inline-flex items-center gap-3 bg-sky-light border border-sky-blue/20 rounded-xl px-5 py-3">
                <span className="text-2xl">🌐</span>
                <div>
                  <div className="text-dark-navy font-700 text-[13px]">WAGGGS Affiliated</div>
                  <div className="text-text-muted text-[12px]">World Association of Girl Guides and Girl Scouts</div>
                </div>
              </div>
            </RevealWrapper>

            {/* Visual card - Now matching Hero style */}
            <RevealWrapper delay={150}>
              <div className="bg-deep-blue rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-section-diagonal opacity-100" />
                <div className="relative z-10">
                  <div className="text-sky-blue text-[11px] font-700 tracking-[2px] uppercase mb-3">
                    Kenya Girl Guides Association
                  </div>
                  <div className="text-dark-navy font-800 text-[26px] leading-tight mb-4">
                    The Trefoil Guild of Kenya
                  </div>
                  <p className="text-dark-navy/70 text-[14.5px] leading-relaxed mb-6">
                    A community united by the Guide Promise — working to leave the world
                    better than we found it, one grandmother, one family, one neighbourhood
                    at a time.
                  </p>
                  <div className="h-px bg-gold/30 mb-6" />
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { val: '1998', key: 'Year Formed' },
                      { val: 'WAGGGS', key: 'Affiliation' },
                      { val: 'Nairobi', key: 'Base' },
                    ].map(item => (
                      <div key={item.key}>
                        <div className="text-gold font-800 text-[22px] leading-none">{item.val}</div>
                        <div className="text-dark-navy/50 text-[10px] font-600 tracking-wider uppercase mt-1">{item.key}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-xl overflow-hidden aspect-[16/9]">
                    <Image
                      src="/WAGGGS-logo.jpg"
                      alt="WAGGGS Kenya"
                      width={600}
                      height={300}
                      className="w-full h-full object-contain bg-sky-blue/10 p-4"
                    />
                  </div>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* ── THE GRANNIES PROJECT ──────────────────── */}
      <section className="section-pad bg-sky-light relative overflow-hidden pattern-diagonal">
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <RevealWrapper>
              <div className="relative rounded-2xl overflow-hidden bg-white aspect-[4/3] shadow-card">
                <Image
                  src="/grannies-craft.jpg"
                  alt="Grannies working on craft"
                  fill
                  className="object-cover"
                />
              </div>
            </RevealWrapper>

            <RevealWrapper delay={150}>
              <SectionLabel>The Grannies Project</SectionLabel>
              <h2 className="font-800 text-[clamp(28px,3.5vw,44px)] text-dark-navy leading-tight mt-3 mb-5">
                Empowering Our
                <br />
                <span className="text-sky-blue">Grandmothers</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                The Grannies Community Project targets a deeply vulnerable and often invisible
                group — grandmothers who have been left to raise grandchildren alone, due to
                bereavement, parental abandonment, or social disruption.
              </p>
              <p className="text-text-muted leading-relaxed mb-5">
                These women live primarily in informal settlements like <strong className="text-dark-navy">Kibra in Nairobi</strong>,
                facing poverty, isolation, and limited access to public services — yet they carry
                the enormous responsibility of raising the next generation.
              </p>

              <div className="bg-white rounded-xl p-5 border border-border-soft mb-5">
                <p className="text-dark-navy font-700 text-[13px] mb-3">This project aims to empower grandmothers who:</p>
                <ul className="space-y-2">
                  {[
                    "Have been left to care for grandchildren due to bereavement, abandonment, or social disruption",
                    "Are vulnerable, aged women often in informal settlements like Kibra in Nairobi",
                    "Lack income, face isolation, and need emotional and economic support",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-[13.5px] text-text-muted leading-relaxed">
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-sky-blue/15 flex items-center justify-center flex-shrink-0">
                        <span className="text-sky-blue text-[9px] font-700">●</span>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/programme"
                className="inline-flex items-center gap-2 bg-dark-navy hover:bg-dark-navy/90 text-white font-600 text-[13px] px-6 py-3 rounded-md transition-colors"
              >
                See Our Programme
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </Link>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <RevealWrapper className="text-center max-w-xl mx-auto mb-12">
            <SectionLabel>What Guides Us</SectionLabel>
            <h2 className="font-800 text-[clamp(28px,3.5vw,44px)] text-dark-navy mt-3 mb-4 leading-tight">
              Our Core Values
            </h2>
            <p className="text-text-muted leading-relaxed">
              Rooted in the Guide Promise, these values shape every programme we run and
              every relationship we build.
            </p>
          </RevealWrapper>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v, i) => (
              <RevealWrapper key={v.title} delay={i * 80}>
                <div className="bg-sky-light rounded-xl p-6 border border-sky-blue/10 hover:border-sky-blue/30 hover:shadow-card transition-all duration-300 group">
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h3 className="font-700 text-[16px] text-dark-navy mb-2 group-hover:text-sky-blue transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-text-muted text-[13.5px] leading-relaxed">{v.body}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── SDG ALIGNMENT - Now matching Hero style ─────────────────────────── */}
      <section className="section-pad bg-deep-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-section-diagonal" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">

            <RevealWrapper>
              <SectionLabel variant="sky">Global Alignment</SectionLabel>
              <h2 className="font-800 text-[clamp(28px,3.5vw,44px)] text-dark-navy mt-3 mb-5 leading-tight">
                United Nations
                <br />
                <span className="text-white">Sustainable Development Goals</span>
              </h2>
              <p className="text-dark-navy/70 text-[15px] leading-relaxed mb-6">
                The Grannies Project contributes directly to six of the seventeen
                UN Sustainable Development Goals — connecting grassroots action in
                Kibra to a global framework for human dignity and wellbeing.
              </p>
              <Link
                href="/impact"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-600 text-[13px] transition-colors"
              >
                View our impact data
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </Link>
            </RevealWrapper>

            <div className="grid grid-cols-3 gap-3">
              {SDGS.map((sdg, i) => (
                <RevealWrapper key={sdg.num} delay={i * 80}>
                  <div className="bg-white/[0.08] border border-sky-blue/20 rounded-xl p-4 text-center hover:bg-white/[0.12] hover:border-gold/30 transition-all duration-200">
                    <div className="font-800 text-[32px] text-gold leading-none mb-1">
                      {sdg.num}
                    </div>
                    <div className="text-dark-navy/70 text-[11px] font-600 tracking-wide leading-tight">
                      {sdg.label}
                    </div>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-tight">
          <RevealWrapper className="text-center max-w-xl mx-auto mb-14">
            <SectionLabel>Our Journey</SectionLabel>
            <h2 className="font-800 text-[clamp(28px,3.5vw,44px)] text-dark-navy mt-3 mb-4 leading-tight">
              A History of
              <br />
              <span className="text-sky-blue">Community Service</span>
            </h2>
          </RevealWrapper>

          <div className="relative">
            <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px bg-sky-blue/20 -translate-x-1/2" />

            <div className="space-y-10">
              {TIMELINE.map((item, i) => (
                <RevealWrapper key={item.year} delay={i * 100}>
                  <div className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="bg-sky-light border border-sky-blue/15 rounded-xl p-5 hover:shadow-card transition-shadow duration-300">
                        <span className="text-gold font-700 text-[12px] tracking-wider uppercase">{item.year}</span>
                        <h3 className="font-700 text-[16px] text-dark-navy mt-1 mb-2">{item.title}</h3>
                        <p className="text-text-muted text-[13.5px] leading-relaxed">{item.body}</p>
                      </div>
                    </div>

                    <div className="absolute left-[18px] md:left-1/2 top-5 -translate-x-1/2 w-4 h-4 rounded-full bg-sky-blue border-2 border-white shadow-sm z-10" />

                    <div className="hidden md:block flex-1" />
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────── */}
      <section className="section-pad bg-sky-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-section-diagonal opacity-50" />
        <div className="container-tight relative z-10 text-center">
          <RevealWrapper>
            <SectionLabel variant="white" className="justify-center mb-4" />
            <h2 className="font-800 text-[clamp(26px,4vw,42px)] text-dark-navy mb-5 leading-tight">
              Be Part of Our Story
            </h2>
            <p className="text-dark-navy/70 text-[16px] leading-relaxed max-w-lg mx-auto mb-8">
              Whether you donate, volunteer, partner, or simply spread the word —
              every action strengthens the community we are building together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 bg-dark-navy hover:bg-dark-navy/80 text-white font-700 text-[14px] px-8 py-4 rounded-md transition-colors shadow-lg"
              >
                Get Involved
              </Link>
              <Link
                href="/programme"
                className="inline-flex items-center gap-2 bg-white/25 hover:bg-white/40 text-dark-navy font-600 text-[14px] px-8 py-4 rounded-md border border-dark-navy/20 transition-colors"
              >
                Our Programme
              </Link>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  )
}
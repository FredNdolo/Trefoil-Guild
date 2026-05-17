import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import RevealWrapper from '@/components/RevealWrapper'

export const metadata: Metadata = {
  title: 'Programme',
  description:
    "Explore the Grannies Project programme — skill development, table banking, market linkages, financial education, material access, and community support in Kibra, Nairobi.",
}

const ACTIVITIES = [
  {
    id: 'skill-development',
    num: '01',
    icon: '🎨',
    title: 'Skill Development',
    summary: 'Individualized coaching raising craftsmanship to market-ready standards.',
    body: "We focus on improving crafts quality and design through individualized, hands-on training sessions tailored to each grandmother's skill level and interests. The 2025–26 Annual Report notes expanded training with more specialization, resulting in higher craftsmanship standards across the group.",
    highlights: [
      'One-on-one coaching tailored to each participant',
      'Progressive skill levels — beginner to advanced',
      'Quality control reviews before market submission',
      'Introduction of new techniques each season',
    ],
    image: '/training.jpg',                    // Fixed
    imageAlt: 'Grannies craft training session',
  },
  {
    id: 'material-access',
    num: '02',
    icon: '🧵',
    title: 'Material Access',
    summary: 'Affordable, quality materials sourced consistently to keep production flowing.',
    body: "Trefoil Guild Kenya ensures more consistent access to affordable, quality materials — removing one of the biggest barriers to consistent and marketable output. Bulk purchasing partnerships with local suppliers help offset rising material costs.",
    highlights: [
      'Bulk purchasing to reduce per-unit costs',
      'Partnerships with local material suppliers',
      'Stock management to prevent production gaps',
      'Subsidised access for lowest-income participants',
    ],
    image: '/grannies-craft.jpg',              // Fixed
    imageAlt: 'Craft materials and supplies',
  },
  {
    id: 'market-linkages',
    num: '03',
    icon: '🛒',
    title: 'Market Linkages',
    summary: 'Multiple sales channels connecting grannies to local and national buyers.',
    body: "We facilitate sales through local markets, online platforms, Trefoil Guild members, and the Kenya Girl Guides Headquarters shop in Nairobi. The 2025–26 report notes strengthened presence in local markets and broadened online visibility, with more sales facilitated through Guild members.",
    highlights: [
      'Kenya Girl Guides HQ shop in Nairobi',
      'Local market stalls and community fairs',
      'Guild member distribution network',
      'Online platforms for wider reach',
    ],
    image: '/market.jpg',                      // Fixed
    imageAlt: 'Grannies products at market',
  },
  {
    id: 'financial-education',
    num: '04',
    icon: '📊',
    title: 'Financial Education',
    summary: 'Business skills training — pricing, record-keeping, budgeting, and savings.',
    body: "We provide training in basic financial literacy, pricing, and business management. The 2025–26 programme expanded to include record-keeping and savings culture — building stronger business foundations and giving grannies the knowledge to grow their craft into a sustainable livelihood.",
    highlights: [
      'Pricing strategy and margin management',
      'Basic bookkeeping and income tracking',
      'Savings culture and goal-setting',
      'Budgeting for household and business needs',
    ],
    image: '/grannies-group.jpg',              // Fixed
    imageAlt: 'Financial education session',
  },
  {
    id: 'table-banking',
    num: '05',
    icon: '🏦',
    title: 'Table Banking',
    summary: 'A weekly communal savings fund providing accessible credit to every member.',
    body: "Introduced in the 2025–26 cycle, table banking allows grannies to contribute KES 50 weekly to a shared pool and apply for loans from it. This initiative has strengthened financial inclusion, encouraged a savings culture, and provided accessible credit for expanding craft production and meeting household needs.",
    highlights: [
      'KES 50 weekly contribution per member',
      'Loans available for materials and household needs',
      'Democratically managed by the group',
      'Builds credit history and financial confidence',
    ],
    image: '/table-banking.jpg',               // Fixed
    imageAlt: 'Table banking session',
    isNew: true,
  },
  {
    id: 'community-support',
    num: '06',
    icon: '🤝',
    title: 'Community Support',
    summary: 'Deep peer networks, church partnerships, and Christmas gift baskets.',
    body: "Beyond the crafts, we build lasting social bonds through deeper collaboration with churches and community groups, leading to more collective production and peer mentoring. Every year we bring joy through curated Christmas gift baskets — a moment of care, community, and celebration for grannies and their grandchildren.",
    highlights: [
      'Annual Christmas gift baskets for grannies and grandchildren',
      'Church and community group partnerships',
      'Peer mentoring between experienced and new participants',
      'Collective production sessions fostering social bonds',
    ],
    image: '/christmas-baskets.jpg',           // Fixed
    imageAlt: 'Christmas gift basket distribution',
  },
]

const NEW_TECHNIQUES = [
  {
    icon: '📿',
    title: 'Maasai Beadwork',
    body: 'Reintroduction of traditional Maasai bead items — paused due to eyesight difficulties but resumed with better lighting and magnification support.',
  },
  {
    icon: '🎁',
    title: 'Assorted Beaded Items',
    body: 'Expanded bead catalogue including necklaces, bracelets, earrings, and decorative items appealing to a wider buyer market.',
  },
  {
    icon: '🛏️',
    title: 'Patchwork Bedcovers',
    body: 'New textile product line — patchwork bedcovers combining traditional patterns with upcycled fabric materials.',
  },
  {
    icon: '🌿',
    title: 'Eco-Friendly Basketry',
    body: 'Basketry using sisal and recycled plastic paper — an eco-friendly technique that diversifies products and appeals to environmentally conscious buyers.',
  },
]

export default function ProgrammePage() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────── */}
      <section className="bg-dark-navy relative overflow-hidden pt-[68px]">
        <div className="absolute inset-0 bg-hero-mesh" />
        <div className="absolute inset-0 bg-section-diagonal" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl animate-fade-up">
            <div className="inline-flex items-center gap-2.5 bg-sky-blue/10 border border-sky-blue/25 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-blue animate-pulse-dot" />
              <span className="text-sky-blue/90 text-[11px] font-600 tracking-[2px] uppercase">
                What We Do
              </span>
            </div>
            <h1 className="font-800 text-[clamp(40px,6vw,72px)] text-white leading-tight mb-5 tracking-tight">
              Our <span className="text-gold">Programme</span>
            </h1>
            <p className="text-white/60 text-[17px] font-300 leading-relaxed max-w-xl">
              Six interconnected activities that address the economic, social, and skills
              needs of our grannies — from craft training to financial inclusion.
            </p>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-5 lg:px-8 py-3 flex items-center gap-2 text-[12px] text-white/35">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">Programme</span>
          </div>
        </div>
      </section>

      {/* ── PROJECT GOAL ──────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">

            <RevealWrapper>
              <SectionLabel>Project Goal</SectionLabel>
              <h2 className="font-800 text-[clamp(26px,3.5vw,42px)] text-deep-blue leading-tight mt-3 mb-5">
                Sustainable Income Through
                <br />
                <span className="text-sky-blue">Handcraft Production</span>
              </h2>
              <div className="bg-sky-light border-l-4 border-sky-blue rounded-r-xl p-5 mb-5">
                <p className="text-deep-blue font-500 text-[15px] leading-relaxed italic">
                  "To enhance the economic and social well-being of widowed grannies by
                  equipping them with skills, resources and support to generate sustainable
                  income through handcraft production."
                </p>
                <p className="text-sky-blue text-[12px] font-600 mt-3">
                  — Grannies Project Annual Report, 2025–2026
                </p>
              </div>
              <p className="text-text-muted leading-relaxed">
                The project takes a holistic approach — addressing both the economic need
                for income and the social need for connection — resulting in significant,
                measurable positive impacts in the lives of beneficiaries and their families.
              </p>
            </RevealWrapper>

            {/* Quick stats */}
            <RevealWrapper delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: '6', label: 'Core Activities' },
                  { num: '4',  label: 'New Techniques\n2025–26' },
                  { num: 'KES 50', label: 'Weekly Table\nBanking Contribution' },
                  { num: '6+', label: 'Achievements\nRecorded' },
                ].map(s => (
                  <div key={s.label} className="bg-sky-light rounded-xl p-5 border border-sky-blue/15">
                    <div className="font-800 text-[28px] text-deep-blue leading-none mb-1.5">{s.num}</div>
                    <div className="text-text-muted text-[12px] font-600 leading-snug whitespace-pre-line">{s.label}</div>
                  </div>
                ))}
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* ── ACTIVITIES ────────────────────────────── */}
      <section className="section-pad bg-sky-light relative overflow-hidden pattern-diagonal">
        <div className="container-wide relative z-10">
          <RevealWrapper className="text-center max-w-xl mx-auto mb-14">
            <SectionLabel>Key Activities</SectionLabel>
            <h2 className="font-800 text-[clamp(28px,3.5vw,44px)] text-deep-blue mt-3 mb-4 leading-tight">
              Six Pillars of the Programme
            </h2>
            <p className="text-text-muted leading-relaxed">
              Each activity is designed to reinforce the others — creating a
              self-sustaining cycle of skills, income, and community.
            </p>
          </RevealWrapper>

          <div className="space-y-8" id="activities">
            {ACTIVITIES.map((act, i) => (
              <RevealWrapper key={act.id} delay={80}>
                <div
                  id={act.id}
                  className={`bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 grid lg:grid-cols-[1fr_1.5fr] ${i % 2 !== 0 ? 'lg:grid-cols-[1.5fr_1fr]' : ''}`}
                >
                  {/* Image — alternates left/right */}
                  <div className={`relative aspect-[4/3] lg:aspect-auto bg-sky-light ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <Image
                      src={act.image}
                      alt={act.imageAlt}
                      fill
                      className="object-cover"
                    />
                    {/* Number overlay */}
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-deep-blue/80 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-gold font-800 text-[13px]">{act.num}</span>
                    </div>
                    {act.isNew && (
                      <div className="absolute top-4 right-4 bg-gold text-deep-blue text-[10px] font-800 tracking-wider uppercase px-2.5 py-1 rounded-full">
                        New 2025–26
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`p-7 md:p-8 flex flex-col justify-center ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{act.icon}</span>
                      <h3 className="font-800 text-[20px] text-deep-blue">{act.title}</h3>
                    </div>
                    <p className="text-sky-blue font-600 text-[13px] mb-3">{act.summary}</p>
                    <p className="text-text-muted text-[14px] leading-relaxed mb-5">{act.body}</p>

                    {/* Highlights */}
                    <div className="border-t border-border-soft pt-5">
                      <p className="text-deep-blue font-700 text-[12px] tracking-wider uppercase mb-3">
                        Key Highlights
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-4">
                        {act.highlights.map(h => (
                          <li key={h} className="flex items-start gap-2 text-[13px] text-text-muted leading-relaxed">
                            <span className="mt-0.5 text-gold font-700 text-[10px] flex-shrink-0">✦</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEW TECHNIQUES 2025–26 ────────────────── */}
      <section className="section-pad bg-deep-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-section-diagonal" />
        <div className="container-wide relative z-10">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <RevealWrapper>
              <SectionLabel variant="sky">Annual Report 2025–26</SectionLabel>
              <h2 className="font-800 text-[clamp(28px,3.5vw,44px)] text-white mt-3 leading-tight">
                New Techniques
                <br />
                <span className="text-gold">Introduced This Year</span>
              </h2>
            </RevealWrapper>
            <RevealWrapper delay={100}>
              <p className="text-white/50 text-[14px] leading-relaxed max-w-sm">
                The programme expanded its craft range in 2025–26, introducing four new
                techniques that diversify products and open new market segments.
              </p>
            </RevealWrapper>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {NEW_TECHNIQUES.map((t, i) => (
              <RevealWrapper key={t.title} delay={i * 80}>
                <div className="bg-white/[0.06] border border-sky-blue/15 rounded-xl p-6 hover:bg-white/[0.1] hover:border-gold/25 transition-all duration-200 group">
                  <div className="text-3xl mb-4">{t.icon}</div>
                  <h3 className="font-700 text-[15px] text-white mb-2 group-hover:text-gold transition-colors">{t.title}</h3>
                  <p className="text-white/50 text-[13px] leading-relaxed">{t.body}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 bg-gold/15 rounded-full px-3 py-1">
                    <span className="text-gold text-[10px] font-700">★ NEW</span>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── WAY FORWARD ───────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">

            <RevealWrapper>
              <SectionLabel>Way Forward</SectionLabel>
              <h2 className="font-800 text-[clamp(26px,3.5vw,42px)] text-deep-blue mt-3 mb-5 leading-tight">
                Where We Are
                <br />
                <span className="text-sky-blue">Headed</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                Based on the 2025–26 Annual Report, the programme has clear priorities
                for the next phase of growth — scaling what is working and addressing
                the remaining barriers.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: '💻', text: 'Expand online sales capacity and digital literacy training.' },
                  { icon: '🌿', text: 'Strengthen eco-friendly production methods to tap into sustainable markets.' },
                  { icon: '🏪', text: 'Build partnerships to reach more retail outlets for consistent market access.' },
                  { icon: '💰', text: 'Continue scaling financial education to include savings groups and micro-investment.' },
                  { icon: '📈', text: 'Ensure continued support and expansion of market access for long-term sustainability.' },
                ].map(item => (
                  <li key={item.text} className="flex items-start gap-3 text-[14px] text-text-muted leading-relaxed">
                    <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </RevealWrapper>

            {/* Challenges & Solutions */}
            <RevealWrapper delay={150}>
              <SectionLabel>Challenges & Solutions</SectionLabel>
              <h2 className="font-800 text-[clamp(26px,3.5vw,42px)] text-deep-blue mt-3 mb-5 leading-tight">
                How We Overcome
                <br />
                <span className="text-sky-blue">Obstacles</span>
              </h2>
              <div className="space-y-4">
                {[
                  {
                    challenge: 'Limited resources to scale online sales platforms',
                    solution: 'Exploring mobile-based sales channels to reach wider audiences',
                  },
                  {
                    challenge: 'Rising material costs affecting production margins',
                    solution: 'Partnering with groups for bulk discounts and alternative sourcing',
                  },
                  {
                    challenge: 'Transport and logistics difficulties',
                    solution: 'Adjusting production schedules to align with market demand cycles',
                  },
                  {
                    challenge: 'Language and literacy barriers during training',
                    solution: 'Simplified visual training materials to overcome literacy barriers',
                  },
                ].map(item => (
                  <div key={item.challenge} className="bg-sky-light rounded-xl p-4 border border-sky-blue/10">
                    <div className="flex items-start gap-2 mb-2">
                      <span className="text-[11px] font-700 tracking-wider uppercase text-text-muted bg-white border border-border-soft rounded px-2 py-0.5 flex-shrink-0">Challenge</span>
                      <p className="text-deep-blue text-[13px] font-600">{item.challenge}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[11px] font-700 tracking-wider uppercase text-sky-blue bg-sky-blue/10 border border-sky-blue/20 rounded px-2 py-0.5 flex-shrink-0">Solution</span>
                      <p className="text-text-muted text-[13px]">{item.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────── */}
      <section className="bg-sky-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-section-diagonal opacity-50" />
        <div className="container-tight relative z-10 py-16 text-center px-5">
          <RevealWrapper>
            <h2 className="font-800 text-[clamp(26px,4vw,42px)] text-deep-blue mb-4 leading-tight">
              Support the Programme
            </h2>
            <p className="text-deep-blue/70 text-[16px] leading-relaxed max-w-lg mx-auto mb-7">
              Your donation directly funds craft materials, training sessions, and table banking
              contributions for grandmothers in Kibra.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 bg-deep-blue hover:bg-dark-navy text-white font-700 text-[14px] px-8 py-4 rounded-md transition-colors shadow-lg"
              >
                Get Involved
              </Link>
              <Link
                href="/impact"
                className="inline-flex items-center gap-2 bg-white/25 hover:bg-white/40 text-deep-blue font-600 text-[14px] px-8 py-4 rounded-md border border-deep-blue/15 transition-colors"
              >
                See the Impact
              </Link>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  )
}
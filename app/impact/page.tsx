import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import RevealWrapper from '@/components/RevealWrapper'
import StatsCounter from '@/components/StatsCounter'

export const metadata: Metadata = {
  title: 'Impact & Gallery',
  description:
    "The measurable impact of the Grannies Project — key achievements, income growth, community transformation, and a photo gallery from Kibra, Nairobi.",
}

const IMPACT_STATS = [
  { value: 6, label: 'Key Achievements', suffix: '+' },
  { value: 4, label: 'New Techniques 2025–26' },
  { value: 50, label: 'Weekly Table Banking (KES)' },
  { value: 25, label: 'Years of Service', suffix: '+' },
]

const ACHIEVEMENTS = [
  {
    icon: '💰',
    title: 'Increased Income',
    body: 'Project beneficiaries are earning more through improved craft production and access to new markets. The 2025–26 report documents noticeable income growth with beneficiaries reporting higher average earnings compared to last year.',
  },
  {
    icon: '⭐',
    title: 'Improved Product Quality',
    body: 'Training has raised the standard and marketability of craft items, attracting repeat customers and greater recognition — opening doors to premium buyers and community exhibitions.',
  },
  {
    icon: '🛒',
    title: 'Established Market Linkages',
    body: 'Strong sales channels now connect grannies to customers locally, nationally, and online — with more consistent sales and new partnerships with local groups established in 2025–26.',
  },
  {
    icon: '📚',
    title: 'Financial Literacy',
    body: "Grannies now demonstrate improved budgeting and pricing confidence. Participants manage their own pricing, savings, and simple business operations with growing independence.",
  },
  {
    icon: '🤲',
    title: 'Strengthened Social Bonds',
    body: "Community cohesion and mutual support networks have been rebuilt among previously isolated women. Stronger peer networks have been established, with mentorship between experienced and new participants.",
  },
  {
    icon: '🎨',
    title: 'Diversified Craft Range',
    body: "The range of craft items produced has grown significantly — beadwork, woven baskets, crocheted goods, Maasai bead items, patchwork bedcovers, and eco-friendly sisal basketry.",
  },
]

const IMPACT_QUOTES = [
  {
    quote: "The project has successfully empowered grannies, enabling them to generate income and enhance their social support system.",
    source: "Grannies Project Annual Report 2025–26",
  },
  {
    quote: "The project's holistic approach, addressing both economic and social needs, has resulted in significant positive impacts.",
    source: "Overall Progress Assessment",
  },
]

const GALLERY_PHOTOS = [
  { src: '/basketry.jpg', alt: 'Grannies weaving sisal baskets', caption: 'Traditional basketry' },
  { src: '/community.jpg', alt: 'Group of grandmothers smiling together', caption: 'Community gathering' },
  { src: '/kiondoo.jpg', alt: 'Maasai beadwork kiondoo bag', caption: 'Maasai beadwork' },
  { src: '/weaving.jpg', alt: 'Grannies weaving eco-friendly baskets', caption: 'Sisal basketry' },
  { src: '/weaving-training.jpg', alt: 'Skill training session with grandmothers', caption: 'Hands-on training' },
  { src: '/rugs.jpg', alt: 'Handmade rugs and crafts at the market', caption: 'Market day sales' },
  { src: '/products.jpg', alt: 'Assorted finished craft products', caption: 'Finished products' },
  { src: '/beaded-bracelets.jpg', alt: 'Colorful beaded bracelets', caption: 'Beaded jewellery' },
  { src: '/bead-training.jpg', alt: 'Beadwork training session', caption: 'Beadwork training' },
  { src: '/earrings.jpg', alt: 'Handmade beaded earrings', caption: 'Beaded earrings' },
]

export default function ImpactPage() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────── */}
      <section className="bg-deep-blue relative overflow-hidden pt-[68px]">
        <div className="absolute inset-0 bg-hero-mesh" />
        <div className="absolute inset-0 bg-section-diagonal" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl animate-fade-up">
            <div className="inline-flex items-center gap-2.5 bg-dark-navy/10 border border-dark-navy/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-dot" />
              <span className="text-dark-navy/80 text-[11px] font-600 tracking-[2px] uppercase">
                Annual Report 2025–26
              </span>
            </div>
            <h1 className="font-800 text-[clamp(40px,6vw,72px)] text-dark-navy leading-tight mb-5 tracking-tight">
              Impact &<br />
              <span className="text-white">Gallery</span>
            </h1>
            <p className="text-dark-navy/80 text-[20px] font-300 leading-relaxed max-w-xl">
              Measurable change in the lives of grandmothers in Kibra — and a window
              into the work, the craft, and the community we are building.
            </p>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-5 lg:px-8 py-3 flex items-center gap-2 text-[12px] text-dark-navy/40">
            <Link href="/" className="hover:text-dark-navy/60 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-dark-navy/60">Impact</span>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────── */}
      <StatsCounter stats={IMPACT_STATS} variant="dark" />

      {/* ── OVERALL PROGRESS ──────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <RevealWrapper>
              <SectionLabel>Overall Progress</SectionLabel>
              <h2 className="font-800 text-[clamp(28px,3.5vw,44px)] text-deep-blue leading-tight mt-3 mb-5">
                Beyond Empowerment —
                <br />
                <span className="text-sky-blue">A Phase of Growth</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                The Grannies Project has moved beyond its initial empowerment stage into a
                phase of growth and improvement. By combining economic support with social
                cohesion, the project continues to deliver transformative outcomes year after year.
              </p>
              <p className="text-text-muted leading-relaxed mb-6">
                The 2025–26 Annual Report documents noticeable improvement in financial
                stability and living standards, with grannies reporting greater confidence,
                stronger peer networks, and greater visibility in community life.
              </p>

              <div className="space-y-3">
                {IMPACT_QUOTES.map(q => (
                  <blockquote key={q.source} className="bg-sky-light border-l-4 border-sky-blue rounded-r-xl p-4">
                    <p className="text-deep-blue font-500 text-[14px] leading-relaxed italic">
                      &ldquo;{q.quote}&rdquo;
                    </p>
                    <footer className="text-sky-blue text-[11px] font-600 mt-2">
                      — {q.source}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </RevealWrapper>

            <RevealWrapper delay={150}>
              <div className="relative rounded-2xl overflow-hidden bg-sky-light aspect-[4/3] shadow-card">
                <Image
                  src="/grannies-group.jpg"
                  alt="Grannies community"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white font-700 text-[15px] mb-1">
                    Grannies Community Project
                  </p>
                  <p className="text-white/70 text-[12px]">Kibra, Nairobi · Est. 1998</p>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* ── KEY ACHIEVEMENTS ──────────────────────── */}
      <section className="section-pad bg-sky-light relative overflow-hidden pattern-diagonal">
        <div className="container-wide relative z-10">
          <RevealWrapper className="text-center max-w-xl mx-auto mb-12">
            <SectionLabel>Key Achievements</SectionLabel>
            <h2 className="font-800 text-[clamp(28px,3.5vw,44px)] text-deep-blue mt-3 mb-4 leading-tight">
              What We Have Achieved
            </h2>
            <p className="text-text-muted leading-relaxed">
              Through persistent effort and the trust of our community, the Grannies
              Project has produced measurable and lasting change.
            </p>
          </RevealWrapper>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ACHIEVEMENTS.map((item, i) => (
              <RevealWrapper key={item.title} delay={i * 80}>
                <div className="bg-white rounded-xl p-6 border border-sky-blue/10 hover:border-gold/30 hover:shadow-card-hover transition-all duration-300 group h-full">
                  <div className="w-12 h-12 rounded-xl bg-deep-blue group-hover:bg-sky-blue flex items-center justify-center text-2xl mb-4 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div className="flex items-start gap-2 mb-3">
                    <div className="w-5 h-5 rounded-full bg-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-deep-blue text-[10px] font-800">✓</span>
                    </div>
                    <h3 className="font-700 text-[16px] text-deep-blue group-hover:text-sky-blue transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-text-muted text-[13.5px] leading-relaxed pl-7">{item.body}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEEPER IMPACT ─────────────────────────── */}
      <section className="section-pad bg-sky-light relative overflow-hidden">
        <div className="absolute inset-0 bg-section-diagonal" />
        <div className="container-wide relative z-10">

          <RevealWrapper className="text-center max-w-xl mx-auto mb-12">
            <SectionLabel variant="sky">Deeper Impact</SectionLabel>
            <h2 className="font-800 text-[clamp(28px,3.5vw,44px)] text-gold mt-3 mb-4 leading-tight">
              Transforming Lives,
              <br />
              <span className="text-dark-navy">Beyond the Craft</span>
            </h2>
          </RevealWrapper>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: '📈',
                title: 'Financial Stability',
                body: 'Noticeable improvement in financial stability and living standards compared to last year, with grannies reporting higher average earnings and better household budgeting.',
              },
              {
                icon: '💪',
                title: 'Confidence & Leadership',
                body: 'Increased confidence and self-esteem — more grannies are taking on leadership roles within their groups, mentoring newer participants and speaking at community events.',
              },
              {
                icon: '🌐',
                title: 'Social Networks',
                body: "Stronger social networks are evolving into support groups that extend beyond craft production — providing emotional support, shared childcare knowledge, and community solidarity.",
              },
              {
                icon: '🎤',
                title: 'Community Visibility',
                body: "Greater visibility of grannies' work in community events and exhibitions — shifting the narrative from vulnerability to contribution and dignity.",
              },
            ].map((item, i) => (
              <RevealWrapper key={item.title} delay={i * 80}>
                <div className="bg-white/[0.06] border border-sky-blue/15 rounded-xl p-6 hover:bg-white/[0.1] transition-all duration-200 group">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-700 text-[17px] text-black mb-2 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-deep-blue/85 text-[14px] leading-relaxed">{item.body}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ─────────────────────────── */}
      <section className="section-pad bg-white" id="gallery">
        <div className="container-wide">
          <RevealWrapper className="mb-10">
            <SectionLabel>In the Field</SectionLabel>
            <h2 className="font-800 text-[clamp(28px,3.5vw,44px)] text-deep-blue mt-3 mb-3 leading-tight">
              Photo Gallery
            </h2>
            <p className="text-text-muted text-[15px] leading-relaxed max-w-lg">
              A window into the lives, laughter, and labour of the grandmothers we serve.
            </p>
          </RevealWrapper>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {GALLERY_PHOTOS.map((photo, i) => (
              <RevealWrapper
                key={photo.src}
                delay={i * 60}
                className={i === 0 ? 'col-span-2 row-span-2' : ''}
              >
                <div className="relative group rounded-xl overflow-hidden bg-sky-light border-2 border-border-soft hover:border-sky-blue/40 transition-all duration-300 hover:shadow-card-hover aspect-square">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white font-600 text-[12px]">{photo.caption}</p>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────── */}
      <section className="bg-deep-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-section-diagonal opacity-50" />
        <div className="container-tight relative z-10 py-16 text-center px-5">
          <RevealWrapper>
            <h2 className="font-800 text-[clamp(26px,4vw,42px)] text-dark-navy mb-4 leading-tight">
              Help Us Write the Next Chapter
            </h2>
            <p className="text-dark-navy/70 text-[16px] leading-relaxed max-w-lg mx-auto mb-7">
              The data shows what is possible. Your support helps the Grannies Project
              sustain and scale these results to reach more grandmothers.
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
                View Programme
              </Link>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  )
}
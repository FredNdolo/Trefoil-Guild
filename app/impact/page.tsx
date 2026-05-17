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
      {/* PAGE HERO */}
      <section className="bg-dark-navy relative overflow-hidden pt-[68px]">
        <div className="absolute inset-0 bg-hero-mesh" />
        <div className="absolute inset-0 bg-section-diagonal" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl animate-fade-up">
            <div className="inline-flex items-center gap-2.5 bg-sky-blue/10 border border-sky-blue/25 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-dot" />
              <span className="text-gold/90 text-[11px] font-600 tracking-[2px] uppercase">
                Annual Report 2025–26
              </span>
            </div>
            <h1 className="font-800 text-[clamp(40px,6vw,72px)] text-white leading-tight mb-5 tracking-tight">
              Impact &<br />
              <span className="text-sky-blue">Gallery</span>
            </h1>
            <p className="text-white/60 text-[17px] font-300 leading-relaxed max-w-xl">
              Measurable change in the lives of grandmothers in Kibra — and a window
              into the work, the craft, and the community we are building.
            </p>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-5 lg:px-8 py-3 flex items-center gap-2 text-[12px] text-white/35">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">Impact</span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <StatsCounter stats={IMPACT_STATS} variant="gold" />

      {/* OVERALL PROGRESS */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <RevealWrapper>
              <SectionLabel>Overall Progress</SectionLabel>
              <h2 className="font-800 text-[clamp(28px,3.5vw,44px)] text-deep-blue leading-tight mt-3 mb-5">
                Beyond Empowerment —<br />
                <span className="text-sky-blue">A Phase of Growth</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                The Grannies Project has moved beyond its initial empowerment stage into a
                phase of growth and improvement.
              </p>

              <div className="space-y-3">
                {IMPACT_QUOTES.map((q) => (
                  <blockquote key={q.source} className="bg-sky-light border-l-4 border-sky-blue rounded-r-xl p-4">
                    <p className="text-deep-blue font-500 text-[14px] leading-relaxed italic">
                      “{q.quote}”
                    </p>
                    <footer className="text-sky-blue text-[11px] font-600 mt-2">— {q.source}</footer>
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
                  <p className="text-white font-700 text-[15px] mb-1">Grannies Community Project</p>
                  <p className="text-white/70 text-[12px]">Kibra, Nairobi · Est. 1998</p>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* KEY ACHIEVEMENTS & DEEPER IMPACT sections remain the same as before */}

      {/* PHOTO GALLERY - IMPROVED */}
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

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white font-600 text-sm leading-tight">{photo.caption}</p>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sky-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-section-diagonal opacity-50" />
        <div className="container-tight relative z-10 py-16 text-center px-5">
          <RevealWrapper>
            <h2 className="font-800 text-[clamp(26px,4vw,42px)] text-deep-blue mb-4 leading-tight">
              Help Us Write the Next Chapter
            </h2>
            <p className="text-deep-blue/70 text-[16px] leading-relaxed max-w-lg mx-auto mb-7">
              The data shows what is possible. Your support helps the Grannies Project
              sustain and scale these results to reach more grandmothers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 bg-deep-blue hover:bg-dark-navy text-white font-700 text-[14px] px-8 py-4 rounded-md transition-colors shadow-lg"
              >
                Get Involved
              </Link>
              <Link
                href="/programme"
                className="inline-flex items-center gap-2 bg-white/25 hover:bg-white/40 text-deep-blue font-600 text-[14px] px-8 py-4 rounded-md border border-deep-blue/15 transition-colors"
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
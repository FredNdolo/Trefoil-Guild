import Link from 'next/link'
import Image from 'next/image'

const FOOTER_LINKS = [
  {
    heading: 'Navigation',
    links: [
      { label: 'Home',         href: '/' },
      { label: 'About',        href: '/about' },
      { label: 'Programme',    href: '/programme' },
      { label: 'Impact',       href: '/impact' },
      { label: 'Get Involved', href: '/get-involved' },
      { label: 'Contact',      href: '/contact' },
    ],
  },
  {
    heading: 'Get Involved',
    links: [
      { label: 'Donate',    href: '/get-involved#donate' },
      { label: 'Volunteer', href: '/get-involved#volunteer' },
      { label: 'Partner',   href: '/get-involved#partner' },
      { label: 'Sponsor',   href: '/get-involved#sponsor' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-dark-navy border-t border-sky-blue/10">

      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-5 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand block */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-gold/40">
              <Image
                src="/logo.jpeg"
                alt="Trefoil Guild Kenya"
                width={48}
                height={48}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <div className="text-white font-700 text-[16px] leading-tight">Grannies Project</div>
              <div className="text-sky-blue/70 text-[11px] font-500 tracking-wider uppercase">Trefoil Guild Kenya</div>
            </div>
          </div>

          <p className="text-white/55 text-sm leading-relaxed max-w-sm mb-5">
            Empowering vulnerable grandmothers in Nairobi&apos;s Kibra through craft skills,
            economic independence, and community bonds. A programme of the Kenya Girl
            Guides Association — aligned to WAGGGS values and the UN Sustainable
            Development Goals.
          </p>

          {/* Tagline */}
          <div className="inline-flex items-center gap-2 bg-sky-blue/10 border border-sky-blue/20 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-blue animate-pulse-dot" />
            <span className="text-sky-blue/90 text-[11px] font-600 tracking-widest uppercase">
              Inspiring Generations, Building Communities
            </span>
          </div>
        </div>

        {/* Link columns */}
        {FOOTER_LINKS.map(col => (
          <div key={col.heading}>
            <h4 className="text-gold text-[11px] font-700 tracking-[2px] uppercase mb-4">
              {col.heading}
            </h4>
            <ul className="space-y-2.5">
              {col.links.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/55 hover:text-white text-[13.5px] font-400 transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contact strip */}
      <div className="border-t border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <a
              href="mailto:trefoil.guildkgga@gmail.com"
              className="text-sky-blue/80 hover:text-sky-blue text-[13px] transition-colors"
            >
              trefoil.guildkgga@gmail.com
            </a>
            <span className="text-white/30 text-[13px]">
              Arboretum Road, Off State House Rd, Nairobi, Kenya
            </span>
          </div>
          <div className="text-white/25 text-[12px]">
            © {new Date().getFullYear()} Kenya Girl Guides Association
          </div>
        </div>
      </div>
    </footer>
  )
}
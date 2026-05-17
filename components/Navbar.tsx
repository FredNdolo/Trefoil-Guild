'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const NAV_LINKS = [
  { label: 'Home',          href: '/' },
  { label: 'About',         href: '/about' },
  { label: 'Programme',     href: '/programme' },
  { label: 'Impact',        href: '/impact' },
  { label: 'Get Involved',  href: '/get-involved' },
  { label: 'Contact',       href: '/contact' },
]

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-deep-blue/98 backdrop-blur-md shadow-[0_2px_20px_rgba(13,27,75,0.35)]'
            : 'bg-deep-blue'
        )}
      >
        <div className="max-w-6xl mx-auto px-5 lg:px-8 h-[68px] flex items-center justify-between">

          {/* Brand / Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-gold/60 group-hover:ring-gold transition-all duration-200">
              <Image
                src="/logo.jpeg"
                alt="Trefoil Guild Kenya"
                width={40}
                height={40}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="text-white font-bold text-[15px] tracking-tight leading-none">
                Grannies Project
              </div>
              <div className="text-sky-blue/80 text-[10.5px] font-medium tracking-wider uppercase">
                Trefoil Guild Kenya
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={clsx(
                      'relative px-3 py-1.5 text-[13px] font-500 tracking-wide transition-colors duration-200 rounded',
                      active
                        ? 'text-gold'
                        : 'text-white/75 hover:text-white'
                    )}
                  >
                    {label}
                    {active && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gold rounded-full" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/get-involved"
            className="hidden lg:inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-deep-blue font-700 text-[13px] px-5 py-2.5 rounded-md transition-all duration-200 hover:-translate-y-px active:translate-y-0 shadow-sm hover:shadow-gold-glow"
          >
            Support Us
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2 -mr-2"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={clsx('block h-[2px] bg-white rounded-full transition-all duration-300 origin-center',
              menuOpen ? 'w-6 rotate-45 translate-y-[7px]' : 'w-6')} />
            <span className={clsx('block h-[2px] bg-white rounded-full transition-all duration-200',
              menuOpen ? 'w-0 opacity-0' : 'w-4')} />
            <span className={clsx('block h-[2px] bg-white rounded-full transition-all duration-300 origin-center',
              menuOpen ? 'w-6 -rotate-45 -translate-y-[7px]' : 'w-6')} />
          </button>

        </div>
      </nav>

      {/* Mobile slide-down menu */}
      <div
        className={clsx(
          'fixed inset-0 z-40 flex flex-col pt-[68px] transition-all duration-300 lg:hidden',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-dark-navy/90 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={clsx(
            'relative bg-deep-blue border-t border-sky-blue/20 transition-transform duration-300',
            menuOpen ? 'translate-y-0' : '-translate-y-4'
          )}
        >
          <ul className="flex flex-col divide-y divide-white/[0.07]">
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={clsx(
                      'flex items-center justify-between px-6 py-4 text-[15px] font-500 transition-colors',
                      active ? 'text-gold bg-white/5' : 'text-white/80 hover:text-white hover:bg-white/5'
                    )}
                  >
                    {label}
                    {active && <span className="text-gold text-xs">●</span>}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="p-4 border-t border-white/10">
            <Link
              href="/get-involved"
              className="flex items-center justify-center gap-2 bg-gold text-deep-blue font-700 text-[14px] px-6 py-3 rounded-md w-full transition-colors hover:bg-gold-dark"
            >
              Support the Grannies Project
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
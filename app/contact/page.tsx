'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SectionLabel from '@/components/SectionLabel'
import RevealWrapper from '@/components/RevealWrapper'

const SUBJECTS = [
  'General Enquiry',
  'Donation Enquiry',
  'Volunteer Enquiry',
  'Partnership Enquiry',
  'Sponsorship Enquiry',
  'Media / Press',
  'Other',
]

const INTERESTS = [
  'Donate',
  'Volunteer',
  'Partner',
  'Sponsor',
  "Buy the grannies' products",
  'Learn more about the project',
  'Other',
]

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const [fields, setFields] = useState({
    name:     '',
    email:    '',
    interest: '',
    subject:  '',
    message:  '',
  })

  const set = (key: keyof typeof fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFields(prev => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })

      const data = await res.json()

      if (data.success) {
        setFormState('success')
        setFields({ name: '', email: '', interest: '', subject: '', message: '' })
      } else {
        setFormState('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setFormState('error')
      setErrorMessage('Network error — please check your connection and try again.')
    }
  }

  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────── */}
      <section className="bg-deep-blue relative overflow-hidden pt-[68px]">
        <div className="absolute inset-0 bg-hero-mesh" />
        <div className="absolute inset-0 bg-section-diagonal" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl animate-fade-up">
            <div className="inline-flex items-center gap-2.5 bg-sky-blue/10 border border-sky-blue/25 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-blue animate-pulse-dot" />
              <span className="text-sky-blue/90 text-[11px] font-600 tracking-[2px] uppercase">
                Reach Out
              </span>
            </div>
            <h1 className="font-800 text-[clamp(40px,6vw,72px)] text-white leading-tight mb-5 tracking-tight">
              Get in <span className="text-gold">Touch</span>
            </h1>
            <p className="text-white/80 text-[17px] font-300 leading-relaxed max-w-lg">
              Whether you are a donor, volunteer, partner, or simply someone who cares
              about the grandmothers of Kibra — we would love to hear from you.
            </p>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-5 lg:px-8 py-3 flex items-center gap-2 text-[12px] text-white/35">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">Contact</span>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ──────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">

            {/* ── LEFT: Contact details ── */}
            <div className="space-y-6">
              <RevealWrapper>
                <SectionLabel>Contact Information</SectionLabel>
                <h2 className="font-800 text-[clamp(24px,3vw,36px)] text-deep-blue mt-3 mb-5 leading-tight">
                  Trefoil Guild Kenya
                </h2>

                <div className="bg-deep-blue rounded-2xl p-7 space-y-5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-section-diagonal" />
                  <div className="relative z-10 space-y-5">

                    {/* Logo */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-gold/40">
                        <Image
                          src="/logo.jpeg"
                          alt="Trefoil Guild Kenya"
                          width={56}
                          height={56}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <div className="text-white font-700 text-[15px]">Grannies Project</div>
                        <div className="text-sky-blue/70 text-[11px] font-500 tracking-wide uppercase">Trefoil Guild Kenya</div>
                      </div>
                    </div>

                    {[
                      {
                        label: 'Organisation',
                        icon: '🏛️',
                        value: 'Kenya Girl Guides Association\nTrefoil Guild Kenya',
                      },
                      {
                        label: 'Email',
                        icon: '✉️',
                        value: 'trefoil.guildkgga@gmail.com',
                        href: 'mailto:trefoil.guildkgga@gmail.com',
                      },
                      {
                        label: 'Address',
                        icon: '📍',
                        value: 'Arboretum Road, Off State House Rd\nP.O Box 40004 – 00100\nNairobi, Kenya',
                      },
                      {
                        label: 'Project',
                        icon: '🤲',
                        value: 'Grannies Community Project\nInspiring Generations, Building Communities',
                      },
                    ].map(item => (
                      <div key={item.label} className="flex items-start gap-3">
                        <span className="text-lg flex-shrink-0 mt-0.5">{item.icon}</span>
                        <div>
                          <div className="text-sky-blue text-[10px] font-700 tracking-[1.5px] uppercase mb-1">
                            {item.label}
                          </div>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-white/80 hover:text-sky-blue text-[14px] leading-relaxed transition-colors whitespace-pre-line"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-white/80 text-[14px] leading-relaxed whitespace-pre-line">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealWrapper>

              {/* Response time note */}
              <RevealWrapper delay={100}>
                <div className="bg-sky-light border border-sky-blue/20 rounded-xl p-4 flex items-start gap-3">
                  <span className="text-sky-blue text-xl flex-shrink-0">⏱️</span>
                  <div>
                    <p className="text-deep-blue font-700 text-[13px] mb-1">Response Time</p>
                    <p className="text-text-muted text-[13px] leading-relaxed">
                      We typically respond to enquiries within <strong>1–2 business days</strong>.
                      For urgent matters, please email us directly.
                    </p>
                  </div>
                </div>
              </RevealWrapper>

              {/* Quick links */}
              <RevealWrapper delay={150}>
                <div className="bg-gold-pale border border-gold/20 rounded-xl p-5">
                  <p className="text-deep-blue font-700 text-[12px] tracking-[1.5px] uppercase mb-3">
                    Quick Links
                  </p>
                  <div className="space-y-2">
                    {[
                      { label: 'Learn about the programme', href: '/programme' },
                      { label: 'See our impact data',        href: '/impact' },
                      { label: 'Ways to get involved',       href: '/get-involved' },
                    ].map(link => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center gap-2 text-deep-blue hover:text-sky-blue font-500 text-[13.5px] transition-colors group"
                      >
                        <span className="text-gold group-hover:text-sky-blue transition-colors">→</span>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </RevealWrapper>
            </div>

            {/* ── RIGHT: Contact form ── */}
            <RevealWrapper delay={100}>
              <div className="bg-white rounded-2xl border border-border-soft shadow-card p-7 md:p-8">
                <h3 className="font-800 text-[22px] text-deep-blue mb-1">Send Us a Message</h3>
                <p className="text-text-muted text-[13.5px] mb-7">
                  Fill in the form below and we will be in touch shortly.
                </p>

                {/* ── SUCCESS STATE ── */}
                {formState === 'success' && (
                  <div className="bg-sky-light border border-sky-blue/30 rounded-xl p-6 text-center mb-6">
                    <div className="text-4xl mb-3">✅</div>
                    <h4 className="font-700 text-[18px] text-deep-blue mb-2">Message Sent!</h4>
                    <p className="text-text-muted text-[14px] leading-relaxed">
                      Thank you for reaching out. A confirmation has been sent to your email.
                      We will be in touch within 1–2 business days.
                    </p>
                    <button
                      onClick={() => setFormState('idle')}
                      className="mt-4 text-sky-blue hover:text-deep-blue font-600 text-[13px] transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                )}

                {/* ── FORM ── */}
                {formState !== 'success' && (
                  <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-700 text-deep-blue tracking-wide uppercase mb-1.5">
                          Full Name <span className="text-gold">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={fields.name}
                          onChange={set('name')}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 bg-sky-light border border-sky-blue/20 rounded-lg text-[14px] text-text-dark placeholder:text-text-muted/50 focus:outline-none focus:border-sky-blue focus:ring-2 focus:ring-sky-blue/15 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[12px] font-700 text-deep-blue tracking-wide uppercase mb-1.5">
                          Email Address <span className="text-gold">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={fields.email}
                          onChange={set('email')}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 bg-sky-light border border-sky-blue/20 rounded-lg text-[14px] text-text-dark placeholder:text-text-muted/50 focus:outline-none focus:border-sky-blue focus:ring-2 focus:ring-sky-blue/15 transition-all"
                        />
                      </div>
                    </div>

                    {/* Area of Interest */}
                    <div>
                      <label className="block text-[12px] font-700 text-deep-blue tracking-wide uppercase mb-1.5">
                        Area of Interest
                      </label>
                      <select
                        value={fields.interest}
                        onChange={set('interest')}
                        className="w-full px-4 py-3 bg-sky-light border border-sky-blue/20 rounded-lg text-[14px] text-text-dark focus:outline-none focus:border-sky-blue focus:ring-2 focus:ring-sky-blue/15 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select an option...</option>
                        {INTERESTS.map(i => (
                          <option key={i} value={i}>{i}</option>
                        ))}
                      </select>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-[12px] font-700 text-deep-blue tracking-wide uppercase mb-1.5">
                        Subject
                      </label>
                      <select
                        value={fields.subject}
                        onChange={set('subject')}
                        className="w-full px-4 py-3 bg-sky-light border border-sky-blue/20 rounded-lg text-[14px] text-text-dark focus:outline-none focus:border-sky-blue focus:ring-2 focus:ring-sky-blue/15 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select a subject...</option>
                        {SUBJECTS.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[12px] font-700 text-deep-blue tracking-wide uppercase mb-1.5">
                        Message <span className="text-gold">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={fields.message}
                        onChange={set('message')}
                        placeholder="Tell us how you would like to get involved, or ask us anything about the Grannies Project..."
                        className="w-full px-4 py-3 bg-sky-light border border-sky-blue/20 rounded-lg text-[14px] text-text-dark placeholder:text-text-muted/50 focus:outline-none focus:border-sky-blue focus:ring-2 focus:ring-sky-blue/15 transition-all resize-none"
                      />
                    </div>

                    {/* Error message */}
                    {formState === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 flex items-start gap-2">
                        <span className="text-red-500 flex-shrink-0">⚠️</span>
                        <p className="text-red-700 text-[13.5px]">{errorMessage}</p>
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={formState === 'loading'}
                      className="w-full flex items-center justify-center gap-2 bg-deep-blue hover:bg-mid-blue disabled:bg-text-muted text-white font-700 text-[14px] px-6 py-4 rounded-lg transition-all duration-200 hover:-translate-y-px disabled:translate-y-0 disabled:cursor-not-allowed"
                    >
                      {formState === 'loading' ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M1.5 7.5h12M8 2l5.5 5.5L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-center text-text-muted text-[12px]">
                      Fields marked <span className="text-gold font-700">*</span> are required.
                      We will never share your details with third parties.
                    </p>
                  </form>
                )}
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* ── LOCATION EMBED ────────────────────────── */}
      <section className="bg-sky-light">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 py-12">
          <RevealWrapper>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">📍</span>
              <div>
                <p className="text-deep-blue font-700 text-[15px]">Our Location</p>
                <p className="text-text-muted text-[13px]">
                  Kenya Girl Guides Association — Arboretum Road, Off State House Rd, Nairobi
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-sky-blue/15 shadow-card h-[320px] bg-deep-blue/5">
              <iframe
                title="Kenya Girl Guides Association Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8191!2d36.8144!3d-1.2820!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d5b7c1c1c1%3A0x1234567890abcdef!2sKenya+Girl+Guides+Association!5e0!3m2!1sen!2ske!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  )
}
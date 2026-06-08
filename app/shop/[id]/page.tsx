'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { PRODUCTS, fmt } from '@/lib/products'

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="16" height="16" viewBox="0 0 12 12" fill="none">
          <path
            d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 8.9l.5-2.9L2 4l2.9-.4L6 1z"
            fill={i <= Math.round(rating) ? '#F5A623' : '#e2e8f0'}
          />
        </svg>
      ))}
    </div>
  )
}

export default function ProductPage() {
  const { id } = useParams()
  const product = PRODUCTS.find(p => p.id === Number(id))
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const related = PRODUCTS.filter(p => p.category === product?.category && p.id !== product?.id).slice(0, 4)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-[68px]">
        <div className="text-center">
          <p className="text-text-muted text-[16px] mb-4">Product not found.</p>
          <Link href="/shop" className="text-sky-blue hover:text-deep-blue font-600 text-[14px] transition-colors">← Back to Shop</Link>
        </div>
      </div>
    )
  }

  function handleAdd() {
    setAdded(true)
    setTimeout(() => setAdded(false), 1400)
  }

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-[68px]">

      {/* Breadcrumb */}
      <div className="bg-white border-b border-border-soft">
        <div className="container-wide py-3 flex items-center gap-2 text-[12px] text-text-muted">
          <Link href="/" className="hover:text-dark-navy transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-dark-navy transition-colors">Shop</Link>
          <span>/</span>
          <Link href={`/shop?category=${product.category}`} className="hover:text-dark-navy transition-colors">{product.category}</Link>
          <span>/</span>
          <span className="text-dark-navy font-500 truncate max-w-[200px]">{product.name}</span>
        </div>
      </div>

      <div className="container-wide py-8 md:py-12">

        {/* ── MAIN PRODUCT SECTION ── */}
        <div className="grid lg:grid-cols-[1fr_1fr_320px] gap-8 mb-12">

          {/* Image */}
          <div className="space-y-3">
            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden border border-border-soft shadow-sm">
              <Image src={product.image} alt={product.name} fill className="object-cover" priority />
              {product.badge && (
                <span className={`absolute top-4 left-4 text-[11px] font-700 tracking-wider uppercase px-3 py-1 rounded-full shadow
                  ${product.badge === 'Bestseller' ? 'bg-gold text-dark-navy' :
                    product.badge === 'New' ? 'bg-sky-blue text-white' :
                    'bg-emerald-600 text-white'}`}>
                  {product.badge}
                </span>
              )}
              {!product.inStock && (
                <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] flex items-center justify-center">
                  <span className="bg-dark-navy text-white text-[13px] font-700 uppercase tracking-wider px-5 py-2.5 rounded-full">
                    Out of Stock
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Details */}
          <div>
            <span className="text-[11px] font-700 tracking-[2px] uppercase text-sky-blue mb-2 block">
              {product.category}
            </span>
            <h1 className="font-800 text-[clamp(22px,3vw,32px)] text-dark-navy leading-tight mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border-soft">
              <Stars rating={product.rating} />
              <span className="text-sky-blue text-[13px] font-600">{product.rating}</span>
              <span className="text-text-muted text-[13px]">{product.reviewCount} reviews</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-5">
              <span className="font-800 text-[28px] text-dark-navy">{fmt(product.price)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-[16px] text-text-muted line-through">{fmt(product.originalPrice)}</span>
                  <span className="text-[13px] font-700 text-red-500 bg-red-50 px-2 py-0.5 rounded-md">
                    {discount}% off
                  </span>
                </>
              )}
            </div>

            {/* Stock status */}
            <div className={`inline-flex items-center gap-1.5 text-[12px] font-700 mb-5 ${product.inStock ? 'text-emerald-600' : 'text-red-500'}`}>
              <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-emerald-500' : 'bg-red-400'}`} />
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </div>

            {/* Description */}
            <p className="text-text-muted text-[15px] leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Product details */}
            <div className="bg-sky-light rounded-xl p-5 mb-6">
              <h3 className="font-700 text-[12px] tracking-[1.5px] uppercase text-dark-navy mb-3">Product Details</h3>
              <ul className="space-y-2">
                {product.details.map(d => (
                  <li key={d} className="flex items-start gap-2.5 text-[13px] text-text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact note */}
            <div className="flex items-start gap-3 bg-gold/10 border border-gold/20 rounded-xl p-4 text-[13px] text-dark-navy/80">
              <span className="text-xl flex-shrink-0">🤝</span>
              <p><strong>Your purchase matters.</strong> 100% of proceeds go directly to supporting grandmothers in Kibra, Nairobi through the Trefoil Guild Grannies Project.</p>
            </div>
          </div>

          {/* ── BUY BOX ── */}
          <div className="lg:sticky lg:top-[88px] h-fit">
            <div className="bg-white rounded-2xl border border-border-soft shadow-card p-6 space-y-4">
              <div>
                <span className="font-800 text-[26px] text-dark-navy">{fmt(product.price)}</span>
                {product.originalPrice && (
                  <p className="text-text-muted text-[12px] mt-0.5">
                    Was <span className="line-through">{fmt(product.originalPrice)}</span> · You save {fmt(product.originalPrice - product.price)}
                  </p>
                )}
              </div>

              <div className={`text-[13px] font-700 ${product.inStock ? 'text-emerald-600' : 'text-red-500'}`}>
                {product.inStock ? '✓ In Stock' : '✗ Currently unavailable'}
              </div>

              {product.inStock && (
                <>
                  {/* Qty selector */}
                  <div>
                    <label className="text-[12px] font-600 text-dark-navy/60 uppercase tracking-wider block mb-2">Quantity</label>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setQty(q => Math.max(1, q - 1))}
                        className="w-8 h-8 rounded-full border border-border-soft flex items-center justify-center hover:bg-sky-light transition-colors font-700 text-dark-navy"
                      >−</button>
                      <span className="font-700 text-[15px] text-dark-navy w-6 text-center">{qty}</span>
                      <button
                        onClick={() => setQty(q => q + 1)}
                        className="w-8 h-8 rounded-full border border-border-soft flex items-center justify-center hover:bg-sky-light transition-colors font-700 text-dark-navy"
                      >+</button>
                    </div>
                  </div>

                  <button
                    onClick={handleAdd}
                    className={`w-full py-3.5 rounded-md font-700 text-[14px] transition-all duration-200
                      ${added ? 'bg-emerald-500 text-white' : 'bg-gold hover:bg-gold-dark text-dark-navy shadow-gold-glow'}`}
                  >
                    {added ? '✓ Added to Cart' : 'Add to Cart'}
                  </button>

                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-full py-3 rounded-md border border-dark-navy/20 hover:border-dark-navy/40 font-600 text-[13px] text-dark-navy transition-colors"
                  >
                    Enquire / Order via WhatsApp
                  </Link>
                </>
              )}

              <div className="border-t border-border-soft pt-4 space-y-2 text-[12px] text-text-muted">
                <div className="flex items-center gap-2">
                  <span>📦</span> Nairobi delivery available
                </div>
                <div className="flex items-center gap-2">
                  <span>🏪</span> Pickup from Guild HQ, Nairobi
                </div>
                <div className="flex items-center gap-2">
                  <span>💳</span> M-Pesa / card payment coming soon
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── RELATED PRODUCTS ── */}
        {related.length > 0 && (
          <div>
            <h2 className="font-800 text-[20px] text-dark-navy mb-5">
              More in <span className="text-sky-blue">{product.category}</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map(p => (
                <Link
                  key={p.id}
                  href={`/shop/${p.id}`}
                  className="bg-white rounded-xl border border-border-soft overflow-hidden hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <div className="relative aspect-square bg-sky-light overflow-hidden">
                    <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-3">
                    <p className="font-700 text-[13px] text-dark-navy group-hover:text-sky-blue transition-colors line-clamp-2 mb-1">{p.name}</p>
                    <div className="flex items-center gap-1 mb-1">
                      <Stars rating={p.rating} />
                      <span className="text-[10px] text-text-muted">({p.reviewCount})</span>
                    </div>
                    <p className="font-800 text-[14px] text-dark-navy">{fmt(p.price)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back link */}
        <div className="mt-10">
          <Link href="/shop" className="inline-flex items-center gap-2 text-sky-blue hover:text-deep-blue font-600 text-[13px] transition-colors">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Back to Shop
          </Link>
        </div>
      </div>
    </div>
  )
}
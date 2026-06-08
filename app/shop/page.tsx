'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PRODUCTS, CATEGORIES, fmt, type Category } from '@/lib/products'

interface CartItem { id: number; name: string; price: number; image: string; qty: number }

/* ─── Star Rating ────────────────────────────────────────────────────────── */
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 8.9l.5-2.9L2 4l2.9-.4L6 1z"
            fill={i <= Math.round(rating) ? '#F5A623' : '#e2e8f0'}
          />
        </svg>
      ))}
    </div>
  )
}

/* ─── Cart Sidebar ───────────────────────────────────────────────────────── */
function CartSidebar({ cart, onClose, onQty, onRemove }: {
  cart: CartItem[]; onClose: () => void
  onQty: (id: number, d: number) => void; onRemove: (id: number) => void
}) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0)
  const count = cart.reduce((s, i) => s + i.qty, 0)
  return (
    <>
      <div className="fixed inset-0 z-40 bg-dark-navy/60 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed top-0 right-0 z-50 h-full w-full max-w-[400px] bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-6 py-5 border-b border-border-soft">
          <div>
            <h2 className="font-800 text-[18px] text-dark-navy">Cart ({count})</h2>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-full bg-sky-light flex items-center justify-center hover:bg-gold/20 transition-colors">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <div className="w-16 h-16 rounded-full bg-sky-light flex items-center justify-center mb-4 text-3xl">🛒</div>
              <p className="text-text-muted font-500 text-[15px]">Your cart is empty</p>
            </div>
          ) : cart.map(item => (
            <div key={item.id} className="flex gap-4 items-start bg-sky-light/50 rounded-xl p-3">
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-sky-light flex-shrink-0 relative">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-700 text-[13px] text-dark-navy leading-snug line-clamp-2">{item.name}</p>
                <p className="text-gold font-700 text-[13px] mt-0.5">{fmt(item.price)}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => onQty(item.id, -1)} className="w-6 h-6 rounded-full bg-white border border-border-soft flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-colors font-700">−</button>
                  <span className="font-700 text-[13px] text-dark-navy w-4 text-center">{item.qty}</span>
                  <button onClick={() => onQty(item.id, 1)} className="w-6 h-6 rounded-full bg-white border border-border-soft flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-colors font-700">+</button>
                </div>
              </div>
              <button onClick={() => onRemove(item.id)} className="text-text-muted/50 hover:text-red-400 transition-colors mt-0.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              </button>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="border-t border-border-soft px-6 py-5 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-text-muted text-[14px]">Subtotal ({count} items)</span>
              <span className="font-800 text-[18px] text-dark-navy">{fmt(total)}</span>
            </div>
            <p className="text-text-muted/60 text-[11px]">M-Pesa / card payment coming soon</p>
            <button className="w-full bg-gold hover:bg-gold-dark text-dark-navy font-700 text-[14px] py-3.5 rounded-md transition-colors shadow-gold-glow">
              Proceed to Checkout
            </button>
            <Link href="/contact" className="flex items-center justify-center text-sky-blue hover:text-deep-blue font-500 text-[13px] transition-colors">
              Order via WhatsApp / email
            </Link>
          </div>
        )}
      </div>
    </>
  )
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [priceMax, setPriceMax] = useState<number>(5000)
  const [inStockOnly, setInStockOnly] = useState(false)
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'rating'>('default')
  const [cart, setCart] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [addedId, setAddedId] = useState<number | null>(null)

  const filtered = useMemo(() => {
    let list = PRODUCTS
      .filter(p => activeCategory === 'All' || p.category === activeCategory)
      .filter(p => p.price <= priceMax)
      .filter(p => !inStockOnly || p.inStock)
    if (sortBy === 'price-asc') list = [...list].sort((a, b) => a.price - b.price)
    if (sortBy === 'price-desc') list = [...list].sort((a, b) => b.price - a.price)
    if (sortBy === 'rating') list = [...list].sort((a, b) => b.rating - a.rating)
    return list
  }, [activeCategory, priceMax, inStockOnly, sortBy])

  const cartCount = cart.reduce((s, i) => s + i.qty, 0)

  function addToCart(product: typeof PRODUCTS[0]) {
    if (!product.inStock) return
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { id: product.id, name: product.name, price: product.price, image: product.image, qty: 1 }]
    })
    setAddedId(product.id)
    setTimeout(() => setAddedId(null), 1200)
  }

  function updateQty(id: number, delta: number) {
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty: i.qty + delta } : i).filter(i => i.qty > 0))
  }

  function removeItem(id: number) {
    setCart(prev => prev.filter(i => i.id !== id))
  }

  /* Sidebar content shared between desktop + mobile drawer */
  const SidebarFilters = () => (
    <div className="space-y-7">
      {/* Category */}
      <div>
        <h3 className="font-700 text-[12px] tracking-[1.5px] uppercase text-dark-navy mb-3">Category</h3>
        <ul className="space-y-1">
          {CATEGORIES.map(cat => (
            <li key={cat}>
              <button
                onClick={() => { setActiveCategory(cat); setSidebarOpen(false) }}
                className={`w-full text-left px-3 py-2 rounded-lg text-[13px] transition-colors flex items-center justify-between
                  ${activeCategory === cat ? 'bg-dark-navy text-white font-700' : 'text-dark-navy/70 hover:bg-sky-light hover:text-dark-navy'}`}
              >
                {cat}
                <span className={`text-[11px] ${activeCategory === cat ? 'text-gold' : 'text-text-muted'}`}>
                  {cat === 'All' ? PRODUCTS.length : PRODUCTS.filter(p => p.category === cat).length}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price range */}
      <div>
        <h3 className="font-700 text-[12px] tracking-[1.5px] uppercase text-dark-navy mb-3">Max Price</h3>
        <input
          type="range" min={500} max={5000} step={100}
          value={priceMax}
          onChange={e => setPriceMax(Number(e.target.value))}
          className="w-full accent-gold"
        />
        <div className="flex justify-between text-[12px] text-text-muted mt-1">
          <span>KES 500</span>
          <span className="font-700 text-dark-navy">{fmt(priceMax)}</span>
        </div>
      </div>

      {/* In stock */}
      <div>
        <h3 className="font-700 text-[12px] tracking-[1.5px] uppercase text-dark-navy mb-3">Availability</h3>
        <label className="flex items-center gap-2.5 cursor-pointer">
          <div
            onClick={() => setInStockOnly(v => !v)}
            className={`w-10 h-5 rounded-full transition-colors duration-200 relative flex-shrink-0 cursor-pointer
              ${inStockOnly ? 'bg-dark-navy' : 'bg-border-soft'}`}
          >
            <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200
              ${inStockOnly ? 'translate-x-5' : 'translate-x-0.5'}`} />
          </div>
          <span className="text-[13px] text-dark-navy/70">In stock only</span>
        </label>
      </div>

      {/* Reset */}
      <button
        onClick={() => { setActiveCategory('All'); setPriceMax(5000); setInStockOnly(false); setSortBy('default') }}
        className="text-[12px] text-sky-blue hover:text-deep-blue font-500 transition-colors"
      >
        Reset all filters
      </button>
    </div>
  )

  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-[68px] bg-deep-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-section-diagonal opacity-60" />
        <div className="absolute inset-0 bg-hero-mesh" />
        <div className="container-wide relative z-10 py-12 md:py-16 flex flex-wrap items-center justify-between gap-8">

          {/* Left — text + cart button */}
          <div>
            <p className="text-gold text-[11px] font-700 tracking-[2.5px] uppercase mb-2">Handcrafted with Love</p>
            <h1 className="font-800 text-[clamp(32px,5vw,56px)] text-white leading-tight">
              The Grannies <span className="text-gold">Shop</span>
            </h1>
            <p className="text-white/60 text-[14px] mt-2 max-w-md">
              Every purchase directly supports the grandmothers of Kibra, Nairobi.
            </p>
            <button
              onClick={() => setCartOpen(true)}
              className="relative inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-dark-navy font-700 text-[13px] px-5 py-3 rounded-md transition-all duration-200 shadow-gold-glow mt-6"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1.5 1.5h2l2.5 9h7l2-6H5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="7" cy="13.5" r="1.2" fill="currentColor"/>
                <circle cx="11.5" cy="13.5" r="1.2" fill="currentColor"/>
              </svg>
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-dark-navy text-white text-[10px] font-800 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Right — hero image */}
          <div className="relative w-full md:w-[420px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl flex-shrink-0">
            <Image
              src="/market-products.jpg"
              alt="Grannies handcrafted products"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-dark-navy/20 rounded-2xl" />
          </div>

        </div>
        <div className="h-6 bg-gradient-to-b from-transparent to-[#f8fafc] relative z-10" />
      </section>

      {/* ── BODY ── */}
      <div className="bg-[#f8fafc] min-h-screen">
        <div className="container-wide py-8">
          <div className="flex gap-8">

            {/* ── DESKTOP SIDEBAR ── */}
            <aside className="hidden lg:block w-56 flex-shrink-0">
              <div className="bg-white rounded-xl border border-border-soft p-5 sticky top-[88px]">
                <SidebarFilters />
              </div>
            </aside>

            {/* ── MAIN ── */}
            <div className="flex-1 min-w-0">

              {/* Top bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <p className="text-text-muted text-[13px]">
                  <strong className="text-dark-navy">{filtered.length}</strong> results
                  {activeCategory !== 'All' && <> in <strong className="text-dark-navy">{activeCategory}</strong></>}
                </p>
                <div className="flex items-center gap-3">
                  {/* Mobile filter button */}
                  <button
                    onClick={() => setSidebarOpen(true)}
                    className="lg:hidden inline-flex items-center gap-1.5 bg-white border border-border-soft text-dark-navy/70 font-500 text-[13px] px-4 py-2 rounded-md hover:border-dark-navy/30 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 3h12M3 7h8M5 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    Filters
                  </button>
                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value as typeof sortBy)}
                    className="bg-white border border-border-soft text-dark-navy/70 text-[13px] px-3 py-2 rounded-md hover:border-dark-navy/30 transition-colors outline-none cursor-pointer"
                  >
                    <option value="default">Sort: Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </div>
              </div>

              {/* Active filter pills */}
              {(activeCategory !== 'All' || priceMax < 5000 || inStockOnly) && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {activeCategory !== 'All' && (
                    <span className="inline-flex items-center gap-1.5 bg-dark-navy text-white text-[11px] font-600 px-3 py-1 rounded-full">
                      {activeCategory}
                      <button onClick={() => setActiveCategory('All')} className="hover:text-gold transition-colors">×</button>
                    </span>
                  )}
                  {priceMax < 5000 && (
                    <span className="inline-flex items-center gap-1.5 bg-dark-navy text-white text-[11px] font-600 px-3 py-1 rounded-full">
                      Under {fmt(priceMax)}
                      <button onClick={() => setPriceMax(5000)} className="hover:text-gold transition-colors">×</button>
                    </span>
                  )}
                  {inStockOnly && (
                    <span className="inline-flex items-center gap-1.5 bg-dark-navy text-white text-[11px] font-600 px-3 py-1 rounded-full">
                      In stock
                      <button onClick={() => setInStockOnly(false)} className="hover:text-gold transition-colors">×</button>
                    </span>
                  )}
                </div>
              )}

              {/* Product grid */}
              {filtered.length === 0 ? (
                <div className="text-center py-24 bg-white rounded-xl border border-border-soft">
                  <p className="text-text-muted text-[16px]">No products match your filters.</p>
                  <button onClick={() => { setActiveCategory('All'); setPriceMax(5000); setInStockOnly(false) }} className="mt-3 text-sky-blue hover:text-deep-blue text-[13px] font-500 transition-colors">
                    Reset filters
                  </button>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filtered.map(product => (
                    <div key={product.id} className="bg-white rounded-xl border border-border-soft overflow-hidden hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 group flex flex-col">

                      {/* Image — links to detail page */}
                      <Link href={`/shop/${product.id}`} className="relative aspect-square bg-sky-light block overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-400"
                        />
                        {/* Badges */}
                        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5">
                          {product.badge && (
                            <span className={`text-[9px] font-700 tracking-wider uppercase px-2 py-0.5 rounded-full shadow-sm
                              ${product.badge === 'Bestseller' ? 'bg-gold text-dark-navy' :
                                product.badge === 'New' ? 'bg-sky-blue text-white' :
                                'bg-emerald-600 text-white'}`}>
                              {product.badge}
                            </span>
                          )}
                          {product.originalPrice && (
                            <span className="text-[9px] font-700 bg-red-500 text-white px-2 py-0.5 rounded-full shadow-sm">
                              SALE
                            </span>
                          )}
                        </div>
                        {!product.inStock && (
                          <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                            <span className="bg-dark-navy/80 text-white text-[11px] font-700 uppercase tracking-wider px-3 py-1.5 rounded-full">
                              Out of Stock
                            </span>
                          </div>
                        )}
                      </Link>

                      {/* Card body */}
                      <div className="p-4 flex flex-col flex-1">
                        <span className="text-[10px] font-700 tracking-[1.5px] uppercase text-sky-blue/80 mb-1">
                          {product.category}
                        </span>

                        <Link href={`/shop/${product.id}`}>
                          <h3 className="font-700 text-[14px] text-dark-navy leading-snug mb-2 hover:text-sky-blue transition-colors line-clamp-2">
                            {product.name}
                          </h3>
                        </Link>

                        {/* Rating */}
                        <div className="flex items-center gap-1.5 mb-3">
                          <Stars rating={product.rating} />
                          <span className="text-[11px] text-text-muted">
                            {product.rating} ({product.reviewCount})
                          </span>
                        </div>

                        {/* Price */}
                        <div className="flex items-baseline gap-2 mb-4 mt-auto">
                          <span className="font-800 text-[16px] text-dark-navy">{fmt(product.price)}</span>
                          {product.originalPrice && (
                            <span className="text-[12px] text-text-muted line-through">{fmt(product.originalPrice)}</span>
                          )}
                        </div>

                        {/* Add to Cart */}
                        <button
                          onClick={() => addToCart(product)}
                          disabled={!product.inStock}
                          className={`w-full py-2.5 rounded-md font-700 text-[13px] transition-all duration-200
                            ${!product.inStock
                              ? 'bg-sky-light text-text-muted cursor-not-allowed'
                              : addedId === product.id
                                ? 'bg-emerald-500 text-white'
                                : 'bg-dark-navy hover:bg-gold text-white hover:text-dark-navy'
                            }`}
                        >
                          {addedId === product.id ? '✓ Added' : product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE FILTER DRAWER ── */}
      {sidebarOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-dark-navy/60 backdrop-blur-sm lg:hidden" onClick={() => setSidebarOpen(false)} />
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto lg:hidden">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-800 text-[17px] text-dark-navy">Filters</h2>
              <button onClick={() => setSidebarOpen(false)} className="w-8 h-8 rounded-full bg-sky-light flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              </button>
            </div>
            <SidebarFilters />
            <button onClick={() => setSidebarOpen(false)} className="w-full mt-6 bg-dark-navy text-white font-700 text-[14px] py-3.5 rounded-md">
              Show {filtered.length} results
            </button>
          </div>
        </>
      )}

      {/* Trust strip */}
      <section className="bg-white border-t border-border-soft py-8">
        <div className="container-wide grid sm:grid-cols-3 gap-6 text-center">
          {[
            { icon: '🤝', title: 'Direct Impact', body: '100% supports grannies in Kibra' },
            { icon: '🌿', title: 'Eco-Friendly', body: 'Sustainable & upcycled materials' },
            { icon: '📦', title: 'Nairobi Delivery', body: 'Local delivery · Pickup from Guild HQ' },
          ].map(item => (
            <div key={item.title} className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 rounded-xl bg-sky-light border border-border-soft flex items-center justify-center text-xl flex-shrink-0">
                {item.icon}
              </div>
              <div className="text-left">
                <p className="font-700 text-[13px] text-dark-navy">{item.title}</p>
                <p className="text-text-muted text-[12px]">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Sidebar */}
      {cartOpen && (
        <CartSidebar cart={cart} onClose={() => setCartOpen(false)} onQty={updateQty} onRemove={removeItem} />
      )}
    </>
  )
}
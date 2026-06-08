// Add this export to your shop/page.tsx if you want static metadata,
// OR keep it as a 'use client' page and add metadata in a separate layout.tsx.
//
// Because the shop page uses 'use client' (for cart state),
// add this file as app/shop/layout.tsx to supply metadata:

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shop — Handcrafted by the Grannies of Kibra',
  description:
    'Buy handcrafted beadwork, woven baskets, and patchwork items made by the grandmothers of Kibra, Nairobi. Every purchase supports the Trefoil Guild Kenya Grannies Project.',
}

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
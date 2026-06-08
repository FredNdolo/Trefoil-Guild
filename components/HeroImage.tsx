'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function HeroImage() {
  const [loaded, setLoaded] = useState(false)

  return (
    <Image
      src="/Hero-image.jpg"
      alt=""
      fill
      priority
      className="absolute inset-0 object-cover object-center"
      style={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 1000ms ease-in-out',
      }}
      onLoad={() => setLoaded(true)}
    />
  )
}
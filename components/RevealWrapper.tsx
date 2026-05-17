'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

interface RevealWrapperProps {
  children: React.ReactNode
  className?: string
  /** Delay in ms before the animation runs (for staggered children) */
  delay?: number
  /** Threshold 0–1 for how much of the element must be visible */
  threshold?: number
}

export default function RevealWrapper({
  children,
  className,
  delay = 0,
  threshold = 0.12,
}: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, threshold])

  return (
    <div
      ref={ref}
      className={clsx(
        'transition-all duration-[650ms] ease-out',
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-6',
        className
      )}
    >
      {children}
    </div>
  )
}
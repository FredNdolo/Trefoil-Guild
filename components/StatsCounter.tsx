'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

interface StatItem {
  value: number
  suffix?: string
  prefix?: string
  label: string
  decimals?: number
}

interface StatsCounterProps {
  stats: StatItem[]
  /** 'sky' (default) | 'gold' | 'white' */
  variant?: 'sky' | 'gold' | 'white'
  className?: string
}

function useCountUp(target: number, duration = 1800, decimals = 0, active: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return

    let startTime: number | null = null
    const startValue = 0

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = startValue + (target - startValue) * eased
      setCount(parseFloat(current.toFixed(decimals)))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [active, target, duration, decimals])

  return count
}

function StatItemDisplay({
  stat,
  active,
  variant,
}: {
  stat: StatItem
  active: boolean
  variant: 'sky' | 'gold' | 'white'
}) {
  const count = useCountUp(stat.value, 1800, stat.decimals ?? 0, active)

  const valueColorMap = {
    sky:   'text-sky-blue',
    gold:  'text-dark-navy',   // dark navy on gold bg
    white: 'text-white',
  }

  const labelColorMap = {
    sky:   'text-deep-blue/70',
    gold:  'text-dark-navy/75',
    white: 'text-white/55',
  }

  return (
    <div className="text-center px-4">
      <div className={clsx('font-800 text-[42px] md:text-[52px] leading-none tracking-tight', valueColorMap[variant])}>
        {stat.prefix ?? ''}
        {stat.decimals
          ? count.toFixed(stat.decimals)
          : Math.floor(count).toLocaleString()}
        {stat.suffix ?? ''}
      </div>
      <div className={clsx('text-[11px] font-600 tracking-[1.5px] uppercase mt-2', labelColorMap[variant])}>
        {stat.label}
      </div>
    </div>
  )
}

export default function StatsCounter({ stats, variant = 'sky', className }: StatsCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const bgMap = {
    sky:   'bg-sky-light',
    gold:  'bg-gold',
    white: 'bg-deep-blue',
  }

  const dividerMap = {
    sky:   'bg-sky-blue/20',
    gold:  'bg-deep-blue/20',
    white: 'bg-white/15',
  }

  return (
    <div ref={ref} className={clsx(bgMap[variant], className)}>
      <div className="max-w-5xl mx-auto px-5 py-10 flex flex-wrap items-center justify-center gap-0">
        {stats.map((stat, i) => (
          <div key={stat.label} className="flex items-center">
            <StatItemDisplay stat={stat} active={active} variant={variant} />
            {i < stats.length - 1 && (
              <div className={clsx('w-px h-10 mx-2 md:mx-4', dividerMap[variant])} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
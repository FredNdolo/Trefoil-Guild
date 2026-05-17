import clsx from 'clsx'

interface SectionLabelProps {
  children: React.ReactNode
  /** 'gold' (default) | 'sky' | 'white' */
  variant?: 'gold' | 'sky' | 'white'
  className?: string
}

export default function SectionLabel({
  children,
  variant = 'gold',
  className,
}: SectionLabelProps) {
  const variantStyles = {
    gold:  'text-gold before:bg-gold',
    sky:   'text-sky-blue before:bg-sky-blue',
    white: 'text-white/60 before:bg-white/60',
  }

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-2 text-[11px] font-700 tracking-[2.5px] uppercase',
        'before:content-[""] before:block before:w-3 before:h-[1.5px] before:flex-shrink-0',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
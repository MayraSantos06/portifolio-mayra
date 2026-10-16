
import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import './RevealSection.css'

type Props = {
  children: ReactNode
  className?: string
}

export default function RevealSection({
  children,
  className = '',
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal-section ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

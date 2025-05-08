"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ParallaxEffectProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export default function ParallaxEffect({ children, speed = 0.05, className = "" }: ParallaxEffectProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return

      const x = (window.innerWidth - e.pageX * speed) / 100
      const y = (window.innerHeight - e.pageY * speed) / 100

      ref.current.style.transform = `translateX(${x}px) translateY(${y}px)`
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [speed])

  return (
    <div ref={ref} className={`parallax ${className}`}>
      {children}
    </div>
  )
}

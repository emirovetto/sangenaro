"use client"

import { useEffect, useState } from "react"
import { ChevronRight } from "lucide-react"

interface AnimatedBannerProps {
  messages: {
    id: string
    text: string
  }[]
  speed?: number // velocidad de transición en milisegundos
}

export default function AnimatedBanner({ messages, speed = 5000 }: AnimatedBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % messages.length)
        setIsTransitioning(false)
      }, 500) // tiempo de la animación de fade
    }, speed)

    return () => clearInterval(timer)
  }, [messages.length, speed])

  return (
    <div className="py-2">
      <div className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-300">
        <ChevronRight className="h-4 w-4 text-primary" />
        <div className="overflow-hidden">
          <div
            className={`transition-all duration-500 text-sm ${
              isTransitioning ? "opacity-0 -translate-y-1" : "opacity-100 translate-y-0"
            }`}
          >
            {messages[currentIndex].text}
          </div>
        </div>
      </div>
    </div>
  )
}

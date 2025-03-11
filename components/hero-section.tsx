"use client"

import Image from "next/image"
import { Search } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import AnimatedBanner from "./animated-banner"

const defaultMessages = [
  { id: "1", text: "🏥 Farmacia de turno: Farmacia Central - Av. San Martín 1234" },
  { id: "2", text: "🚌 Próximo colectivo a Rosario: 15:30 hs" },
  { id: "3", text: "📅 Evento: Feria Artesanal - Plaza San Martín - Domingo 10:00 hs" },
  { id: "4", text: " Guardia Hospital: - Tel: 3476-123456" },
  { id: "5", text: "🎭 Teatro Municipal: 'El Fantasma de la Ópera' - Sábado 21:00 hs" },
]

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [messages] = useState(defaultMessages)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/buscar?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }
  return (
    <>
      <div className="relative h-[70vh] w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/hero/San-Genaro.jpg"
          alt="San Genaro"
          fill
          priority
          className="object-cover brightness-75"
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">Bienvenido a San Genaro</h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl mb-8">
            Toda la información que necesitas para disfrutar de nuestra ciudad
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar servicios, lugares, horarios..."
              className="w-full pl-10 pr-16 py-3 rounded-full border-none focus:ring-2 focus:ring-primary text-black"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>
      {/* Animated Banner */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border-b border-blue-100 dark:border-blue-800">
        <div className="container mx-auto">
          <AnimatedBanner messages={messages} speed={6000} />
        </div>
      </div>
    </>
  )
}


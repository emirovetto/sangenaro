import Image from "next/image"
import { Search } from "lucide-react"

export default function HeroSection() {
  return (
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
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar servicios, lugares, horarios..."
            className="w-full pl-10 pr-4 py-3 rounded-full border-none focus:ring-2 focus:ring-primary text-black"
          />
        </div>
      </div>
    </div>
  )
}


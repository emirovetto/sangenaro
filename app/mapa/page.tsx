import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export default function MapaPage() {
  return (
    <main>
      <div className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="/images/mapa-hero.jpg"
          alt="Mapa de San Genaro"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Mapa
          </h1>
          <p className="text-xl text-center max-w-2xl">
            Explora San Genaro a través de nuestro mapa interactivo
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Aquí irá el componente del mapa */}
        <div className="h-[600px] bg-gray-100 rounded-lg">
          {/* Implementar mapa interactivo */}
        </div>
      </div>
    </main>
  )
}
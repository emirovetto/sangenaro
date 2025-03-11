import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"

export default function EventosPage() {
  return (
    <main>
      <div className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="/images/portadas/eventos.png"
          alt="Eventos en San Genaro"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Eventos
          </h1>
          <p className="text-xl text-center max-w-2xl">
            Descubre los próximos eventos en nuestra ciudad
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Cards de eventos aquí */}
        </div>
      </div>
    </main>
  )
}
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Phone, Clock } from "lucide-react"

export default function SaludPage() {
  return (
    <main>
      <div className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="/images/salud/salud.jpg"
          alt="Salud en San Genaro"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Salud
          </h1>
          <p className="text-xl text-center max-w-2xl">
            Información sobre servicios de salud en San Genaro
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="hospitales" className="space-y-8">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="hospitales">Hospitales</TabsTrigger>
            <TabsTrigger value="farmacias">Farmacias</TabsTrigger>
            <TabsTrigger value="emergencias">Emergencias</TabsTrigger>
          </TabsList>

          {/* Contenido de cada tab aquí */}
        </Tabs>
      </div>
    </main>
  )
}
import Image from "next/image"
import { Phone, Link as LinkIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

interface MedioProps {
  id: string
  nombre: string
  telefono: string
  url: string
  descripcion?: string
  image: string
}

const radios: MedioProps[] = [
  {
    id: "1",
    nombre: "LT 23 Radio San Genaro AM 1550",
    telefono: "03401-493069",
    url: "https://lt23.appradio.ar/",
    descripcion: "60 años en el aire de San Genaro y la Región",
    image: "/images/medios/lt23.png"
  },
  {
    id: "2",
    nombre: "Ciudad FM 91.3",
    telefono: "03401-491111",
    url: "https://ciudadfm.appradio.ar/",
    descripcion: "Las 24Hs Junto a La100 de Buenos Aires",
    image: "/images/medios/fmciudad.png"
  },
  {
    id: "3",
    nombre: "La Bailadora FM 93.7",
    telefono: "-",
    url: "https://fmlabailadora.appradio.ar/",
    descripcion: "Música Tropical las 24Hs",
    image: "/images/medios/labaila.png"
  },
  {
    id: "4",
    nombre: "Radio San Genaro FM 101.1",
    telefono: "-",
    url: "-",
    descripcion: "Las 24Hs Junto a Radio Mitre Cañada de Gomez",
    image: "/images/medios/radiosangenaro1011.png"
  },
  {
    id: "5",
    nombre: "Concierto FM 92.1",
    telefono: "-",
    url: "https://ciudadfm.appradio.ar/",
    descripcion: "Las 24Hs Junto a LT23 Radio San Genaro",
    image: "/images/medios/conciertofm.png"
  },
  {
    id: "6",
    nombre: "Radio Top FM 100.7 y 89.7",
    telefono: "03401-448000",
    url: "https://01.solumedia.com.ar:9018/stream",
    descripcion: "Las 24Hs Junto a Cadena 3 Rosario",
    image: "/images/medios/radiotop.png"
  },
];

const canales: MedioProps[] = [
  {
    id: "7",
    nombre: "Canal 4 San Genaro",
    telefono: "3401-448000",
    url: "https://www.youtube.com/@canal4sg",
    descripcion: "Noticias y Programación local las 24hs",
    image: "/images/medios/canal4.png"
  },
];

const portales: MedioProps[] = [
  {
    id: "8",
    nombre: "lt23.com.ar",
    telefono: "03401-493069",
    url: "https://ejemplo.com/portal1",
    descripcion: "Portal de noticias de LT23",
    image: "/images/medios/lt23.png"
  },
];

export default function MediosComunicacionPage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="/images/portadas/medios.png"
          alt="Medios de Comunicación en San Genaro"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Medios de Comunicación
          </h1>
          <p className="text-xl text-center max-w-2xl">
            Mantente informado con los medios locales de San Genaro
          </p>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="radio" className="space-y-8">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="radio">Radio</TabsTrigger>
            <TabsTrigger value="television">Televisión</TabsTrigger>
            <TabsTrigger value="portales">Portales</TabsTrigger>
          </TabsList>

          {/* Sección Radio */}
          <TabsContent value="radio">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {radios.map((radio) => (
                <Card key={radio.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={radio.image || "/placeholder.svg"}
                      alt={radio.nombre}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{radio.nombre}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-600">{radio.descripcion}</p>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-medium">{radio.telefono}</span>
                      </div>
                      <Button className="w-full" asChild>
                        <a href={radio.url} target="_blank" rel="noopener noreferrer">
                          Escuchar Online
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Sección Televisión */}
          <TabsContent value="television">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {canales.map((canal) => (
                <Card key={canal.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={canal.image || "/placeholder.svg"}
                      alt={canal.nombre}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{canal.nombre}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-600">{canal.descripcion}</p>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-medium">{canal.telefono}</span>
                      </div>
                      <Button className="w-full" asChild>
                        <a href={canal.url} target="_blank" rel="noopener noreferrer">
                          Ver Canal
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Sección Portales */}
          <TabsContent value="portales">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {portales.map((portal) => (
                <Card key={portal.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={portal.image || "/placeholder.svg"}
                      alt={portal.nombre}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{portal.nombre}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-600">{portal.descripcion}</p>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-medium">{portal.telefono}</span>
                      </div>
                      <Button className="w-full" asChild>
                        <a href={portal.url} target="_blank" rel="noopener noreferrer">
                          Visitar Sitio
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
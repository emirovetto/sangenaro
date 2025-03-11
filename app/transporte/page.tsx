import Image from "next/image"
import { Clock, MapPin, Phone } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { busSchedules, taxiServices } from "@/data/transport"

export default function TransportePage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="/images/portadas/trasnporte.png"
          alt="Transporte en San Genaro"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Transporte
          </h1>
          <p className="text-xl text-center max-w-2xl">
            Toda la información sobre servicios de transporte en San Genaro
          </p>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="colectivos" className="space-y-8">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="colectivos">Colectivos</TabsTrigger>
            <TabsTrigger value="remises">Remises</TabsTrigger>
            <TabsTrigger value="larga-distancia">Larga Distancia</TabsTrigger>
          </TabsList>

          {/* Sección Colectivos */}
          <TabsContent value="colectivos">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {busSchedules.map((bus) => (
                <Card key={bus.id}>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>{bus.line} - {bus.route}</span>
                      <Button variant="outline" size="sm">Ver recorrido</Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {bus.schedules.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center border-b pb-2">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-primary" />
                            <span>{schedule.time}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-primary" />
                            <span>{schedule.location}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Sección Remises */}
          <TabsContent value="remises">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {taxiServices.map((taxi) => (
                <Card key={taxi.id}>
                  <CardHeader>
                    <CardTitle>{taxi.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-600">{taxi.description}</p>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-medium">{taxi.phone}</span>
                      </div>
                      <Button className="w-full">
                        Llamar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Sección Larga Distancia */}
          <TabsContent value="larga-distancia">
            <Card>
              <CardHeader>
                <CardTitle>Terminal de Ómnibus San Genaro</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Dirección de la Terminal</p>
                      <p className="text-gray-600">Av. San Martín 1234</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Teléfono</p>
                      <p className="text-gray-600">3476-XXXXXX</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Ver empresas y destinos
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
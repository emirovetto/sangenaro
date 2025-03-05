import { Clock, MapPin, Phone } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { busSchedules, taxiServices } from "@/data/transport"

export default function TransportSection() {
  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Transporte</h2>
        <Button variant="outline">Ver todos los horarios</Button>
      </div>

      <Tabs defaultValue="colectivos">
        <TabsList className="mb-4">
          <TabsTrigger value="colectivos">Colectivos</TabsTrigger>
          <TabsTrigger value="remises">Remises</TabsTrigger>
        </TabsList>

        <TabsContent value="colectivos">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {busSchedules.map((bus) => (
              <Card key={bus.id}>
                <CardHeader className="pb-2">
                  <CardTitle>{bus.line} - {bus.route}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {bus.schedules.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
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

        <TabsContent value="remises">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {taxiServices.map((taxi) => (
              <Card key={taxi.id}>
                <CardHeader className="pb-2">
                  <CardTitle>{taxi.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-lg">Tel: {taxi.phone}</p>
                  <p className="text-gray-600">{taxi.description}</p>
                  <Button variant="outline" className="mt-4 w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Llamar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}


import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Pharmacy {
  name: string
  address: string
  phone: string
  hours: string
  onDuty: boolean
}

const pharmacies: Pharmacy[] = [
  {
    name: "Farmacia Zallocco",
    address: "Av. Roque S. Peña 2001",
    phone: "03401-448100",
    hours: "8:00 a 12:30 - 16:30 a 20:30 ",
    onDuty: true,
  },
  {
    name: "Farmacia Gomez",
    address: "Belgrano 567",
    phone: "3476-234567",
    hours: "8:00 - 20:00",
    onDuty: false,
  },
  {
    name: "Farmacia Di Paolo",
    address: "Sarmiento 890",
    phone: "3476-345678",
    hours: "8:30 - 20:30",
    onDuty: false,
  },
  {
    name: "Farmacia Magra",
    address: "Sarmiento 890",
    phone: "3476-345678",
    hours: "8:30 - 20:30",
    onDuty: false,
  },
  {
    name: "Farmacia Flores",
    address: "Sarmiento 890",
    phone: "3476-345678",
    hours: "8:30 - 20:30",
    onDuty: false,
  },
  {
    name: "Farmacia Campanini",
    address: "Sarmiento 890",
    phone: "3476-345678",
    hours: "8:30 - 20:30",
    onDuty: false,
  },
  {
    name: "Farmacia Profeta",
    address: "Sarmiento 890",
    phone: "3476-345678",
    hours: "8:30 - 20:30",
    onDuty: false,
  },
  {
    name: "Farmacia Castagno",
    address: "Sarmiento 890",
    phone: "3476-345678",
    hours: "8:30 - 20:30",
    onDuty: false,
  },
  {
    name: "Farmacia Quintero",
    address: "Sarmiento 890",
    phone: "3476-345678",
    hours: "8:30 - 20:30",
    onDuty: false,
  },
  {
    name: "Farmacia Vivas",
    address: "Sarmiento 890",
    phone: "3476-345678",
    hours: "8:30 - 20:30",
    onDuty: false,
  },
]

export default function SaludPage() {
  return (
    <main>
      <div className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="/images/portadas/salud.png"
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

          <TabsContent value="hospitales">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Hospital cards will go here */}
            </div>
          </TabsContent>

          <TabsContent value="farmacias">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pharmacies.map((pharmacy, index) => (
                <Card key={index} className={pharmacy.onDuty ? "border-green-500 border-2" : ""}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle>{pharmacy.name}</CardTitle>
                      {pharmacy.onDuty && (
                        <Badge variant="outline" className="bg-green-100 text-green-800 border-green-500">
                          De turno
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="text-gray-600">{pharmacy.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="text-gray-600">{pharmacy.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="text-gray-600">{pharmacy.hours}</span>
                      </div>
                    </div>
                    <Button variant="default" className="w-full">
                      Llamar
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="emergencias">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Hospital S.A.M.C.O", phone: "03401-448659" },
                { name: "Policía - Comisaria 7", phone: "03401-448316" },
                { name: "Bomberos Voluntarios", phone: "03401-493222" },
                { name: "Clinica Regional Provada", phone: "03401-493138" },
              ].map((emergency, index) => (
                <Card key={index} className="bg-red-50">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">{emergency.name}</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">{emergency.phone}</span>
                      <Button variant="destructive" size="sm">
                        Llamar
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
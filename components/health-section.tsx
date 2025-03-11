import { Phone, Clock, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const pharmacies = [
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

export default function HealthSection() {
  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Salud</h2>
        <Button variant="outline">Ver todos los servicios</Button>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Farmacias</h3>
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
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Números de Emergencia</h3>
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
      </div>
    </section>
  )
}


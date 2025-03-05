import Image from "next/image"
import { Star, Clock, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const restaurants = [
  {
    name: "Mc. Pato",
    type: "Restaurante",
    rating: 4.8,
    image: "/images/food/mcpato.jpg",
    hours: "08:00 - 14:30, 18:00 - 01:00",
    days: "Lunes a Domingo",
    address: "19 de Septiembre 1101",
  },
  {
    name: "Ponzio",
    type: "Resto Bar",
    rating: 4.5,
    image: "/images/food/ponzio.webp",
    hours: "19:00 - 03:00",
    days: "Martes a Domingo",
    address: "Av. Roque Saenz Peña 1056",
  },
  {
    name: "Praga",
    type: "Resto Pub",
    rating: 4.7,
    image: "/images/food/praga.jpg",
    hours: "19:00 - 05:00",
    days: "Jueves a Domingo",
    address: "Avenida Roque Saez Peña",
  },
]

export default function FoodSection() {
  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gastronomía</h2>
        <Button variant="outline">Ver todos los locales</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {restaurants.map((restaurant, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48">
              <Image src={restaurant.image || "/placeholder.svg"} alt={restaurant.name} fill className="object-cover" />
              <Badge className="absolute top-2 right-2">{restaurant.type}</Badge>
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{restaurant.name}</h3>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                  <span>{restaurant.rating}</span>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-start">
                  <Clock className="h-4 w-4 mr-2 text-gray-500 mt-1 flex-shrink-0" />
                  <div className="text-gray-600">
                    <div>{restaurant.days}</div>
                    <div>{restaurant.hours}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 text-gray-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">{restaurant.address}</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="default" className="flex-1">
                  Menú
                </Button>
                <Button variant="outline" className="flex-1">
                  Llamar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}


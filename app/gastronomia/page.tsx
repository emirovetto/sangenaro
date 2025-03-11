import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Phone, Clock, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Restaurante {
  name: string;
  type: string;
  rating: number;
  image: string;
  hours: string;
  days: string;
  address: string;
}

const Restaurantes: Restaurante[] = [
  {
    name: "Mc. Pato",
    type: "Restaurante",
    rating: 4.8,
    image: "/images/food/mcpato.jpg",
    hours: "08:00 - 14:30, 18:00 - 01:00",
    days: "Martes a Domingo",
    address: "19 de Septiembre 1101",
  },
  {
    name: "Ponzio",
    type: "Resto Bar",
    rating: 4.5,
    image: "/images/food/ponzio.webp",
    hours: "19:00 - 03:00",
    days: "Miercoles a Domingo",
    address: "Av. Roque Saenz Peña 1056",
  },
  {
    name: "Praga",
    type: "Resto Pub",
    rating: 4.7,
    image: "/images/food/praga.jpg",
    hours: "19:00 - 05:00",
    days: "Viernes a Domingo",
    address: "Avenida Roque Saez Peña",
  },
  {
    name: "Yampi",
    type: "Heladeria",
    rating: 4.7,
    image: "/images/food/yampi.jpg",
    hours: "19:00 - 05:00",
    days: "Jueves a Domingo",
    address: "Avenida Roque Saez Peña",
  },
];

const bares = [
  // ... datos de bares ...
];

const restobares = [
  // ... datos de restobares ...
];

const delivery = [
  // ... datos de delivery ...
];

const heladerias = [
  // ... datos de heladerías ...
];

const maxikioscos = [
  // ... datos de maxikioscos ...
];

// Función auxiliar para agrupar restaurantes por tipo
function agruparPorTipo(restaurantes: Restaurante[]) {
  return restaurantes.reduce((grupos, restaurante) => {
    const tipo = restaurante.type;
    if (!grupos[tipo]) {
      grupos[tipo] = [];
    }
    grupos[tipo].push(restaurante);
    return grupos;
  }, {} as Record<string, Restaurante[]>);
}

export default function GastronomiaPage() {
  const restaurantesPorTipo = agruparPorTipo(Restaurantes);
  const tipos = Object.keys(restaurantesPorTipo);

  return (
    <main>
      <div className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="/images/portadas/gastronomia.png"
          alt="Gastronomía en San Genaro"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Gastronomía
          </h1>
          <p className="text-xl text-center max-w-2xl">
            Descubre los mejores lugares para comer en San Genaro
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue={tipos[0]?.toLowerCase()} className="space-y-8">
          <TabsList className="w-full justify-start">
            {tipos.map((tipo) => (
              <TabsTrigger key={tipo} value={tipo.toLowerCase()}>
                {tipo}
              </TabsTrigger>
            ))}
          </TabsList>

          {tipos.map((tipo) => (
            <TabsContent key={tipo} value={tipo.toLowerCase()} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {restaurantesPorTipo[tipo].map((restaurante, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image 
                      src={restaurante.image || "/placeholder.svg"} 
                      alt={restaurante.name} 
                      fill 
                      className="object-cover" 
                    />
                    <Badge className="absolute top-2 right-2">{restaurante.type}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <CardTitle>{restaurante.name}</CardTitle>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                        <span>{restaurante.rating}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-3 text-gray-500" />
                        <div>
                          <p className="font-medium">Horarios</p>
                          <p className="text-gray-600">{restaurante.days}</p>
                          <p className="text-gray-600">{restaurante.hours}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 mr-3 text-gray-500" />
                        <div>
                          <p className="font-medium">Dirección</p>
                          <p className="text-gray-600">{restaurante.address}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </main>
  )
}
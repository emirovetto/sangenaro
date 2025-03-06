import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Star, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Alojamiento {
  name: string;
  type: "Hoteles" | "Hospedajes";
  rating: number;
  image: string;
  address: string;
  telefono: string;
}

const alojamientos: Alojamiento[] = [
  {
    name: "Hotel Rivadavia",
    type: "Hoteles",
    rating: 4.9,
    image: "/images/alojamiento/hotelrivadavia.jpg",
    address: "Juan Chávarri y 19 de Septiembre",
    telefono: "03401-493193",
  },
  {
    name: "Hospedaje El Amanecer",
    type: "Hospedajes",
    rating: 4.8,
    image: "/images/alojamiento/elamanecer.jpg",
    address: "Belgrano 1170",
    telefono: "03401-52-4229",
  },
  {
    name: "Hospedaje Poli Brhothers",
    type: "Hospedajes",
    rating: 4.6,
    image: "/images/alojamiento/policabañas.png",
    address: "Eugenio Vimo 2056",
    telefono: "3401-64-1218",
  },
];

function agruparPorTipo(alojamientos: Alojamiento[]) {
  return alojamientos.reduce((grupos, alojamiento) => {
    const categoria = alojamiento.type;
    if (!grupos[categoria]) {
      grupos[categoria] = [];
    }
    grupos[categoria].push(alojamiento);
    return grupos;
  }, {} as Record<string, Alojamiento[]>);
}

export default function AlojamientoPage() {
  const alojamientosPorTipo = agruparPorTipo(alojamientos);
  const tipos = Object.keys(alojamientosPorTipo);

  return (
    <main>
      <div className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="/images/alojamiento/Alojamiento.jpg"
          alt="Alojamiento en San Genaro"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Alojamiento
          </h1>
          <p className="text-xl text-center max-w-2xl">
            Descubrí las mejores opciones para alojarte en San Genaro
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
              {alojamientosPorTipo[tipo].map((alojamiento, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image 
                      src={alojamiento.image || "/placeholder.svg"} 
                      alt={alojamiento.name} 
                      fill 
                      className="object-cover" 
                    />
                    <Badge className="absolute top-2 right-2">{alojamiento.type}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <CardTitle>{alojamiento.name}</CardTitle>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                        <span>{alojamiento.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 text-gray-500" />
                      <div>
                        <p className="font-medium">Dirección</p>
                        <p className="text-gray-600">{alojamiento.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start mt-4">
                      <Phone className="h-5 w-5 mr-3 text-gray-500" />
                      <div>
                        <p className="font-medium">Teléfono</p>
                        <p className="text-gray-600">{alojamiento.telefono}</p>
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
  );
}
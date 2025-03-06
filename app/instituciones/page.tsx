import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Phone } from "lucide-react";

interface Institucion {
  name: string;
  type: "Deportivas" | "Educativas" | "Religiosas" | "Entidades Publicas";
  address: string;
  telefono: string;
  image: string;
}

const instituciones: Institucion[] = [
  {
    name: "Club Sportivo Rivadavia",
    type: "Deportivas",
    address: "Calle del Fútbol 123",
    telefono: "03401-493306",
    image: "/images/instituciones/sportivo.jpg",
  },
  {
    name: "Club Atletico San Genaro",
    type: "Deportivas",
    address: "Calle del Fútbol 123",
    telefono: "03401-493306",
    image: "/images/instituciones/atletico.jpg",
  },
  {
    name: "Club Deportico Italiano",
    type: "Deportivas",
    address: "Calle del Fútbol 123",
    telefono: "03401-493306",
    image: "/images/instituciones/italiano.jpg",
  },

  {
    name: "Escuela Nacional",
    type: "Educativas",
    address: "Av. del Conocimiento 456",
    telefono: "03401-222222",
    image: "/images/instituciones/escuela-nacional.jpg",
  },
  {
    name: "Municipalidad de San Genaro",
    type: "Entidades Publicas",
    address: "Plaza Central 789",
    telefono: "03401-333333",
    image: "/images/instituciones/municipalidad.jpg",
  },
  {
    name: "Municipalidad de San Genaro",
    type: "Religiosas",
    address: "Plaza Central 789",
    telefono: "03401-333333",
    image: "/images/instituciones/municipalidad.jpg",
  },
  {
    name: "Municipalidad de San Genaro",
    type: "Entidades Publicas",
    address: "Plaza Central 789",
    telefono: "03401-333333",
    image: "/images/instituciones/municipalidad.jpg",
  },
  // Podés agregar más instituciones acá...
];

function agruparPorTipo(instituciones: Institucion[]) {
  return instituciones.reduce((grupos, institucion) => {
    const categoria = institucion.type;
    if (!grupos[categoria]) {
      grupos[categoria] = [];
    }
    grupos[categoria].push(institucion);
    return grupos;
  }, {} as Record<string, Institucion[]>);
}

export default function InstitucionesPage() {
  const institucionesPorTipo = agruparPorTipo(instituciones);
  const tipos = Object.keys(institucionesPorTipo);

  return (
    <main>
      <div className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="/images/instituciones/Instituciones.jpg"
          alt="Instituciones en San Genaro"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Instituciones
          </h1>
          <p className="text-xl text-center max-w-2xl">
            Conocé las principales instituciones en San Genaro
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
            <TabsContent
              key={tipo}
              value={tipo.toLowerCase()}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {institucionesPorTipo[tipo].map((institucion, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={institucion.image || "/placeholder.svg"}
                      alt={institucion.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <CardTitle>{institucion.name}</CardTitle>
                    <div className="flex items-start mt-4">
                      <MapPin className="h-5 w-5 mr-3 text-gray-500" />
                      <div>
                        <p className="font-medium">Dirección</p>
                        <p className="text-gray-600">{institucion.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start mt-4">
                      <Phone className="h-5 w-5 mr-3 text-gray-500" />
                      <div>
                        <p className="font-medium">Teléfono</p>
                        <p className="text-gray-600">{institucion.telefono}</p>
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
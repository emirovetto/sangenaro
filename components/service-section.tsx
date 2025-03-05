import { Bus, Utensils, Building, Phone, Calendar, MapPin, Hotel, Radio, Power } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const services = [
  {
    title: "Transporte",
    icon: <Bus className="h-8 w-8" />,
    description: "Horarios de colectivos y servicios de remises",
    link: "/transporte",
    color: "bg-blue-500",
  },
  {
    title: "Alojamiento",
    icon: <Hotel className="h-8 w-8" />,
    description: "Hoteles, hostels y alojamientos temporales",
    link: "/alojamiento",
    color: "bg-teal-500",
  },
  {
    title: "Gastronomía",
    icon: <Utensils className="h-8 w-8" />,
    description: "Rotiserías, restaurantes y deliveries",
    link: "/gastronomia",
    color: "bg-orange-500",
  },
  {
    title: "Instituciones",
    icon: <Building className="h-8 w-8" />,
    description: "Clubes, escuelas y entidades públicas",
    link: "/instituciones",
    color: "bg-green-500",
  },
  {
    title: "Salud",
    icon: <Phone className="h-8 w-8" />,
    description: "Farmacias, médicos y emergencias",
    link: "/salud",
    color: "bg-red-500",
  },
  {
    title: "Eventos",
    icon: <Calendar className="h-8 w-8" />,
    description: "Agenda cultural y deportiva",
    link: "/eventos",
    color: "bg-purple-500",
  },
  {
    title: "Mapa",
    icon: <MapPin className="h-8 w-8" />,
    description: "Ubicaciones y puntos de interés",
    link: "/mapa",
    color: "bg-yellow-500",
  },

  {
    title: "Medios de Comunicación",
    icon: <Radio className="h-8 w-8" />,
    description: "Radios, diarios y medios locales",
    link: "/medios",
    color: "bg-indigo-500",
  },
  {
    title: "Cooperativas de Servicios",
    icon: <Power className="h-8 w-8" />,
    description: "Servicios públicos y cooperativas",
    link: "/cooperativas",
    color: "bg-cyan-500",
  },
]

export default function ServiceSection() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Servicios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Link href={service.link} key={index}>
            <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6">
                <div className={`${service.color} text-white p-3 rounded-full inline-block mb-4`}>{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}


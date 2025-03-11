import Image from "next/image"
import { Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const news = [
  {
    title: "Nuevo horario para la recolección de residuos",
    date: "15 de Marzo, 2025",
    excerpt: "A partir del próximo lunes, el servicio de recolección de residuos tendrá un nuevo horario...",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "El club San Genaro celebra su 75° aniversario",
    date: "10 de Marzo, 2025",
    excerpt: "Este fin de semana se realizarán diversas actividades para celebrar los 75 años del club...",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Comienza la inscripción para los talleres municipales",
    date: "5 de Marzo, 2025",
    excerpt: "Desde el lunes 8 de marzo estará abierta la inscripción para los talleres culturales...",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function NewsSection() {
  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Noticias y Eventos</h2>
        <Button variant="outline">Ver todas las noticias</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-40">
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <div className="flex items-center text-gray-500 mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                <span className="text-sm">{item.date}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.excerpt}</p>
              <Button variant="link" className="p-0">
                Leer más
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}


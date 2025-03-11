"use client"

import { useSearchParams } from "next/navigation"
import { Search } from "lucide-react"
import Link from "next/link"

const searchableContent = [
  { title: "Alojamiento", href: "/alojamiento", description: "Hoteles, hostels y alojamientos en San Genaro" },
  { title: "Transporte", href: "/transporte", description: "Servicios de transporte y horarios" },
  { title: "Gastronomía", href: "/gastronomia", description: "Restaurantes, bares y delivery" },
  { title: "Salud", href: "/salud", description: "Centros de salud, farmacias y emergencias" },
  { title: "Instituciones", href: "/instituciones", description: "Instituciones públicas y privadas" },
  { title: "Medios de Comunicación", href: "/medios", description: "Radios, diarios y medios locales" },
  { title: "Cooperativas de Servicios", href: "/cooperativas", description: "Servicios esenciales y cooperativas" },
  { title: "Eventos", href: "/eventos", description: "Agenda de eventos y actividades" },
  { title: "Farmacias de Turno", href: "/farmacias-turno", description: "Farmacias de turno actuales" },
  { title: "Teléfonos Útiles", href: "/telefonos-utiles", description: "Números de emergencia y contactos importantes" },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  const searchResults = searchableContent.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Resultados de búsqueda</h1>
      
      {/* Search query info */}
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        {searchResults.length} resultados para &quot;{query}&quot;
      </p>

      {/* Results */}
      <div className="space-y-6">
        {searchResults.length > 0 ? (
          searchResults.map((result) => (
            <Link
              key={result.href}
              href={result.href}
              className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold text-primary mb-2">{result.title}</h2>
              <p className="text-gray-600 dark:text-gray-400">{result.description}</p>
            </Link>
          ))
        ) : (
          <div className="text-center py-12">
            <Search className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">No se encontraron resultados</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Intenta buscar con otros términos o navega por las categorías del menú
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

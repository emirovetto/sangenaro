import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">San Genaro</h3>
            <p className="text-gray-400 mb-4">
              Portal oficial con toda la información útil para los habitantes y visitantes de nuestra ciudad.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/alojamiento" className="text-gray-400 hover:text-white transition-colors">
                  Alojamiento
                </Link>
              </li>
              <li>
                <Link href="/transporte" className="text-gray-400 hover:text-white transition-colors">
                  Transporte
                </Link>
              </li>
              <li>
                <Link href="/gastronomia" className="text-gray-400 hover:text-white transition-colors">
                  Gastronomía
                </Link>
              </li>
              <li>
                <Link href="/salud" className="text-gray-400 hover:text-white transition-colors">
                  Salud
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="text-gray-400 hover:text-white transition-colors">
                  Eventos
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/instituciones" className="text-gray-400 hover:text-white transition-colors">
                  Instituciones
                </Link>
              </li>
              <li>
                <Link href="/medios" className="text-gray-400 hover:text-white transition-colors">
                  Medios de Comunicación
                </Link>
              </li>
              <li>
                <Link href="/cooperativas" className="text-gray-400 hover:text-white transition-colors">
                  Cooperativas de Servicios
                </Link>
              </li>
              <li>
                <Link href="/horarios-colectivos" className="text-gray-400 hover:text-white transition-colors">
                  Horarios de Colectivos
                </Link>
              </li>
              <li>
                <Link href="/farmacias-turno" className="text-gray-400 hover:text-white transition-colors">
                  Farmacias de Turno
                </Link>
              </li>
              <li>
                <Link href="/telefonos-utiles" className="text-gray-400 hover:text-white transition-colors">
                  Teléfonos Útiles
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={16} className="mr-2 text-gray-400" />
                <span className="text-gray-400">Av. San Martín 1234, San Genaro</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-gray-400" />
                <span className="text-gray-400">3476-123456</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-gray-400" />
                <span className="text-gray-400">info@sangenaro.gob.ar</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Portal Ciudad San Genaro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}


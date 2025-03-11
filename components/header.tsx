"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import AnimatedBanner from "./animated-banner"

const defaultMessages = [
  { id: "1", text: "🏥 Farmacia de turno: Farmacia Central - Av. San Martín 1234" },
  { id: "2", text: "🚌 Próximo colectivo a Rosario: 15:30 hs" },
  { id: "3", text: "📅 Evento: Feria Artesanal - Plaza San Martín - Domingo 10:00 hs" },
  { id: "4", text: "⚕️ Guardia Hospital: Dr. González - Tel: 3476-123456" },
  { id: "5", text: "🎭 Teatro Municipal: 'El Fantasma de la Ópera' - Sábado 21:00 hs" },
]

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Alojamiento", href: "/alojamiento" },
  { name: "Transporte", href: "/transporte" },
  { name: "Gastronomía", href: "/gastronomia" },
  { name: "Salud", href: "/salud" },
  { name: "Instituciones", href: "/instituciones" },
  { name: "Medios", href: "/medios" },
  { name: "Cooperativas", href: "/cooperativas" },
  { name: "Eventos", href: "/eventos" },
  { name: "Contacto", href: "/contacto" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [messages] = useState(defaultMessages)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl text-primary">
            San Genaro
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Animated Banner */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border-b border-blue-100 dark:border-blue-800">
        <div className="container mx-auto">
          <AnimatedBanner messages={messages} speed={6000} />
        </div>
      </div>
    </header>
  )
}


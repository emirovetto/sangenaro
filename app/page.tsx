import { Suspense } from "react"
import { Clock } from "lucide-react"
import HeroSection from "@/components/hero-section"
import ServiceSection from "@/components/service-section"
import TransportSection from "@/components/transport-section"
import FoodSection from "@/components/food-section"
import HealthSection from "@/components/health-section"
import NewsSection from "@/components/news-section"
import WeatherWidget from "@/components/weather-widget"
import LocalTime from "@/components/local-time"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Info Bar */}
      <div className="bg-primary text-white py-3">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
          <div className="flex items-center space-x-2">
            <Clock size={18} />
            <Suspense fallback={<span>Cargando...</span>}>
              <LocalTime />
            </Suspense>
          </div>
          <Suspense fallback={<span>Cargando clima...</span>}>
            <WeatherWidget city="San Genaro" />
          </Suspense>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-12">Toda la información de San Genaro en un solo lugar</h2>

        {/* Services Grid */}
        <ServiceSection />

        {/* Transport Section */}
        <TransportSection />

        {/* Food Section */}
        <FoodSection />

        {/* Health Section */}
        <HealthSection />

        {/* News Section */}
        <NewsSection />
      </div>
    </main>
  )
}


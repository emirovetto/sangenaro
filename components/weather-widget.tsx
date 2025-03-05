"use client"

import { useEffect, useState } from "react"
import { Sun, Cloud, CloudRain } from "lucide-react"

interface WeatherWidgetProps {
  city: string
}

export default function WeatherWidget({ city }: WeatherWidgetProps) {
  const [weather, setWeather] = useState({
    temp: 0,
    condition: "sunny",
    loading: true,
  })

  useEffect(() => {
    // Simulación de API de clima
    const fetchWeather = () => {
      // En una implementación real, aquí se haría una llamada a una API de clima
      setTimeout(() => {
        setWeather({
          temp: Math.floor(Math.random() * 15) + 15, // Temperatura entre 15 y 30
          condition: ["sunny", "cloudy", "rainy"][Math.floor(Math.random() * 3)],
          loading: false,
        })
      }, 1000)
    }

    fetchWeather()
  }, []) // Removed unnecessary dependency: city

  if (weather.loading) {
    return <span>Cargando clima...</span>
  }

  const getWeatherIcon = () => {
    switch (weather.condition) {
      case "sunny":
        return <Sun className="h-5 w-5 text-yellow-400" />
      case "cloudy":
        return <Cloud className="h-5 w-5 text-gray-300" />
      case "rainy":
        return <CloudRain className="h-5 w-5 text-blue-300" />
      default:
        return <Sun className="h-5 w-5 text-yellow-400" />
    }
  }

  return (
    <div className="flex items-center space-x-2">
      {getWeatherIcon()}
      <span>{weather.temp}°C</span>
      <span className="hidden sm:inline">| {city}</span>
    </div>
  )
}


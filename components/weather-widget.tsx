"use client"

import { useEffect, useState } from "react"
import { Sun, Cloud, CloudRain } from "lucide-react"

interface WeatherWidgetProps {
  city: string
}

interface WeatherData {
  temp: number
  condition: string
}

export default function WeatherWidget({ city }: WeatherWidgetProps) {
  const [weather, setWeather] = useState({
    temp: 0,
    condition: "sunny",
    loading: true,
  })

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch('https://www.wunderground.com/dashboard/pws/ISANGE129')
        const html = await response.text()

        // Extract temperature from HTML
        const tempMatch = html.match(/"temperature":\s*(\d+\.?\d*)/)
        const temp = tempMatch ? parseFloat(tempMatch[1]) : 0

        // Extract condition from HTML
        const conditionMatch = html.match(/"condition":\s*"([^"]+)"/) 
        const condition = conditionMatch ? conditionMatch[1].toLowerCase() : 'sunny'

        // Map the weather condition to our supported types
        let mappedCondition = 'sunny'
        if (condition.includes('cloud') || condition.includes('overcast')) {
          mappedCondition = 'cloudy'
        } else if (condition.includes('rain') || condition.includes('shower')) {
          mappedCondition = 'rainy'
        }

        const roundedTemp = Math.round(temp)
        console.log('Processed weather data:', { temp: roundedTemp, condition: mappedCondition })

        setWeather({
          temp: roundedTemp,
          condition: mappedCondition,
          loading: false,
        })
      } catch (error) {
        console.error('Error fetching weather data:', error)
        setWeather(prev => ({ ...prev, loading: false }))
      }
    }

    fetchWeather()
    // Fetch weather data every 5 minutes
    const interval = setInterval(fetchWeather, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

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


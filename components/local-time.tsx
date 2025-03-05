"use client"

import { useEffect, useState } from "react"

export default function LocalTime() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString("es-AR", {
        hour: "2-digit",
        minute: "2-digit",
      })
      setTime(timeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)

    return () => clearInterval(interval)
  }, [])

  return <span>{time}</span>
}


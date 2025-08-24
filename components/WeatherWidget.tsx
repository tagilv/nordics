"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface WeatherData {
  temperature: number;
  description: string;
  icon: string;
}

export function WeatherWidget() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Mock weather data
  const mockWeather: WeatherData = {
    temperature: 18,
    description: "Partly Cloudy",
    icon: "⛅",
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeString = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const dateString = currentTime.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <Card className="w-24 md:w-32 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-200">
      <CardContent className="p-2 text-center">
        <div className="text-lg font-bold text-white mb-1 font-mono tracking-wider">
          {timeString}
        </div>
        <div className="flex items-center justify-center gap-1">
          <span className="text-sm">{mockWeather.icon}</span>
          <span className="text-xs text-white/80 font-medium">{mockWeather.temperature}°C</span>
        </div>
        <div className="text-xs text-white/70">{mockWeather.description}</div>
      </CardContent>
    </Card>
  );
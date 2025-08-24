"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface WeatherData {
  temperature: number;
  description: string;
  icon: string;
}

interface WeatherWidgetProps {
  weatherData: WeatherData | null;
  weatherError: string | null;
}

export function WeatherWidget({
  weatherData,
  weatherError,
}: WeatherWidgetProps) {
  const [currentTime, setCurrentTime] = useState(new Date());

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

  if (weatherError) {
    return (
      <Card className="w-24 md:w-32 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-200">
        <CardContent className="p-2 text-center">
          <div className="text-lg font-bold text-white mb-1 font-mono tracking-wider">
            {timeString}
          </div>
          <div className="text-xs text-white/70">Weather unavailable</div>
        </CardContent>
      </Card>
    );
  }

  if (!weatherData) {
    return (
      <Card className="w-24 md:w-32 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-200">
        <CardContent className="p-2 text-center">
          <div className="text-lg font-bold text-white mb-1 font-mono tracking-wider">
            {timeString}
          </div>
          <div className="text-xs text-white/70">Loading...</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-24 md:w-32 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-200">
      <CardContent className="p-2 text-center">
        <div className="text-lg font-bold text-white mb-1 font-mono tracking-wider">
          {timeString}
        </div>
        <div className="flex items-center justify-center gap-1">
          <span className="text-sm">{weatherData.icon}</span>
          <span className="text-xs text-white/80 font-medium">
            {weatherData.temperature}°C
          </span>
        </div>
        <div className="text-xs text-white/70">{weatherData.description}</div>
      </CardContent>
    </Card>
  );
}

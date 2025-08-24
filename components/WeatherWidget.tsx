"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguageStore } from "@/lib/store";

interface WeatherData {
  temperature: number;
  description: string;
  icon: string;
}

interface WeatherWidgetProps {
  weatherError: string | null;
  allWeatherData?: Record<string, WeatherData | null>;
}

export function WeatherWidget({
  weatherError,
  allWeatherData,
}: WeatherWidgetProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const activeLanguage = useLanguageStore((state) => state.activeLanguage);

  const currentWeather = allWeatherData?.[activeLanguage];

  const cityNames = {
    swedish: "Stockholm",
    danish: "Copenhagen",
    norwegian: "Oslo",
    finnish: "Helsinki",
  };

  const currentCity = cityNames[activeLanguage as keyof typeof cityNames];

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

  if (!currentWeather) {
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
        <div className="text-xs text-white/60 mb-1">{currentCity}</div>
        <div className="flex items-center justify-center gap-1">
          <span className="text-sm">{currentWeather.icon}</span>
          <span className="text-xs text-white/80 font-medium">
            {currentWeather.temperature}°C
          </span>
        </div>
        <div className="text-xs text-white/70">
          {currentWeather.description}
        </div>
      </CardContent>
    </Card>
  );
}

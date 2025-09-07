"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useLanguageStore } from "@/lib/store";
import { WeatherData } from "@/types";
interface WeatherWidgetProps {
  weatherData: Record<string, WeatherData | null> | null;
  weatherError: string | null;
}

export function WeatherWidget({
  weatherData,
  weatherError,
}: WeatherWidgetProps) {
  console.log("🔍 DEBUG - weatherError:", weatherError);
  console.log("🔍 DEBUG - weatherData:", weatherData);

  const activeLanguage = useLanguageStore((state) => state.activeLanguage);

  const currentWeather = weatherData?.[activeLanguage];

  console.log("🔍 DEBUG - currentWeather:", currentWeather);

  const cityNames = {
    swedish: "Stockholm",
    danish: "Copenhagen",
    norwegian: "Oslo",
    finnish: "Helsinki",
  };

  const currentCity = cityNames[activeLanguage as keyof typeof cityNames];

  if (weatherError) {
    return (
      <Card
        className="w-20 md:w-24 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-200 "
        suppressHydrationWarning
      >
        <CardContent className="px-1  -my-3 text-center">
          <div className="text-xs text-white/70">Weather unavailable</div>
        </CardContent>
      </Card>
    );
  }

  if (!currentWeather) {
    return (
      <Card
        className="w-20 md:w-24 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-200"
        suppressHydrationWarning
      >
        <CardContent className="px-1 -my-3 text-center">
          <div className="text-xs text-white/70">Loading...</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className="w-20 md:w-24 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-200"
      suppressHydrationWarning
    >
      <CardContent className="px-1 -my-3 text-center">
        <div className="text-xs text-white/80 font-bold mb-1">
          {currentCity}
          {currentWeather.description}
        </div>{" "}
        <div className="flex items-center justify-center gap-1">
          <span className="text-sm">{currentWeather.icon}</span>
          <span className="text-xs text-white/80 font-medium">
            {currentWeather.temperature}°C
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

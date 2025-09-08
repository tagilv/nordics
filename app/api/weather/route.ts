import { NextRequest, NextResponse } from "next/server";

interface WeatherData {
  temperature: number;
  description: string;
  icon: string;
}

interface AccuWeatherLocation {
  Key: string;
  LocalizedName: string;
}

interface AccuWeatherCurrent {
  Temperature: {
    Metric: {
      Value: number;
    };
  };
  WeatherText: string;
  WeatherIcon: number;
}

const cityMapping: Record<string, string> = {
  swedish: "Stockholm",
  danish: "Copenhagen",
  norwegian: "Oslo",
  finnish: "Helsinki",
};

async function fetchWeatherData(city: string): Promise<WeatherData | null> {
  try {
    const apiKey = process.env.ACCUWEATHER_API_KEY;

    if (!apiKey) {
      throw new Error("AccuWeather API key is not set");
    }

    const locationResponse = await fetch(
      `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}&language=en-us`
    );

    if (!locationResponse.ok) {
      const errorText = await locationResponse.text();
      console.error("Location API error:", errorText);
      throw new Error(
        `Failed to fetch location data: ${locationResponse.status}`
      );
    }

    const locationData: AccuWeatherLocation[] = await locationResponse.json();

    if (!locationData || locationData.length === 0) {
      throw new Error("No location data found");
    }

    const locationKey = locationData[0].Key;

    const weatherResponse = await fetch(
      `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}&language=en-us&details=true`
    );

    if (!weatherResponse.ok) {
      const errorText = await weatherResponse.text();
      console.error("Weather API error:", errorText);
      throw new Error(
        `Failed to fetch weather data: ${weatherResponse.status}`
      );
    }

    const weatherData: AccuWeatherCurrent[] = await weatherResponse.json();

    const current = weatherData[0];

    return {
      temperature: Math.round(current.Temperature.Metric.Value),
      description: current.WeatherText,
      icon: getWeatherIcon(current.WeatherIcon),
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}

// Convert AccuWeather icon codes to emojis
function getWeatherIcon(iconCode: number): string {
  if (iconCode >= 1 && iconCode <= 5) return "☀️"; // Sunny/Clear
  if (iconCode >= 6 && iconCode <= 11) return "⛅"; // Partly Cloudy
  if (iconCode >= 12 && iconCode <= 14) return "☁️"; // Cloudy
  if (iconCode >= 15 && iconCode <= 18) return "🌧️"; // Rain
  if (iconCode >= 19 && iconCode <= 23) return "⛈️"; // Thunderstorm
  if (iconCode >= 24 && iconCode <= 30) return "❄️"; // Snow
  if (iconCode >= 31 && iconCode <= 32) return "🌫️"; // Fog
  if (iconCode >= 33 && iconCode <= 35) return "🌧️"; // Rain
  if (iconCode >= 36 && iconCode <= 44) return "🌤️"; // Various conditions
  return "🌤️"; // Default
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get("city");

    if (!city) {
      return NextResponse.json(
        { error: "City parameter is required" },
        { status: 400 }
      );
    }

    const weatherData = await fetchWeatherData(city);

    if (!weatherData) {
      return NextResponse.json(
        { error: "Failed to fetch weather" },
        { status: 500 }
      );
    }

    return NextResponse.json(weatherData);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch weather" },
      { status: 500 }
    );
  }
}

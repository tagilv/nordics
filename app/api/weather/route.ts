import { NextRequest, NextResponse } from "next/server";
interface WeatherData {
  temperature: number;
  description: string;
  icon: string;
}
interface WeatherAPIResponse {
  current: {
    temp_c: number;
    condition: {
      text: string;
      code: number;
    };
  };
}

const cityNames: Record<string, string> = {
  swedish: "Stockholm",
  danish: "Copenhagen",
  norwegian: "Oslo",
  finnish: "Helsinki",
};

async function fetchWeatherData(city: string): Promise<WeatherData | null> {
  try {
    const apiKey = process.env.WEATHERAPI_KEY;

    if (!apiKey) {
      throw new Error("WeatherAPI key is not set");
    }

    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("WeatherAPI error:", errorText);
      throw new Error(`Failed to fetch weather data: ${response.status}`);
    }

    const data: WeatherAPIResponse = await response.json();
    const current = data.current;

    return {
      temperature: Math.round(current.temp_c),
      description: current.condition.text,
      icon: getWeatherIcon(current.condition.code),
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}

function getWeatherIcon(conditionCode: number): string {
  if (conditionCode === 1000) return "☀️";
  if (conditionCode === 1003) return "⛅";
  if (conditionCode === 1006 || conditionCode === 1009) return "☁️";
  if (conditionCode >= 1063 && conditionCode <= 1201) return "🌧️";
  if (conditionCode >= 1210 && conditionCode <= 1237) return "❄️";
  if (conditionCode >= 1087 && conditionCode <= 1282) return "⛈️";
  if (conditionCode === 1135 || conditionCode === 1147) return "��️";
  if (conditionCode === 1002) return "��";

  return "🌤️";
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
